import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/content/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl shadow-soft transition hover:shadow-glow"
    >
      <Image
        src={project.cover}
        alt={project.title}
        width={800}
        height={600}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate/80 via-slate/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 right-0 m-5 translate-y-4 rounded-lg bg-sand/90 px-4 py-3 text-right text-slate shadow-soft transition duration-300 group-hover:translate-y-0">
        <p className="font-display text-lg">{project.title}</p>
        <p className="text-sm text-slate/80">{project.blurb}</p>
      </div>
    </Link>
  )
}
