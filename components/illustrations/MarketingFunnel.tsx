// MarketingFunnel.tsx – reusable 3-level funnel
// color prop: "meta" (blue) | "tiktok" (rose/red)

interface MarketingFunnelProps {
  variant?: "meta" | "tiktok";
}

const META_COLORS = {
  top:    { fill: "rgba(96,165,250,0.18)",  stroke: "#60a5fa", text: "#60a5fa" },
  mid:    { fill: "rgba(96,165,250,0.28)",  stroke: "#60a5fa", text: "#60a5fa" },
  bot:    { fill: "rgba(96,165,250,0.40)",  stroke: "#60a5fa", text: "#ffffff" },
};

const TIKTOK_COLORS = {
  top:    { fill: "rgba(251,113,133,0.18)", stroke: "#fb7185", text: "#fb7185" },
  mid:    { fill: "rgba(251,113,133,0.28)", stroke: "#fb7185", text: "#fb7185" },
  bot:    { fill: "rgba(251,113,133,0.40)", stroke: "#fb7185", text: "#ffffff" },
};

export default function MarketingFunnel({ variant = "meta" }: MarketingFunnelProps) {
  const c = variant === "meta" ? META_COLORS : TIKTOK_COLORS;

  // Funnel layers: top wide → bottom narrow, centered in 400×280 viewBox
  // Each layer is a trapezoid path
  const layers = [
    {
      label: "Elérés / Ismertség",
      sublabel: "Hideg célközönség",
      ...c.top,
      // wide trapezoid
      path: "M20,20 L380,20 L320,93 L80,93 Z",
      textY: 62,
    },
    {
      label: "Érdeklődés / Forgalom",
      sublabel: "Érdeklődők, weboldal-látogatók",
      ...c.mid,
      path: "M80,100 L320,100 L270,173 L130,173 Z",
      textY: 142,
    },
    {
      label: "Konverzió",
      sublabel: "Lead, vásárlás, ajánlatkérés",
      ...c.bot,
      path: "M130,180 L270,180 L240,253 L160,253 Z",
      textY: 222,
    },
  ];

  return (
    <svg
      viewBox="0 0 400 270"
      width="100%"
      aria-label="Marketing tölcsér – Elérés, Érdeklődés, Konverzió"
      role="img"
    >
      {layers.map((layer) => (
        <g key={layer.label}>
          <path
            d={layer.path}
            fill={layer.fill}
            stroke={layer.stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <text
            x="200"
            y={layer.textY - 8}
            textAnchor="middle"
            fill={layer.text}
            fontSize="13"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            {layer.label}
          </text>
          <text
            x="200"
            y={layer.textY + 9}
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="10"
            fontFamily="sans-serif"
          >
            {layer.sublabel}
          </text>
        </g>
      ))}
    </svg>
  );
}
