import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  tone?: 'accent' | 'muted'
}

export function Tag({ children, tone = 'muted' }: TagProps) {
  const tones = {
    accent: 'bg-accent-soft text-accent',
    muted: 'border border-border text-muted',
  }
  return <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>
}
