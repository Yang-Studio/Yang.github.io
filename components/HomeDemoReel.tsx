'use client'

import { useLanguage } from '@/components/LanguageProvider'

const DEMO_REEL_SRC = 'https://drive.google.com/file/d/1ryw62VxWvYuPKN1Mn4NserM1mRhGaGiC/preview'

export default function HomeDemoReel() {
  const { t } = useLanguage()

  return (
    <section className="home-section mb-20 space-y-6">
      <div>
        <span className="rounded-full bg-mist/60 px-4 py-1 text-lg uppercase tracking-[0.45em] text-slate/70">
          {t('Demo Reel')}
        </span>
      </div>
      <div className="overflow-hidden rounded-[36px] border border-white/40 bg-white/70 shadow-soft">
        <div className="aspect-video">
          <iframe
            src={DEMO_REEL_SRC}
            title={t('Demo Reel')}
            className="h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
