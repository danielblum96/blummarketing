import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Ads | Tudástár | Blummarketing",
  description: "Google Ads útmutatók, kampánystruktúra és optimalizálás PPC-sek és vállalkozások számára.",
  openGraph: {
    title: "Google Ads | Tudástár | Blummarketing",
    description: "Google Ads útmutatók, kampánystruktúra és optimalizálás PPC-sek és vállalkozások számára.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/tudastar/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
            ← Vissza a tudástárba
          </a>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Tudástár</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Google Ads</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">Google Ads útmutatók, kampánystruktúra és optimalizálás PPC-sek és vállalkozások számára.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-12 text-center">
          <p className="text-5xl mb-6">✍️</p>
          <h2 className="text-3xl font-black mb-4">Hamarosan</h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">Ezen a területen hamarosan megjelennek az első cikkek. Addig is nézd meg a többi kategóriát!</p>
          <a href="/tudastar/" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200">
            Vissza a tudástárba
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
