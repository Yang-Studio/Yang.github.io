import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProjectsArchive from '@/components/ProjectsArchive'

export const metadata: Metadata = {
  title: 'Projects -- Yang Studio',
  description: 'Case studies exploring game design, technical art, and prototypes from Yang Studio.',
}

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <PageHero
          kicker=""
          title=""
          description=""
        />
      </div>
      <ProjectsArchive />
    </div>
  )
}
