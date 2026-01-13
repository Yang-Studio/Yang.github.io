'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { createLenis } from '@/lib/lenis'

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isDarkProject =
    pathname?.startsWith('/projects/shanhe') || pathname?.startsWith('/projects/bubono-bumperland')

  useEffect(() => {
    const lenis = createLenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  // Use a dark canvas for Shanhe case study; keep the warm atelier background elsewhere.
  const shellClass = isDarkProject ? 'min-h-dvh bg-neutral-950' : 'min-h-dvh bg-atelier'

  return <div className={shellClass}>{children}</div>
}
