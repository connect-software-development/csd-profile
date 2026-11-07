import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'interactive'
}

export function Card({ className, variant = 'light', children, ...props }: CardProps) {
  const variantStyles = {
    light: 'bg-white border border-border-gray rounded-card',
    dark: 'bg-charcoal border border-white/10 text-white rounded-card',
    interactive:
      'bg-white border border-border-gray rounded-card transition-all duration-300 hover:border-obsidian hover:bg-light-bg cursor-pointer group',
  }

  return (
    <div className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </div>
  )
}
