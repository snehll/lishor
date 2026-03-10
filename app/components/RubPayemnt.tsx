"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { motion } from "framer-motion";

export default function RubPayment() {
  const { language } = useLanguageStore();
  const t = translations[language].RubPayment;

  return (
    <section
      id="rub-payment"
      className="section-padding bg-card text-card-foreground">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          {t.title.line1}
          <br />
          <span className="text-amber-500">{t.title.highlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-500">
              {t.howItWorks.title}
            </h3>
            <ol className="space-y-4 text-lg">
              <li className="flex gap-4 text-start">
                <span className="text-amber-500 font-bold">1</span>{" "}
                {t.howItWorks.step1}
              </li>
              <li className="flex gap-4 text-start">
                <span className="text-amber-500 font-bold">2</span>{" "}
                {t.howItWorks.step2}
              </li>
              <li className="flex gap-4 text-start">
                <span className="text-amber-500 font-bold">3</span>{" "}
                {t.howItWorks.step3}
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-5">
            <h3 className="text-2xl font-bold text-amber-500">
              {t.advantages.title}
            </h3>
            <ul className="space-y-3 text-lg">
              {t.advantages.list.map((item: string, i: number) => (
                <li key={item} className="flex gap-3 text-start">
                  <span className="text-amber-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
