"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import Link from "next/link";

const images = [
  "/images/dubai-skyline.jpg",
  "/images/dubai-2.jpg",
  "/images/dubai-3.jpg",
  "/images/dubai-4.jpg",
  "/images/dubai-5.jpg",
  "/images/dubai-6.jpg",
  "/images/dubai-7.jpg",
  "/images/dubai-8.jpg",
  "/images/dubai-9.jpg",
  "/images/dubai-10.jpg",
  "/images/dubai-11.jpg",
  "/images/dubai-12.jpg",
  "/images/dubai-13.jpg",
];

export default function Hero() {
  const { language } = useLanguageStore();
  const t = translations[language].Hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      ))}

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
            {t.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < t.title.split("\n").length - 1 && <br />}
              </span>
            ))}
            <br />
            <span className="text-amber-500">{t.highlight}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 max-w-3xl lg:max-w-none font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="btn-primary text-lg md:text-xl px-12 py-6 rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300">
              {t.cta1}
            </Link>
            <a
              href="https://t.me/lyschor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-white/80 text-lg md:text-xl px-12 py-6 rounded-xl border-2 border-white/80 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              {t.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
