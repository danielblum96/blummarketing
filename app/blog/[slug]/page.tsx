import { blogPosts } from '@/app/blog/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import MetaPortfolioArticle from '@/app/blog/articles/meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal'

type ArticleComponent = React.ComponentType<{ backHref?: string; backLabel?: string }>

const articleComponents: Record<string, ArticleComponent> = {
  'meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal': MetaPortfolioArticle,
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      locale: 'hu_HU',
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const ArticleComponent = articleComponents[params.slug]
  if (!ArticleComponent) notFound()

  return <ArticleComponent />
}
