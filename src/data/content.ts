// Single source of truth for all site text, links and data.
// Components must never hardcode copy. Missing data → 'TODO: ...'.

export interface Link {
  label: string
  href: string
}

export interface NavItem {
  id: string
  label: string
}

export interface Identity {
  name: string
  initials: string
  title: string
  badge: string
  valueProp: string
  email: string
  phones: string[]
  linkedin: string
  location: string
  cvUrl: string
}

export interface Stat {
  value: number
  suffix?: string
  label: string
}

export interface FocusArea {
  title: string
  description: string
}

export interface Fact {
  label: string
  value: string
}

export interface Project {
  id: number
  title: string
  company: string
  country: 'UAE' | 'KSA' | 'EG'
  sector: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export interface Job {
  company: string
  role: string
  location: string
  start: string
  end: string
  current?: boolean
  bullets: string[]
}

export interface AutomationTool {
  title: string
  problem: string
  tool: string
  timeSaved: string
}

export interface SkillGroup {
  letter: string
  title: string
  skills: string[]
}

export interface Cert {
  title: string
  issuer: string
  date: string
  description: string
  kind: 'degree' | 'certification'
}

export interface SectionMeta {
  id: string
  number: string
  label: string
  heading: string
}

export interface Content {
  identity: Identity
  nav: NavItem[]
  sections: Record<string, SectionMeta>
  stats: Stat[]
  tools: string[]
  about: {
    paragraphs: string[]
    focusAreas: FocusArea[]
    facts: Fact[]
  }
  projects: Project[]
  experience: Job[]
  automation: AutomationTool[]
  skills: SkillGroup[]
  education: Cert[]
  footer: { tagline: string }
}

// Filled in Task 2.
export const content: Content = {
  identity: {
    name: 'Ahmed Gamal Elnopy',
    initials: 'AE',
    title: 'Electrical Engineer · MEP & BIM',
    badge: '',
    valueProp: '',
    email: 'TODO: email',
    phones: [],
    linkedin: 'TODO: LinkedIn URL',
    location: '',
    cvUrl: '/cv/Ahmed-Elnopy-CV.pdf',
  },
  nav: [],
  sections: {},
  stats: [],
  tools: [],
  about: { paragraphs: [], focusAreas: [], facts: [] },
  projects: [],
  experience: [],
  automation: [],
  skills: [],
  education: [],
  footer: { tagline: '' },
}
