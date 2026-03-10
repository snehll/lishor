"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function LyschorGroup() {
  const { language } = useLanguageStore();
  const t = translations[language].LyschorGroup;

  return (
    <section className="section-padding bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">
          {t.title.part1}{" "}
          <span className="text-amber-500">{t.title.group}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {[
            { num: "18+", label: t.stats.experience },
            { num: "10,000+", label: t.stats.projects },
            { num: "9", label: t.stats.offices },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-card border border-white/10 rounded-3xl p-10 shadow-2xl">
              <div className="text-7xl font-bold text-amber-500 mb-4">
                {stat.num}
              </div>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
          {t.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
