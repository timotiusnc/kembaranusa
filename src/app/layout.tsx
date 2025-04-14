import { Inter, Lexend } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import FacebookPixel from '@/components/FacebookPixel'

export const metadata: Metadata = {
  title: {
    template: '%s - Kembara Nusa',
    default: 'Kembara Nusa - Mengembara Nusantara',
  },
  openGraph: {
    images: [
      {
        url: 'https://kembaranusa.org/opengraph-image.png',
        type: 'image/png',
        width: 500,
        height: 500,
      },
    ],
  },
  description:
    'Mengembara nusantara dan memberikan pelayanan kesehatan gigi di daerah 3T (tertinggal, terdepan, dan terluar) di Indonesia.',
  verification: {
    other: {
      'facebook-domain-verification': 'gkjqu4va5i00kqt2487wmutscxkegh',
    },
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
        <FacebookPixel />
      </body>
    </html>
  )
}
