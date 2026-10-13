import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  interactive?: boolean
}

export function Card({ children, interactive = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface ${
        interactive
          ? 'transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-2 hover:shadow-[0_8px_30px_-12px_rgb(245_165_36/0.35)] motion-reduce:hover:translate-y-0'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
