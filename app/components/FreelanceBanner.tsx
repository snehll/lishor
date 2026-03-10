"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function FreelanceBanner() {
  const { language } = useLanguageStore();
  const t = translations[language].FreelanceBanner;

  return (
    <section className="bg-amber-500 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
          {t.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < t.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-xl md:text-2xl text-black/90 mb-10 max-w-4xl mx-auto">
          {t.description}
        </p>
        <Link
          href="/freelance"
          className="inline-block bg-black text-white px-12 py-6 rounded-xl text-xl font-bold hover:bg-gray-900 transition-all duration-300 shadow-2xl hover:shadow-black/50">
          {t.cta}
        </Link>
      </motion.div>
    </section>
  );
}
