'use client'

import { useLanguage } from '@/components/LanguageProvider'
type Props = {
  kicker: string
  title: string
  description?: string
}

export default function PageHero({ kicker, title, description }: Props) {
  const { t } = useLanguage()
  return (
    <header className="mt-16 space-y-4">
      <span className="font-display text-sm uppercase tracking-[0.2em] text-coral">{t(kicker)}</span>
      <h1 className="font-display text-4xl text-slate md:text-5xl">{t(title)}</h1>
      {description ? <p className="max-w-2xl text-lg text-slate/80">{t(description)}</p> : null}
    </header>
  )
}
