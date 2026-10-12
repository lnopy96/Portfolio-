import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 md:py-32 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  number: string
  label: string
  heading: string
  intro?: string
}

export function SectionHeader({ number, label, heading, intro }: SectionHeaderProps) {
  return (
    <header className="mb-12 max-w-3xl md:mb-16">
      <p className="section-label">
        {number} — {label}
      </p>
      <h2 className="mt-4">{heading}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </header>
  )
}
