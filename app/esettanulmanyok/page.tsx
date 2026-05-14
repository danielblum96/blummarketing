import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Esettanulmányok | Blummarketing",
  description: "Valós eredmények valós ügyfelektől – TikTok és Meta hirdetési kampányok esettanulmányai.",
  openGraph: {
    title: "Esettanulmányok | Blummarketing",
    description: "Valós eredmények valós ügyfelektől – TikTok és Meta hirdetési kampányok esettanulmányai.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

export default function EsettanulmanyokPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Esettanulmányok</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Valós eredmények, valós ügyfelektől.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Hamarosan itt találod részletes kampányelemzéseinket és ügyfeleink eredményeit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-12 text-center">
          <p className="text-6xl mb-6">🚧</p>
          <h2 className="text-3xl font-black mb-4">Hamarosan</h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Az esettanulmányok jelenleg készülnek. Addig is vedd fel velünk a kapcsolatot, és mesélünk az eddigi eredményekről.
          </p>
          <a
            href="/#kapcsolat"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200"
          >
            Kapcsolatfelvétel
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
