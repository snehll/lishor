"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { motion } from "framer-motion";
import Link from "next/link";
import Underconstruction from "../components/Underconstruction";

export default function FreelanceBrokers() {
  const { language } = useLanguageStore();
  const t = translations[language].FreelanceBrokers;

  return (
    <main className="min-h-screen pt-32 bg-background text-foreground">
      <section className="bg-amber-500 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8">
            {t.hero.title}
            <br />
            <span className="text-black/80">{t.hero.subtitle}</span>
          </h1>
          <p className="text-2xl md:text-3xl text-black/90 mb-12">
            {t.hero.description}
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-black text-white px-16 py-7 rounded-xl text-2xl font-bold hover:bg-gray-900 transition-all shadow-2xl">
            {t.hero.cta}
          </Link>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-10">{t.conditions.title}</h2>
            <ul className="space-y-6 text-xl">
              {t.conditions.list.map((item: string, i: number) => (
                <li key={item} className="flex gap-3">
                  <span className="text-amber-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-amber-500">
              {t.benefits.title}
            </h3>
            <p className="text-lg leading-relaxed">{t.benefits.description}</p>
            <p className="text-lg leading-relaxed mt-6 font-medium">
              {t.benefits.guarantees}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
  
  
  // return <Underconstruction />;
}
