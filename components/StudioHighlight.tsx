'use client'

import Link from 'next/link'
import { Compass, Waves, Heart } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'

const FEATURES = [
  {
    title: 'Narrative Design',
    description: 'Story-led product narratives that guide every decision.',
    icon: Compass,
  },
  {
    title: 'UI/UX Audits',
    description: 'UI/UX audits to spot gaps in flow, accessibility, and feel.',
    icon: Waves,
  },
  {
    title: 'Agile Development',
    description: 'Agile development loops to ship fast while staying adaptive.',
    icon: Heart,
  },
]

export default function StudioHighlight() {
  const { t } = useLanguage()
  return (
    <section className="home-section relative mt-32 overflow-hidden rounded-[44px] p-12 shadow-soft">
      <div>
        <span className="rounded-full bg-mist/60 px-4 py-2 text-xs uppercase tracking-[0.45em] text-sage">
          {t('Digital Atelier')}
        </span>
        <h2 className="mt-4 font-display text-4xl text-slate">{t('Contact me')}</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {FEATURES.map(({ title, description, icon: Icon }) => (
          <article key={title} className="glass rounded-3xl border border-white/30 p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand/70 shadow-soft">
              <Icon className="text-sage" size={20} />
            </div>
            <h3 className="mt-5 font-display text-xl text-slate">{t(title)}</h3>
            <p className="mt-2 text-slate/80">{t(description)}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-dashed border-coral/40 bg-white/40 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-coral">{t("Let's collaborate")}</p>
          <p className="mt-2 max-w-xl text-slate/80">
            {t(
              "If you're hiring a designer who excels at level structure and pacing, please explore my projects and design process.",
            )}
          </p>
        </div>
        <Link
          href="/about#connect"
          className="focus-ring rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sage"
        >
          {t('Explore social channels')}
        </Link>
      </div>
    </section>
  )
}
