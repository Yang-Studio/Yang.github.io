'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/content/projects'
import { projectTranslations } from '@/content/projectTranslations'
import { useLanguage } from '@/components/LanguageProvider'

export default function ProjectsArchive() {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const clampedIndex = Math.min(activeIndex, Math.max(projects.length - 1, 0))
  const activeProject = projects[clampedIndex] ?? projects[0]
  const translation = language === 'zh' ? projectTranslations[activeProject.slug] : undefined
  const columns = 3
  const rows = Array.from({ length: Math.ceil(projects.length / columns) }, (_, row) =>
    projects.slice(row * columns, row * columns + columns),
  )
  const activeRowIndex = Math.floor(clampedIndex / columns)
  const activeHero = activeProject.moneyshot ?? activeProject.banner ?? activeProject.cover

  return (
    <section className="projects-archive relative mx-auto mt-16 w-full max-w-[1200px] rounded-[48px] border border-white/40 bg-white/65 p-10 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="rounded-full bg-mist/60 px-4 py-1 text-xs uppercase tracking-[0.45em] text-slate/70">
            {t('Explore the work')}
          </span>
          <h2 className="mt-3 font-display text-4xl text-slate">{t('Projects')}</h2>
        </div>
        <p className="text-sm uppercase tracking-[0.4em] text-slate/50">{projects.length} projects</p>
      </div>

      <div className="mt-10 space-y-8">
        {rows.map((rowProjects, rowIndex) => (
          <div key={rowIndex} className="space-y-6">
            {rowIndex === activeRowIndex && (
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <div className="overflow-hidden rounded-[36px] border border-white/50 shadow-soft">
                  <Image
                    src={activeHero}
                    alt={activeProject.title}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                  />
                </div>

                <article className="flex flex-col gap-5 rounded-[32px] bg-white/80 p-8 shadow-soft">
                  <span className="text-xs uppercase tracking-[0.45em] text-coral">{t(activeProject.tag)}</span>
                  <h3 className="font-display text-3xl text-slate">
                    {translation?.title ?? t(activeProject.title)}
                  </h3>
                  <p className="text-slate/80">{translation?.blurb ?? t(activeProject.blurb)}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-mist/70 px-3 py-1 text-sm text-slate">
                      {translation?.role ?? t(activeProject.role)}
                    </span>
                    <span className="rounded-full bg-mist/70 px-3 py-1 text-sm text-slate">{t(activeProject.tools)}</span>
                    <span className="rounded-full bg-mist/70 px-3 py-1 text-sm text-slate">{activeProject.year}</span>
                  </div>

                  <div className="rounded-3xl border border-dashed border-slate/20 bg-white/80 p-4 text-sm text-slate/70">
                    <p>{translation?.overviewGoal ?? t(activeProject.overview.goal)}</p>
                  </div>

                  <Link
                    href={`/projects/${activeProject.slug}`}
                    className="focus-ring mt-auto w-max rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sage"
                  >
                    {t('View full case study')}
                  </Link>
                </article>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rowProjects.map((project, indexInRow) => {
                const projectTranslation = language === 'zh' ? projectTranslations[project.slug] : undefined
                const globalIndex = rowIndex * columns + indexInRow
                return (
                  <article
                    key={project.slug}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(globalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActiveIndex(globalIndex)
                      }
                    }}
                    className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-1 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
                      globalIndex === clampedIndex ? 'ring-2 ring-coral' : 'ring-0'
                    }`}
                    aria-pressed={globalIndex === clampedIndex}
                  >
                    <Image
                      src={project.logo ?? project.cover}
                      alt={project.title}
                      width={640}
                      height={420}
                      className="h-48 w-full rounded-[26px] object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.4em] text-slate/60">{t(project.tag)}</p>
                      <p className="mt-2 font-display text-lg text-slate">
                        {language === 'zh' && projectTranslations[project.slug]?.title
                          ? projectTranslations[project.slug].title
                          : t(project.title)}
                      </p>
                      <p className="mt-1 text-sm text-slate/70">{projectTranslation?.role ?? t(project.role)}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
