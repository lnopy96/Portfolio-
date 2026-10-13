import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiCheck, FiCopy, FiDownload, FiMapPin, FiPhone } from 'react-icons/fi'
import { content } from '../../data/content'
import { asset } from '../../lib/asset'
import { Section, SectionHeader } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

const { identity, sections, ui } = content
const meta = sections.contact

interface Item {
  icon: IconType
  label: string
  value: string
  href?: string
  external?: boolean
  download?: boolean
}

const items: Item[] = [
  ...identity.phones.map((p) => ({
    icon: FiPhone,
    label: `${ui.phoneLabel} · ${p.label}`,
    value: p.number,
    href: `tel:${p.number.replace(/\s/g, '')}`,
  })),
  {
    icon: FaLinkedinIn,
    label: ui.linkedinLabel,
    value: identity.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    href: identity.linkedin,
    external: true,
  },
  { icon: FiMapPin, label: ui.locationLabel, value: identity.location },
  { icon: FiDownload, label: ui.cvLabel, value: ui.downloadCv, href: asset(identity.cvUrl), download: true },
]

export function Contact() {
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email)
      setToast(ui.copied)
    } catch {
      setToast(ui.copyFailed)
    }
  }

  return (
    <Section id={meta.id}>
      <SectionHeader number={meta.number} label={meta.label} heading={meta.heading} intro={ui.contactIntro} />

      <Reveal>
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <a
            href={`mailto:${identity.email}`}
            className="font-heading text-2xl font-semibold break-all text-text transition-colors hover:text-accent sm:text-3xl md:text-4xl"
          >
            {identity.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {toast === ui.copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            {ui.copyEmail}
          </button>
        </div>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ icon: Icon, label, value, href, external, download }, i) => {
          const body = (
            <>
              <Icon size={18} aria-hidden="true" className="text-accent" />
              <span className="mt-4 block text-xs tracking-widest text-muted uppercase">{label}</span>
              <span className="mt-1 block text-sm font-medium break-words">{value}</span>
            </>
          )
          const cls = 'block h-full rounded-lg border border-border bg-surface p-5'
          return (
            <li key={label}>
              <Reveal delay={i * 0.05} className="h-full">
                {href ? (
                  <a
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    {...(download && { download: true })}
                    className={`${cls} transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2 motion-reduce:hover:translate-y-0`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </Reveal>
            </li>
          )
        })}
      </ul>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm shadow-lg transition-opacity duration-200 ${
          toast ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {toast}
      </div>
    </Section>
  )
}
