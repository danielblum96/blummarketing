import Script from "next/script";
import WebpConverter from "@/components/WebpConverter";

export const metadata = {
  title: "Free PNG to WebP & JPG to WebP Converter (No Limits, No Upload)",
  description: "Convert PNG and JPG images to WebP for free, with no file limits and no sign-up. Everything runs in your browser — your images are never uploaded to a server.",
  alternates: { canonical: "/webp/" },
  openGraph: {
    title: "Free PNG to WebP & JPG to WebP Converter (No Limits, No Upload)",
    description: "Convert PNG and JPG images to WebP for free, with no file limits and no sign-up. Everything runs in your browser.",
    type: "website",
    locale: "en_US",
  },
};

const faqs = [
  {
    q: "Is this WebP converter really free, with no limits?",
    a: "Yes. There is no daily limit, no file-count limit, and no account required. Convert as many images as you need.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. The conversion happens entirely inside your browser using the Canvas API. Your files never leave your device.",
  },
  {
    q: "What image formats can I convert to WebP?",
    a: "You can convert PNG and JPG/JPEG images to WebP. You can drop multiple files at once and they'll be converted one by one.",
  },
  {
    q: "Why should I use WebP instead of PNG or JPG?",
    a: "WebP images are typically 25–35% smaller than equivalent JPGs and PNGs at the same visual quality, which means faster page loads and better Core Web Vitals scores.",
  },
  {
    q: "Can I control the output quality?",
    a: "Yes. Use the quality slider (1–100%) to balance file size against visual quality. 75–85% is a good default for most websites.",
  },
  {
    q: "Can I convert multiple images at once (batch conversion)?",
    a: "Yes. Drop or select as many PNG/JPG files as you like and each one will be converted and downloaded automatically as a separate .webp file.",
  },
  {
    q: "Does this work on mobile devices?",
    a: "Yes. The converter runs in any modern mobile browser. You can select images from your phone's gallery and download the WebP files directly.",
  },
  {
    q: "Will converting to WebP reduce image quality?",
    a: "At quality settings of 75% or higher, the visual difference is usually unnoticeable, while the file size drops significantly. You can always increase the quality slider for near-lossless results.",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function WebpPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      {/* AdSense — replace with your own publisher ID once approved */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <div className="mx-auto max-w-3xl px-6 pb-6 pt-12 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Free Online Tool</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            PNG to WebP & JPG to WebP Converter
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Drop your images below or click to upload. No file limit, no sign-up, no upload to any server —
            everything happens right in your browser.
          </p>
        </div>
      </section>

      {/* Top ad slot */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="0000000000"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsbygoogle-init-top" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <WebpConverter />
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", title: "Drop or select images", desc: "Choose one or more PNG/JPG files from your device." },
            { n: "2", title: "Set the quality", desc: "Adjust the slider — 75–85% works well for most websites." },
            { n: "3", title: "Download instantly", desc: "Each image converts and downloads automatically as .webp." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-sm font-black text-rose-300">{s.n}</div>
              <p className="font-bold text-white mb-1">{s.title}</p>
              <p className="text-sm text-neutral-400 leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mid ad slot */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="0000000001"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsbygoogle-init-mid" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      {/* Why WebP */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">Why convert to WebP?</h2>
        <ul className="space-y-3">
          {[
            "25–35% smaller file size than PNG or JPG at the same visual quality",
            "Faster page load times and better Core Web Vitals (LCP) scores",
            "Supported by all modern browsers (Chrome, Firefox, Safari, Edge)",
            "Supports both lossy and lossless compression, plus transparency like PNG",
          ].map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-neutral-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">WebP vs PNG vs JPG</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.06]">
                <th className="px-5 py-3 text-left font-black text-neutral-200">Feature</th>
                <th className="px-5 py-3 text-left font-black text-neutral-200">WebP</th>
                <th className="px-5 py-3 text-left font-black text-neutral-200">PNG</th>
                <th className="px-5 py-3 text-left font-black text-neutral-200">JPG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Typical file size", "Smallest", "Largest", "Medium"],
                ["Transparency support", "Yes", "Yes", "No"],
                ["Lossless option", "Yes", "Yes", "No"],
                ["Best for", "Websites, apps", "Logos, graphics", "Photos"],
                ["Browser support", "All modern browsers", "Universal", "Universal"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 odd:bg-white/[0.02]">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-3 leading-6 ${j === 0 ? "font-semibold text-neutral-200" : "text-neutral-400"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related tool */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <a
          href="/img-compress/"
          className="group flex flex-col gap-4 rounded-2xl border border-rose-500/20 bg-rose-500/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between transition hover:bg-rose-500/[0.1]"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-2">Related tool</p>
            <p className="font-black text-white text-lg mb-1">Is your WebP file still too large?</p>
            <p className="text-sm text-neutral-400">
              File size depends on pixel dimensions, not just format. Try our free Image Compressor &amp; Resizer to shrink huge photos first.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-950 transition group-hover:bg-neutral-200">
            Open Image Compressor →
          </span>
        </a>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-bold text-white mb-2">{f.q}</p>
              <p className="text-sm leading-7 text-neutral-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 pb-12 pt-4 text-center lg:px-8">
        <p className="text-xs text-neutral-600">
          A free tool by <a href="https://blummarketing.hu" className="underline hover:text-neutral-400">Blummarketing</a>
          {" · "}
          <a href="/img-compress/" className="underline hover:text-neutral-400">Try our Image Compressor</a>
        </p>
      </footer>
    </main>
  );
}
