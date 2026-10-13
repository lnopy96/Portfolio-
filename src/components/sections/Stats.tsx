import { content } from '../../data/content'
import { Counter } from '../ui/Counter'
import { Marquee } from '../ui/Marquee'

const { stats, tools, ui } = content

export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="border-y border-border bg-surface/40">
      <div className="container-page py-12 md:py-16">
        <h2 id="stats-heading" className="sr-only">
          {ui.statsHeading}
        </h2>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="font-heading text-4xl font-semibold text-accent md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t border-border py-6">
        <Marquee items={tools} label={ui.toolsHeading} />
      </div>
    </section>
  )
}
