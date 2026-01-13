import type { ReactNode } from 'react'

type Props = {
  icon?: ReactNode
  label: string
}

export default function IconTag({ icon, label }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-mist/70 px-3 py-1 text-sm text-slate">
      {icon}
      {label}
    </span>
  )
}
