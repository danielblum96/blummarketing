import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "Esettanulmányok | Blummarketing",
  description: "Valós kampányeredmények, konkrét számokkal. Meta, Google és TikTok hirdetések – hogyan jutottak el az ügyfelek a problémától a mérhető növekedésig.",
  openGraph: {
    title: "Esettanulmányok | Blummarketing",
    description: "Valós kampányeredmények, konkrét számokkal. Meta, Google és TikTok hirdetések – hogyan jutottak el az ügyfelek a problémától a mérhető növekedésig.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/esettanulmanyok/" },
};

/* ─── Adatok ─────────────────────────────────────── */

const stats = [
  { value: "9×", label: "Átlagosan elért ROAS" },
  { value: "−52%", label: "Lead ár csökkentés" },
  { value: "1,2M", label: "Elérés 30 nap alatt" },
  { value: "2017", label: "óta aktív kampányok" },
];

const cases = [
  {
    id: "01",
    platform: "Meta Ads",
    platformColor: { r: 96, g: 165, b: 250 },
    industry: "E-commerce · Kozmetikum",
    duration: "60 nap",
    headline: "A büdzsé égett, az eredmény elmaradt – amíg nem néztük meg, mi okozza.",
    situation:
      "Az ügyfél 3 hónapja futtatott Meta hirdetéseket, de az ROAS 1.8× körül stagnált, a vásárlási költség pedig folyamatosan nőtt. A kampányok technikailag működtek, az adatok viszont nem mutattak üzleti logikát: a legtöbb büdzsé hideg, nem vásárlóképes közönségre ment el.",
    approach: [
      "Teljes kampány- és pixelaudit: hol szivárog a büdzsé, mit mér ténylegesen a rendszer",
      "Kampánystruktúra újraépítése: hideg elérés, melegítés és retargeting szétválasztva",
      "Kreatív tesztelés: 3 üzenetirány, 2 formátum – adatból döntöttük el, mi marad",
      "Retargeting funnel felépítése kosárelhagyókra és termékoldalra látogatókra",
    ],
    metrics: [
      { label: "ROAS", before: "1.8×", after: "9×", up: true },
      { label: "Vásárlási költség", before: "4 200 Ft", after: "1 840 Ft", up: false },
      { label: "Konverziók", before: "–", after: "+34%", up: true },
    ],
  },
  {
    id: "02",
    platform: "Google Ads",
    platformColor: { r: 52, g: 211, b: 153 },
    industry: "B2B · Épületgépészet",
    duration: "90 nap",
    headline: "Drága kattintások, kevés ajánlatkérés – a hirdetések nem a megfelelő szándékot célozták.",
    situation:
      "A szakipari szolgáltató Google-kampányai látszólag rendben voltak: futottak, kattintásokat hoztak. Az ajánlatkérések száma azonban alacsony maradt, a kattintási ár pedig hónapról hónapra emelkedett. Az audit megmutatta, hogy a kulcsszólista tele volt informatív, nem vásárlási szándékú keresési kifejezésekkel.",
    approach: [
      "Kulcsszó-audit: kereskedelmi és informatív keresési szándék szétválasztása",
      "Negatív kulcsszólista felépítése – 80+ irreleváns kifejezés kizárva",
      "Hirdetésszöveg-optimalizálás: az ajánlatkérésre fókuszáló üzenetek tesztelése",
      "Landing oldal javaslatok: konverziós elemek erősítése, bizalomépítő tartalmak",
    ],
    metrics: [
      { label: "Ajánlatkérés ára", before: "6 400 Ft", after: "3 900 Ft", up: false },
      { label: "CTR", before: "2.1%", after: "5.2%", up: true },
      { label: "Minőségi mutató", before: "4/10", after: "8/10", up: true },
    ],
  },
  {
    id: "03",
    platform: "TikTok Ads",
    platformColor: { r: 251, g: 113, b: 133 },
    industry: "E-commerce · Élelmiszer",
    duration: "30 nap",
    headline: "Nulláról kellett felépíteni a brand ismertségét – és gyorsan kellett eredményt mutatni.",
    situation:
      "Új termék, nulla TikTok-jelenlét, szoros launch határidő. Az ügyfél nem tudta, egyáltalán működhet-e a platform az ő szegmensében. A kérdés az volt: be lehet-e mutatni egy egészséges élelmiszer-terméket TikTokon úgy, hogy az valódi elérést és érdeklődést hozzon – nem csak megjelenést.",
    approach: [
      "Platformhoz igazított kreatív koncepció: UGC-stílusú videók, nem klasszikus reklám",
      "Broad targeting az algoritmus tanítási fázisában, szűkítés az adatok alapján",
      "In-feed és Spark Ads kombináció – organikusnak ható megjelenésért",
      "Napi teljesítménykövetés és kreatív rotáció a fáradás ellen",
    ],
    metrics: [
      { label: "Elérés", before: "0", after: "1,2M", up: true },
      { label: "CPM", before: "–", after: "480 Ft", up: true },
      { label: "VTR (videómegtekintés)", before: "–", after: "8.7%", up: true },
    ],
  },
  {
    id: "04",
    platform: "Meta Lead Gen",
    platformColor: { r: 167, g: 139, b: 250 },
    industry: "Pénzügyi Szolgáltató",
    duration: "45 nap",
    headline: "Jöttek a leadek – de a legtöbbjük nem volt kvalifikált. A mennyiség nem volt elég.",
    situation:
      "Az ügyfél havi rendszerességgel futtatott lead generáló kampányokat Meta-on. A beérkező érdeklődők száma elfogadható volt, de az értékesítő csapat jelzése egyértelmű: a leadek nagy része nem illik az ideális ügyfélprofilba, és sok időt vesz el a minősítésük. A probléma nem a mennyiség, hanem a minőség volt.",
    approach: [
      "Célközönség szegmentálás: a legjobban konvertáló ügyfélprofilból visszafelé dolgozva",
      "Instant form átírás: minősítő kérdések beépítése, hogy csak komoly érdeklődők töltséék ki",
      "Üzenetváltás: nem az ingyenességre, hanem a megoldandó problémára fókuszálva",
      "Remarketing réteg: weboldalon jártak + videót megnézők külön kezelése",
    ],
    metrics: [
      { label: "Lead ár", before: "4 400 Ft", after: "2 100 Ft", up: false },
      { label: "Kvalifikált arány", before: "31%", after: "68%", up: true },
      { label: "Lead volumen", before: "–", after: "+120%", up: true },
    ],
  },
];

/* ─── Komponens ───────────────────────────────────── */

function PlatformBadge({ label, color }: { label: string; color: { r: number; g: number; b: number } }) {
  const { r, g, b } = color;
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black tracking-wide"
      style={{
        background: `rgba(${r},${g},${b},0.12)`,
        color: `rgb(${r},${g},${b})`,
        border: `1px solid rgba(${r},${g},${b},0.25)`,
      }}
    >
      {label}
    </span>
  );
}

function MetricRow({
  metric,
  color,
}: {
  metric: { label: string; before: string; after: string; up: boolean };
  color: { r: number; g: number; b: number };
}) {
  const { r, g, b } = color;
  return (
    <div className="flex items-center justify-between gap-4 py-3.5 border-b border-white/[0.06] last:border-0">
      <span className="text-sm text-neutral-500">{metric.label}</span>
      <div className="flex items-center gap-3 shrink-0">
        {metric.before !== "–" && metric.before !== "0" && (
          <>
            <span className="text-sm text-neutral-600 line-through">{metric.before}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
        <span className="text-base font-black" style={{ color: `rgb(${r},${g},${b})` }}>
          {metric.after}
        </span>
      </div>
    </div>
  );
}

export default function EsettanulmanyokPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.14),transparent_38%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_34%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-400">Esettanulmányok</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.08]">
            Valós kampányok,<br className="hidden sm:block" /> valós számok.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Nem elvont ígéretek – konkrét helyzetek, konkrét megközelítések és mérhető eredmények.
            Az ügyfelek kérésére névtelenül, de a számok valósak.
          </p>

          {/* Aggregate stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="mt-1 text-sm text-neutral-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
        <div className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
          <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" stroke="#525252" strokeWidth="1.2"/>
            <path d="M8 7v4M8 5.5v.5" stroke="#525252" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Az esettanulmányokban szereplő ügyfelek nevét és iparágát az ő kérésükre általánosítottuk.
            A bemutatott számok valós kampányeredmények.
          </p>
        </div>
      </div>

      {/* ── Esettanulmányok ── */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 space-y-8">
        {cases.map((c) => {
          const { r, g, b } = c.platformColor;
          return (
            <article
              key={c.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] overflow-hidden"
            >
              {/* Card header */}
              <div
                className="px-8 py-5 flex flex-wrap items-center gap-3 border-b border-white/[0.06]"
                style={{ background: `rgba(${r},${g},${b},0.04)` }}
              >
                <span className="text-[11px] font-black tracking-[0.18em] text-neutral-600">{c.id}</span>
                <PlatformBadge label={c.platform} color={c.platformColor} />
                <span className="text-xs text-neutral-600">·</span>
                <span className="text-xs font-semibold text-neutral-500">{c.industry}</span>
                <span className="text-xs text-neutral-600">·</span>
                <span className="text-xs font-semibold text-neutral-600">{c.duration}</span>
              </div>

              {/* Card body */}
              <div className="p-8 lg:p-10">
                <h2 className="text-xl font-black text-white leading-snug max-w-2xl mb-8 lg:text-2xl">
                  {c.headline}
                </h2>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

                  {/* Left: story */}
                  <div className="space-y-7">
                    {/* Helyzet */}
                    <div>
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.2em] mb-3"
                        style={{ color: `rgba(${r},${g},${b},0.7)` }}
                      >
                        A helyzet
                      </p>
                      <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
                        {c.situation}
                      </p>
                    </div>

                    {/* Megközelítés */}
                    <div>
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.2em] mb-3"
                        style={{ color: `rgba(${r},${g},${b},0.7)` }}
                      >
                        A megközelítés
                      </p>
                      <ul className="space-y-2.5">
                        {c.approach.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-1 shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-black"
                              style={{
                                background: `rgba(${r},${g},${b},0.12)`,
                                color: `rgb(${r},${g},${b})`,
                              }}
                            >
                              {i + 1}
                            </span>
                            <span className="text-sm text-neutral-400 leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div
                    className="rounded-2xl p-6 self-start"
                    style={{
                      background: `rgba(${r},${g},${b},0.05)`,
                      border: `1px solid rgba(${r},${g},${b},0.15)`,
                    }}
                  >
                    <p
                      className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
                      style={{ color: `rgba(${r},${g},${b},0.7)` }}
                    >
                      Eredmények
                    </p>
                    <p className="text-[11px] text-neutral-600 mb-4">{c.duration} alatt</p>
                    <div>
                      {c.metrics.map((m) => (
                        <MetricRow key={m.label} metric={m} color={c.platformColor} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ── Hogyan zajlik egy együttműködés ── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4">Amit minden eset közös</p>
              <h2 className="text-2xl font-black mb-5 leading-snug lg:text-3xl">
                Nem a kampány az első lépés – hanem a megértés.
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
                Minden együttműködés egy auditon kezdődik. Megnézem, hol tartasz most, mi működik és mi nem,
                mi mérhető és mi hiányzik a rendszerből. Csak ezután javaslok bármit – hogy az ne
                egy általános megoldás legyen, hanem egy a te helyzetedre szabott stratégia.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { num: "01", text: "Helyzetelemzés és audit" },
                { num: "02", text: "Stratégia és kampánytervezés" },
                { num: "03", text: "Beállítás és elindítás" },
                { num: "04", text: "Mérés, optimalizálás, riport" },
              ].map((step) => (
                <div
                  key={step.num}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-start gap-3"
                >
                  <span className="text-xs font-black text-neutral-600 mt-0.5 shrink-0">{step.num}</span>
                  <span className="text-sm font-semibold text-neutral-300 leading-snug">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden border border-rose-500/20 bg-rose-500/[0.04] p-10 lg:p-14 text-center">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-48 rounded-full bg-rose-500/8 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-400 mb-4">Következő lépés</p>
            <h2 className="text-2xl font-black mb-4 lg:text-3xl">
              Szeretnéd, hogy a te vállalkozásod is<br className="hidden sm:block" /> itt szerepeljen?
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Egy rövid egyeztetésen megnézzük, hol tartasz most, mi akadályoz az eredményekben,
              és mit lehetne tenni. Kötelezettség nélkül.
            </p>
            <a
              href="/#kapcsolat"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Kérek egy ingyenes egyeztetést
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
