"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function OfferAgencies() {
  const { language } = useLanguageStore();
  const t = translations[language].OfferAgencies;

  return (
    <section className="section-padding bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h2>
        <p className="text-xl mb-8 leading-relaxed">{t.description}</p>
        <Link
          href="/#contact"
          className="btn-primary text-xl px-16 py-6 inline-block">
          {t.cta}
        </Link>
      </motion.div>
    </section>
  );
}
