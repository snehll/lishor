"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { supabase, Property } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X, BedDouble, Bath, Maximize, MapPin } from "lucide-react";

// Fallback data when Supabase isn't configured yet
const fallbackProperties: Property[] = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: String(i + 1),
    price: `AED ${(2.5 + i * 0.7).toFixed(1)}M`,
    type:
      i % 3 === 0 ? "3BR Apartment" : i % 2 === 0 ? "2BR Apartment" : "Villa",
    location: [
      "Dubai Marina",
      "Palm Jumeirah",
      "Downtown Dubai",
      "Jumeirah Village Circle",
    ][i % 4],
    image_url: `/images/house-${i + 1}.jpg`,
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
    featured: true,
    created_at: "",
  }));

export default function PropertyShowcase() {
  const { language } = useLanguageStore();
  const t = translations[language].PropertyShowcase;
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  useEffect(() => {
    async function fetchProperties() {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("featured", true)
          .order("created_at", { ascending: false })
          .limit(8);

        if (error || !data || data.length === 0) {
          setProperties(fallbackProperties);
        } else {
          setProperties(data as Property[]);
        }
      } catch {
        setProperties(fallbackProperties);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <section
        id="properties"
        className="section-padding bg-background text-foreground">
        <div className="text-center py-20">
          <div className="animate-pulse text-xl text-muted-foreground">
            Loading properties...
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="properties"
        className="section-padding bg-background text-foreground">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20">
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              onClick={() => setSelectedProperty(property)}
              className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
              <div className="relative h-96 w-full">
                <Image
                  src={property.image_url}
                  alt={`${property.type} in ${property.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={i < 4}
                  unoptimized={property.image_url.startsWith("http")}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-1">
                  {property.price}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg opacity-95">
                  {property.type}
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm opacity-80 mt-1">
                  {property.location}
                </motion.p>
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/properties"
            className="text-sm md:text-xl md:px-16 px-8 py-3 md:py-7 rounded-2xl shadow-2xl border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 font-semibold">
            {t.viewAll}
          </Link>
          <a
            href="#contact"
            className="btn-primary text-sm md:text-xl md:px-20 px-10 py-3 md:py-7 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300">
            {t.cta}
          </a>
        </motion.div>
      </section>

      {/* ─── PROPERTY DETAIL MODAL ─── */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedProperty(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card text-card-foreground rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              {/* Modal Image */}
              <div className="relative h-72 md:h-96 w-full">
                <Image
                  src={selectedProperty.image_url}
                  alt={
                    selectedProperty.title ||
                    `${selectedProperty.type} in ${selectedProperty.location}`
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 750px"
                  unoptimized={selectedProperty.image_url.startsWith("http")}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
                  <X size={20} />
                </button>
                {/* Price badge on image */}
                <div className="absolute bottom-4 left-6">
                  <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {selectedProperty.price}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Title & Type */}
                {selectedProperty.title && (
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    {selectedProperty.title}
                  </h3>
                )}
                <p className="text-lg text-amber-500 font-semibold">
                  {selectedProperty.type}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin size={16} />
                  <span>{selectedProperty.location}</span>
                </div>

                {/* Stats */}
                {(selectedProperty.bedrooms ||
                  selectedProperty.bathrooms ||
                  selectedProperty.area_sqft) && (
                  <div className="flex flex-wrap gap-6 mt-6 py-4 border-t border-b border-border">
                    {selectedProperty.bedrooms && (
                      <div className="flex items-center gap-2">
                        <BedDouble size={20} className="text-amber-500" />
                        <div>
                          <p className="text-lg font-bold">
                            {selectedProperty.bedrooms}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.bedrooms}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedProperty.bathrooms && (
                      <div className="flex items-center gap-2">
                        <Bath size={20} className="text-amber-500" />
                        <div>
                          <p className="text-lg font-bold">
                            {selectedProperty.bathrooms}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.bathrooms}
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedProperty.area_sqft && (
                      <div className="flex items-center gap-2">
                        <Maximize size={20} className="text-amber-500" />
                        <div>
                          <p className="text-lg font-bold">
                            {selectedProperty.area_sqft.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t.sqft}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                {selectedProperty.description && (
                  <div className="mt-6">
                    <h4 className="font-bold text-lg mb-2">{t.description}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProperty(null)}
                    className="btn-primary inline-block text-center w-full md:w-auto md:px-12 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                    {t.inquire}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
