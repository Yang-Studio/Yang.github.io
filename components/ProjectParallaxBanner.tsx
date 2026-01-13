'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/motion'

type Props = {
  src: string
  alt: string
  title: string
}

export default function ProjectParallaxBanner({ src, alt, title }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} className="relative mb-12 overflow-hidden rounded-2xl shadow-soft">
      <div ref={imageRef}>
        <Image src={src} alt={alt} width={1600} height={900} className="h-[480px] w-full object-cover" priority />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate/40 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 rounded-lg bg-sand/80 px-4 py-2 text-slate shadow-soft">
        <span className="font-display text-sm uppercase tracking-[0.25em]">Case Study</span>
        <p className="font-display text-2xl">{title}</p>
      </div>
    </div>
  )
}
