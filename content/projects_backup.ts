export type ProjectTag = 'Game' | 'Technical' | 'Art' | 'Prototype'

export type ProjectProcess = {
  title: string
  body: string
}

export type ProjectTechnical = {
  title: string
  description: string
  media: string
}

export type Project = {
  slug: string
  tag: ProjectTag
  title: string
  blurb: string
  year: string
  role: string
  tools: string
  cover: string
  banner: string
  logo?: string
  moneyshot?: string
  download?: string
  overview: {
    goal: string
    team: string
    timeline: string
  }
  process: ProjectProcess[]
  technical: ProjectTechnical[]
  results: {
    summary: string
    highlights: string[]
    media?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'shanhe',
    tag: 'Game',
    title: 'Shanhe',
    blurb: 'Wuxia side-scroller where demons and soul shards drive a mood-locked adventure.',
    year: '2025',
    role: 'Creative Director',
    tools: 'Unreal, Blueprints, FMOD',
    cover: '/assets/ITGM405/ITGM405_s3_milestone.png',
    banner: '/assets/ITGM405/ITGM405_s4_milestone.png',
    logo: '/assets/ITGM405/ITGM405_s4_milestone.png',
    moneyshot: '/assets/ITGM405/ITGM405_s3_milestone.png',
    overview: {
      goal: 'Build a calm -> pressure -> demonized -> burst -> weakened -> finale mood curve tied to corpse-soul shards.',
      team: '4 designers, 3 engineers, 1 narrative lead',
      timeline: 'Vertical slice - 16 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Keep combat rhythm aligned with mood beats instead of pure stat scaling.' },
      { title: 'Solution', body: 'Boss emotion nodes and shard clues rewrite spaces; semi-open areas connect the beats.' },
      { title: 'Result', body: 'Players feel each emotional turn; story and combat stay in sync.' },
    ],
    technical: [
      { title: 'Mood-Driven AI', description: 'State machine tied to mood nodes; animation/audio/FX swap per phase.', media: '/assets/ITGM405/ITGM405_s3_milestone.png' },
      { title: 'Shard System', description: 'Collectable shards trigger narrative and terrain changes; data-table hot reload.', media: '/assets/ITGM405/ITGM405_s4_milestone.png' },
    ],
    results: {
      summary: 'Template level that unifies narrative and combat pacing for future chapters.',
      highlights: ['Full concept story', 'Multi-phase mood curve', 'Boss pacing validated'],
      media: '/assets/ITGM405/ITGM405_s6_milestone.png',
    },
  },
  {
    slug: 'bubono-bumperland',
    tag: 'Game',
    title: "Bubono's Bumperland",
    blurb: 'Shove-based party brawler seeking tighter bosses, cohesive visuals, and punchier audio.',
    year: '2022',
    role: 'Systems Designer',
    tools: 'Unity, Photon',
    cover: '/assets/ITGM475/ITGM475.png',
    banner: '/assets/ITGM475/ITGM475.png',
    logo: '/assets/ITGM475/ITGM475.png',
    moneyshot: '/assets/ITGM475/ITGM475.png',
    download: '/assets/ITGM475/BubonosBumperland_FinalEXE.zip',
    overview: {
      goal: 'Codify light party pacing and feedback into a reusable multiplayer frame.',
      team: '5-person squad',
      timeline: 'Season of sprints',
    },
    process: [
      { title: 'Challenge', body: 'Needed more boss variety and stronger audiovisual cohesion.' },
      { title: 'Solution', body: 'Added boss modules and unified SFX/FX kit for shoves and impacts.' },
      { title: 'Result', body: 'Bumperland delivers clearer payoff and party energy.' },
    ],
    technical: [
      { title: 'Impact FX', description: 'Shared audio/visual impact kit for shoves and boss attacks.', media: '/assets/ITGM475/ITGM475.png' },
      { title: 'Multiplayer Frame', description: 'Photon-based room/state sync tuned for shove physics.', media: '/assets/ITGM475/ITGM475.png' },
    ],
    results: {
      summary: 'Party brawler version solidified with cohesive bosses and feedback.',
      highlights: ['Boss variety', 'Unified SFX/FX', 'Reusable party frame'],
    },
  },
  {
    slug: 'stairs-in-the-woods',
    tag: 'Game',
    title: 'Stairs in the Woods',
    blurb: 'Horror pacing study with forest stairs, light/shadow, and slow reveals.',
    year: '2024',
    role: 'Level Designer',
    tools: 'Unreal, FMOD',
    cover: '/assets/ITGM130/ITGM130-1.png',
    banner: '/assets/ITGM130/ITGM130-2.png',
    logo: '/assets/ITGM130/ITGM130-2.png',
    moneyshot: '/assets/ITGM130/ITGM130-1.png',
    overview: {
      goal: 'Build fear rhythm with stairs and occlusion; practice chase AI and horror soundscapes.',
      team: 'Solo build',
      timeline: 'Prototype - 3 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Keep readability while sustaining pressure.' },
      { title: 'Solution', body: 'Layered lighting and staged reveals with low-frequency ambience.' },
      { title: 'Result', body: 'Atmosphere pacing and chase AI validated; ready for more levels.' },
    ],
    technical: [
      { title: 'Chase AI', description: 'Simple chase AI with audio lures; supports difficulty curves.', media: '/assets/ITGM130/ITGM130-5.png' },
      { title: 'Lighting Beats', description: 'Volumetric lights and occlusion triggers drive reveal timing.', media: '/assets/ITGM130/ITGM130-4.png' },
    ],
    results: {
      summary: 'Complete lighting/AI/sound tension study.',
      highlights: ['Light rhythm proven', 'Chase AI prototype', 'Horror audio pass'],
    },
  },
  {
    slug: 'castle-defense',
    tag: 'Technical',
    title: 'Castle Defense',
    blurb: 'Multi-unit pathing tower defense focused on behavior trees and AI perception.',
    year: '2023',
    role: 'Gameplay Engineer',
    tools: 'Unreal, Behavior Tree',
    cover: '/assets/ITGM220/ITGM220.png',
    banner: '/assets/ITGM220/ITGM220.png',
    logo: '/assets/ITGM220/ITGM220.png',
    moneyshot: '/assets/ITGM220/ITGM220.png',
    overview: {
      goal: 'Polish unit coordination and prediction via behavior trees and AI Perception.',
      team: 'Solo R and D',
      timeline: 'R and D - 5 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Resolve multi-unit path conflicts and priority targets.' },
      { title: 'Solution', body: 'Behavior trees plus perception prediction sphere to retarget dynamically.' },
      { title: 'Result', body: 'Unit cooperation feels smoother and clearer.' },
    ],
    technical: [
      { title: 'AI Perception', description: 'Hearing/sight/touch prediction spheres drive target swaps.', media: '/assets/ITGM220/ITGM220.png' },
      { title: 'BT Coordination', description: 'Behavior tree nodes handle unit roles and cooldowns.', media: '/assets/ITGM220/ITGM220.png' },
    ],
    results: {
      summary: 'Tower-defense AI testbed ready for more complex maps.',
      highlights: ['Behavior tree templates', 'Perception practice', 'Pathing optimization'],
    },
  },
  {
    slug: 'outer-space',
    tag: 'Art',
    title: 'Outer Space',
    blurb: 'Sci-fi capsule art study: interface lighting and volumetric atmosphere.',
    year: '2023',
    role: 'Technical Artist',
    tools: 'Unreal, Blender',
    cover: '/assets/ITGM236/ITGM236.png',
    banner: '/assets/ITGM236/ITGM236.png',
    logo: '/assets/ITGM236/ITGM236.png',
    moneyshot: '/assets/ITGM236/ITGM236.png',
    overview: {
      goal: 'Practice metal reflections, interface lighting, and volumetrics.',
      team: 'Solo art study',
      timeline: 'Study - 2 weeks',
    },
    process: [
      { title: 'Lighting', body: 'Layered UI lights to sell cabin highlights.' },
      { title: 'Post', body: 'Post-process and volumetric tuning for depth.' },
      { title: 'Result', body: 'Multiple keyframes and shorts rendered.' },
    ],
    technical: [
      { title: 'Volumetric Pass', description: 'Volumetric and tone mapping presets.', media: '/assets/ITGM236/ITGM236.png' },
      { title: 'Material Study', description: 'Metal reflection and roughness test sheets.', media: '/assets/ITGM236/ITGM236.png' },
    ],
    results: {
      summary: 'Reusable lighting presets from UE post and volumetric practice.',
      highlights: ['Metal/glass library', 'Volumetric presets', 'Keyframe outputs'],
    },
  },
  {
    slug: 'bio-lab',
    tag: 'Game',
    title: 'Bio-Lab',
    blurb: 'Biolab level with puzzle, QTE, and stealth AI; full emotion curve.',
    year: '2022',
    role: 'Level Designer',
    tools: 'Unreal, FMOD',
    cover: '/assets/ITGM336/ITGM336.png',
    banner: '/assets/ITGM336/ITGM336.png',
    logo: '/assets/ITGM336/ITGM336.png',
    moneyshot: '/assets/ITGM336/ITGM336.png',
    overview: {
      goal: 'Practice calm -> tension -> climax -> QTE -> cooldown -> puzzle -> escape pacing.',
      team: 'Solo build',
      timeline: 'Prototype - 4 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Stitch multiple emotion segments without seams.' },
      { title: 'Solution', body: 'Lights and audio cues bound to emotion nodes; stealth AI powers tension beats.' },
      { title: 'Result', body: 'Emotion curve runs end-to-end and can be taught as a template.' },
    ],
    technical: [
      { title: 'Stealth AI', description: 'Simplified perception and path prediction for stealth play.', media: '/assets/ITGM336/ITGM336.png' },
      { title: 'QTE Framework', description: 'Table-driven QTE module linked to audio and video.', media: '/assets/ITGM336/ITGM336.png' },
    ],
    results: {
      summary: 'Complete emotion-curve demo; ready as a pacing template.',
      highlights: ['Emotion curve template', 'Stealth AI seed', 'QTE module'],
    },
  },
  {
    slug: 'aukadyssey',
    tag: 'Game',
    title: 'AukAdyssey',
    blurb: 'Bright cartoon platformer with layered scenes and interaction framework.',
    year: '2021',
    role: 'UI and Systems',
    tools: 'Unity, ProBuilder',
    cover: '/assets/ITGM356/ITGM356.png',
    banner: '/assets/ITGM356/ITGM356.png',
    logo: '/assets/ITGM356/ITGM356.png',
    moneyshot: '/assets/ITGM356/ITGM356.png',
    overview: {
      goal: 'Build interaction and UI framework while keeping art tone and rhythm clear.',
      team: '4-person team',
      timeline: 'Prototype - 6 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Maintain readability and pacing across layered scenes.' },
      { title: 'Solution', body: 'UI guidance bound to beat maps; iterated character feel.' },
      { title: 'Result', body: 'Stable demo with consistent tone.' },
    ],
    technical: [
      { title: 'Interaction Frame', description: 'Shared interaction framework and UI event bus.', media: '/assets/ITGM356/ITGM356.png' },
      { title: 'Level Beats', description: 'Beat-map driven markers and triggers.', media: '/assets/ITGM356/ITGM356.png' },
    ],
    results: {
      summary: 'Tone- and rhythm-aligned demo fit for teaching or showcase.',
      highlights: ['Interaction framework', 'UI and pacing alignment', 'Layered scenes'],
    },
  },
  {
    slug: 'ink',
    tag: 'Prototype',
    title: 'Ink',
    blurb: '2D abstract ink-line puzzles about spreading and connecting via algorithms.',
    year: '2020',
    role: 'Designer',
    tools: 'Processing, Custom Algorithms',
    cover: '/assets/Ink/Ink.png',
    banner: '/assets/Ink/Ink.png',
    logo: '/assets/Ink/Ink.png',
    moneyshot: '/assets/Ink/Ink.png',
    overview: {
      goal: 'Shape an abstract puzzle loop with ink growth and connection rules.',
      team: 'Solo',
      timeline: 'Prototype - 2 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Keep rules readable under abstract visuals.' },
      { title: 'Solution', body: 'Visualize path-growth algorithms and unlock rules gradually.' },
      { title: 'Result', body: 'Algorithmic pacing feels distinct.' },
    ],
    technical: [
      { title: 'Growth Algo', description: 'Ink growth algorithm with avoidance and connection logic.', media: '/assets/Ink/Ink.png' },
      { title: 'Rule Layers', description: 'Staged rule layers for difficulty climb.', media: '/assets/Ink/Ink.png' },
    ],
    results: {
      summary: 'A recognizable abstract-puzzle identity.',
      highlights: ['Algorithm visualization', 'Gradual rules', 'Minimalist style'],
    },
  },
  {
    slug: 'milos-adventure',
    tag: 'Game',
    title: "Milo's Adventure",
    blurb: 'Cartoon adventure to practice animation state machines, camera follow, and light cutscenes.',
    year: '2020',
    role: 'Animator and Scripter',
    tools: 'Unreal, Sequencer',
    cover: '/assets/MiloAdventure/Miloadventure.png',
    banner: '/assets/MiloAdventure/Miloadventure.png',
    logo: '/assets/MiloAdventure/Miloadventure.png',
    moneyshot: '/assets/MiloAdventure/Miloadventure.png',
    overview: {
      goal: 'Build an animation state machine and camera system, then string a short narrative.',
      team: 'Solo',
      timeline: 'Prototype - 3 weeks',
    },
    process: [
      { title: 'Challenge', body: 'Keep character feel and camera stability.' },
      { title: 'Solution', body: 'State machine with root-motion tuning; damped camera with trigger-based cuts.' },
      { title: 'Result', body: 'Playable adventure vignette delivered.' },
    ],
    technical: [
      { title: 'Anim State Machine', description: 'Base state machine with tuned transitions.', media: '/assets/MiloAdventure/Miloadventure.png' },
      { title: 'Camera Follow', description: 'Damped follow plus trigger-based switches.', media: '/assets/MiloAdventure/Miloadventure.png' },
    ],
    results: {
      summary: 'Integrated practice of animation, camera, and lightweight story.',
      highlights: ['State-machine practice', 'Camera damping', 'Short narrative'],
    },
  },
]
