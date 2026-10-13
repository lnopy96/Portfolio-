import type { IconType } from 'react-icons'
import { FiCpu, FiFileText, FiRadio, FiZap } from 'react-icons/fi'
import { content, type FocusIcon } from '../../data/content'
import { Section, SectionHeader } from '../layout/Section'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const { about, sections } = content
const meta = sections.about

const icons: Record<FocusIcon, IconType> = {
  power: FiZap,
  lightCurrent: FiRadio,
  office: FiFileText,
  bim: FiCpu,
}

export function About() {
  return (
    <Section id={meta.id}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <SectionHeader number={meta.number} label={meta.label} heading={meta.heading} className="mb-6" />
          <div className="space-y-4 text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="bg-surface p-4">
                <dt className="text-xs tracking-widest text-muted uppercase">{fact.label}</dt>
                <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {about.focusAreas.map((area, i) => {
            const Icon = icons[area.icon]
            return (
              <li key={area.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Card interactive className="h-full p-6">
                    <span className="flex size-11 items-center justify-center rounded-md bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg">{area.title}</h3>
                    <p className="mt-2 text-sm text-muted">{area.description}</p>
                  </Card>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
