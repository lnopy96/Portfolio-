import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-bg hover:bg-accent-2',
  ghost: 'border border-border text-text hover:border-accent hover:text-accent',
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
