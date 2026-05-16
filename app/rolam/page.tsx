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

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="#f43f5e" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tiszta stratégia",
    desc: "Nem kampányokat kezetek, hanem ügyfélszerző rendszereket építek – a hirdetéstől a landing oldalon át az utánkövetésig.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="3" height="7" rx="1" stroke="#f43f5e" strokeWidth="1.5"/>
        <rect x="8.5" y="6" width="3" height="11" rx="1" stroke="#f43f5e" strokeWidth="1.5"/>
        <rect x="14" y="3" width="3" height="14" rx="1" stroke="#f43f5e" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Pontos mérés",
    desc: "Kattintás, megjelenés, konverziós arány – ezek visszajelzések. Az igazán fontos szám: mennyi ügyfelet és bevételt hoz a kampány.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="#f43f5e" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Folyamatos fejlődés",
    desc: "Hazai és nemzetközi szakemberektől, stratégáktól és copywriterektől tanulok folyamatosan – hogy a működő elveket a magyar piacra ültessem át.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10h14M10 3c-3 2-5 4-5 7s2 5 5 7c3-2 5-4 5-7s-2-5-5-7z" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Erős ajánlat",
    desc: "Tudni kell, kinek kommunikálunk, milyen problémára kínálunk megoldást és milyen üzenetre reagál a célközönség. Ez az alap.",
  },
];

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
                Marketing, ami valódi<br className="hidden sm:block" /> üzleti eredményekre<br className="hidden sm:block" /> dolgozik.
              </h1>
              <p className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-xl">
                Blum Dániel vagyok. 2017-ben, még egyetem mellett kezdtem el autodidakta módon foglalkozni a marketinggel.
                Ma hazai KKV-k ügyfélszerző rendszereivel foglalkozom – PPC hirdetésekkel, email automatizmusokkal és jól konvertáló landing oldalakkal.
              </p>

              {/* Quick stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-black text-white">2017</p>
                  <p className="text-sm text-neutral-500 mt-0.5">óta a szakmában</p>
                </div>
                <div className="w-px bg-white/10 self-stretch" />
                <div>
                  <p className="text-3xl font-black text-white">KKV</p>
                  <p className="text-sm text-neutral-500 mt-0.5">fókusz</p>
                </div>
                <div className="w-px bg-white/10 self-stretch" />
                <div>
                  <p className="text-3xl font-black text-white">PPC</p>
                  <p className="text-sm text-neutral-500 mt-0.5">+ email + landingek</p>
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
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story sections ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Hogyan kezdődött */}
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-400 mb-4">Hogyan kezdődött</p>
            <h2 className="text-2xl font-black mb-4 leading-snug">A kíváncsiságból tudatos munka lett</h2>
            <p className="text-neutral-400 leading-relaxed">
              2017-ben, még az egyetemi évek alatt kezdtem el autodidakta módon foglalkozni a marketinggel.
              Eleinte a kíváncsiság hajtott – hogyan működnek a hirdetések, mi az, ami konvertál, és mi az, ami csak pénzt éget.
              Később egyre tudatosabban mélyedtem el azokban a területekben, amelyek ma is a munkám középpontjában állnak:
              a PPC hirdetésekben, az email automatizmusokban és a jól konvertáló landing oldalak készítésében.
            </p>
          </div>

          {/* Ami igazán érdekel */}
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Ami igazán érdekel</p>
            <h2 className="text-2xl font-black mb-4 leading-snug">Ötletből mérhető növekedés</h2>
            <p className="text-neutral-400 leading-relaxed">
              A marketingben mindig az érdekelt igazán, hogyan lehet egy jó ötletből mérhető érdeklődést, az érdeklődésből ügyfeleket,
              az ügyfelekből pedig kiszámítható növekedést építeni. Nem a hirdetési platformok önmagukban izgatnak –
              hanem az a folyamat, ahogy a megfelelő üzenet, a megfelelő emberhez, a megfelelő pillanatban eljut.
            </p>
          </div>
        </div>

        {/* KKV partner szekció */}
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1px_1fr] lg:items-start">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">KKV partnerek</p>
              <h2 className="text-2xl font-black mb-4 leading-snug">A kezdetektől ott lenni</h2>
              <p className="text-neutral-400 leading-relaxed">
                Több hazai KKV-val dolgozom együtt, és különösen büszke vagyok arra, hogy jó néhány vállalkozás mellett már a kezdetektől
                jelen lehettem. Láttam, ahogy az első kampányokból, ajánlatokból és ügyfélszerző rendszerekből stabil, egyre nagyobb cégek nőttek ki.
              </p>
            </div>
            <div className="hidden lg:block bg-white/10" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4 lg:mt-0 mt-0">Szemléletem</p>
              <h2 className="text-2xl font-black mb-4 leading-snug">Számok mögött valódi vállalkozások</h2>
              <p className="text-neutral-400 leading-relaxed">
                Számomra ez a marketing egyik legizgalmasabb része: amikor a számok mögött valódi vállalkozások, valódi döntések és
                valódi növekedés áll. A kampányok teljesítményét üzleti érték alapján vizsgálom – a kattintások és konverziós arányok
                akkor számítanak, ha több érdeklődőt, hatékonyabb ügyfélszerzést és nagyobb bevételt eredményeznek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alapelvek ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Alapelvek</p>
          <h2 className="mt-3 text-3xl font-black">Amiben hiszek</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base font-black text-white">{v.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hatások / Inspirációk ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4">Tanulás & fejlődés</p>
              <h2 className="text-2xl font-black mb-4 leading-snug">Akik hatottak rám</h2>
              <p className="text-neutral-400 leading-relaxed">
                Folyamatosan tanulok hazai és nemzetközi szakemberektől, stratégáktól és copywriterektől.
                A célom az, hogy a működő marketingelveket a magyar KKV-k valós problémáira, lehetőségeire
                és piacaira ültessem át – ne csak másoljuk a külföldi mintákat, hanem értsük, miért működnek.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {influences.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-neutral-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Munkastílus / Closing ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden border border-rose-500/20 bg-rose-500/[0.04] p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-500/5 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-400 mb-5">Hogyan dolgozom</p>
            <p className="text-xl font-bold text-white leading-relaxed mb-5">
              Barátságos, gyakorlatias és üzletileg gondolkodó partnerként dolgozom.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Fontos számomra, hogy átlássam a teljes ügyfélszerzési folyamatot: a hirdetéstől a landing oldalon át egészen az utánkövetésig.
              Az igazán jó eredmények ugyanis gyakran nem egyetlen kampányon múlnak, hanem azon, hogy a rendszer elemei mennyire dolgoznak össze.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Komolyan veszem a szakmámat, igényem van a folyamatos fejlődésre, és minden projektnél ugyanaz vezérel:
              olyan marketingrendszert építeni, amely nemcsak jól néz ki, hanem mérhetően hozzájárul a vállalkozás növekedéséhez.
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
