import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SiteShell from '@/components/SiteShell'
import { LanguageProvider } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Yang Studio -- Game Designer & Creative Coder',
  description: 'A warm, asymmetric digital atelier of design + code.',
  openGraph: {
    title: 'Yang Studio',
    description: 'A warm, asymmetric digital atelier of design + code.',
    images: ['/og/yang-studio.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} text-slate selection:bg-coral/40 selection:text-slate`}
      >
        <LanguageProvider>
          <SiteShell>
            <Header />
            <main className="w-full">{children}</main>
            <Footer />
            <LanguageToggle />
          </SiteShell>
        </LanguageProvider>
      </body>
    </html>
  )
}
