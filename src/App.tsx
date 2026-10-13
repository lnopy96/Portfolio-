import { MotionConfig } from 'motion/react'
import { Navbar } from './components/layout/Navbar'
import { Section, SectionHeader } from './components/layout/Section'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { content } from './data/content'

const built = new Set(['about'])

function App() {
  const { nav, sections, ui } = content

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        {ui.skipLink}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        {/* Placeholder sections until later tasks replace them. */}
        {nav
          .filter(({ id }) => !built.has(id))
          .map(({ id }) => {
            const s = sections[id]
            return (
              <Section key={id} id={id}>
                <SectionHeader number={s.number} label={s.label} heading={s.heading} />
              </Section>
            )
          })}
      </main>
    </MotionConfig>
  )
}

export default App
