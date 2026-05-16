// IntentSpectrum.tsx
// Google Ads page: cold audience vs warm/searching audience spectrum

export default function IntentSpectrum() {
  return (
    <svg
      viewBox="0 0 480 140"
      width="100%"
      aria-label="Google Ads: hideg vs. meleg közönség spektrum — keresési szándék alapján"
      role="img"
    >
      {/* Gradient bar */}
      <defs>
        <linearGradient id="intentGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#525252" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Main bar */}
      <rect x="30" y="52" width="420" height="36" rx="18" fill="url(#intentGrad)" />

      {/* Left label: hideg */}
      <text x="30"  y="42" fill="#a3a3a3" fontSize="11" fontWeight="700" fontFamily="sans-serif">Hideg közönség</text>
      <text x="30"  y="108" fill="#525252" fontSize="9"  fontFamily="sans-serif">Social, Display</text>

      {/* Right label: meleg */}
      <text x="450" y="42"  fill="#60a5fa" fontSize="11" fontWeight="700" fontFamily="sans-serif" textAnchor="end">Aktív keresők</text>
      <text x="450" y="108" fill="#60a5fa" fontSize="9"  fontFamily="sans-serif" textAnchor="end">Google Search</text>

      {/* Marker dot — search intent peak */}
      <circle cx="380" cy="70" r="12" fill="#60a5fa" opacity="0.85" />
      <text x="380" y="74" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="sans-serif">🔍</text>

      {/* Annotation */}
      <line x1="380" y1="86" x2="380" y2="118" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 2" />
      <text x="380" y="130" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="sans-serif">Vásárlási szándék</text>
    </svg>
  );
}
