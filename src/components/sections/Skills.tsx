import { content } from '../../data/content'
import { Section, SectionHeader } from '../layout/Section'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

const { skills, sections } = content
const meta = sections.skills

export function Skills() {
  return (
    <Section id={meta.id}>
      <SectionHeader number={meta.number} label={meta.label} heading={meta.heading} />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <li key={group.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <Card interactive className="h-full p-6">
                <span aria-hidden="true" className="font-heading text-5xl font-semibold text-accent/80">
                  {group.letter}
                </span>
                <h3 className="mt-4 text-lg">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
