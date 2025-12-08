"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function About() {
  const { language } = useLanguageStore();
  const t = translations[language].About;

  return (
    <section
      id="why-us"
      className="section-padding bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-medium">{t.paragraph1.title}</span>
              <br />
              {t.paragraph1.part1}
              <span className="text-amber-500 font-bold">
                {" "}
                {t.paragraph1.buyingSelling}
              </span>
              {t.paragraph1.and}
              <span className="text-amber-500 font-bold">
                {" "}
                {t.paragraph1.leasing}
              </span>
              {t.paragraph1.activities}.
            </p>
            <p>
              <strong>{t.paragraph2.part1}</strong>
              {t.paragraph2.experience}
              <strong> {t.paragraph2.group}</strong>
              {t.paragraph2.offices}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-8">
            <div className="bg-card border border-white/10 rounded-2xl h-64 flex items-center justify-center text-center p-6 shadow-xl">
              <span className="text-lg font-medium">
                {t.offices.dubai.title}
                <br />
                <span className="text-sm text-gray-500">
                  {t.offices.dubai.status}
                </span>
              </span>
            </div>
            <div className="bg-card border border-white/10 rounded-2xl h-64 flex items-center justify-center text-center p-6 shadow-xl">
              <span className="text-lg font-medium">
                {t.offices.moscowSpb.title}
                <br />
                <span className="text-sm text-gray-500">
                  {t.offices.moscowSpb.status}
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
