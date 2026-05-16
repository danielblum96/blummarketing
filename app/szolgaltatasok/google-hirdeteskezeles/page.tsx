import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { ogImage } from "@/lib/og";
import IntentSpectrum from "@/components/illustrations/IntentSpectrum";
import CampaignHierarchy from "@/components/illustrations/CampaignHierarchy";

export const metadata = {
  title: "Google hirdetéskezelés | Blummarketing",
  description: "Google Ads kampányok stratégiai tervezése, beállítása, folyamatos optimalizálása és havi riportálása – Search, Performance Max és Shopping kampányok.",
  openGraph: {
    title: "Google hirdetéskezelés | Blummarketing",
    description: "Google Ads kampányok stratégiai tervezése, beállítása, folyamatos optimalizálása és havi riportálása.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/szolgaltatasok/google-hirdeteskezeles/" },
};

const included = [
  "Kampányaudit vagy nulláról indulás – stratégiával",
  "Kulcsszókutatás és negatív kulcsszólista felépítése",
  "Search kampányok beállítása és hirdetésszöveg-írás",
  "Performance Max kampány (webshopoknak, lead generáláshoz)",
  "Shopping kampány beállítása (webshopoknak)",
  "Konverziókövetés ellenőrzése / beállítása (GA4, GTM)",
  "Folyamatos ajánlat- és célzásoptimalizálás",
  "Havi riport: teljesítmény, tanulságok, következő lépések",
];

const forWhom = [
  {
    title: "Webshopoknak",
    desc: "Shopping és Performance Max kampányok, amelyek a vásárlást keresőknek jelennek meg – ne csak látogatót, hanem vevőt hozzon a Google.",
  },
  {
    title: "Szolgáltatóknak",
    desc: "Search kampányok azoknak, akik aktívan keresik a szolgáltatásodat. Ügyvéd, fogorvos, oktató, tanácsadó – ha keresnek, téged találjanak.",
  },
  {
    title: "B2B cégeknek",
    desc: "Lead generálás döntéshozóknak. Precíz kulcsszócélzás, erős landing page kapcsolás, mért konverzió.",
  },
];

const whyUs = [
  "Csak azt állítjuk be, ami tényleg szükséges – nem fújjuk fel a kampányszerkezetet",
  "Konverziókövetés nélkül nem kezdünk el hirdetni",
  "Átlátható havi riport – értjük is, amit mutatunk",
  "Nem adunk el olyat, amitől nem várható eredmény",
];

export default function GoogleHirdeteskezelesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/szolgaltatasok/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
            ← Vissza a szolgáltatásokhoz
          </a>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Szolgáltatás</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Google hirdetéskezelés</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Google Ads kampányok stratégiai tervezése, beállítása és folyamatos optimalizálása – Search, Performance Max és Shopping. Csak akkor hirdetünk, ha a mérés rendben van.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#kapcsolat"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:bg-neutral-200"
            >
              Ajánlatkérés
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="/tudastar/google-ads/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              Google Ads útmutató
            </a>
          </div>
        </div>
      </section>

      {/* Intent spectrum */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-4 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Miért erős a Google Ads</p>
        <h2 className="text-3xl font-black mb-3">Nem hideg közönséget ér el — aktívan kereső embereket</h2>
        <p className="text-neutral-300 leading-7 mb-8 max-w-2xl">Meta és TikTok hirdetéseknél a platform dönti el, kinek mutatja a hirdetést. Google Ads-nél a felhasználó maga keres rád — ez az egyik legnagyobb különbség.</p>
        <IntentSpectrum />
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Mit tartalmaz</p>
        <h2 className="text-3xl font-black mb-10">Ami benne van a kezelésben</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {included.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/15">
                <Check className="h-3.5 w-3.5 text-rose-300" aria-hidden="true" />
              </div>
              <p className="text-sm leading-7 text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign structure */}
      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Kampányfelépítés</p>
        <h2 className="text-3xl font-black mb-3">Hogyan épül fel egy Google Ads fiók?</h2>
        <p className="text-neutral-300 leading-7 mb-8 max-w-2xl">Egy rendezett fiókban minden szintnek megvan a szerepe — ez az alap ahhoz, hogy utólag is átlátható legyen, mi működik és mi nem.</p>
        <CampaignHierarchy />
      </section>

      {/* For whom */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Kiknek ajánljuk</p>
        <h2 className="text-3xl font-black mb-10">Kinek való a Google hirdetéskezelés?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {forWhom.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-lg font-black mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Miért mi</p>
          <h2 className="text-3xl font-black mb-8">Ahogy mi dolgozunk</h2>
          <ul className="space-y-4">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15">
                  <Check className="h-3 w-3 text-rose-300" aria-hidden="true" />
                </div>
                <p className="text-neutral-300 leading-7">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-rose-500/10 to-blue-500/10 border border-white/10 p-10 lg:p-16 text-center">
          <h2 className="text-3xl font-black sm:text-4xl mb-4">Megmutatjuk, mit lehet kihozni a Google Ads-ből</h2>
          <p className="text-neutral-300 max-w-xl mx-auto mb-8 leading-8">
            Kérj kampányauditot, vagy indulj nulláról egy tiszta stratégiával. Először megnézzük, érdemes-e Google-on hirdetni a te esetedben.
          </p>
          <a
            href="mailto:hello@blummarketing.hu?subject=Google hirdetéskezelés ajánlatkérés"
            className="inline-flex items-center gap-2 justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:bg-neutral-200"
          >
            Ajánlatkérés <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
