'use client'

import Image from 'next/image'
import Link from 'next/link'

const TIMELINE = [
  { id: 'calm', label: 'Calm', media: '/assets/ITGM336/ITGM336.png' },
  { id: 'tension', label: 'Tension', media: '/assets/ITGM336/ITGM336.png' },
  { id: 'climax', label: 'Climax', media: '/assets/ITGM336/ITGM336.png' },
  { id: 'qte', label: 'QTE', media: '/assets/ITGM336/ITGM336.png' },
  { id: 'cooldown', label: 'Cooldown', media: '/assets/ITGM336/ITGM336.png' },
  { id: 'escape', label: 'Escape', media: '/assets/ITGM336/ITGM336.png' },
]

const GRID_ITEMS = [
  { title: 'Puzzle', copy: 'Lab terminals and valves drive route choices.' },
  { title: 'QTE', copy: 'Timed interactions spike the heartbeat mid-loop.' },
  { title: 'Stealth AI', copy: 'Guards patrol using perception cones and audio cues.' },
  { title: 'Spaces', copy: 'Tight corridors into decontamination rooms for pacing.' },
  { title: 'Tasks', copy: 'Power reroutes, specimen grabs, and timed unlocks.' },
  { title: 'Systems', copy: 'Lighting and SFX tied to the calm→tension→escape curve.' },
]

const DEVLOG = [
  'GDD structured around calm→tension→climax→QTE→cooldown→puzzle→escape.',
  'Built stealth AI with simplified perception for quick iteration.',
  'QTE timing tuned alongside SFX to avoid frustration spikes.',
  'Lighting swaps from amber to teal to red as alarms escalate.',
]

const DEV_IMAGES = ['/assets/ITGM336/ITGM336.png', '/assets/ITGM336/ITGM336.png']

export default function BioLabClient() {
  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-16 px-6 md:px-10 lg:px-16">
      <section
        className="relative isolate flex min-h-[70vh] items-end overflow-hidden rounded-[40px] bg-slate/90 p-10 text-white"
        style={{ backgroundImage: "url('/assets/ITGM336/ITGM336.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex w-full justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-coral">Bio-Lab</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Escape the lab on an emotion curve</h1>
          </div>
          <div className="flex flex-col gap-3">
            <CTA href="#" label="Play Trailer" />
            <CTA href="/projects/bio-lab" label="View Demo" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl text-slate">Emotion Timeline</h2>
          <span className="text-xs uppercase tracking-[0.35em] text-slate/60">Drag to explore</span>
        </div>
        <div className="timeline-track relative overflow-x-auto rounded-3xl border border-white/40 bg-white/70 p-4 shadow-soft">
          <div className="flex min-w-[720px] items-stretch gap-4">
            {TIMELINE.map((node) => (
              <div key={node.id} className="flex-1 rounded-2xl bg-white/80 p-4 text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-slate/70">{node.label}</p>
                <p className="mt-2 text-sm text-slate/60">Tap to preview</p>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/50">
            <Image src={TIMELINE[0].media} alt="Bio Lab timeline" width={1200} height={600} className="h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl text-slate">Core Loop</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GRID_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/40 bg-white/75 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            >
              <h3 className="font-display text-xl text-slate">{item.title}</h3>
              <p className="mt-2 text-slate/80">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        <div className="space-y-3 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <h2 className="font-display text-2xl text-slate">Devlog & Process</h2>
          <ul className="space-y-2 text-slate/80">
            {DEVLOG.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-coral" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {DEV_IMAGES.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-white/40 bg-white/70 shadow-soft">
              <Image src={src} alt="Dev process" width={800} height={600} className="h-44 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-8 text-slate shadow-soft">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-display text-2xl text-slate">View More Projects</h3>
            <p className="text-slate/70">Explore the rest of the studio&apos;s worlds.</p>
          </div>
          <Link
            href="/projects"
            className="focus-ring rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sage"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  )
}

function CTA({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-full bg-white/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate shadow-soft backdrop-blur transition hover:-translate-y-0.5"
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-coral/30 opacity-0 transition duration-500 group-hover:scale-150 group-hover:opacity-100" />
      <span className="relative">{label}</span>
    </Link>
  )
}
