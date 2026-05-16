interface MarketingFunnelProps {
  variant?: "meta" | "tiktok";
}

const LEVELS = [
  {
    step: "01",
    label: "Elérés",
    sublabel: "Ismertség",
    desc: "Minél több ember látja a hirdetést a célcsoportból",
    pct: "100%",
    alphaBase: 0.06,
    alphaBorder: 0.20,
  },
  {
    step: "02",
    label: "Érdeklődés",
    sublabel: "Forgalom",
    desc: "Kattintás, weboldal-látogatás, videómegtekintés",
    pct: "20–40%",
    alphaBase: 0.11,
    alphaBorder: 0.30,
  },
  {
    step: "03",
    label: "Konverzió",
    sublabel: "Lead · Vásárlás",
    desc: "Ajánlatkérés, vásárlás — mérhető üzleti eredmény",
    pct: "2–15%",
    alphaBase: 0.19,
    alphaBorder: 0.48,
  },
];

export default function MarketingFunnel({ variant = "meta" }: MarketingFunnelProps) {
  const isMeta = variant === "meta";
  const [r, g, b] = isMeta ? [96, 165, 250] : [251, 113, 133];
  const color = `rgb(${r},${g},${b})`;
  const colorFaint = `rgba(${r},${g},${b},0.45)`;

  return (
    <>
      {/* ── Desktop: horizontal ── */}
      <div className="hidden md:flex items-stretch gap-4">
        {LEVELS.map((level, i) => (
          <div key={level.label} className="flex items-center flex-1 gap-4">
            {/* Card */}
            <div
              className="flex-1 rounded-2xl p-7 flex flex-col gap-4 h-full"
              style={{
                background: `rgba(${r},${g},${b},${level.alphaBase})`,
                border: `1px solid rgba(${r},${g},${b},${level.alphaBorder})`,
              }}
            >
              {/* Step + percentage row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-black tracking-widest"
                  style={{ color: colorFaint }}
                >
                  {level.step}
                </span>
                <span
                  className="text-xs font-black px-2.5 py-1 rounded-full"
                  style={{
                    background: `rgba(${r},${g},${b},0.15)`,
                    color,
                  }}
                >
                  {level.pct}
                </span>
              </div>

              {/* Title */}
              <div>
                <p className="text-2xl font-black text-white leading-tight">{level.label}</p>
                <p className="text-sm font-bold mt-0.5" style={{ color: colorFaint }}>{level.sublabel}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed mt-auto">{level.desc}</p>
            </div>

            {/* Arrow */}
            {i < LEVELS.length - 1 && (
              <div className="shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9h12M9 3l6 6-6 6"
                    stroke={`rgba(${r},${g},${b},0.35)`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Mobile: vertical stacked ── */}
      <div className="flex flex-col items-center gap-2 md:hidden">
        {LEVELS.map((level, i) => {
          const widths = ["w-full", "w-[84%]", "w-[66%]"];
          return (
            <div key={level.label} className="flex flex-col items-center w-full gap-1.5">
              <div
                className={`${widths[i]} rounded-2xl px-5 py-4`}
                style={{
                  background: `rgba(${r},${g},${b},${level.alphaBase})`,
                  border: `1px solid rgba(${r},${g},${b},${level.alphaBorder})`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black tracking-widest" style={{ color: colorFaint }}>{level.step}</span>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: `rgba(${r},${g},${b},0.15)`, color }}>{level.pct}</span>
                </div>
                <p className="text-base font-black text-white leading-tight">{level.label}</p>
                <p className="text-xs font-bold mt-0.5" style={{ color: colorFaint }}>{level.sublabel}</p>
                <p className="text-xs text-neutral-300 mt-2 leading-snug">{level.desc}</p>
              </div>
              {i < LEVELS.length - 1 && (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                  <path d="M8 0v10M3 7l5 5 5-5" stroke={`rgba(${r},${g},${b},0.35)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
