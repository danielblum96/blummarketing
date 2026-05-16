// CampaignHierarchy.tsx – tree diagram showing campaign structure
// Used on Google Ads page: Fiók → Kampány → Hirdetéscsoport → Kulcsszavak + Hirdetések

export default function CampaignHierarchy() {
  // Layout in a 480×220 viewBox
  // Boxes: cx, cy, label, sublabel, color
  const nodes = [
    { x: 240, y: 30,  w: 130, h: 36, label: "Hirdetési fiók",      color: "#fb7185" },
    { x: 240, y: 100, w: 130, h: 36, label: "Kampány",              color: "#60a5fa" },
    { x: 240, y: 170, w: 130, h: 36, label: "Hirdetéscsoport",      color: "#34d399" },
    { x: 100, y: 240, w: 120, h: 36, label: "Kulcsszavak",          color: "#fbbf24" },
    { x: 380, y: 240, w: 120, h: 36, label: "Hirdetések",           color: "#fbbf24" },
  ];

  // Connector lines (from bottom-center of parent to top-center of child)
  const lines = [
    { x1: 240, y1: 48,  x2: 240, y2: 100 },
    { x1: 240, y1: 118, x2: 240, y2: 170 },
    { x1: 240, y1: 188, x2: 100, y2: 240 },
    { x1: 240, y1: 188, x2: 380, y2: 240 },
  ];

  return (
    <svg
      viewBox="0 0 480 286"
      width="100%"
      aria-label="Google Ads kampánystruktúra: Fiók → Kampány → Hirdetéscsoport → Kulcsszavak és Hirdetések"
      role="img"
    >
      {/* Connector lines */}
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke="#525252"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - n.w / 2}
            y={n.y - n.h / 2}
            width={n.w}
            height={n.h}
            rx="10"
            fill="rgba(255,255,255,0.04)"
            stroke={n.color}
            strokeWidth="1.5"
          />
          <text
            x={n.x}
            y={n.y + 5}
            textAnchor="middle"
            fill={n.color}
            fontSize="12"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
