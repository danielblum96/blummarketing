// FirstMonthTimeline.tsx
// Horizontal 5-step timeline for the homepage "first 30 days" section

const STEPS = [
  { num: "01", label: "Átnézzük a rendszert" },
  { num: "02", label: "Ellenőrizzük a mérést" },
  { num: "03", label: "Kijavítjuk a hibákat" },
  { num: "04", label: "Elindítjuk a teszteket" },
  { num: "05", label: "Következő lépések" },
];

export default function FirstMonthTimeline() {
  const count = STEPS.length;
  const dotR = 18;
  const colW = 96;
  const viewW = count * colW;
  const midY = 40;

  return (
    <svg
      viewBox={`0 0 ${viewW} 100`}
      width="100%"
      aria-label="Az első hónap 5 lépése: átnézés, mérés, javítás, tesztek, következő lépések"
      role="img"
    >
      {/* Connecting line */}
      <line
        x1={colW / 2}
        y1={midY}
        x2={viewW - colW / 2}
        y2={midY}
        stroke="#525252"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {STEPS.map((step, i) => {
        const cx = colW / 2 + i * colW;
        return (
          <g key={step.num}>
            {/* Circle */}
            <circle cx={cx} cy={midY} r={dotR} fill="rgba(251,113,133,0.12)" stroke="#fb7185" strokeWidth="1.5" />

            {/* Step number */}
            <text
              x={cx}
              y={midY + 5}
              textAnchor="middle"
              fill="#fb7185"
              fontSize="13"
              fontWeight="800"
              fontFamily="sans-serif"
            >
              {step.num}
            </text>

            {/* Label below */}
            <foreignObject x={cx - 42} y={midY + dotR + 8} width="84" height="50">
              <div
                style={{
                  textAlign: "center",
                  color: "#a3a3a3",
                  fontSize: "10px",
                  lineHeight: "1.35",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                {step.label}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
