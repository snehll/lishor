/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, Linkedin, MapPin } from "lucide-react";
import { useLanguageStore } from "@/lib/langstore";
import translations from "@/lib/translation";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].Footer;
  const currentYear: any = true ? "2025" : new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="bg-whites px-5 py-2 relative w-56 h-12 overflow-hidden rounded-sm">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Lyschor Real Estate"
                  fill
                  className=" object-contain transition-all duration-300"
                  priority
                />
              </Link>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {t.description.line1}
              <br />
              {t.description.line2}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.quickLinks.title}
            </h4>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link
                  href="/freelance"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.freelance}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#properties"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.properties}
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#rub-payment"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.rub}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-amber-500 transition">
                  {t.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.contact.title}
            </h4>
            <div className="space-y-4 text-foreground/70">
              <a
                href="tel:+971500999232"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Phone className="w-5 h-5" />
                <span>+971500999232</span>
              </a>
              <a
                href="https://t.me/@lyschorUAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <MessageCircle className="w-5 h-5" />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:info@uaekeys.ae"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Mail className="w-5 h-5" />
                <span>info@uaekeys.ae</span>
              </a>
              <a
                href="https://linkedin.com/company/lyschor-uae"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-amber-500 transition">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              {t.offices.title}
            </h4>
            <div className="space-y-6 text-foreground/70">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{t.offices.dubai.city}</p>
                  <p className="text-sm">{t.offices.dubai.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{t.offices.russia.cities}</p>
                  <p className="text-sm">{t.offices.russia.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/60">
          <p>
            © {currentYear} Lyschor Real Estate LLC. {t.copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-500 transition">
              {t.legal.privacy}
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-amber-500 transition">
              {t.legal.terms}
            </Link>
            {/* <Link href="/documents" className="hover:text-amber-500 transition">
              {t.legal.documents}
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
