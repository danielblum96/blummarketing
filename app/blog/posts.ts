export type BlogPost = {
  slug: string
  title: string
  description: string
  lastModified: string
  publishedAt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'google-search-ai-korszak-online-marketing',
    title: 'A Google Search AI-korszaka elkezdődött – és ez mindent átír az online marketingben',
    description: 'A Google keresője döntési motorrá válik. Mi változik SEO-ban, Google Ads-ben és tartalomstratégiában – és mit kell most tenned vállalkozóként.',
    lastModified: '2026-05-24',
    publishedAt: '2026-05-24',
  },
  {
    slug: 'meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal',
    title: 'Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda?',
    description: 'Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.',
    lastModified: '2025-01-01',
    publishedAt: '2025-01-01',
  },
]
