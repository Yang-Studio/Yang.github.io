import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About -- Yang Studio',
  description: 'Yang blends game design, creative coding, and emotion-forward interaction.',
}

export default function AboutPage() {
  return <AboutClient />
}
