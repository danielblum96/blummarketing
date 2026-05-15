import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://blummarketing.hu'),
  title: {
    default: 'Blummarketing | Havidíjas TikTok és Meta tartalomkészítés',
    template: '%s | Blummarketing',
  },
  description: 'Havidíjas videós és fotós tartalomgyártás TikTokra és Metára hirdetéskezeléssel. 10 videó/hó + kampánymenedzsment 270 000 Ft/hó áron.',
  openGraph: {
    title: 'Blummarketing | Havidíjas Meta, Google és TikTok hirdetéskezelés',
    description: 'Havidíjas videós és fotós tartalomgyártás TikTokra és Metára hirdetéskezeléssel. 10 videó/hó + kampánymenedzsment 270 000 Ft/hó áron.',
    siteName: 'Blummarketing',
    locale: 'hu_HU',
    type: 'website',
    url: 'https://blummarketing.hu',
    images: [
      {
        url: 'https://blummarketing.hu/images/blummarketing-og.png',
        width: 1200,
        height: 630,
        alt: 'Blummarketing – Havidíjas hirdetéskezelés',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
