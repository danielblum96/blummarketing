import React from "react";
import { ArrowRight, BadgeCheck, BarChart3, Camera, Check, Clapperboard, Clock, Megaphone, PlayCircle, ShieldCheck, Sparkles, Target, TrendingUp, Zap } from "lucide-react";

// Next.js App Router javaslat:
// Fájl: app/page.tsx
// A metadata blokkot külön az app/layout.tsx vagy page.tsx fájlban használd exportként.

export const metadata = {
  title: "Blummarketing | Havidíjas TikTok, Meta videó- és fotós tartalomkészítés",
  description:
    "Blummarketing: villámgyors, havidíjas videós és fotós tartalomgyártás TikTokra és Metára, hirdetéskezeléssel. 10 videó/hó + kampánymenedzsment 270 000 Ft/hó áron.",
  keywords: [
    "videós tartalomkészítés",
    "fotós tartalomkészítés",
    "TikTok hirdetéskezelés",
    "Meta hirdetéskezelés",
    "Facebook hirdetés",
    "Instagram hirdetés",
    "marketing ügynökség",
    "Blummarketing",
  ],
  openGraph: {
    title: "Blummarketing | Havi 10 videó + TikTok és Meta hirdetéskezelés",
    description:
      "Modern tartalomgyártás és hirdetéskezelés vállalkozásoknak. 10 videó/hó, fotós tartalmak, TikTok és Meta kampányok 270 000 Ft/hó áron.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

const services = [
  {
    icon: Clapperboard,
    title: "10 rövid videó havonta",
    text: "TikTokra, Reelsre és hirdetésekhez optimalizált, pörgős, figyelemfogó videós tartalmak.",
  },
  {
    icon: Camera,
    title: "Fotós tartalomkészítés",
    text: "Modern, márkaazonos képek posztokhoz, hirdetésekhez, weboldalhoz és kampány kreatívokhoz.",
  },
  {
    icon: Megaphone,
    title: "TikTok és Meta hirdetéskezelés",
    text: "Facebook, Instagram és TikTok kampányok beállítása, optimalizálása és havi teljesítménykövetése.",
  },
];

const benefits = [
  "Havi fix díj, kiszámítható marketingköltség",
  "Gyorsan publikálható kreatívok rövid videós platformokra",
  "Egy kézben a tartalomgyártás és a hirdetéskezelés",
  "Fókuszban a lead, eladás és márkaismertség növelése",
  "Teljesítményalapú szemlélet, nem csak szép kreatívok",
  "Kis- és középvállalkozásokra szabott működés",
];

const process = [
  {
    step: "01",
    title: "Stratégiai egyeztetés",
    text: "Megnézzük az ajánlatod, célcsoportod, konkurenseid és azt, milyen tartalom tud valóban ügyfelet hozni.",
  },
  {
    step: "02",
    title: "Tartalomgyártás",
    text: "Elkészítjük a havi videós és fotós kreatívokat TikTokra, Metára és fizetett kampányokra optimalizálva.",
  },
  {
    step: "03",
    title: "Hirdetéskezelés",
    text: "Beállítjuk és optimalizáljuk a kampányokat, hogy ne csak nézettség, hanem mérhető eredmény is legyen.",
  },
];

const faqs = [
  {
    q: "Mit tartalmaz a 270 000 Ft-os havidíj?",
    a: "A csomag tartalmaz havi 10 rövid videót, fotós tartalomkészítést, TikTok és Meta hirdetéskezelést, kampányoptimalizálást és havi teljesítményriportot.",
  },
  {
    q: "A hirdetési büdzsé benne van az árban?",
    a: "Nem. A 270 000 Ft/hó az ügynökségi díj. A hirdetési költés külön fizetendő közvetlenül a platformok felé.",
  },
  {
    q: "Kinek ajánlott ez a csomag?",
    a: "Olyan vállalkozásoknak, amelyek rendszeresen akarnak megjelenni TikTokon, Facebookon és Instagramon, de nem akarnak külön videóst, fotóst és hirdetéskezelőt koordinálni.",
  },
  {
    q: "Mennyi idő után látható eredmény?",
    a: "A kreatívok és kampányok már az első hónapban adatot adnak, de stabil optimalizáláshoz általában 2–3 hónap folyamatos működés szükséges.",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Blummarketing",
    description:
      "Havidíjas videós és fotós tartalomkészítés TikTokra és Metára hirdetéskezeléssel.",
    areaServed: "Hungary",
    serviceType: ["Videós tartalomkészítés", "Fotós tartalomkészítés", "TikTok hirdetéskezelés", "Meta hirdetéskezelés"],
    offers: {
      "@type": "Offer",
      name: "Havi tartalomgyártás és hirdetéskezelés",
      price: "270000",
      priceCurrency: "HUF",
      description: "Havi 10 videó, fotós tartalomkészítés, TikTok és Meta hirdetéskezelés.",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function BlummarketingLanding() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Blummarketing főoldal">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-lg font-bold tracking-tight">Blummarketing</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex" aria-label="Fő navigáció">
            <a href="#szolgaltatasok" className="hover:text-white">Szolgáltatások</a>
            <a href="#ajanlat" className="hover:text-white">Csomag</a>
            <a href="#folyamat" className="hover:text-white">Folyamat</a>
            <a href="#kapcsolat" className="rounded-full bg-white px-5 py-2.5 font-semibold text-neutral-950 transition hover:bg-neutral-200">Ajánlatkérés</a>
          </nav>
        </div>

        <div id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 shadow-xl backdrop-blur">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Havi 10 videó + TikTok és Meta hirdetéskezelés
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tartalom, ami nem csak jól néz ki — hanem ügyfeleket is hoz.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              A Blummarketing havidíjas videós és fotós tartalomkészítést ad vállalkozásoknak TikTokra, Facebookra és Instagramra — profi hirdetéskezeléssel egy csomagban.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#kapcsolat" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:scale-[1.02] hover:bg-neutral-200">
                Kérek egy konzultációt
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#ajanlat" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Csomag részletei
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 text-center sm:text-left">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-black">10</p>
                <p className="mt-1 text-xs text-neutral-400">videó / hó</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-black">TikTok</p>
                <p className="mt-1 text-xs text-neutral-400">organikus + paid</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-black">Meta</p>
                <p className="mt-1 text-xs text-neutral-400">FB + Instagram</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rose-500/30 via-blue-500/20 to-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-neutral-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Havi ajánlat</p>
                    <p className="text-2xl font-black">270 000 Ft / hó</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300">Fix díj</div>
                </div>
                <div className="space-y-3">
                  {["10 rövid videó", "Fotós kreatívok", "TikTok Ads kezelés", "Meta Ads kezelés", "Havi riport", "Kreatív optimalizálás"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
                      <Check className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                      <span className="font-medium text-neutral-100">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl bg-white p-5 text-neutral-950">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6" aria-hidden="true" />
                    <p className="font-black">Cél: több figyelem, több érdeklődő, több eladás.</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    Nem külön posztokat gyártunk, hanem kampányrendszert építünk a tartalmaid köré.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="szolgaltatasok" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Szolgáltatások</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Minden, ami a havi láthatósághoz kell.</h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A tartalomgyártást és a paid social kampányokat egy rendszerként kezeljük, hogy a kreatívok gyorsan tesztelhetők, mérhetők és skálázhatók legyenek.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <service.icon className="h-9 w-9 text-rose-300" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Miért működik?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Nem elég jelen lenni. Rendszeresen kell nyerni a figyelmet.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <p className="font-semibold leading-7">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ajanlat" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Csomag</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Egy havi rendszer, ami folyamatosan termeli a kreatívokat.</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Ideális akkor, ha stabil, profi social media jelenlétet akarsz, miközben a hirdetéseidhez is mindig friss kreatív készül.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white to-neutral-200 p-8 text-neutral-950 shadow-2xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">Blummarketing Growth</p>
                <h3 className="mt-3 text-4xl font-black">270 000 Ft / hó</h3>
                <p className="mt-2 text-sm text-neutral-600">+ külön hirdetési költés</p>
              </div>
              <a href="#kapcsolat" className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-bold text-white transition hover:bg-neutral-800">Érdekel</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Havi 10 videó", "Fotós tartalmak", "TikTok hirdetéskezelés", "Meta hirdetéskezelés", "Kreatív koncepciók", "Kampányoptimalizálás", "Havi riport", "Javaslatok következő hónapra"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-neutral-950/5 p-4">
                  <Check className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="folyamat" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Folyamat</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Gyors indulás, átlátható működés.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {process.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-black text-neutral-500">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-8">
          {[
            { icon: Clock, title: "Villámgyors oldal", text: "Statikus Next.js felépítés, minimális kliensoldali JavaScript és tiszta komponensek." },
            { icon: ShieldCheck, title: "SEO alapokra építve", text: "Meta title, description, Open Graph, strukturált adatok és kulcsszavas szöveg." },
            { icon: BarChart3, title: "Konverzióra tervezve", text: "Erős ajánlat, tiszta CTA-k, bizalomépítés és csomagszintű értékkommunikáció." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-7 text-neutral-950">
              <item.icon className="h-8 w-8" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">GYIK</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Gyakori kérdések</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 open:bg-white/[0.07]">
              <summary className="cursor-pointer list-none text-lg font-black">{faq.q}</summary>
              <p className="mt-4 leading-7 text-neutral-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kapcsolat" className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kezdjük el</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Kérj konzultációt, és nézzük meg, milyen kreatívok hoznának eredményt nálad.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Írj pár mondatot a vállalkozásodról, és összeállítjuk, hogyan indulhat a havi tartalomgyártás és hirdetéskezelés.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:hello@blummarketing.hu?subject=Konzult%C3%A1ci%C3%B3%20-%20Blummarketing" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800">
                  Email küldése
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="tel:06303098589" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-bold transition hover:bg-neutral-100">
                  Telefonos érdeklődés
                </a>
              </div>
            </div>
            <div className="bg-neutral-950 p-8 text-white sm:p-12 lg:p-16">
              <TrendingUp className="h-10 w-10 text-emerald-300" aria-hidden="true" />
              <h3 className="mt-6 text-3xl font-black">Mit kapsz az első egyeztetésen?</h3>
              <ul className="mt-6 space-y-4 text-neutral-300">
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Tartalom- és hirdetési lehetőségek feltérképezése</li>
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Javaslat TikTok és Meta kampányirányra</li>
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Következő lépések a havi rendszerhez</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Blummarketing. Minden jog fenntartva.</p>
        <p>Havidíjas tartalomgyártás és hirdetéskezelés TikTokra és Metára.</p>
      </footer>
    </main>
  );
}
