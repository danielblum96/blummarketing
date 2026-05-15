import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Szolgáltatások | Blummarketing",
  description: "Blummarketing szolgáltatásai: videós tartalom, Meta és TikTok hirdetéskezelés, fotózás, social media tartalomgyártás, kreatív optimalizálás és weboldal készítés.",
  openGraph: {
    title: "Szolgáltatások | Blummarketing",
    description: "Videós tartalom, hirdetéskezelés, fotózás, social media és weboldal készítés.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

const services = [
  {
    slug: "havi-videos-tartalom-hirdeteskezeles",
    title: "Havi videós tartalom + hirdetéskezelés",
    description: "Havi 10 rövid videó és fotós tartalom a Photozoom csapatától, TikTok és Meta hirdetéskezelés a Blummarketingtől – összehangolt rendszerként, fix havidíjon.",
    price: "270 000 Ft / hó",
    tags: ["TikTok", "Meta", "Videó", "Hirdetéskezelés"],
    highlight: true,
  },
  {
    slug: "google-hirdeteskezeles",
    title: "Google hirdetéskezelés",
    description: "Search, Performance Max és Shopping kampányok stratégiai tervezése, beállítása és folyamatos optimalizálása – konverziókövetéssel együtt.",
    tags: ["Google Ads", "Search", "PPC"],
  },
  {
    slug: "tiktok-hirdeteskezeles",
    title: "TikTok hirdetéskezelés",
    description: "TikTok kampányok stratégiai tervezése, beállítása, folyamatos optimalizálása és havi riportálása.",
    tags: ["TikTok", "PPC"],
  },
  {
    slug: "meta-hirdeteskezeles",
    title: "Meta hirdetéskezelés",
    description: "Facebook és Instagram kampányok beállítása, célzása, optimalizálása és mérése.",
    tags: ["Meta", "Facebook", "Instagram", "PPC"],
  },
  {
    slug: "foto-es-videokeszites",
    title: "Fotó- és videókészítés",
    description: "Professzionális fotó- és videóanyagok hirdetésekhez, weboldalhoz és social media tartalmakhoz.",
    tags: ["Fotózás", "Videó", "Kreatív"],
  },
  {
    slug: "social-media-tartalomgyartas",
    title: "Social media tartalomgyártás",
    description: "Rendszeres, márkaazonos tartalmak gyártása TikTokra, Instagramra és Facebookra.",
    tags: ["Social media", "Tartalom", "TikTok", "Instagram"],
  },
  {
    slug: "kreativ-optimalizalas",
    title: "Kreatív optimalizálás",
    description: "Meglévő hirdetési kreatívok elemzése, A/B tesztelése és teljesítményalapú javítása.",
    tags: ["Kreatív", "Optimalizálás", "A/B teszt"],
  },
  {
    slug: "weboldal-keszites",
    title: "Weboldal készítés",
    description: "Modern, gyors és konverzióra optimalizált weboldalak készítése vállalkozásoknak.",
    tags: ["Weboldal", "Next.js", "Konverzió"],
  },
];

export default function SzolgaltatasokPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Szolgáltatások</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Mit kínálunk?</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Tartalomgyártástól a hirdetéskezelésen át a weboldalig – minden, ami a digitális jelenléthez kell.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/szolgaltatasok/${s.slug}/`}
              className={`group rounded-[2rem] border p-7 shadow-xl transition hover:-translate-y-1 ${
                s.highlight
                  ? "border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10 lg:col-span-3"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
                ))}
                {s.highlight && (
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Legnépszerűbb csomag</span>
                )}
              </div>
              <h2 className={`font-black leading-tight group-hover:text-rose-200 transition ${s.highlight ? "text-2xl" : "text-xl"}`}>
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{s.description}</p>
              {s.price && <p className="mt-4 text-lg font-black text-white">{s.price}</p>}
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-rose-300 group-hover:gap-3 transition-all">
                Részletek <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
