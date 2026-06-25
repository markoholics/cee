import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/layout/LenisProvider'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Creative Entertainment Enterprises | CEE',
    template: '%s | CEE',
  },
  description:
    'Creative Entertainment Enterprises Pvt Ltd. One legal entity. Four operating houses. Talent, growth, commerce and AI built to take human potential further.',
  keywords: [
    'talent management',
    'entertainment',
    'brand marketing',
    'AI consulting',
    'celebrity brands',
    'India',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://theceecompany.com',
    siteName: 'Creative Entertainment Enterprises',
    title: 'Creative Entertainment Enterprises | CEE',
    description:
      'One legal entity. Four operating houses. Built to further human potential.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Entertainment Enterprises | CEE',
    description:
      'One legal entity. Four operating houses. Built to further human potential.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-base text-white font-body antialiased">
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
