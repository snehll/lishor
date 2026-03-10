"use client";

import { useState } from "react";
import PaymentFlowDiagram from "../components/PaymentFlowDiagram";

const content = {
  en: {
    headline: "Lyschor Real Estate LLC",
    tagline:
      "Your reliable partner for legal cross-border payments from the Russian Federation",
    intro:
      "Lyschor Real Estate LLC is a licensed real estate broker in Dubai, providing a dedicated infrastructure for non-cash RUB settlements. We help real estate agencies confidently close transactions with clients from the Russian Federation in a fast, transparent, and fully compliant manner.",
    clientFlow:
      "Your clients, citizens of the Russian Federation, purchase real estate in Dubai by making non-cash RUB payments through the Russian banking system, followed by an official settlement with the seller in the UAE.",
    licensesTitle: "Our licenses and compliance",
    licensesIntro:
      "We operate officially and comply with all requirements of UAE and Dubai regulators.",
    licenses: ["License No. 1576754", "RERA No. 58183"],
    solutionTitle: "Our solution for real estate agencies",
    solutionIntro:
      "We provide a Legal RUB Non-Cash Payment Service as a standalone payment function within your transaction structure.",
    solutionDetail:
      "Your agency gains the ability to accept payments from Russian clients in non-cash RUB and complete an official settlement with the seller in the UAE.",
    principleTitle: "Key principle",
    principle:
      "The client, the transaction, and the full brokerage commission remain entirely with your agency.",
    principleDetail:
      "Lyschor Real Estate does not claim any brokerage role, does not interact with the client as an agent, and does not compete with you. We act exclusively as your technical and legal partner responsible for the payment execution.",
    benefitsTitle: "Partnership benefits",
    benefits: [
      {
        bold: "Scalability",
        text: "Attract clients who prefer non-cash payment solutions without changing your existing business model.",
      },
      {
        bold: "Security",
        text: "A complete rejection of cash and informal schemes. All payments are processed through the Russian banking system.",
      },
      {
        bold: "Transparency",
        text: "Each transaction passes currency control, AML checks, and Foreign Transfers Compliance procedures. The legal structure of the transaction is aligned with applicable regulations of both the Russian Federation and the UAE.",
      },
      {
        bold: "Client trust",
        text: "You increase client confidence by offering a clear, legal, and easy-to-understand payment mechanism.",
      },
    ],
    flowTitle: "Transaction flow",
    flowSteps: [
      {
        bold: "Preparation",
        text: "You manage the client relationship and execute the standard Contract F or MOU.",
      },
      {
        bold: "Agreement",
        text: "Lyschor Real Estate signs an agency or escrow agreement with your client for the payment component of the transaction.",
      },
      {
        bold: "Payment in Russia",
        text: "The client transfers non-cash RUB funds from their bank account in the Russian Federation.",
      },
      {
        bold: "Settlement in the UAE",
        text: "We execute the official settlement with the property seller in Dubai via manager's cheque or bank transfer.",
      },
      {
        bold: "Completion",
        text: "You finalize the transaction as usual and receive your commission.",
      },
    ],
    pricingTitle: "Terms and pricing for the client",
    pricingIntro:
      "We offer fixed and transparent conditions with no hidden costs.",
    pricing: [
      { label: "Service Fee", value: "1% of the transaction amount" },
      {
        label: "Conversion rate",
        value: "Central Bank of the Russian Federation rate + 2%",
      },
      {
        label: "Documentation",
        value:
          "A complete set of contractual and banking confirmations for each transaction",
      },
    ],
    ctaTitle: "Start working with us today",
    ctaText:
      "Expand your agency's capabilities and offer your clients a modern, legal, and internationally compliant payment solution.",
    ctaSub:
      "Contact us to assess the feasibility of supporting your current transaction.",
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
      "Ваш надёжный партнёр для легальных трансграничных платежей из Российской Федерации",
    intro:
      "Lyschor Real Estate LLC — лицензированный брокер недвижимости в Дубае, предоставляющий инфраструктуру для безналичных расчётов в рублях. Мы помогаем агентствам недвижимости уверенно закрывать сделки с клиентами из Российской Федерации — быстро, прозрачно и в полном соответствии с законодательством.",
    clientFlow:
      "Ваши клиенты, граждане Российской Федерации, приобретают недвижимость в Дубае, совершая безналичные рублёвые платежи через российскую банковскую систему с последующим официальным расчётом с продавцом в ОАЭ.",
    licensesTitle: "Наши лицензии и комплаенс",
    licensesIntro:
      "Мы работаем официально и соблюдаем все требования регуляторов ОАЭ и Дубая.",
    licenses: ["License No. 1576754", "RERA No. 58183"],
    solutionTitle: "Наше решение для агентств недвижимости",
    solutionIntro:
      "Мы предоставляем сервис легальных безналичных платежей в рублях как отдельную платёжную функцию в структуре вашей сделки.",
    solutionDetail:
      "Ваше агентство получает возможность принимать платежи от российских клиентов в безналичных рублях и проводить официальный расчёт с продавцом в ОАЭ.",
    principleTitle: "Ключевой принцип",
    principle:
      "Клиент, сделка и полная брокерская комиссия остаются полностью за вашим агентством.",
    principleDetail:
      "Lyschor Real Estate не претендует на брокерскую роль, не взаимодействует с клиентом как агент и не конкурирует с вами. Мы выступаем исключительно как ваш технический и юридический партнёр, ответственный за исполнение платежа.",
    benefitsTitle: "Преимущества партнёрства",
    benefits: [
      {
        bold: "Масштабируемость",
        text: "Привлекайте клиентов, предпочитающих безналичные решения, не меняя вашу существующую бизнес-модель.",
      },
      {
        bold: "Безопасность",
        text: "Полный отказ от наличных и неформальных схем. Все платежи проходят через российскую банковскую систему.",
      },
      {
        bold: "Прозрачность",
        text: "Каждая транзакция проходит валютный контроль, AML-проверки и процедуры комплаенса. Юридическая структура сделки согласована с применимыми нормами РФ и ОАЭ.",
      },
      {
        bold: "Доверие клиентов",
        text: "Вы повышаете уверенность клиентов, предлагая понятный, легальный и прозрачный механизм оплаты.",
      },
    ],
    flowTitle: "Схема проведения сделки",
    flowSteps: [
      {
        bold: "Подготовка",
        text: "Вы ведёте клиента и оформляете стандартный Contract F или MOU.",
      },
      {
        bold: "Соглашение",
        text: "Lyschor Real Estate подписывает агентский или эскроу-договор с вашим клиентом на платёжную часть сделки.",
      },
      {
        bold: "Платёж в России",
        text: "Клиент переводит безналичные рубли со своего банковского счёта в РФ.",
      },
      {
        bold: "Расчёт в ОАЭ",
        text: "Мы проводим официальный расчёт с продавцом недвижимости в Дубае через менеджерский чек или банковский перевод.",
      },
      {
        bold: "Завершение",
        text: "Вы завершаете сделку в обычном режиме и получаете свою комиссию.",
      },
    ],
    pricingTitle: "Условия и стоимость для клиента",
    pricingIntro:
      "Мы предлагаем фиксированные и прозрачные условия без скрытых расходов.",
    pricing: [
      { label: "Сервисный сбор", value: "1% от суммы сделки" },
      { label: "Курс конвертации", value: "Курс ЦБ РФ + 2%" },
      {
        label: "Документация",
        value:
          "Полный комплект договорных и банковских подтверждений по каждой сделке",
      },
    ],
    ctaTitle: "Начните работать с нами сегодня",
    ctaText:
      "Расширьте возможности вашего агентства и предложите клиентам современное, легальное и международно-комплаентное платёжное решение.",
    ctaSub:
      "Свяжитесь с нами для оценки возможности сопровождения вашей текущей сделки.",
    contact: {
      company: "Lyschor Real Estate LLC",
      website: "www.uaekeys.ae",
      email: "info@uaekeys.ae",
    },
    printBtn: "Печать / Сохранить как PDF",
  },
};

export default function AgenciesOnePager() {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-black print:bg-white">
      {/* Controls - hidden on print */}
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

        {/* Intro */}
        <p className="text-[14px] leading-relaxed mb-3 print:text-[12px]">
          {t.intro}
        </p>
        <p className="text-[14px] leading-relaxed mb-6 print:text-[12px] font-medium">
          {t.clientFlow}
        </p>

        {/* Payment Flow Diagram */}
        <div className="mb-6 overflow-x-auto">
          <PaymentFlowDiagram lang={lang} />
        </div>

        {/* Licenses */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5 print:bg-gray-50">
          <h3 className="font-bold text-[15px] mb-1 print:text-[13px]">
            {t.licensesTitle}
          </h3>
          <p className="text-[13px] mb-2 print:text-[11px]">
            {t.licensesIntro}
          </p>
          <div className="flex gap-6">
            {t.licenses.map((l, i) => (
              <span
                key={i}
                className="bg-amber-100 text-amber-800 font-semibold text-[12px] px-3 py-1 rounded print:text-[11px]">
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-2 text-amber-600 print:text-lg">
            {t.solutionTitle}
          </h2>
          <p className="text-[14px] mb-2 print:text-[12px]">
            {t.solutionIntro}
          </p>
          <p className="text-[14px] print:text-[12px]">{t.solutionDetail}</p>
        </div>

        {/* Key Principle */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-5 print:bg-amber-50">
          <h3 className="font-bold text-[15px] mb-1 print:text-[13px]">
            {t.principleTitle}
          </h3>
          <p className="text-[14px] font-semibold mb-1 print:text-[12px]">
            {t.principle}
          </p>
          <p className="text-[13px] text-gray-700 print:text-[11px]">
            {t.principleDetail}
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-3 text-amber-600 print:text-lg">
            {t.benefitsTitle}
          </h2>
          <div className="grid grid-cols-2 gap-3 print:gap-2">
            {t.benefits.map((b, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 print:p-2">
                <p className="font-bold text-[13px] text-amber-700 mb-1 print:text-[11px]">
                  {b.bold}
                </p>
                <p className="text-[12px] leading-snug text-gray-700 print:text-[10px]">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Flow */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-3 text-amber-600 print:text-lg">
            {t.flowTitle}
          </h2>
          <div className="flex flex-col gap-0">
            {t.flowSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-[13px] shrink-0">
                    {i + 1}
                  </div>
                  {i < t.flowSteps.length - 1 && (
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

        {/* Pricing Table */}
        <div className="mb-5">
          <h2 className="text-xl font-bold mb-2 text-amber-600 print:text-lg">
            {t.pricingTitle}
          </h2>
          <p className="text-[13px] mb-3 print:text-[11px]">{t.pricingIntro}</p>
          <table className="w-full border-collapse text-[13px] print:text-[11px]">
            <tbody>
              {t.pricing.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-200 px-4 py-2 font-bold w-[180px]">
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

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-lg p-5 print:bg-gray-900">
          <h2 className="text-lg font-bold mb-2 print:text-base">
            {t.ctaTitle}
          </h2>
          <p className="text-[13px] mb-1 text-gray-300 print:text-[11px]">
            {t.ctaText}
          </p>
          <p className="text-[13px] text-gray-400 mb-3 print:text-[11px]">
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
