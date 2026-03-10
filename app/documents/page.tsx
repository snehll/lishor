"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import Link from "next/link";

export default function Documents() {
  const { language } = useLanguageStore();
  const t = translations[language].Documents;

  const docs = [
    {
      name: t.list.buyingSelling,
      id: "RERA ORN: 12345",
      pdf: "/pdf/buying-selling.pdf",
    },
    { name: t.list.leasing, id: "RERA ORN: 12345", pdf: "/pdf/leasing.pdf" },
    {
      name: t.list.tradeLicense,
      id: "No. 987654",
      pdf: "/pdf/trade-license.pdf",
    },
    { name: t.list.moa, id: "Memorandum of Association", pdf: "/pdf/moa.pdf" },
    { name: t.list.tenancy, id: "Tenancy Contract", pdf: "/pdf/tenancy.pdf" },
    { name: t.list.dreicert, id: "DREI Certificate", pdf: "/pdf/drei.pdf" },
    {
      name: t.list.policeClearance,
      id: "Police Clearance",
      pdf: "/pdf/police-clearance.pdf",
    },
    {
      name: t.list.incorporation,
      id: "Certificate of Incorporation",
      pdf: "/pdf/incorporation.pdf",
    },
    { name: t.list.escrowTemplate, id: t.list.availableOnRequest, pdf: null },
    { name: t.list.affiliation, id: t.list.officialDocument, pdf: null },
  ];

  const materialCards = [
    {
      name: t.list.agenciesOnePager,
      sub: t.list.agenciesOnePagerSub,
      href: "/materials/agencies",
      icon: "🏢",
    },
    {
      name: t.list.brokersOnePager,
      sub: t.list.brokersOnePagerSub,
      href: "/materials/brokers",
      icon: "🤝",
    },
    {
      name: t.list.businessCard,
      sub: t.list.businessCardSub,
      href: "/materials/business-card",
      icon: "💼",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Material Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-20">
          {materialCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <Link
                href={card.href}
                className="block bg-card border-2 border-amber-500/30 rounded-3xl p-8 text-center hover:border-amber-500 transition-all duration-500 shadow-xl group hover:shadow-amber-500/20">
                <div className="bg-amber-500/10 rounded-2xl w-full h-40 mb-6 flex items-center justify-center">
                  <span className="text-6xl">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{card.sub}</p>
                <span className="inline-block text-amber-500 font-semibold text-lg group-hover:text-amber-400 transition">
                  {t.list.viewMaterial} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-8 text-center hover:border-amber-500/50 transition-all duration-500 shadow-xl group">
              <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-700 rounded-2xl w-full h-56 mb-6 flex items-center justify-center">
                <span className="text-5xl">Document</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{doc.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{doc.id}</p>

              {doc.pdf ? (
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-amber-500 font-semibold hover:underline text-lg group-hover:text-amber-400 transition">
                  {t.viewPdf}
                </a>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  {t.list.availableOnRequest}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20">
          <p className="text-lg mb-8">{t.cta.text}</p>
          <Link
            href="/#contact"
            className="btn-primary text-xl px-16 py-6 inline-block">
            {t.cta.button}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
