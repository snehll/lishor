"use client";

import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";

export default function Underconstruction() {
  const { language } = useLanguageStore();
  const t = translations[language].Website;

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p className="text-4xl font-bold">{t.underDevelopment} 🚧</p>
    </div>
  );
}
