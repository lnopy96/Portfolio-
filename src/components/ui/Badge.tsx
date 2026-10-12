import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  pulse?: boolean
}

export function Badge({ children, pulse = false }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted">
      {pulse && (
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full rounded-full bg-success opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
      )}
      {children}
    </span>
  )
}
