import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./posts";

export const metadata = {
  title: "Blog | Blummarketing",
  description: "Tippek, útmutatók és esettanulmányok TikTok és Meta hirdetéskezeléshez, tartalomgyártáshoz és digitális marketinghez.",
  alternates: {
    canonical: "/blog/",
  },
};

const tagMap: Record<string, string[]> = {
  "google-search-ai-korszak-online-marketing": ["Google", "SEO", "AI", "Google Ads"],
  "meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal": ["Meta", "Hirdetéskezelő", "Facebook"],
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Blog</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Cikkek és útmutatók</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
            Tippek, útmutatók és esettanulmányok TikTok és Meta hirdetéskezeléshez.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {(tagMap[post.slug] ?? []).map((tag) => (
                  <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
                ))}
              </div>
              <h2 className="text-xl font-black leading-tight group-hover:text-rose-200 transition">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{post.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-rose-300 group-hover:gap-3 transition-all">
                Elolvasom <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
