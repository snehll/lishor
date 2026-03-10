"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function ContactForm() {
  const { language } = useLanguageStore();
  const t = translations[language].Contact;
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(t.sending);

    await emailjs
      .sendForm(
        "service_cinjm7g",
        "template_vtw14vb",
        e.currentTarget,
        "3L4V58RXkMSD0xbGt"
      )
      .then(() => {
        setStatus(t.success);
        e.currentTarget.reset();
      })
      .catch(() => {
        setStatus(t.error);
      });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-foreground/70">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder={t.name}
                required
                className="w-full bg-background/50 border border-white/20 rounded-xl px-5 py-4 text-base sm:text-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none transition-all"
              />
              <input
                name="phone"
                placeholder={t.phone}
                required
                className="w-full bg-background/50 border border-white/20 rounded-xl px-5 py-4 text-base sm:text-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder={t.email}
                className="w-full bg-background/50 border border-white/20 rounded-xl px-5 py-4 text-base sm:text-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none transition-all"
              />
              <textarea
                name="message"
                placeholder={t.message}
                rows={5}
                required
                className="w-full bg-background/50 border border-white/20 rounded-xl px-5 py-4 text-base sm:text-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 outline-none transition-all resize-none"
              />

              <label className="flex items-start gap-3 text-sm sm:text-base cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-amber-500 w-5 h-5"
                />
                <span className="leading-tight">
                  {t.privacy.part1}{" "}
                  <a
                    href="/privacy-policy"
                    className="text-amber-500 underline hover:text-amber-400">
                    {t.privacy.link}
                  </a>
                </span>
              </label>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === t.sending}
                  className="w-full btn-primary text-lg sm:text-xl py-5 rounded-xl font-semibold disabled:opacity-70 disabled:cursor-not-allowed transition-all">
                  {status === t.sending ? t.sending : t.sendButton}
                </button>
              </div>

              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-medium text-lg mt-4 ${status.includes("Thank") || status.includes("Спасибо") ? "text-green-500" : "text-red-500"}`}>
                  {status}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
