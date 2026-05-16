import React from "react";
import { ArrowRight, BadgeCheck, Camera, Check, Clapperboard, Megaphone, PlayCircle, Target, TrendingUp, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "Havi videós tartalom + hirdetéskezelés | Blummarketing",
  description:
    "Havi 10 rövid videó TikTokra és Metára, fotós kreatívok és hirdetéskezelés – egy csomagban, 270 000 Ft/hó áron.",
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
    title: "Havi videós tartalom + hirdetéskezelés | Blummarketing",
    description:
      "Havi 10 videó, fotós tartalmak, TikTok és Meta kampányok 270 000 Ft/hó áron.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
};

const services = [
  {
    icon: Clapperboard,
    title: "10 rövid videó havonta",
    text: "A Photozoom csapata TikTokra, Reelsre és hirdetésekre optimalizált videós tartalmakat készít.",
  },
  {
    icon: Camera,
    title: "Fotós tartalomkészítés",
    text: "Modern, márkaazonos képek posztokhoz, hirdetésekhez, weboldalhoz és kampánykreatívokhoz — a Photozoom kivitelezésében.",
  },
  {
    icon: Megaphone,
    title: "TikTok és Meta hirdetéskezelés",
    text: "A Blummarketing kezeli a Facebook, Instagram és TikTok kampányok beállítását, optimalizálását és havi teljesítménykövetését.",
  },
];

const benefits = [
  "Havi fix díj, kiszámítható marketingköltség",
  "Gyorsan publikálható kreatívok rövid videós platformokra",
  "Tartalomkészítés Photozoommal, hirdetéskezelés Blummarketinggel",
  "Fókuszban a lead, eladás és márkaismertség",
  "Teljesítményalapú szemlélet — nem csak szép kreatívok",
  "Kis- és középvállalkozásokra szabott",
];

const process = [
  {
    step: "01",
    title: "Stratégiai egyeztetés",
    text: "Megnézzük az ajánlatod, célcsoportod, konkurenseid és azt, milyen tartalom tud valóban ügyfelet hozni. A Blummarketing meghatározza a kampányirányt, a Photozoom pedig ehhez igazítva készíti elő a tartalmi koncepciókat.",
  },
  {
    step: "02",
    title: "Tartalomgyártás",
    text: "A Photozoom csapata elkészíti a havi videós és fotós kreatívokat TikTokra, Metára és fizetett kampányokra optimalizálva.",
  },
  {
    step: "03",
    title: "Hirdetéskezelés",
    text: "A Blummarketing beállítja és optimalizálja a kampányokat, hogy ne csak nézettség, hanem mérhető eredmény is legyen.",
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
        <Navbar />

        <div id="top" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 shadow-xl backdrop-blur">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Havi 10 videó + TikTok és Meta hirdetéskezelés
            </div>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Tartalom, ami nem csak jól néz ki — hanem ügyfeleket is hoz.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              A Blummarketing a Photozoom tartalomkészítő csapatával együttműködve kínál havidíjas videós és fotós tartalomgyártást vállalkozásoknak TikTokra, Facebookra és Instagramra — hirdetéskezeléssel egy csomagban.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
              A kreatív tartalmak elkészítéséről a <span className="text-white font-semibold">Photozoom csapata</span> gondoskodik, míg a <span className="text-white font-semibold">Blummarketing</span> a TikTok, Facebook és Instagram hirdetések stratégiai kezeléséért, optimalizálásáért és teljesítménykövetéséért felel.
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
                <p className="mt-1 text-xs text-neutral-300">videó / hó</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-black">TikTok</p>
                <p className="mt-1 text-xs text-neutral-300">organikus + paid</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-2xl font-black">Meta</p>
                <p className="mt-1 text-xs text-neutral-300">FB + Instagram</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rose-500/30 via-blue-500/20 to-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-neutral-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-300">Havi ajánlat</p>
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
                  <p className="mt-3 text-sm leading-6 text-neutral-700">
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
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Minden, ami a havi láthatósághoz kell.</h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            A tartalomgyártást és a paid social kampányokat egy rendszerként kezeljük. A Photozoom csapata elkészíti a platformokra optimalizált kreatívokat, a Blummarketing pedig gondoskodik arról, hogy ezek hirdetésekben is mérhető eredményt hozzanak.
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
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Jelen lenni nem elég. A figyelmet folyamatosan ki kell érdemelni.</h2>
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
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Havi rendszer, ami folyamatosan termel kreatívokat.</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Ideális akkor, ha stabil social media jelenlétet akarsz, miközben a hirdetéseidhez is mindig friss kreatív készül.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white to-neutral-200 p-8 text-neutral-950 shadow-2xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-600">Blummarketing Growth</p>
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
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Gyors indulás, átlátható működés.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {process.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-black text-neutral-300">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">GYIK</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Gyakori kérdések</h2>
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
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Kérj konzultációt, és nézzük meg, milyen kreatívok és kampányok hoznának eredményt nálad.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Írj pár mondatot a vállalkozásodról, és megnézzük, hogyan indulhat el a havi rendszer: Photozoom tartalomgyártással és Blummarketing hirdetéskezeléssel.
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
              <h3 className="mt-6 text-3xl font-black">Az első egyeztetésen megnézzük:</h3>
              <ul className="mt-6 space-y-4 text-neutral-300">
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Milyen tartalom- és hirdetési irány lenne számodra releváns</li>
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Melyik TikTok és Meta kampánytípus illene a céljaidhoz</li>
                <li className="flex gap-3"><Check className="h-5 w-5 text-emerald-300" aria-hidden="true" /> Hogyan indulhat el a havi rendszer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
