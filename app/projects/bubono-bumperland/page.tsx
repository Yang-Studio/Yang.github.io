import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import BubonoBumperlandClient from './BubonoBumperlandClient'

const project = projects.find((p) => p.slug === 'bubono-bumperland')!

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
  return <BubonoBumperlandClient />
}
