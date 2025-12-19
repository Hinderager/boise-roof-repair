import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-roof-repair.com'),
  title: {
    default: 'Roof Repair Boise | Emergency Leak & Shingle Repair Idaho',
    template: '%s | Boise Roof Repair Pros',
  },
  description: 'Professional roof repair services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Leak repair, shingle replacement, storm damage, emergency repairs. Licensed & insured. 24/7 service. Call (208) 505-9352.',
  keywords: [
    'roof repair Boise',
    'roof leak repair Boise Idaho',
    'shingle repair Meridian',
    'emergency roof repair Nampa',
    'storm damage repair near me',
    'roof contractor Caldwell',
    'flat roof repair Eagle Idaho',
    'gutter repair Treasure Valley',
    '24 hour roof repair',
    'roofing contractor Boise',
    'roof leak fix Idaho',
    'emergency roof service',
  ],
  authors: [{ name: 'Boise Roof Repair Pros' }],
  openGraph: {
    title: 'Roof Repair Services | Boise, Meridian, Nampa Idaho',
    description: 'Professional roof repair services in the Treasure Valley. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://boise-roof-repair.com',
    siteName: 'Boise Roof Repair Pros',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
