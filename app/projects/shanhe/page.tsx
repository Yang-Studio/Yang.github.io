import type { Metadata } from 'next'
import ShanheClient from './ShanheClient'
import { projects } from '@/content/projects'

const project = projects.find((p) => p.slug === 'shanhe')!

export const metadata: Metadata = {
  title: `${project.title} -- Yang Studio`,
  description: project.blurb,
  openGraph: {
    title: project.title,
    description: project.blurb,
    images: [project.cover],
  },
}

export default function Page() {
  return <ShanheClient />
}
