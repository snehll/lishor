"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PaymentInfographic() {
  const { language } = useLanguageStore();
  const t = translations[language].PaymentInfographic;

  const steps = [t.step1, t.step2, t.step3, t.step4, t.step5];

  return (
    <section className="section-padding bg-card text-card-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20">
        {t.title}
      </motion.h2>

      <div
        className={
          language === "en"
            ? "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 flex-wrap"
            : "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-1 flex-wrap"
        }>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-6">
            <div className="text-center flex flex-col items-center">
              <div className="bg-amber-500 w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-black shadow-xl">
                {i + 1}
              </div>
              <p className="mt-6 text-[14px] max-w-[200px] whitespace-pre-line font-medium">
                {step}
              </p>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="w-12 h-12 text-amber-500 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
