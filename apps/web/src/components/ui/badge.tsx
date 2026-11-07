import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'light' | 'dark' | 'outline' | 'mono'
}

export function Badge({ className, variant = 'mono', children, ...props }: BadgeProps) {
  const variantStyles = {
    mono: 'bg-light-bg text-dark-gray border border-border-gray font-mono text-[11px] tracking-widest uppercase py-1 px-2.5 rounded-subtle',
    light: 'bg-border-gray/50 text-obsidian font-mono text-[11px] tracking-wider uppercase py-0.5 px-2 rounded-subtle',
    dark: 'bg-charcoal text-white/90 border border-white/10 font-mono text-[11px] tracking-widest uppercase py-1 px-2.5 rounded-subtle',
    outline: 'border border-border-gray text-medium-gray text-[11px] font-mono tracking-wider uppercase py-0.5 px-2 rounded-subtle',
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 select-none', variantStyles[variant], className)} {...props}>
      {children}
    </span>
  )
}
