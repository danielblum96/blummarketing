import Script from "next/script";
import ImgCompressor from "@/components/ImgCompressor";

export const metadata = {
  title: "Free Image Compressor & Resizer (No Limits, No Upload)",
  description: "Resize and compress PNG, JPG and WebP images for free, right in your browser. Shrink huge camera photos (e.g. 3000+ px) down to web-friendly file sizes with no upload and no sign-up.",
  alternates: { canonical: "/img-compress/" },
  openGraph: {
    title: "Free Image Compressor & Resizer (No Limits, No Upload)",
    description: "Resize and compress PNG, JPG and WebP images for free, right in your browser. No upload, no sign-up, no limits.",
    type: "website",
    locale: "en_US",
  },
};

const faqs = [
  {
    q: "Why is my image still large even after converting it to WebP?",
    a: "File size depends on pixel dimensions as much as format. A 3000×4500px photo will still be several megabytes even as WebP, because it has millions of pixels. Resizing it down to e.g. 1920px wide before compressing reduces the file size dramatically — often by 80–95%.",
  },
  {
    q: "Is this image compressor really free, with no limits?",
    a: "Yes. There is no daily limit, no file-count limit, and no account required. Compress as many images as you need.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Resizing and compression happen entirely inside your browser using the Canvas API. Your files never leave your device.",
  },
  {
    q: "What's a good max width for website images?",
    a: "For most websites, 1920px max width covers full-screen hero images on desktop. For blog or product photos, 1200–1600px is usually plenty, and for thumbnails, 400–800px.",
  },
  {
    q: "Will resizing make my images blurry?",
    a: "No. The tool only ever scales images down, never up, so you won't get upscaling blur. Shrinking a large photo to a smaller size keeps it sharp because there's more detail than needed at the smaller size.",
  },
  {
    q: "Can I choose the output format?",
    a: "Yes. You can keep the original format, or convert to WebP, JPEG or PNG while resizing — all in the same step.",
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

export default function ImgCompressPage() {
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
            Image Compressor & Resizer
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Shrink huge photos (e.g. 3288×4932px) down to a web-friendly size and file weight. No file limit,
            no sign-up, no upload to any server — everything happens right in your browser.
          </p>
        </div>
      </section>

      {/* Top ad slot */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="0000000002"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsbygoogle-init-top" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <ImgCompressor />
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">How it works</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", title: "Drop your photo", desc: "Even huge camera photos (4000px+) work fine." },
            { n: "2", title: "Set max width/height", desc: "1920px is a good default for most websites." },
            { n: "3", title: "Download instantly", desc: "Get a resized, compressed file in seconds." },
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
          data-ad-slot="0000000003"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="adsbygoogle-init-mid" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      {/* Why resize matters */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <h2 className="text-2xl font-black mb-6">Why pixel dimensions matter more than format</h2>
        <p className="mb-5 leading-8 text-neutral-300">
          Converting a file to a modern format like WebP helps, but it has limits. A 3288×4932px photo has over
          16 million pixels — no compression format can make that genuinely small, because there's simply too
          much image data. The biggest single win is almost always resizing the photo down to the dimensions
          it will actually be displayed at, and only then compressing it.
        </p>
        <ul className="space-y-3">
          {[
            "A 3288×4932px JPG straight from a phone camera can be 8–12 MB",
            "The same photo resized to 1920px wide is roughly 0.3–0.6 MB as WebP",
            "Most websites never display images wider than 1920px, even on large monitors",
            "Smaller files mean faster page loads, lower bandwidth costs and better SEO rankings",
          ].map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-neutral-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related tool */}
      <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
        <a
          href="/webp/"
          className="group flex flex-col gap-4 rounded-2xl border border-rose-500/20 bg-rose-500/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between transition hover:bg-rose-500/[0.1]"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-2">Related tool</p>
            <p className="font-black text-white text-lg mb-1">Need to convert PNG or JPG to WebP?</p>
            <p className="text-sm text-neutral-400">
              Use our free WebP converter to switch formats — or combine it with this resizer for the smallest possible files.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-950 transition group-hover:bg-neutral-200">
            Open WebP Converter →
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
          <a href="/webp/" className="underline hover:text-neutral-400">Try our WebP converter</a>
        </p>
      </footer>
    </main>
  );
}
