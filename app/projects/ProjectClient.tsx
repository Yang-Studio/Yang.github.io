'use client'

import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ProjectParallaxBanner from '@/components/ProjectParallaxBanner'
import { useLanguage } from '@/components/LanguageProvider'
import { projectTranslations } from '@/content/projectTranslations'
import { projectAssets } from '@/content/projectAssets'
import type { Project } from '@/content/projects'

export default function ProjectClient({ project }: { project: Project }) {
  const { t, language } = useLanguage()
  const translation = language === 'zh' ? projectTranslations[project.slug] : undefined
  const isVideo = project.results.media?.endsWith('.mp4')
  const gallery = projectAssets[project.slug] ?? []
  const reelSrc = project.reel ?? (project.results.media?.endsWith('.mp4') ? project.results.media : undefined)
  const reelIsDrivePreview = Boolean(reelSrc) && reelSrc.includes('drive.google.com/file/d/') && reelSrc.includes('/preview')
  const reelIsVideo = Boolean(reelSrc && !reelIsDrivePreview && (reelSrc.endsWith('.mp4') || project.reel))
  const downloadHref =
    project.download ??
    `mailto:yangliu.gmdev@gmail.com?subject=${encodeURIComponent(`${project.title} Demo Request`)}`
  const isDownloadFile = downloadHref.startsWith('/') || downloadHref.startsWith('./')

  return (
    <div className="px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px] space-y-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PageHero
            kicker="Case Study"
            title={translation?.title ?? project.title}
            description={translation?.blurb ?? project.blurb}
          />
          {!project.hideDownload && <DownloadButton href={downloadHref} download={isDownloadFile} />}
        </div>
        <ProjectParallaxBanner
          src={project.moneyshot ?? project.banner ?? project.cover}
          alt={translation?.title ?? project.title}
          title={translation?.title ?? project.title}
        />

        <section className="grid gap-6 rounded-2xl bg-mist/40 p-8 shadow-soft md:grid-cols-3">
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-sage">{t('Goal')}</h3>
            <p className="mt-3 text-slate/80">{translation?.overviewGoal ?? project.overview.goal}</p>
          </div>
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-sage">{t('Team')}</h3>
            <p className="mt-3 text-slate/80">{translation?.overviewTeam ?? project.overview.team}</p>
          </div>
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.3em] text-sage">{t('Timeline')}</h3>
            <p className="mt-3 text-slate/80">{translation?.overviewTimeline ?? project.overview.timeline}</p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {project.process.map((step, index) => {
            const translatedStep = translation?.process?.[index]
            return (
              <article key={step.title} className="glass rounded-2xl p-6 shadow-soft">
                <h3 className="font-display text-2xl text-slate">{translatedStep?.title ?? t(step.title)}</h3>
                <p className="mt-3 text-slate/80">{translatedStep?.body ?? t(step.body)}</p>
              </article>
            )
          })}
        </section>

        {project.technical.length > 0 && (
          <section className="space-y-8">
            <h2 className="font-display text-3xl text-slate">{t('Technical Breakdown')}</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.technical.map((item, index) => {
                const translatedItem = translation?.technical?.[index]
                return (
                  <article key={item.title} className="overflow-hidden rounded-2xl bg-sand/90 shadow-soft">
                    <Image
                      src={item.media}
                      alt={translatedItem?.title ?? item.title}
                      width={1000}
                      height={700}
                      className="h-64 w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-display text-xl text-slate">{translatedItem?.title ?? t(item.title)}</h3>
                      <p className="mt-3 text-slate/80">{translatedItem?.description ?? t(item.description)}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )}

        {reelSrc && (
          <section className="space-y-4">
            <h2 className="font-display text-3xl text-slate">{t('Demo Reel')}</h2>
            <div className="overflow-hidden rounded-2xl border border-white/30 bg-sand/70 shadow-soft">
              {reelIsDrivePreview ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={reelSrc}
                    title={`${project.title} demo reel`}
                    className="h-full w-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              ) : reelIsVideo ? (
                <video className="h-full w-full" controls>
                  <source src={reelSrc} type="video/mp4" />
                </video>
              ) : (
                <Image src={reelSrc} alt={`${project.title} demo reel`} width={1600} height={900} className="h-full w-full object-cover" />
              )}
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="space-y-6">
            <h2 className="font-display text-3xl text-slate">{t('Gallery')}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-soft">
                  <Image src={src} alt={`${project.title} gallery`} width={800} height={600} className="h-48 w-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.results.summary || project.results.highlights.length > 0 || project.results.media ? (
          <section className="rounded-2xl bg-slate text-sand shadow-soft">
            <div className="grid gap-8 p-8 md:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="font-display text-3xl">{t('Results & Reflection')}</h2>
                {project.results.summary && (
                  <p className="mt-4 text-sand/80">{translation?.results?.summary ?? t(project.results.summary)}</p>
                )}
                {project.results.highlights.length > 0 && (
                  <ul className="mt-6 space-y-2 text-sand/70">
                    {project.results.highlights.map((highlight, index) => {
                      const translatedHighlight = translation?.results?.highlights?.[index]
                      return (
                        <li key={highlight} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-coral" />
                          {translatedHighlight ?? t(highlight)}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
              {project.results.media && (
                <div className="overflow-hidden rounded-xl border border-sand/10 bg-sand/10 p-4">
                  {isVideo ? (
                    <video className="h-full w-full rounded-lg" controls>
                      <source src={project.results.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.results.media}
                      alt={`${project.title} reflection`}
                      width={800}
                      height={600}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  )}
                </div>
              )}
            </div>
          </section>
        ) : null}

        <section className="rounded-2xl bg-white p-8 text-slate shadow-soft">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <div>
              <h3 className="font-display text-2xl text-slate">{t('View More Projects')}</h3>
              <p className="text-slate/70">{t("Explore the rest of the studio's worlds.")}</p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              {!project.hideDownload && <DownloadButton href={downloadHref} download={isDownloadFile} dark />}
              <Link
                href="/projects"
                className="focus-ring rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sage"
              >
                {t('Back to Projects')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function DownloadButton({ href, download, dark }: { href: string; download?: boolean; dark?: boolean }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const baseClass =
    'focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition'
  const styleClass = dark
    ? 'bg-slate text-white hover:bg-sage'
    : 'bg-slate text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow'
  const content = 'Download Demo'

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} ${styleClass}`}
        aria-label="Download demo"
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} download={download} className={`${baseClass} ${styleClass}`} aria-label="Download demo">
      {content}
    </Link>
  )
}
