'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import SplitType from 'split-type'
import Link from 'next/link'
import { gsap } from '@/lib/motion'
import { useLanguage } from '@/components/LanguageProvider'

const HERO_PILLS = ['Game Design', 'UI/UX Design', 'Photographer']

const HERO_STATS = [
  { label: 'Playtest observations', value: '30+' },
  { label: 'Demo shipped', value: '10' },
  { label: 'Projects in progress', value: '4' },
]

const HERO_GALLERY = [
  { src: 'https://drive.google.com/thumbnail?id=15LqVQCsOw_E80VFA-82sT1C8w-BO8uid&sz=w2000', alt: 'Bubono Bumperland' },
  { src: 'https://drive.google.com/thumbnail?id=1rM2DaDsjBCWoBnQQHyHr1QwCFBAgr0Pv&sz=w2000', alt: 'ShanHe' },
  { src: 'https://drive.google.com/thumbnail?id=1v86EXKi8t6SSmLyGXKRfPfuIkhMjn0tm&sz=w2000', alt: 'Ink' },
]

export default function Hero() {
  const { t } = useLanguage()
  useEffect(() => {
    const split = new SplitType('.hero-line', { types: 'words' })
    const ctx = gsap.context(() => {
      gsap.set(split.words, { opacity: 0, yPercent: 120 })
      gsap.set('.hero-kicker', { opacity: 0, y: -16 })
      gsap.set('.hero-pills span', { opacity: 0, y: 12 })
      gsap.set('.hero-stats > div', { opacity: 0, y: 24 })
      gsap.set('.hero-gallery', { opacity: 0, x: 60, rotate: 4 })
      gsap.set('.hero-gallery-img', { opacity: 0, y: 30 })

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-inner', { opacity: 0, y: 60, duration: 0.8 })
        .to('.hero-kicker', { opacity: 1, y: 0, duration: 0.5 }, '-=0.55')
        .to(split.words, { opacity: 1, yPercent: 0, stagger: 0.06, duration: 0.7 }, '-=0.35')
        .from('.hero-subline', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .to('.hero-pills span', { opacity: 1, y: 0, stagger: 0.08, duration: 0.45 }, '-=0.45')
        .from('.hero-cta', { opacity: 0, y: 24, duration: 0.6 }, '-=0.4')
        .to('.hero-stats > div', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.35')
        .to('.hero-gallery', { opacity: 1, x: 0, rotate: 0, duration: 0.8 }, '-=0.5')
        .to(
          '.hero-gallery-img',
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out' },
          '-=0.55',
        )

      gsap.to('.blob', {
        yPercent: -30,
        scrollTrigger: {
          trigger: '.hero',
          scrub: true,
        },
      })

      gsap.to('.blob', {
        y: '-5%',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 3.2,
      })

      gsap.to('.hero-gallery', {
        y: '-3%',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 5,
      })
    })

    return () => {
      ctx.revert()
      split.revert()
    }
  }, [])

  return (
    <section className="hero relative isolate -mt-10 flex w-full flex-col justify-center overflow-hidden px-6 pt-0 pb-20 md:-mt-16 md:px-10 md:pt-0 lg:-mt-20 lg:px-16 lg:pb-24">
      <div className="blob pointer-events-none absolute top-10 right-[12%] h-[36vw] w-[36vw] rounded-full bg-coral/35 blur-3xl md:top-16 lg:top-20" />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 py-20 md:px-8 lg:flex-row lg:justify-center">
        <div className="hero-inner relative flex max-w-3xl flex-col items-center justify-center gap-7 text-center lg:min-h-[72vh]">
          <span className="hero-kicker inline-block rounded-full bg-mist/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-slate/80 mx-auto">
            {t('Digital Atelier')}
          </span>
          <h1 className="hero-line mx-auto font-display text-5xl font-bold leading-tight text-center whitespace-pre-line md:text-6xl">
            {t("Hi, I'm Yang -- I design and code worlds that feel alive.")}
          </h1>
          <p className="hero-subline mx-auto max-w-2xl text-lg text-slate/80">
            {t(
              'A personal studio exploring the space where logic meets emotion. I prototype tactile interfaces, adaptive AI, and coral-hued worlds you can feel.',
            )}
          </p>
          <div className="hero-pills flex flex-wrap justify-center gap-3">
            {HERO_PILLS.map((pill) => (
              <span key={pill} className="rounded-full bg-sand/80 px-4 py-2 text-sm text-slate shadow-soft">
                {t(pill)}
              </span>
            ))}
          </div>
          <div className="hero-cta mt-2 flex justify-center gap-4">
            <Link
              href="/projects"
              className="focus-ring rounded-md bg-coral px-5 py-3 text-white shadow-soft transition hover:bg-sage"
            >
              {t('View Projects')}
            </Link>
            <Link
              href="/about"
              className="focus-ring rounded-md bg-mist/70 px-5 py-3 shadow-soft transition hover:bg-mist"
            >
              {t('About Me')}
            </Link>
          </div>
          <div className="hero-stats mx-auto grid w-full max-w-3xl gap-4 pt-6 text-slate/70 sm:grid-cols-3">
            {HERO_STATS.map(({ label, value }) => (
              <div key={label} className="glass rounded-xl border border-white/30 p-4 shadow-soft">
                <p className="text-xs uppercase tracking-[0.35em]">{t(label)}</p>
                <p className="font-display text-2xl text-slate">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-gallery relative flex flex-1 justify-center">
          <div className="relative w-full max-w-md lg:mt-16">
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-3xl bg-coral/30 blur-2xl" />
            <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-3xl bg-mist/30 blur-2xl" />
            <div className="grid gap-4">
              {HERO_GALLERY.map(({ src, alt }) => (
                <div key={src} className="hero-gallery-img overflow-hidden rounded-[28px] border border-white/40 shadow-soft">
                  <Image src={src} alt={alt} width={720} height={480} className="h-full w-full object-cover" priority />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-slate/70">
        <span className="sr-only">Scroll down</span>
        <div className="scroll-indicator-track flex h-16 w-10 items-start justify-center rounded-full border border-slate/30">
          <span className="scroll-indicator-dot mt-2 block h-2 w-2 rounded-full bg-slate/70" />
        </div>
        <span className="text-[0.65rem] uppercase tracking-[0.6em]">Scroll</span>
      </div>
    </section>
  )
}
