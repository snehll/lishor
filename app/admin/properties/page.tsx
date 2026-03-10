"use client";

import { supabase, Property } from "@/lib/supabase";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Trash2, Plus, LogOut, Edit, X, Save } from "lucide-react";

export default function AdminProperties() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "",
    location: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    area_sqft: "",
    featured: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
//   const [seeding, setSeeding] = useState(false);
  const [seedResult, setSeedResult] = useState<string | null>(null);

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("properties")
      .select("*")
      .order("created_at", { ascending: false });
    setProperties((data as Property[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchProperties();
    }
  }, [authenticated, fetchProperties]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      sessionStorage.setItem("admin_pw", password);
    } else {
      setError("Invalid password");
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthenticated(true);
      setPassword(sessionStorage.getItem("admin_pw") || "");
    }
  }, []);

  function resetForm() {
    setForm({
      title: "",
      price: "",
      type: "",
      location: "",
      description: "",
      bedrooms: "",
      bathrooms: "",
      area_sqft: "",
      featured: true,
    });
    setImageFile(null);
    setImagePreview(null);
    setEditingId(null);
    setShowForm(false);
  }

  function startEdit(property: Property) {
    setForm({
      title: property.title,
      price: property.price,
      type: property.type,
      location: property.location,
      description: property.description || "",
      bedrooms: property.bedrooms?.toString() || "",
      bathrooms: property.bathrooms?.toString() || "",
      area_sqft: property.area_sqft?.toString() || "",
      featured: property.featured,
    });
    setImagePreview(property.image_url);
    setImageFile(null);
    setEditingId(property.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      let image_url = imagePreview || "";

      // Upload image if a new file is selected
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

        // Ensure bucket exists
        await supabase.storage.createBucket("property-images", {
          public: true,
        });

        const { error: uploadError } = await supabase.storage
          .from("property-images")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
        } = supabase.storage.from("property-images").getPublicUrl(fileName);

        image_url = publicUrl;
      }

      if (!image_url) {
        alert("Please select an image");
        setSubmitting(false);
        return;
      }

      const record = {
        title: form.title,
        price: form.price,
        type: form.type,
        location: form.location,
        image_url,
        description: form.description || null,
        bedrooms: form.bedrooms ? parseInt(form.bedrooms) : null,
        bathrooms: form.bathrooms ? parseInt(form.bathrooms) : null,
        area_sqft: form.area_sqft ? parseInt(form.area_sqft) : null,
        featured: form.featured,
      };

      if (editingId) {
        const { error } = await supabase
          .from("properties")
          .update(record)
          .eq("id", editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("properties").insert([record]);
        if (error) throw error;
      }

      resetForm();
      fetchProperties();
    } catch (err) {
      alert("Error saving property: " + (err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this property?")) return;

    // Find the property to get its image URL for cleanup
    const property = properties.find((p) => p.id === id);
    if (property?.image_url) {
      // Extract filename from URL and delete from storage
      const urlParts = property.image_url.split("/");
      const fileName = urlParts[urlParts.length - 1];
      if (fileName && !fileName.startsWith("house-")) {
        await supabase.storage.from("property-images").remove([fileName]);
      }
    }

    const { error } = await supabase.from("properties").delete().eq("id", id);

    if (error) {
      alert("Error deleting: " + error.message);
    } else {
      fetchProperties();
    }
  }

  // ─── LOGIN SCREEN ───
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Admin Access
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-amber-500 focus:outline-none mb-4"
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-colors">
            Login
          </button>
        </form>
      </div>
    );
  }

//   async function handleSeed() {
//     if (
//       !confirm(
//         "This will upload the 8 default properties to Supabase. Continue?",
//       )
//     )
//       return;
//     setSeeding(true);
//     setSeedResult(null);
//     try {
//       const res = await fetch("/api/admin/seed", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password }),
//       });
//       const data = await res.json();
//       setSeedResult(data.message);
//       fetchProperties();
//     } catch (err) {
//       setSeedResult("Seed failed: " + (err as Error).message);
//     } finally {
//       setSeeding(false);
//     }
//   }

  // ─── ADMIN DASHBOARD ───
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between mt-24">
        <h1 className="text-2xl font-bold">Property Management</h1>
        <div className="flex gap-3">
          {/* <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm">
            {seeding ? "Seeding..." : "Seed Default Properties"}
          </button> */}
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors">
            <Plus size={18} />
            Add Property
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_auth");
              sessionStorage.removeItem("admin_pw");
              setAuthenticated(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Seed result banner */}
        {seedResult && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm flex items-center justify-between">
            <span>{seedResult}</span>
            <button
              onClick={() => setSeedResult(null)}
              className="text-emerald-600 hover:text-emerald-800">
              <X size={16} />
            </button>
          </div>
        )}
        {/* ─── ADD / EDIT FORM ─── */}
        {showForm && (
          <div className="mb-8 bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                {editingId ? "Edit Property" : "Add New Property"}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    placeholder="e.g. Luxury Marina Apartment"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Price <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    placeholder="e.g. AED 2.5M"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Type <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    placeholder="e.g. 3BR Apartment, Villa, Penthouse"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Location <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    placeholder="e.g. Dubai Marina"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    value={form.bedrooms}
                    onChange={(e) =>
                      setForm({ ...form, bedrooms: e.target.value })
                    }
                    placeholder="e.g. 3"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    value={form.bathrooms}
                    onChange={(e) =>
                      setForm({ ...form, bathrooms: e.target.value })
                    }
                    placeholder="e.g. 2"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Area (sq ft)
                  </label>
                  <input
                    type="number"
                    value={form.area_sqft}
                    onChange={(e) =>
                      setForm({ ...form, area_sqft: e.target.value })
                    }
                    placeholder="e.g. 1500"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white"
                  />
                </div>

                {/* Featured */}
                <div className="flex items-center gap-3 pt-6">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={(e) =>
                        setForm({ ...form, featured: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                  <span className="text-sm text-gray-400">
                    Featured on homepage
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Optional description..."
                  rows={3}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-500 focus:outline-none text-white resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Property Image <span className="text-amber-500">*</span>
                </label>
                <div className="flex items-start gap-4">
                  <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-700 hover:border-amber-500 rounded-lg p-6 cursor-pointer transition-colors">
                    <Plus size={24} className="text-gray-500 mb-2" />
                    <span className="text-sm text-gray-500">
                      Click to upload image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setImageFile(file);
                          setImagePreview(URL.createObjectURL(file));
                        }
                      }}
                    />
                  </label>
                  {imagePreview && (
                    <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-bold rounded-lg transition-colors">
                  <Save size={18} />
                  {submitting
                    ? "Saving..."
                    : editingId
                      ? "Update Property"
                      : "Add Property"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ─── PROPERTIES LIST ─── */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading...</div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No properties yet</p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-colors">
              Add Your First Property
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group">
                <div className="relative h-48 w-full">
                  <Image
                    src={property.image_url}
                    alt={property.title || property.type}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  {property.featured && (
                    <span className="absolute top-2 left-2 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xl font-bold text-amber-500">
                        {property.price}
                      </p>
                      {property.title && (
                        <p className="text-sm text-white mt-0.5 font-medium">
                          {property.title}
                        </p>
                      )}
                      <p className="text-sm text-gray-400 mt-1">
                        {property.type}
                      </p>
                      <p className="text-xs text-gray-500">
                        {property.location}
                      </p>
                      {(property.bedrooms ||
                        property.bathrooms ||
                        property.area_sqft) && (
                        <div className="flex gap-3 mt-2 text-xs text-gray-500">
                          {property.bedrooms && (
                            <span>{property.bedrooms} bed</span>
                          )}
                          {property.bathrooms && (
                            <span>{property.bathrooms} bath</span>
                          )}
                          {property.area_sqft && (
                            <span>{property.area_sqft} sqft</span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(property)}
                        className="p-2 text-gray-500 hover:text-amber-500 transition-colors">
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(property.id)}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
