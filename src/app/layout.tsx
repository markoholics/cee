import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/layout/LenisProvider'
import RotatePrompt from '@/components/ui/RotatePrompt'

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
    default: 'Creative Engineering Enterprises | CEE',
    template: '%s | CEE',
  },
  description:
    'Creative Engineering Enterprises Pvt Ltd. One Dynasty. Five power houses. Talent, growth, commerce and AI built to further human potential.',
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
    siteName: 'Creative Engineering Enterprises',
    title: 'Creative Engineering Enterprises | CEE',
    description:
      'One Dynasty. Five power houses. Built to further human potential.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Engineering Enterprises | CEE',
    description:
      'One Dynasty. Five power houses. Built to further human potential.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
        <RotatePrompt />
        <LenisProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
