'use client'

import { useEffect } from 'react'
import { Gamepad2, Code2, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { float } from '@/lib/motion'

const SKILLS = [
  {
    title: 'Game Design',
    description: 'Systems-driven worlds, emotionally tuned mechanics, and playtesting rituals that invite empathy.',
    icon: Gamepad2,
  },
  {
    title: 'Programming',
    description: 'Unreal + Blueprints, Unity DOTS, Houdini pipelines, and bespoke tools that keep teams flowing.',
    icon: Code2,
  },
  {
    title: 'AI & Systems',
    description: 'Telemetry-driven AI, systemic storytelling, and simulations that honor the unexpected.',
    icon: Sparkles,
  },
]

export default function CoreSkills() {
  const { t } = useLanguage()
  useEffect(() => {
    float('.float-card')
  }, [])

  return (
    <section className="home-section mt-40 mb-20 space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="rounded-full bg-mist/60 px-4 py-1 text-lg uppercase tracking-[0.45em] text-slate/70">
            {t('Core practice')}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SKILLS.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="float-card glass relative overflow-hidden rounded-3xl border border-white/40 bg-sand/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mist/70 shadow-soft">
              <Icon className="text-sage" size={22} />
            </div>
            <h2 className="font-display text-2xl text-slate">{t(title)}</h2>
            <p className="mt-3 text-slate/80">{t(description)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
