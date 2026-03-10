"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function Services() {
  const { language } = useLanguageStore();
  const t = translations[language].Services;

  const services = [
    {
      title: t.buyingSelling.title,
      items: t.buyingSelling.items,
    },
    {
      title: t.leasing.title,
      items: t.leasing.items,
    },
    {
      title: t.rubPayment.title,
      items: t.rubPayment.items,
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-background text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-center mb-20">
        {t.title}
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-card border border-white/10 rounded-3xl p-10 hover:border-amber-500/50 transition-all duration-500 shadow-xl">
            <h3 className="text-2xl font-bold text-amber-500 mb-8">
              {service.title}
            </h3>
            <ul className="space-y-4">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-lg">
                  <span className="text-amber-500 mt-1">→</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
