import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Szolgáltatások | Blummarketing",
  description: "Blummarketing szolgáltatásai: havidíjas videós tartalomkészítés, Meta és TikTok hirdetéskezelés vállalkozásoknak.",
  openGraph: {
    title: "Szolgáltatások | Blummarketing",
    description: "Havidíjas videós tartalomkészítés és hirdetéskezelés vállalkozásoknak.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

const services = [
  {
    slug: "havi-videos-tartalom-hirdeteskezeles",
    title: "Havi videós tartalom + hirdetéskezelés",
    description: "Havi 10 rövid videó TikTokra és Metára, fotós kreatívok, valamint TikTok és Meta kampánykezelés – egy csomagban, fix havidíjon.",
    price: "270 000 Ft / hó",
    tags: ["TikTok", "Meta", "Videó", "Hirdetéskezelés"],
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
            Havidíjas csomagokban dolgozunk, ahol a tartalomgyártás és a hirdetéskezelés egy rendszerként működik.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/szolgaltatasok/${s.slug}/`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
                ))}
              </div>
              <h2 className="text-xl font-black leading-tight group-hover:text-rose-200 transition">{s.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{s.description}</p>
              <p className="mt-4 text-lg font-black text-white">{s.price}</p>
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
