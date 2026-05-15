import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tudástár | PPC, Meta és TikTok marketing útmutatók | Blummarketing",
  description: "Gyakorlati cikkek és pillér útmutatók Google Ads, Meta hirdetések, TikTok, mérés és kreatívok témakörben – vállalkozásoknak érthetően.",
  openGraph: {
    title: "Tudástár | PPC, Meta és TikTok marketing útmutatók | Blummarketing",
    description: "Gyakorlati cikkek és pillér útmutatók Google Ads, Meta hirdetések, TikTok, mérés és kreatívok témakörben.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
  alternates: { canonical: "/tudastar/" },
};

type Article = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date?: string;
  readTime?: string;
  soon?: boolean;
};

type Category = {
  label: string;
  description: string;
  articles: Article[];
};

const categories: Category[] = [
  {
    label: "Google Ads",
    description: "Keresési és Performance Max kampányok, Shopping, YouTube, audit.",
    articles: [
      {
        href: "/tudastar/google-ads/",
        title: "Google Ads hirdetéskezelés érthetően: mikor működik, mire jó, és mire kell figyelni?",
        description: "Kampánytípusok, mérés, kulcsszavak, hibák, webshop és szolgáltató use case-ek, audit checklist.",
        tags: ["Google Ads", "PPC", "Kampánykezelés"],
        date: "2025. január 1.",
        readTime: "18 perc",
      },
    ],
  },
  {
    label: "Meta hirdetések",
    description: "Facebook és Instagram kampányok, üzleti portfólió, struktúra, mérés.",
    articles: [
      {
        href: "/tudastar/meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal/",
        title: "Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda?",
        description: "Mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.",
        tags: ["Meta Ads", "PPC", "Facebook"],
        date: "2025. január 1.",
        readTime: "15 perc",
      },
    ],
  },
  {
    label: "TikTok hirdetések",
    description: "TikTok Business Center, kampánystruktúra, Pixel és Events API.",
    articles: [
      {
        href: "/tudastar/tiktok-hirdetesek-beallitasa/",
        title: "TikTok hirdetések beállítása érthetően: mi micsoda, hogyan épül fel?",
        description: "TikTok Business Center, Ads Manager, hirdetési fiók, Pixel és Events API – mi micsoda és mire kell figyelni.",
        tags: ["TikTok Ads", "PPC", "Business Center"],
        date: "2025. február 1.",
        readTime: "18 perc",
      },
    ],
  },
  {
    label: "Mérés és analitika",
    description: "GA4, GTM, konverziókövetés, attribúció, riportálás.",
    articles: [
      {
        href: "/tudastar/meres-es-analitika/",
        title: "Online marketing mérés: ha rossz adatból döntesz, rossz irányba költöd a pénzt",
        description: "Konverzió, mikro/makro konverzió, GA4, GTM, Meta Pixel, Conversions API, TikTok Pixel, attribúció, KPI-ok, ROAS, CPA, CPL és mérési audit.",
        tags: ["Mérés", "GA4", "Konverziókövetés"],
        date: "2025. január 1.",
        readTime: "20 perc",
      },
    ],
  },
  {
    label: "Kreatívok és videós tartalom",
    description: "Hook, videóstruktúra, UGC, képes hirdetések, carousel, tesztelés.",
    articles: [
      {
        href: "/tudastar/kreativok-es-videos-tartalom/",
        title: "Hirdetési kreatívok PPC kampányokhoz: mitől működik egy kép, videó vagy UGC tartalom?",
        description: "Hook, videóstruktúra, UGC, képes hirdetések, carousel, kreatívtesztelés, kifáradás jelei és platform-specifikus szempontok.",
        tags: ["Kreatív", "Videó", "UGC", "Hook"],
        date: "2025. január 1.",
        readTime: "22 perc",
      },
    ],
  },
  {
    label: "Fogalomtár",
    description: "PPC és online marketing fogalmak érthetően.",
    articles: [
      {
        href: "/tudastar/fogalomtar/",
        title: "PPC fogalomtár",
        description: "A legfontosabb hirdetési és marketingszakmai fogalmak érthetően – hamarosan.",
        tags: ["Fogalomtár"],
        soon: true,
      },
    ],
  },
];

export default function TudasTarPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Tudástár</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Marketing tudástár</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Gyakorlati cikkek és pillér útmutatók Google Ads-ről, Meta és TikTok hirdetésekről, mérésről és kreatívokról – vállalkozásoknak érthetően.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 space-y-16">
        {categories.map((cat) => (
          <div key={cat.label}>
            {/* Category header */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-400 mb-1">{cat.label}</p>
                <p className="text-sm text-neutral-500">{cat.description}</p>
              </div>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Articles */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.articles.map((article) =>
                article.soon ? (
                  <div
                    key={article.href}
                    className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-7 opacity-60"
                  >
                    <div className="flex flex-wrap gap-2 mb-5">
                      {article.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-bold text-neutral-500">{tag}</span>
                      ))}
                      <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-bold text-neutral-500">Hamarosan</span>
                    </div>
                    <h2 className="text-lg font-black leading-tight text-neutral-500">{article.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{article.description}</p>
                  </div>
                ) : (
                  <a
                    key={article.href}
                    href={article.href}
                    className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
                  >
                    <div className="flex flex-wrap gap-2 mb-5">
                      {article.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-lg font-black leading-tight group-hover:text-rose-200 transition">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-400">{article.description}</p>
                    {(article.date || article.readTime) && (
                      <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                        {article.date && <span>{article.date}</span>}
                        {article.date && article.readTime && <span>·</span>}
                        {article.readTime && <span>{article.readTime}</span>}
                      </div>
                    )}
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-rose-300 group-hover:gap-3 transition-all">
                      Elolvasom <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
