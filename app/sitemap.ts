import { MetadataRoute } from 'next'
import { blogPosts } from './blog/posts'

export const dynamic = 'force-static'

const BASE_URL = 'https://blummarketing.hu'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticPages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '/', changeFrequency: 'monthly', priority: 1.0 },
    { path: '/szolgaltatasok/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/szolgaltatasok/havi-videos-tartalom-hirdeteskezeles/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/szolgaltatasok/google-hirdeteskezeles/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/szolgaltatasok/tiktok-hirdeteskezeles/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/szolgaltatasok/meta-hirdeteskezeles/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/szolgaltatasok/weboldal-keszites/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/szolgaltatasok/foto-es-videokeszites/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/szolgaltatasok/kreativ-optimalizalas/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/szolgaltatasok/social-media-tartalomgyartas/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/esettanulmanyok/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/rolam/', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/tudastar/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/tudastar/google-ads/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tudastar/google-search-ai-korszak-online-marketing/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tudastar/meta-hirdetesek/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tudastar/meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/tudastar/tiktok-hirdetesek/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/tudastar/tiktok-hirdetesek-beallitasa/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/tudastar/meres-es-analitika/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/tudastar/kreativok-es-videos-tartalom/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/tudastar/fogalomtar/', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/webp/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/img-compress/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/adatkezeles/', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return [
    ...staticPages.map((p) => ({
      url: `${BASE_URL}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...blogEntries,
  ]
}
