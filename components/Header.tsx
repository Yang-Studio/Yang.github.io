'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const isShanhe = pathname?.startsWith('/projects/shanhe')

  const navLinkClass = `focus-ring relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.45em] transition duration-300 hover:-translate-y-1 after:absolute after:left-1/2 after:top-full after:h-[2px] after:w-10 after:-translate-x-1/2 after:translate-y-[6px] after:origin-center after:scale-x-50 after:rounded-full after:bg-coral after:opacity-0 after:transition after:duration-300 hover:after:opacity-100 hover:after:scale-x-100 after:content-[""] ${isShanhe ? 'text-white' : 'text-slate/90'}`

  const navShellClass = isShanhe
    ? 'border-white/15 bg-neutral-900/85 text-white shadow-lg shadow-black/30'
    : 'border-white/40 bg-white/80 text-slate/90 shadow-soft hover:shadow-glow'

  const brandClass = isShanhe
    ? 'border-white/20 bg-neutral-800 text-white hover:bg-neutral-700 shadow-soft'
    : 'border-white/70 bg-sand/70 text-slate hover:bg-white/80 shadow-soft'

  return (
    <header className="sticky top-0 z-[200]">
      <div className="relative z-[210] pt-3">
        <nav
          className={`relative mx-auto flex max-w-5xl items-center justify-center gap-12 rounded-full px-6 py-4 backdrop-blur-xl transition duration-300 ${navShellClass}`}
        >
          <div className="flex items-center gap-5 pr-5">
            <Link className={navLinkClass} href="/">
              {t('Home')}
            </Link>
            <Link className={navLinkClass} href="/projects">
              {t('Projects')}
            </Link>
          </div>
          <Link
            href="/"
            className={`focus-ring relative flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.55em] transition duration-300 hover:scale-105 ${brandClass}`}
          >
            Yang Studio
          </Link>
          <div className="flex items-center gap-5 pl-5">
            <Link className={navLinkClass} href="/about">
              {t('About')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
