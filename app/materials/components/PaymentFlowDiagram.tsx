"use client";

interface PaymentFlowDiagramProps {
  lang: "en" | "ru";
}

const content = {
  en: {
    zoneRF: "Russian Federation",
    zoneUAE: "UAE",
    buyer: {
      title: "Buyer",
      lines: ["Bank account in the Russian Federation", "Non-cash RUB payment"],
    },
    lreRF: {
      title: "Lyschor Real Estate LLC (RF)",
      lines: [
        "Acceptance of non-cash RUB payments",
        "Agency / Escrow Agreement",
        "Payment executed within the contractual framework",
      ],
    },
    lreUAE: {
      title: "Lyschor Real Estate LLC (UAE)",
      lines: ["Official settlement in Dubai"],
    },
    seller: {
      title: "Property Seller",
      lines: ["Off-plan or secondary market", "Receipt of funds in the UAE"],
    },
    bottomLine:
      "Bottom line: One contract. One legal structure. Transparent flow of funds from the buyer's bank account in the Russian Federation to the seller in Dubai. No cash. No workaround schemes.",
  },
  ru: {
    zoneRF: "Российская Федерация",
    zoneUAE: "ОАЭ",
    buyer: {
      title: "Покупатель",
      lines: ["Счёт в банке РФ", "Безналичный рублёвый платёж"],
    },
    lreRF: {
      title: "Lyschor Real Estate LLC (РФ)",
      lines: [
        "Приём безналичных рублей",
        "Agency / Escrow Agreement",
        "Оплата в рамках договора",
      ],
    },
    lreUAE: {
      title: "Lyschor Real Estate LLC (ОАЭ)",
      lines: ["Официальный расчёт в Дубае"],
    },
    seller: {
      title: "Продавец недвижимости",
      lines: ["Off-plan или вторичный рынок", "Получение средств в ОАЭ"],
    },
    bottomLine:
      "Один договор. Один юридический контур. Прозрачное движение средств от счёта покупателя в РФ до продавца в Дубае. Без наличных и обходных схем.",
  },
};

/* ────────────────────────────────────────── */
/* Helper: wrap text into multiple <tspan>s   */
/* ────────────────────────────────────────── */
function SvgText({
  x,
  y,
  text,
  fontSize = 13,
  fontWeight = "normal",
  anchor = "middle" as "start" | "middle" | "end",
  fill = "#000",
  lineHeight = 1.3,
}: {
  x: number;
  y: number;
  text: string;
  fontSize?: number;
  fontWeight?: string;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  lineHeight?: number;
}) {
  const lines = text.split("\n");
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily="system-ui, -apple-system, sans-serif">
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : fontSize * lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

export default function PaymentFlowDiagram({ lang }: PaymentFlowDiagramProps) {
  const t = content[lang];

  const W = 960;
  const H = 520;
  const MID_X = 420;

  const orange = "#E97316";
  const lightBg = "#FFF7ED";

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-[960px] mx-auto"
          style={{ minWidth: 680 }}
          xmlns="http://www.w3.org/2000/svg">
          {/* ── Background ── */}
          <rect
            x={0}
            y={0}
            width={W}
            height={H}
            rx={8}
            fill={lightBg}
            stroke="#e5e7eb"
            strokeWidth={1}
          />

          {/* ── Divider ── */}
          <line
            x1={MID_X}
            y1={0}
            x2={MID_X}
            y2={H}
            stroke="#d1d5db"
            strokeWidth={2}
            strokeDasharray="8 4"
          />

          {/* ── Zone labels ── */}
          <SvgText
            x={MID_X / 2}
            y={36}
            text={t.zoneRF}
            fontSize={22}
            fontWeight="800"
            fill="#1f2937"
          />
          <SvgText
            x={MID_X + (W - MID_X) / 2}
            y={36}
            text={t.zoneUAE}
            fontSize={22}
            fontWeight="800"
            fill="#1f2937"
          />

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowO"
              markerWidth="10"
              markerHeight="8"
              refX="9"
              refY="4"
              orient="auto">
              <polygon points="0 0, 10 4, 0 8" fill={orange} />
            </marker>
          </defs>

          {/* ════════════════════════════════════ */}
          {/*  STEP 1 — BUYER (left zone, top)     */}
          {/* ════════════════════════════════════ */}
          <rect
            x={40}
            y={70}
            width={340}
            height={120}
            rx={8}
            fill="#fff"
            stroke={orange}
            strokeWidth={2.5}
          />
          <rect
            x={44}
            y={74}
            width={332}
            height={112}
            rx={6}
            fill="none"
            stroke={orange}
            strokeWidth={1}
          />
          <SvgText
            x={210}
            y={100}
            text={t.buyer.title}
            fontSize={17}
            fontWeight="800"
            fill="#1f2937"
          />
          {t.buyer.lines.map((line, i) => (
            <SvgText
              key={i}
              x={210}
              y={122 + i * 18}
              text={line}
              fontSize={12}
              fontWeight="normal"
              fill="#4b5563"
            />
          ))}

          {/* ════════════════════════════════════ */}
          {/*  STEP 2 — LRE RF (left zone, bottom) */}
          {/* ════════════════════════════════════ */}
          <rect
            x={40}
            y={260}
            width={340}
            height={140}
            rx={8}
            fill="#fff"
            stroke={orange}
            strokeWidth={2.5}
          />
          <SvgText
            x={210}
            y={292}
            text={t.lreRF.title}
            fontSize={15}
            fontWeight="800"
            fill="#1f2937"
          />
          {t.lreRF.lines.map((line, i) => (
            <SvgText
              key={i}
              x={210}
              y={316 + i * 18}
              text={line}
              fontSize={12}
              fontWeight="normal"
              fill="#4b5563"
            />
          ))}

          {/* ════════════════════════════════════ */}
          {/*  STEP 3 — LRE UAE (right zone, top)  */}
          {/* ════════════════════════════════════ */}
          <rect
            x={470}
            y={70}
            width={440}
            height={120}
            rx={8}
            fill="#fff"
            stroke={orange}
            strokeWidth={2.5}
          />
          <SvgText
            x={690}
            y={100}
            text={t.lreUAE.title}
            fontSize={17}
            fontWeight="800"
            fill="#1f2937"
          />
          {t.lreUAE.lines.map((line, i) => (
            <SvgText
              key={i}
              x={690}
              y={128 + i * 18}
              text={line}
              fontSize={13}
              fontWeight="normal"
              fill="#4b5563"
            />
          ))}

          {/* ════════════════════════════════════ */}
          {/*  STEP 4 — SELLER (right zone, bottom) */}
          {/* ════════════════════════════════════ */}
          <rect
            x={470}
            y={260}
            width={440}
            height={140}
            rx={8}
            fill="#fff"
            stroke={orange}
            strokeWidth={2.5}
          />
          <SvgText
            x={690}
            y={292}
            text={t.seller.title}
            fontSize={17}
            fontWeight="800"
            fill="#1f2937"
          />
          {t.seller.lines.map((line, i) => (
            <SvgText
              key={i}
              x={690}
              y={320 + i * 18}
              text={line}
              fontSize={13}
              fontWeight="normal"
              fill="#4b5563"
            />
          ))}

          {/* ════════════════════════════════════ */}
          {/*  FLOW LINES                           */}
          {/* ════════════════════════════════════ */}

          {/* Step 1 (Buyer) → Step 2 (LRE RF)  — vertical down */}
          <line
            x1={210}
            y1={190}
            x2={210}
            y2={260}
            stroke={orange}
            strokeWidth={2.5}
            markerEnd="url(#arrowO)"
          />
          {/* Step number label */}
          <circle cx={210} cy={225} r={14} fill={orange} />
          <SvgText
            x={210}
            y={230}
            text="1"
            fontSize={14}
            fontWeight="800"
            fill="#fff"
          />

          {/* Step 2 (LRE RF) → Step 3 (LRE UAE) — horizontal across border */}
          <line
            x1={380}
            y1={160}
            x2={470}
            y2={130}
            stroke={orange}
            strokeWidth={2.5}
            markerEnd="url(#arrowO)"
          />
          {/* Step number label */}
          <circle cx={425} cy={142} r={14} fill={orange} />
          <SvgText
            x={425}
            y={147}
            text="2"
            fontSize={14}
            fontWeight="800"
            fill="#fff"
          />

          {/* Step 3 (LRE UAE) → Step 4 (Seller) — vertical down */}
          <line
            x1={690}
            y1={190}
            x2={690}
            y2={260}
            stroke={orange}
            strokeWidth={2.5}
            markerEnd="url(#arrowO)"
          />
          {/* Step number label */}
          <circle cx={690} cy={225} r={14} fill={orange} />
          <SvgText
            x={690}
            y={230}
            text="3"
            fontSize={14}
            fontWeight="800"
            fill="#fff"
          />

          {/* Return flow: Seller → Buyer (bottom path) — Title Deed */}
          <polyline
            points="470,400 470,470 40,470 40,190"
            fill="none"
            stroke={orange}
            strokeWidth={2}
            strokeDasharray="6 3"
            markerEnd="url(#arrowO)"
          />
          {/* Label on bottom return path */}
          <rect
            x={150}
            y={456}
            width={200}
            height={22}
            rx={4}
            fill={lightBg}
            stroke="#d1d5db"
            strokeWidth={0.5}
          />
          <SvgText
            x={250}
            y={471}
            text={lang === "en" ? "Title Deed / Oqood" : "Title Deed / Oqood"}
            fontSize={11}
            fontWeight="600"
            fill="#6b7280"
          />
        </svg>
      </div>

      {/* ── Bottom Line / Key Message ── */}
      <div className="mt-6 bg-amber-400 border-2 border-amber-500 p-5 rounded-lg">
        <p className="text-black text-[14px] leading-relaxed">
          <span className="font-extrabold">
            {lang === "en" ? "Bottom line: " : "Итог: "}
          </span>
          {lang === "en"
            ? t.bottomLine.replace("Bottom line: ", "")
            : t.bottomLine}
        </p>
      </div>
    </div>
  );
}
