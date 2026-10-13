import { FiClock, FiCode } from 'react-icons/fi'
import { content } from '../../data/content'
import { Section, SectionHeader } from '../layout/Section'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const { automation, sections, ui } = content
const meta = sections.automation

export function Automation() {
  return (
    <Section id={meta.id} className="bg-surface/40">
      <SectionHeader number={meta.number} label={meta.label} heading={meta.heading} />
      <ul className="grid gap-6 md:grid-cols-2">
        {automation.map((tool, i) => (
          <li key={tool.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <Card interactive className="flex h-full flex-col p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <FiCode size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl">{tool.title}</h3>
                </div>
                <dl className="mt-6 flex-1 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs tracking-widest text-muted uppercase">{ui.problemLabel}</dt>
                    <dd className="mt-1 text-muted">{tool.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-widest text-muted uppercase">{ui.solutionLabel}</dt>
                    <dd className="mt-1">{tool.tool}</dd>
                  </div>
                </dl>
                <p className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm">
                  <FiClock aria-hidden="true" className="text-accent" />
                  <span className="sr-only">{ui.savedLabel}:</span>
                  <span className="font-medium text-accent">{tool.timeSaved}</span>
                </p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
