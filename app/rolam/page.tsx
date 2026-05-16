import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "Rólam | Blummarketing",
  description: "Blum Dániel vagyok – PPC hirdetéskezelő és marketing stratéga. 2017 óta dolgozom hazai KKV-kkal, mérhető eredményekre fókuszálva.",
  openGraph: {
    title: "Rólam | Blummarketing",
    description: "Blum Dániel vagyok – PPC hirdetéskezelő és marketing stratéga. 2017 óta dolgozom hazai KKV-kkal, mérhető eredményekre fókuszálva.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
};

const influences = [
  "Dan Kennedy", "Russell Brunson", "Eugene Schwartz",
  "Gary Halbert", "Frank Kern", "Robert Cialdini",
];

export default function RolamPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_40%)]" />
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16">

            {/* Left: text */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-400">Rólam</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.08]">
                Szia, Blum Dániel vagyok!
              </h1>
              <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-xl">
                2017-ben, még egyetem mellett kezdtem el autodidakta módon foglalkozni a marketinggel. Eleinte a kíváncsiság hajtott, később pedig egyre tudatosabban mélyedtem el azokban a területekben, amelyek ma is a munkám középpontjában állnak: a PPC hirdetésekben, az email automatizmusokban és a jól konvertáló landing oldalak készítésében.
              </p>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-black text-white">2017</p>
                  <p className="text-sm text-neutral-400 mt-0.5">óta a szakmában</p>
                </div>
                <div className="w-px bg-white/10 self-stretch" />
                <div>
                  <p className="text-3xl font-black text-white">KKV</p>
                  <p className="text-sm text-neutral-400 mt-0.5">fókusz</p>
                </div>
                <div className="w-px bg-white/10 self-stretch" />
                <div>
                  <p className="text-3xl font-black text-white">PPC</p>
                  <p className="text-sm text-neutral-400 mt-0.5">+ email + landingek</p>
                </div>
              </div>
            </div>

            {/* Right: photo */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose-500/10 via-transparent to-blue-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/Blum_Daniel.webp"
                  alt="Blum Dániel – marketing stratéga"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "3/4", maxHeight: "520px", objectFit: "cover" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Szöveges tartalom ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 space-y-6">

        {/* P2 + P3 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-400 mb-5">Ami igazán érdekel</p>
            <p className="text-neutral-300 leading-relaxed">
              A marketingben mindig az érdekelt igazán, hogyan lehet egy jó ötletből mérhető érdeklődést, az érdeklődésből ügyfeleket, az ügyfelekből pedig kiszámítható növekedést építeni.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-400 mb-5">KKV partnerek</p>
            <p className="text-neutral-300 leading-relaxed">
              Több hazai KKV-val dolgozom együtt, és különösen büszke vagyok arra, hogy jó néhány vállalkozás mellett már a kezdetektől jelen lehettem. Láttam, ahogy az első kampányokból, ajánlatokból és ügyfélszerző rendszerekből stabil, egyre nagyobb cégek nőttek ki. Számomra ez a marketing egyik legizgalmasabb része: amikor a számok mögött valódi vállalkozások, valódi döntések és valódi növekedés áll.
            </p>
          </div>
        </div>

        {/* P4 – mérés */}
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-neutral-400 mb-5">Teljesítménymérés</p>
          <p className="text-neutral-300 leading-relaxed max-w-3xl">
            A kampányok teljesítményét üzleti érték alapján vizsgálom. A kattintások, megjelenések és konverziós arányok fontos visszajelzések, de igazán akkor számítanak, ha több érdeklődőt, hatékonyabb ügyfélszerzést és nagyobb bevételt eredményeznek.
          </p>
        </div>

        {/* P5 – tanulás + nevek */}
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-neutral-400 mb-5">Folyamatos tanulás</p>
              <p className="text-neutral-300 leading-relaxed">
                Folyamatosan tanulok hazai és nemzetközi szakemberektől, stratégáktól és copywriterektől. Olyan gondolkodók hatottak rám, mint Dan Kennedy, Russell Brunson, Eugene Schwartz, Gary Halbert, Frank Kern vagy Robert Cialdini. A célom az, hogy a működő marketingelveket a magyar KKV-k valós problémáira, lehetőségeire és piacaira ültessem át.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 lg:w-56 lg:justify-end">
              {influences.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-neutral-300 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* P6 – amiben hiszek */}
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-5">Amiben hiszek</p>
          <p className="text-neutral-300 leading-relaxed max-w-3xl">
            Hiszek a tiszta stratégiában, az erős ajánlatokban, a pontos mérésben és a folyamatos optimalizálásban. Egy eredményes kampány mögött nemcsak technikai beállítások állnak, hanem mélyebb megértés is: tudni kell, kinek kommunikálunk, milyen problémára kínálunk megoldást, milyen üzenetre reagál a célközönség, és hogyan lehet mindebből stabil ügyfélszerző rendszert építeni.
          </p>
        </div>

      </section>

      {/* ── Hogyan dolgozom / Closing ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden border border-rose-500/20 bg-rose-500/[0.04] p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-500/5 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-6">Hogyan dolgozom</p>
            <p className="text-neutral-300 leading-relaxed mb-5">
              Gyakorlatias, üzleti szemléletű partnerként dolgozom, aki nemcsak a kampányt nézi, hanem a teljes ügyfélszerzési rendszert. A hirdetés csak az első lépés. Az eredmény azon múlik, mi történik utána: mennyire erős az ajánlat, mennyire meggyőző a landing oldal, mennyire pontos az utánkövetés, és mennyire tudatosan épül fel az út az első kattintástól a vásárlásig.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-5">
              Számomra a marketing akkor működik igazán, amikor ezek az elemek összeérnek, és nem különálló eszközökként, hanem egy jól felépített rendszerként támogatják a vállalkozás növekedését.
            </p>
            <p className="text-neutral-300 leading-relaxed mb-3">
              Komolyan veszem a szakmámat, folyamatosan fejlődöm, és minden projektnél ugyanaz vezérel:
            </p>
            <p className="text-xl font-bold text-white leading-relaxed mb-8">
              olyan marketingrendszert építeni, amely érthető, mérhető, és valódi üzleti eredményeket hoz.
            </p>
            <a
              href="/#kapcsolat"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Dolgozzunk együtt
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
