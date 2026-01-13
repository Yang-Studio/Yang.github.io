'use client'

import { useEffect } from 'react'
import { gsap } from '@/lib/motion'

export default function HomeMotion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.home-section').forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      if (typeof window !== 'undefined') {
        const originalBg = getComputedStyle(document.body).backgroundColor
        gsap.fromTo(
          'body',
          { backgroundColor: originalBg },
          {
            backgroundColor: '#bbd4ce',
            scrollTrigger: {
              trigger: '.featured-section',
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return null
}
