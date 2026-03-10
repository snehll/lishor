"use client";

import { useState } from "react";
import PaymentFlowDiagram from "../components/PaymentFlowDiagram";

const content = {
  en: {
    headline: "Lyschor Real Estate LLC",
    tagline:
      "A licensed professional platform for executing freelance broker transactions in Dubai",
    advantage: "Your key advantage — our payment infrastructure",
    advantageText:
      "Your clients, citizens of the Russian Federation, purchase real estate in Dubai by making non-cash RUB payments through the Russian banking system, followed by an official settlement with the seller in the UAE.",
    diagramNote:
      "All contracts are executed with one legal entity — a licensed real estate agency. The flow of funds is fully transparent, with no cash and no intermediary schemes.",

    statusTitle: "Have a client and a property, but need official status?",
    statusText:
      "If you have a confirmed buyer and a selected property but do not hold a RERA card, we provide the legal status required to complete the transaction.",
    statusDetail:
      "We offer a licensed platform for the legal execution of contracts and the processing of non-cash payments from the Russian Federation.",

    officialTitle: "Your official status in the transaction",
    officialText:
      "We ensure full compliance with DLD and RERA requirements, acting as your licensed partner.",
    officialLicenses: "License No. 1576754 | RERA No. 58183",
    officialDetail:
      "Each transaction is supported by a certified agent holding a RERA card. We provide legitimate representation of your interests at the Trustee Office.",

    financialTitle: "Financial terms and benefits",
    financialIntro:
      "We value your work and focus exclusively on providing payment infrastructure, without participating in your profit.",
    financialHighlight: "100% of the brokerage commission remains with you.",
    financialDetail:
      "Your client pays a fixed service fee that is lower than market alternatives, while receiving a fully transparent contractual trail of funds from their bank account in Russia to the property seller in Dubai.",
    pricing: [
      { label: "Service fee", value: "1% fixed" },
      {
        label: "Conversion rate",
        value: "Central Bank of Russia rate + 2% (RUB to AED)",
      },
    ],

    infraTitle: "Infrastructure for your success",
    infraItems: [
      {
        bold: "Documentation support",
        text: "Preparation and registration of Contract F / MOU",
      },
      {
        bold: "Legal RUB Non-Cash Service",
        text: "Acceptance of non-cash RUB payments within the Russian banking system",
      },
      {
        bold: "Guaranteed official settlement",
        text: "Payment to the seller in the UAE via manager's cheque or bank transfer",
      },
      {
        bold: "Compliance control",
        text: "AML and currency control checks in accordance with international regulations",
      },
      {
        bold: "Legal transparency",
        text: "The transaction is fully transparent for banks and regulators in both jurisdictions",
      },
    ],

    processTitle: "Interaction process",
    processSteps: [
      {
        bold: "Deal review",
        text: "You provide the details of the confirmed transaction (buyer and seller)",
      },
      {
        bold: "Structuring",
        text: "We formalize the deal and appoint our licensed agent",
      },
      {
        bold: "Payment stage",
        text: "We sign an Agency/Escrow Agreement with the client, accept RUB payments in Russia, and execute settlement in Dubai",
      },
      {
        bold: "Finalization",
        text: "The transaction is completed at the Trustee Office",
      },
      {
        bold: "Payout",
        text: "You receive your full brokerage commission immediately after closing",
      },
    ],

    resultTitle: "Result for the freelance broker",
    resultText:
      "You operate as a licensed real estate agency in Dubai, offering your clients a safe and official payment mechanism, while maintaining independence and maximizing your income.",
    ctaLine:
      "Lyschor Real Estate LLC. A professional foundation for your transactions.",
    ctaSub:
      "Contact us for a deal audit. We will promptly review the documents and confirm whether the transaction can be supported.",
    contact: {
      company: "Lyschor Real Estate LLC",
      website: "www.uaekeys.ae",
      email: "info@uaekeys.ae",
    },
    printBtn: "Print / Save as PDF",
  },
  ru: {
    headline: "Lyschor Real Estate LLC",
    tagline:
      "Лицензированная профессиональная платформа для проведения сделок фриланс-брокеров в Дубае",
    advantage: "Ваше ключевое преимущество — наша платёжная инфраструктура",
    advantageText:
      "Ваши клиенты, граждане Российской Федерации, приобретают недвижимость в Дубае, совершая безналичные рублёвые платежи через российскую банковскую систему с последующим официальным расчётом с продавцом в ОАЭ.",
    diagramNote:
      "Все договоры оформляются с одним юридическим лицом — лицензированным агентством недвижимости. Движение средств полностью прозрачно, без наличных и посреднических схем.",

    statusTitle: "Есть клиент и объект, но нет официального статуса?",
    statusText:
      "Если у вас есть подтверждённый покупатель и выбранный объект, но нет карты RERA, мы предоставляем юридический статус, необходимый для завершения сделки.",
    statusDetail:
      "Мы предлагаем лицензированную платформу для легального оформления договоров и обработки безналичных платежей из Российской Федерации.",

    officialTitle: "Ваш официальный статус в сделке",
    officialText:
      "Мы обеспечиваем полное соответствие требованиям DLD и RERA, выступая вашим лицензированным партнёром.",
    officialLicenses: "License No. 1576754 | RERA No. 58183",
    officialDetail:
      "Каждую сделку сопровождает сертифицированный агент с картой RERA. Мы обеспечиваем легитимное представительство ваших интересов в Trustee Office.",

    financialTitle: "Финансовые условия и преимущества",
    financialIntro:
      "Мы ценим вашу работу и сосредоточены исключительно на предоставлении платёжной инфраструктуры, не участвуя в вашей прибыли.",
    financialHighlight: "100% брокерской комиссии остаётся у вас.",
    financialDetail:
      "Ваш клиент платит фиксированный сервисный сбор, который ниже рыночных альтернатив, получая при этом полностью прозрачную цепочку движения средств от банковского счёта в России до продавца недвижимости в Дубае.",
    pricing: [
      { label: "Сервисный сбор", value: "1% фиксированный" },
      { label: "Курс конвертации", value: "Курс ЦБ РФ + 2% (RUB → AED)" },
    ],

    infraTitle: "Инфраструктура для вашего успеха",
    infraItems: [
      {
        bold: "Документальное сопровождение",
        text: "Подготовка и регистрация Contract F / MOU",
      },
      {
        bold: "Легальный рублёвый сервис",
        text: "Приём безналичных рублёвых платежей в рамках российской банковской системы",
      },
      {
        bold: "Гарантированный официальный расчёт",
        text: "Оплата продавцу в ОАЭ через менеджерский чек или банковский перевод",
      },
      {
        bold: "Контроль комплаенса",
        text: "AML и валютный контроль в соответствии с международными нормами",
      },
      {
        bold: "Юридическая прозрачность",
        text: "Сделка полностью прозрачна для банков и регуляторов обеих юрисдикций",
      },
    ],

    processTitle: "Процесс взаимодействия",
    processSteps: [
      {
        bold: "Проверка сделки",
        text: "Вы предоставляете детали подтверждённой сделки (покупатель и продавец)",
      },
      {
        bold: "Структурирование",
        text: "Мы формализуем сделку и назначаем нашего лицензированного агента",
      },
      {
        bold: "Этап платежа",
        text: "Мы подписываем агентский/эскроу-договор с клиентом, принимаем рублёвые платежи в России и проводим расчёт в Дубае",
      },
      { bold: "Завершение", text: "Сделка завершается в Trustee Office" },
      {
        bold: "Выплата",
        text: "Вы получаете полную брокерскую комиссию сразу после закрытия",
      },
    ],

    resultTitle: "Результат для фриланс-брокера",
    resultText:
      "Вы работаете как лицензированное агентство недвижимости в Дубае, предлагая клиентам безопасный и официальный механизм оплаты, сохраняя независимость и максимизируя свой доход.",
    ctaLine:
      "Lyschor Real Estate LLC. Профессиональный фундамент для ваших сделок.",
    ctaSub:
      "Свяжитесь с нами для аудита сделки. Мы оперативно рассмотрим документы и подтвердим возможность сопровождения.",
    contact: {
      company: "Lyschor Real Estate LLC",
      website: "www.uaekeys.ae",
      email: "info@uaekeys.ae",
    },
    printBtn: "Печать / Сохранить как PDF",
  },
};

export default function BrokersOnePager() {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-black print:bg-white">
      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          className="bg-amber-500 text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition shadow-lg">
          {lang === "en" ? "RU" : "EN"}
        </button>
        <button
          onClick={() => window.print()}
          className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition shadow-lg">
          {t.printBtn}
        </button>
      </div>

      <div className="max-w-[210mm] mx-auto px-8 py-10 print:px-6 print:py-6 print:max-w-none">
        {/* Header */}
        <div className="border-b-4 border-amber-500 pb-4 mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight print:text-2xl">
            {t.headline}
          </h1>
          <p className="text-amber-600 font-semibold text-lg mt-1 print:text-base">
            {t.tagline}
          </p>
        </div>

        {/* Key advantage */}
        <h2 className="text-xl font-bold mb-2 text-amber-600 print:text-lg">
          {t.advantage}
        </h2>
        <p className="text-[14px] leading-relaxed mb-2 print:text-[12px]">
          {t.advantageText}
        </p>
        <p className="text-[13px] leading-relaxed mb-5 text-gray-600 print:text-[11px]">
          {t.diagramNote}
        </p>

        {/* Payment Flow */}
        <div className="mb-6 overflow-x-auto">
          <PaymentFlowDiagram lang={lang} />
        </div>

        {/* Status */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-5 print:bg-amber-50">
          <h3 className="font-bold text-[15px] mb-1 print:text-[13px]">
            {t.statusTitle}
          </h3>
          <p className="text-[13px] mb-1 print:text-[11px]">{t.statusText}</p>
          <p className="text-[13px] text-gray-700 print:text-[11px]">
            {t.statusDetail}
          </p>
        </div>

        {/* Official status */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-2 text-amber-600 print:text-lg">
            {t.officialTitle}
          </h2>
          <p className="text-[14px] mb-2 print:text-[12px]">{t.officialText}</p>
          <div className="flex gap-4 mb-2">
            <span className="bg-amber-100 text-amber-800 font-semibold text-[12px] px-3 py-1 rounded print:text-[11px]">
              {t.officialLicenses}
            </span>
          </div>
          <p className="text-[13px] text-gray-700 print:text-[11px]">
            {t.officialDetail}
          </p>
        </div>

        {/* Financial terms */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-2 text-amber-600 print:text-lg">
            {t.financialTitle}
          </h2>
          <p className="text-[14px] mb-1 print:text-[12px]">
            {t.financialIntro}
          </p>
          <p className="text-[16px] font-extrabold text-amber-700 mb-2 print:text-[14px]">
            {t.financialHighlight}
          </p>
          <p className="text-[13px] text-gray-700 mb-3 print:text-[11px]">
            {t.financialDetail}
          </p>
          <table className="w-full border-collapse text-[13px] print:text-[11px]">
            <tbody>
              {t.pricing.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-200 px-4 py-2 font-bold w-[200px]">
                    {row.label}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Infrastructure */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-3 text-amber-600 print:text-lg">
            {t.infraTitle}
          </h2>
          <div className="space-y-2">
            {t.infraItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <p className="text-[13px] print:text-[11px]">
                  <span className="font-bold">{item.bold}</span> — {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-3 text-amber-600 print:text-lg">
            {t.processTitle}
          </h2>
          <div className="flex flex-col gap-0">
            {t.processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[13px] shrink-0">
                    {i + 1}
                  </div>
                  {i < t.processSteps.length - 1 && (
                    <div className="w-0.5 h-6 bg-amber-300" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="font-bold text-[13px] print:text-[11px]">
                    {step.bold} —{" "}
                  </span>
                  <span className="text-[13px] text-gray-700 print:text-[11px]">
                    {step.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-gray-900 text-white rounded-lg p-5 print:bg-gray-900">
          <h2 className="text-lg font-bold mb-2 print:text-base">
            {t.resultTitle}
          </h2>
          <p className="text-[13px] text-gray-300 mb-3 print:text-[11px]">
            {t.resultText}
          </p>
          <p className="text-[14px] font-bold text-amber-400 mb-1 print:text-[12px]">
            {t.ctaLine}
          </p>
          <p className="text-[12px] text-gray-400 mb-3 print:text-[10px]">
            {t.ctaSub}
          </p>
          <div className="flex items-center gap-6 text-[13px] print:text-[11px]">
            <span className="font-bold text-amber-400">
              {t.contact.company}
            </span>
            <span className="text-gray-400">{t.contact.website}</span>
            <span className="text-amber-400">{t.contact.email}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
