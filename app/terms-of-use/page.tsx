"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function TermsOfUse() {
  const { language } = useLanguageStore();
  const t = translations[language].TermsOfUse;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
            {t.title}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/90">
            <p className="text-center text-gray-600 dark:text-gray-400">
              {t.lastUpdated}
            </p>

            {t.sections.map(
              (
                section: {
                  title: string;
                  content?: string;
                  note?: string;
                  list?: string[];
                  paragraphs?: string[];
                  address?: string[];
                },
                i: number,
              ) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}>
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  {section.content && <p>{section.content}</p>}
                  {section.list && (
                    <ul className="space-y-2 mt-2">
                      {section.list.map((item: string, j: number) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphs &&
                    section.paragraphs.map((p: string, j: number) => (
                      <p key={j} className="mt-2">
                        {p}
                      </p>
                    ))}
                  {section.note && (
                    <p className="mt-4 text-foreground/80">{section.note}</p>
                  )}
                  {section.address && (
                    <div className="mt-4 space-y-1">
                      {section.address.map((line: string, j: number) =>
                        line.includes("@") ? (
                          <a
                            key={j}
                            href={`mailto:${line}`}
                            className="block text-amber-500 hover:text-amber-400 transition font-semibold">
                            {line}
                          </a>
                        ) : (
                          <p key={j}>{line}</p>
                        ),
                      )}
                    </div>
                  )}
                </motion.section>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
