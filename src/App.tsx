import { Navbar } from './components/layout/Navbar'
import { Section, SectionHeader } from './components/layout/Section'
import { Hero } from './components/sections/Hero'
import { content } from './data/content'

function App() {
  const { nav, sections, ui } = content

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        {ui.skipLink}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        {/* Placeholder sections until Tasks 4–9 replace them. */}
        {nav.map(({ id }) => {
          const s = sections[id]
          return (
            <Section key={id} id={id}>
              <SectionHeader number={s.number} label={s.label} heading={s.heading} />
            </Section>
          )
        })}
      </main>
      {/* Footer — Task 9 */}
    </>
  )
}

export default App
