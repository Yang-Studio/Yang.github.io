export type ProjectTranslation = {
  title: string
  blurb: string
  overviewGoal: string
  role?: string
  overviewTeam?: string
  overviewTimeline?: string
  process?: { title: string; body: string }[]
  technical?: { title: string; description: string }[]
  results?: { summary: string; highlights: string[] }
}

export const projectTranslations: Record<string, ProjectTranslation> = {
  shanhe: {
    title: '山河',
    blurb: '一款用于测试横版武侠 RPG 核心体验的关卡原型。',
    role: '独立开发',
    overviewGoal:
      '当前 Demo 集中于单一章节，重点打磨关卡流程、战斗密度与情绪节奏，验证从环境氛围到战斗强度递进的整体可行性。',
    overviewTeam: '个人制作',
    overviewTimeline: '垂直切片 - 10 周',
    process: [
      { title: '挑战', body: '让战斗节奏对齐情绪节拍，而不是简单堆叠数值。' },
      { title: '解决方案', body: 'Boss 情绪节点与碎片线索重写空间；半开放区块串起节拍。' },
      { title: '结果', body: '玩家能感到每一次情绪转折，剧情与战斗保持同步。' },
    ],
    technical: [
      { title: '情绪驱动 AI', description: '状态机绑定情绪节点，各阶段切换动画/音频/特效。' },
      { title: '碎片系统', description: '可收集碎片触发叙事与地形变化；数据表支持热重载。' },
    ],
    results: {
      summary: '统一叙事与战斗节奏的关卡模板。',
      highlights: ['完整概念故事', '多阶段情绪曲线', 'Boss 节奏已验证'],
    },
  },
  'bubono-survival': {
    title: 'Bubono Survival',
    blurb: 'Bubono 系列的合作生存原型，玩家反馈强烈。',
    role: '独立开发',
    overviewGoal: '打磨适合聚会的合作生存，提供清晰任务指引和可读的 UI 发光提示。',
    overviewTeam: '5 人小队',
    overviewTimeline: '短期迭代',
    process: [
      { title: '挑战', body: '玩家想要更清晰的任务指引与 UI 发光逻辑。' },
      { title: '解决方案', body: '制作任务指针并统一发光反馈套件，提升共享感知。' },
      { title: '结果', body: '生存循环既有方向感又足够轻量，适合聚会体验。' },
    ],
    technical: [
      { title: '多人核心', description: 'Photon 房间与状态同步针对合作生存调优。' },
      { title: 'UI 发光套件', description: '可复用的发光反馈着色器与音效，突出目标。' },
    ],
    results: {
      summary: '融入玩家反馈的合作生存底稿。',
      highlights: ['任务可读性', '可复用反馈套件', '低延迟同步'],
    },
  },
  'bubono-bumperland': {
    title: 'Bubono 的碰碰车乐园',
    blurb: '碰撞优先的碰碰车乐园，包含 Burg、Abyss、Big Bang 三大分园和自适应 AI。',
    role: '系统与敌人程序员',
    overviewGoal: '打造按分园主题定制的碰撞战斗，敌人自适应，同时保持每次撞击的可读性。',
    overviewTeam: '5 人小组',
    overviewTimeline: '多轮迭代',
    process: [
      { title: '挑战', body: '整合三大主题分园，同时确保碰撞清晰与 AI 可读性。' },
      { title: '解决方案', body: '行为驱动的敌人与模块化碰撞/升级系统保持场景一致性。' },
      { title: '结果', body: '乐园循环在分园间平衡混沌、清晰度与进展。' },
    ],
    technical: [
      { title: '行为驱动敌人', description: '分园感知的行为树，响应玩家移动、路线与战斗节奏。' },
      { title: '碰撞与升级模块', description: '物理优先的碰撞处理与模块化升级，专为碰碰车调校。' },
    ],
    results: {
      summary: '碰撞优先的乐园已验证，AI 自适应且升级路径灵活。',
      highlights: ['分园特定 AI', '可读的碰撞反馈', '可升级碰碰车'],
    },
  },
  'stairs-in-the-woods': {
    title: 'Stairs in the Woods',
    blurb: '简单的场景训练。',
    role: '沉浸式体验',
    overviewGoal: '用楼梯与遮挡铺出节奏，练习低多边形场景搭建。',
    overviewTeam: '个人制作',
    overviewTimeline: '原型 - 5 周',
    process: [],
    technical: [
      { title: '追逐 AI', description: '简化的感知与路径预测，支持难度曲线。' },
      { title: '光照节拍', description: '体积光与遮挡触发器驱动揭示时机。' },
    ],
    results: {
      summary: '完整的光照/AI/声效紧张练习。',
      highlights: ['光照节奏已验证', '追逐 AI 原型', '恐怖音频打磨'],
    },
  },
  'castle-defense': {
    title: 'Castle Defense',
    blurb: '简单的塔防小游戏。',
    role: '塔防',
    overviewGoal: '一个轻松消遣的小游戏。',
    overviewTeam: '个人研发',
    overviewTimeline: '研发 - 2 周',
    process: [],
    technical: [],
    results: {
      summary: '',
      highlights: [],
    },
  },
  'bio-lab': {
    title: 'Bio-Lab',
    blurb: '基于 UE5 的生化实验室环境搭建练习。',
    role: '场景建模',
    overviewGoal: '项目重点在于灯光系统、环境光与场景层次控制，验证写实场景在实时引擎中的表现效果。',
    overviewTeam: '个人制作',
    overviewTimeline: '原型 - 4 周',
    process: [],
    technical: [],
    results: {
      summary: '',
      highlights: [],
    },
  },
  aukadyssey: {
    title: 'AukAdyssey',
    blurb: '第一人称动作游戏，强调快速战斗与沉浸式推进。',
    role: 'UI 与系统',
    overviewGoal: '搭建交互 + UI 框架，同时保持美术基调与节奏清晰。',
    overviewTeam: '4 人团队',
    overviewTimeline: '原型 - 6 周',
    process: [
      { title: '挑战', body: '在分层场景中保持可读性与节奏。' },
      { title: '解决方案', body: 'UI 引导绑定节奏图；打磨角色手感。' },
      { title: '结果', body: '稳定 demo，基调一致。' },
    ],
  },
  ink: {
    title: 'Ink',
    blurb: '2D 平台跳跃游戏，分层场景与交互框架，纯手绘。',
    role: '手绘',
    overviewGoal: '纯手绘的 2D 平台跳跃游戏。',
    overviewTeam: '双人小组',
    overviewTimeline: '48 小时',
    process: [],
    technical: [],
    results: { summary: '', highlights: [] },
  },
}
