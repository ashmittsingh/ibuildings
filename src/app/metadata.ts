import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'iBuildings.in | Precision Engineering, Preserved Legacy',
    template: '%s | iBuildings.in'
  },
  description: 'India\'s premier structural engineering, audit, and heritage conservation firm. Engineering resilience for India\'s built future.',
  keywords: ['structural engineering', 'heritage conservation', 'structural audit', 'retrofitting', 'India', 'construction'],
  authors: [{ name: 'iBuildings.in' }],
  creator: 'iBuildings.in',
  publisher: 'iBuildings.in',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ibuildings.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ibuildings.in',
    title: 'iBuildings.in | Precision Engineering, Preserved Legacy',
    description: 'Engineering resilience for India\'s built future',
    siteName: 'iBuildings.in',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iBuildings.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iBuildings.in | Precision Engineering, Preserved Legacy',
    description: 'Engineering resilience for India\'s built future',
    images: ['/images/twitter-image.jpg'],
    creator: '@ibuildings_in',
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