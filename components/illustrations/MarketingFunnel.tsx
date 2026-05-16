interface MarketingFunnelProps {
  variant?: "meta" | "tiktok";
}

const LEVELS = [
  {
    num: "1",
    label: "Elérés & ismertség",
    sub: "Minél több ember látja a hirdetést a célcsoportból",
    badge: "Hideg közönség",
    pct: "100%",
    alphaBase: 0.07,
    alphaBorder: 0.22,
  },
  {
    num: "2",
    label: "Érdeklődés & forgalom",
    sub: "Kattintás, weboldal-látogatás, videómegtekintés",
    badge: "Meleg közönség",
    pct: "20–40%",
    alphaBase: 0.12,
    alphaBorder: 0.32,
  },
  {
    num: "3",
    label: "Konverzió",
    sub: "Lead, ajánlatkérés, vásárlás — mérhető üzleti eredmény",
    badge: "Vásárlási szándék",
    pct: "2–15%",
    alphaBase: 0.20,
    alphaBorder: 0.50,
  },
];

export default function MarketingFunnel({ variant = "meta" }: MarketingFunnelProps) {
  const isMeta = variant === "meta";
  const [r, g, b] = isMeta ? [96, 165, 250] : [251, 113, 133];
  const textClass = isMeta ? "text-blue-400" : "text-rose-400";
  const textLightClass = isMeta ? "text-blue-300" : "text-rose-300";

  return (
    <>
      {/* ── Desktop: horizontal 3-column ── */}
      <div className="hidden md:flex items-stretch gap-0">
        {LEVELS.map((level, i) => (
          <div key={level.label} className="flex items-stretch flex-1">
            {/* Card */}
            <div
              className="flex-1 rounded-2xl p-6 flex flex-col justify-between"
              style={{
                background: `rgba(${r},${g},${b},${level.alphaBase})`,
                border: `1px solid rgba(${r},${g},${b},${level.alphaBorder})`,
              }}
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `rgba(${r},${g},${b},0.15)`,
                      color: `rgb(${r},${g},${b})`,
                    }}
                  >
                    {level.badge}
                  </span>
                  <span
                    className={`text-xs font-black ${textClass} opacity-70`}
                  >
                    {level.pct}
                  </span>
                </div>
                <p className="text-base font-black text-white leading-tight mt-1">{level.label}</p>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{level.sub}</p>
              </div>

              {/* Step number bottom */}
              <div className="mt-6">
                <span
                  className={`text-4xl font-black ${textClass} opacity-15`}
                >
                  0{level.num}
                </span>
              </div>
            </div>

            {/* Arrow between cards */}
            {i < LEVELS.length - 1 && (
              <div className="flex items-center px-3 shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke={`rgba(${r},${g},${b},0.4)`}
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
      <div className="flex flex-col items-center gap-1.5 md:hidden">
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
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `rgba(${r},${g},${b},0.15)`,
                      color: `rgb(${r},${g},${b})`,
                    }}
                  >
                    {level.badge}
                  </span>
                  <span className={`text-xs font-black ${textClass} opacity-70`}>{level.pct}</span>
                </div>
                <p className="text-sm font-black text-white leading-tight">{level.label}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">{level.sub}</p>
              </div>
              {i < LEVELS.length - 1 && (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
                  <path
                    d="M8 0v10M3 7l5 5 5-5"
                    stroke={`rgba(${r},${g},${b},0.4)`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
