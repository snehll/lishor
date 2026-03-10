/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname(); // ← This detects current page

  const t = translations[language].Navbar;

  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    // If we are on the homepage → scroll normally
    if (pathname === "/" || pathname === `/${language}`) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // If we are on ANY other page → go to home + hash
    window.location.href = `/#${id}`;
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-16 sm:h-20">
          {/* Logo */}
          <div className="bg-whites px-5 py-2 relative w-64 h-14 overflow-hidden rounded-sm">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Lyschor Real Estate"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu — NOW WORKS FROM ANY PAGE */}
          <div className="hidden lg:flex items-center gap-5 text-foreground">
            {[
              { label: t.rubPayment, id: "rub-payment" },
              { label: t.services, id: "services" },
              { label: t.whyUs, id: "why-us" },
              { label: t.properties, id: "properties" },
              { label: t.contact, id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-amber-500 font-medium transition">
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/+971500999232"
              className="text-green-500 hover:scale-110 transition">
              <PhoneCall className="w-6 h-6" />
            </a>

            {/* <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 sm:p-3 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-all">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button> */}

            {/* <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={
                  language === "en"
                    ? "text-amber-500 font-bold"
                    : "text-foreground/70 hover:text-amber-500 transition"
                }>
                EN
              </button>
              <span className="text-foreground/40">/</span>
              <button
                onClick={() => setLanguage("ru")}
                className={
                  language === "ru"
                    ? "text-amber-500 font-bold"
                    : "text-foreground/70 hover:text-amber-500 transition"
                }>
                RU
              </button>
            </div> */}

            <Link
              href="/freelance"
              className="bg-amber-500 hidden sm:block text-black text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold hover:bg-amber-400 transition shadow-lg whitespace-nowrap">
              {t.cta}
            </Link>
            <Link
              href="/freelance"
              className="bg-amber-500 sm:hidden block text-black text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold hover:bg-amber-400 transition shadow-lg whitespace-nowrap">
              100%
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
