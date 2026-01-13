'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-[300] flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
      aria-label="Toggle language"
    >
      {language === 'en' ? '中文' : 'EN'}
      <span className="text-[0.7em] text-slate/60">⇆</span>
    </button>
  )
}
