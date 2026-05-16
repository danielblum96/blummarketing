// AuditBeforeAfter.tsx
// Before → After comparison: messy tracking → clean reporting
// Used in the homepage audit section

export default function AuditBeforeAfter() {
  return (
    <svg
      viewBox="0 0 480 160"
      width="100%"
      aria-label="Audit: rendezetlen mérés → tiszta riport"
      role="img"
    >
      {/* ── LEFT box: Before (chaos) ── */}
      <rect x="10" y="10" width="180" height="140" rx="14" fill="rgba(239,68,68,0.07)" stroke="#525252" strokeWidth="1.5" />

      {/* "Előtte" label */}
      <text x="100" y="34" textAnchor="middle" fill="#a3a3a3" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">ELŐTTE</text>

      {/* Chaotic lines – simulate messy data */}
      {[
        "M30,55 L80,70 L100,50 L140,80 L170,58",
        "M30,90 L60,110 L90,85 L120,105 L170,90",
        "M30,120 L55,130 L90,115 L140,135 L170,120",
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#fb7185" strokeWidth="1.5" strokeLinejoin="round" opacity={0.6} />
      ))}

      {/* Question marks */}
      <text x="40"  y="78"  fill="#525252" fontSize="14" fontFamily="sans-serif">?</text>
      <text x="120" y="95"  fill="#525252" fontSize="14" fontFamily="sans-serif">?</text>
      <text x="80"  y="130" fill="#525252" fontSize="14" fontFamily="sans-serif">?</text>

      {/* ── ARROW ── */}
      <line x1="200" y1="80" x2="272" y2="80" stroke="#a3a3a3" strokeWidth="2" />
      <polygon points="272,74 284,80 272,86" fill="#a3a3a3" />
      <text x="240" y="72" textAnchor="middle" fill="#a3a3a3" fontSize="9" fontFamily="sans-serif">Audit</text>

      {/* ── RIGHT box: After (clean) ── */}
      <rect x="290" y="10" width="180" height="140" rx="14" fill="rgba(52,211,153,0.07)" stroke="#34d399" strokeWidth="1.5" />

      {/* "Utána" label */}
      <text x="380" y="34" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">UTÁNA</text>

      {/* Clean upward bar chart */}
      {[
        { x: 315, h: 40, label: "Lead" },
        { x: 345, h: 60, label: "ROAS" },
        { x: 375, h: 80, label: "CPL"  },
        { x: 405, h: 55, label: "Conv" },
        { x: 435, h: 90, label: "Rev"  },
      ].map((bar) => (
        <g key={bar.label}>
          <rect
            x={bar.x}
            y={145 - bar.h}
            width={20}
            height={bar.h}
            rx="4"
            fill="rgba(52,211,153,0.35)"
            stroke="#34d399"
            strokeWidth="1"
          />
          <text x={bar.x + 10} y={152} textAnchor="middle" fill="#525252" fontSize="8" fontFamily="sans-serif">{bar.label}</text>
        </g>
      ))}
    </svg>
  );
}
