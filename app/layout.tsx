import type { Metadata } from 'next'
import { Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import DynamicBackground from '@/components/DynamicBackground'
import CustomCursor from '@/components/CustomCursor'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'André Luiz Bunhak - Portfolio',
  description: 'Web Designer & Content Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <DynamicBackground
          particleCount={20}
          particleColor="rgba(185, 28, 28, 0.35)"
          connectionColor="rgba(120, 53, 15, 0.18)"
          connectionDistance={120}
          interactive={false}
          darkMode={true}
        />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
