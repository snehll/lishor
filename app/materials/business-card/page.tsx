"use client";

import { useState } from "react";

export default function BusinessCard() {
  const [variant, setVariant] = useState<"front" | "back">("front");

  return (
    <main className="min-h-screen bg-gray-100 print:bg-white">
      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
        <button
          onClick={() => setVariant(variant === "front" ? "back" : "front")}
          className="bg-amber-500 text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition shadow-lg">
          {variant === "front" ? "Show Back" : "Show Front"}
        </button>
        <button
          onClick={() => window.print()}
          className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition shadow-lg">
          Print / Save as PDF
        </button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-12 py-20 print:py-4 print:gap-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 print:hidden">
          Business Card Design — Lyschor Real Estate LLC
        </h1>

        {/* FRONT SIDE */}
        <div className={`${variant === "back" ? "print:hidden" : ""}`}>
          <p className="text-sm text-gray-500 text-center mb-3 print:hidden">
            Front Side
          </p>
          <div
            className="bg-[#0a0a0a] rounded-xl shadow-2xl overflow-hidden print:rounded-none print:shadow-none"
            style={{ width: "90mm", height: "55mm" }}>
            <div className="h-full flex flex-col justify-between p-6 relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-500" />

              {/* Logo / Company */}
              <div>
                <h2 className="text-white text-[16px] font-extrabold tracking-wide leading-tight">
                  LYSCHOR
                </h2>
                <p className="text-amber-500 text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5">
                  Real Estate LLC
                </p>
              </div>

              {/* Name & Title Placeholder */}
              <div>
                <p className="text-white text-[13px] font-bold leading-tight">
                  [Name Surname]
                </p>
                <p className="text-gray-400 text-[9px] mt-0.5">
                  [Position Title]
                </p>
              </div>

              {/* Contact */}
              <div className="flex items-end justify-between">
                <div className="space-y-0.5">
                  <p className="text-gray-400 text-[8px]">+971 XX XXX XXXX</p>
                  <p className="text-gray-400 text-[8px]">info@uaekeys.ae</p>
                </div>
                <p className="text-amber-500/60 text-[8px] font-medium">
                  uaekeys.ae
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className={`${variant === "front" ? "print:hidden" : ""}`}>
          <p className="text-sm text-gray-500 text-center mb-3 print:hidden">
            Back Side
          </p>
          <div
            className="bg-[#0a0a0a] rounded-xl shadow-2xl overflow-hidden print:rounded-none print:shadow-none"
            style={{ width: "90mm", height: "55mm" }}>
            <div className="h-full flex flex-col justify-between p-6 relative">
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500" />

              {/* Company branding centered */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-white text-[22px] font-extrabold tracking-wide leading-tight text-center">
                  LYSCHOR
                </h2>
                <p className="text-amber-500 text-[10px] font-semibold tracking-[0.25em] uppercase mt-1 text-center">
                  Real Estate LLC
                </p>
                <div className="w-12 h-[1px] bg-amber-500/40 my-3" />
                <p className="text-gray-500 text-[8px] tracking-[0.15em] uppercase text-center">
                  Licensed UAE Brokerage
                </p>
                <p className="text-gray-600 text-[7px] mt-1 text-center">
                  Legal RUB Payment Service
                </p>
              </div>

              {/* Address line */}
              <div className="text-center">
                <p className="text-gray-500 text-[7px] leading-snug">
                  Office 305, 3rd Floor, Majid Sultan Building
                </p>
                <p className="text-gray-500 text-[7px] leading-snug">
                  6a Street, Al Muteena, Deira, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Both sides for print */}
        <div className="hidden print:block">
          <div className="flex gap-8 print:flex-col print:items-center print:gap-6">
            {/* Print Front */}
            <div
              className="bg-[#0a0a0a] overflow-hidden"
              style={{ width: "90mm", height: "55mm" }}>
              <div className="h-full flex flex-col justify-between p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-500" />
                <div>
                  <h2 className="text-white text-[16px] font-extrabold tracking-wide leading-tight">
                    LYSCHOR
                  </h2>
                  <p className="text-amber-500 text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5">
                    Real Estate LLC
                  </p>
                </div>
                <div>
                  <p className="text-white text-[13px] font-bold leading-tight">
                    [Name Surname]
                  </p>
                  <p className="text-gray-400 text-[9px] mt-0.5">
                    [Position Title]
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="space-y-0.5">
                    <p className="text-gray-400 text-[8px]">+971 XX XXX XXXX</p>
                    <p className="text-gray-400 text-[8px]">info@uaekeys.ae</p>
                  </div>
                  <p className="text-amber-500/60 text-[8px] font-medium">
                    uaekeys.ae
                  </p>
                </div>
              </div>
            </div>
            {/* Print Back */}
            <div
              className="bg-[#0a0a0a] overflow-hidden"
              style={{ width: "90mm", height: "55mm" }}>
              <div className="h-full flex flex-col justify-between p-6 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500" />
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h2 className="text-white text-[22px] font-extrabold tracking-wide leading-tight text-center">
                    LYSCHOR
                  </h2>
                  <p className="text-amber-500 text-[10px] font-semibold tracking-[0.25em] uppercase mt-1 text-center">
                    Real Estate LLC
                  </p>
                  <div className="w-12 h-[1px] bg-amber-500/40 my-3" />
                  <p className="text-gray-500 text-[8px] tracking-[0.15em] uppercase text-center">
                    Licensed UAE Brokerage
                  </p>
                  <p className="text-gray-600 text-[7px] mt-1 text-center">
                    Legal RUB Payment Service
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 text-[7px] leading-snug">
                    Office 305, 3rd Floor, Majid Sultan Building
                  </p>
                  <p className="text-gray-500 text-[7px] leading-snug">
                    6a Street, Al Muteena, Deira, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design specs */}
        <div className="max-w-md text-center print:hidden">
          <p className="text-xs text-gray-500 mt-4">
            Standard business card size: 90mm x 55mm (3.5&quot; x 2.15&quot;)
            <br />
            Dark charcoal (#0a0a0a) background with amber (#f59e0b) accents
            <br />
            Print-ready — use browser Print / Save as PDF
          </p>
        </div>
      </div>
    </main>
  );
}
