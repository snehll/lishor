import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { join } from "path";

// Use the anon key but verify admin password
export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || password !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const results: string[] = [];

  // Seed 8 properties with local images uploaded to Supabase Storage
  const properties = Array(8)
    .fill(null)
    .map((_, i) => ({
      title: [
        "Luxury Marina Residence",
        "Palm Jumeirah Villa",
        "Downtown Penthouse",
        "JVC Family Apartment",
        "Marina Skyline Suite",
        "Palm Beach Retreat",
        "City Walk Apartment",
        "Green Community Villa",
      ][i],
      price: `AED ${(2.5 + i * 0.7).toFixed(1)}M`,
      type:
        i % 3 === 0 ? "3BR Apartment" : i % 2 === 0 ? "2BR Apartment" : "Villa",
      location: [
        "Dubai Marina",
        "Palm Jumeirah",
        "Downtown Dubai",
        "Jumeirah Village Circle",
      ][i % 4],
      description: [
        "Stunning waterfront apartment with panoramic marina views, premium finishes, and access to world-class amenities.",
        "Exclusive beachfront villa with private pool, lush garden, and direct beach access on the iconic Palm Jumeirah.",
        "Ultra-modern penthouse in the heart of Downtown Dubai with Burj Khalifa views and designer interiors.",
        "Spacious family apartment in JVC with excellent community facilities, parks, and schools nearby.",
        "High-floor suite offering breathtaking views of the marina skyline, perfect for luxury living.",
        "Serene beach retreat on Palm Jumeirah with contemporary design and resort-style amenities.",
        "Stylish apartment in the vibrant City Walk district with rooftop pool and urban lifestyle.",
        "Elegant villa in Green Community with mature landscaping, community pool, and family-friendly environment.",
      ][i],
      bedrooms: [3, 5, 4, 2, 3, 4, 2, 5][i],
      bathrooms: [2, 6, 3, 2, 2, 4, 1, 4][i],
      area_sqft: [2200, 8500, 3800, 1200, 1900, 5200, 1100, 6800][i],
      imageFile: `house-${i + 1}.jpg`,
      featured: true,
    }));

  // First, ensure the storage bucket exists
  const { error: bucketError } = await supabase.storage.createBucket(
    "property-images",
    { public: true },
  );
  if (bucketError && !bucketError.message.includes("already exists")) {
    results.push(`Bucket creation note: ${bucketError.message}`);
  } else {
    results.push("Storage bucket ready");
  }

  // Check if properties already exist
  const { count } = await supabase
    .from("properties")
    .select("*", { count: "exact", head: true });

  if ((count ?? 0) > 0) {
    return NextResponse.json({
      message: `Database already has ${count} properties. Skipping seed.`,
      results,
    });
  }

  for (const prop of properties) {
    try {
      // Read the local image file
      const imagePath = join(process.cwd(), "public", "images", prop.imageFile);
      const imageBuffer = readFileSync(imagePath);
      const fileName = `seed-${Date.now()}-${prop.imageFile}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("property-images")
        .upload(fileName, imageBuffer, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (uploadError) {
        results.push(
          `Upload failed for ${prop.imageFile}: ${uploadError.message}`,
        );
        continue;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("property-images").getPublicUrl(fileName);

      // Insert into database
      const { error: insertError } = await supabase.from("properties").insert([
        {
          title: prop.title,
          price: prop.price,
          type: prop.type,
          location: prop.location,
          image_url: publicUrl,
          description: prop.description,
          bedrooms: prop.bedrooms,
          bathrooms: prop.bathrooms,
          area_sqft: prop.area_sqft,
          featured: prop.featured,
        },
      ]);

      if (insertError) {
        results.push(`Insert failed for ${prop.title}: ${insertError.message}`);
      } else {
        results.push(`Seeded: ${prop.title}`);
      }
    } catch (err) {
      results.push(`Error with ${prop.imageFile}: ${(err as Error).message}`);
    }
  }

  return NextResponse.json({ message: "Seed complete", results });
}
