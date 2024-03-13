import { Inter, Lexend } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Kembara Nusa',
    default: 'Kembara Nusa - Mengembara nusantara',
  },
  description:
    'Mengembara nusantara dan memberikan pelayanan kesehatan gigi di daerah 3T (tertinggal, terdepan, dan terluar) di Indonesia.',
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
      </body>
    </html>
  )
}
