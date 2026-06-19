import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebpConverter from "@/components/WebpConverter";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "PNG/JPG → WebP konvertáló",
  description: "Ingyenes online eszköz PNG és JPG képek WebP formátumra konvertálásához. A konvertálás teljesen a böngészőben történik, semmi nem kerül feltöltésre.",
  openGraph: {
    title: "PNG/JPG → WebP konvertáló | Blummarketing",
    description: "Ingyenes online eszköz PNG és JPG képek WebP formátumra konvertálásához. A konvertálás teljesen a böngészőben történik.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/webp/" },
};

export default function WebpPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 pb-10 pt-14 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Ingyenes eszköz</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">PNG/JPG → WebP konvertáló</h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Húzd ide a képeket, vagy kattints a feltöltéshez. A konvertálás teljesen a böngésződben történik, semmi nem kerül feltöltésre szerverre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <WebpConverter />
      </section>

      <Footer />
    </main>
  );
}
