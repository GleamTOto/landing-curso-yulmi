import type { Metadata, Viewport } from 'next'
import { Lato, Playfair_Display, Pinyon_Script } from 'next/font/google'

import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
})

export const metadata: Metadata = {
  title: 'Domina tus redes desde cero | Curso de Marketing Digital',
  description:
    'Curso digital para emprendedores que quieren aprender a manejar sus redes sociales con estrategia y propósito. Facebook, Instagram, WhatsApp Business y Canva.',
}

export const viewport: Viewport = {
  themeColor: '#D469A3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${playfair.variable} ${pinyonScript.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
