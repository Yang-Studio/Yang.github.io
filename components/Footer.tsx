'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isDarkProject =
    pathname?.startsWith('/projects/shanhe') || pathname?.startsWith('/projects/bubono-bumperland')

  const shellClass = isDarkProject ? 'bg-neutral-950 text-neutral-200 border-t border-white/10' : 'bg-slate text-sand'
  const linkClass = isDarkProject
    ? 'underline decoration-blue-400 decoration-2 underline-offset-4 hover:text-white'
    : 'underline decoration-coral decoration-2 underline-offset-4'

  return (
    <footer className={`mt-24 ${shellClass}`}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-10 md:px-10 lg:px-16">
        <p>Copyright {new Date().getFullYear()} Yang Liu</p>
        <a className={linkClass} href="mailto:yangliu.gmdev@gmail.com">
          yangliu.gmdev@gmail.com
        </a>
      </div>
    </footer>
  )
}
