"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { supabase, Property } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, X, BedDouble, Bath, Maximize, MapPin } from "lucide-react";

export default function PropertiesPage() {
  const { language } = useLanguageStore();
  const t = translations[language].PropertiesPage;
  const tModal = translations[language].PropertyShowcase;
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  useEffect(() => {
    async function fetchAll() {
      const { data } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      setProperties((data as Property[]) || []);
      setLoading(false);
    }
    fetchAll();
  }, []);

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <div className="pt-28 pb-8 px-6 border-b border-border/40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Link
                href="/#properties"
                className="inline-flex items-center gap-1.5 text-sm text-amber-500 hover:text-amber-400 transition-colors mb-3">
                <ArrowLeft size={16} />
                {t.backHome}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {t.title}
              </h1>
              <p className="text-sm text-muted-foreground mt-1 max-w-lg">
                {t.subtitle}
              </p>
            </div>
            {!loading && properties.length > 0 && (
              <p className="text-xs text-muted-foreground whitespace-nowrap pb-0.5">
                {properties.length}{" "}
                {properties.length === 1 ? "property" : "properties"}
              </p>
            )}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="max-w-7xl mx-auto px-6 py-10 pb-20">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-pulse text-xl text-muted-foreground">
                {t.loading}
              </div>
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">{t.noProperties}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  onClick={() => setSelectedProperty(property)}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer">
                  <div className="relative h-96 w-full">
                    <Image
                      src={property.image_url}
                      alt={`${property.type} in ${property.location}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized={property.image_url.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <p className="text-3xl md:text-4xl font-bold mb-1">
                      {property.price}
                    </p>
                    {property.title && (
                      <p className="text-sm font-medium opacity-95">
                        {property.title}
                      </p>
                    )}
                    <p className="text-lg opacity-95">{property.type}</p>
                    <p className="text-sm opacity-80 mt-1">
                      {property.location}
                    </p>
                    {(property.bedrooms ||
                      property.bathrooms ||
                      property.area_sqft) && (
                      <div className="flex gap-4 mt-3 text-xs opacity-70">
                        {property.bedrooms && (
                          <span>{property.bedrooms} bed</span>
                        )}
                        {property.bathrooms && (
                          <span>{property.bathrooms} bath</span>
                        )}
                        {property.area_sqft && (
                          <span>
                            {property.area_sqft.toLocaleString()} sqft
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

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
                <div className="absolute bottom-4 left-6">
                  <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {selectedProperty.price}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
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
                            {tModal.bedrooms}
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
                            {tModal.bathrooms}
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
                            {tModal.sqft}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                {selectedProperty.description && (
                  <div className="mt-6">
                    <h4 className="font-bold text-lg mb-2">
                      {tModal.description}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="mt-8">
                  <Link
                    href="/#contact"
                    onClick={() => setSelectedProperty(null)}
                    className="btn-primary inline-block text-center w-full md:w-auto md:px-12 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                    {tModal.inquire}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
