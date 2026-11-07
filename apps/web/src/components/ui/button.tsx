import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark-outline' | 'text' | 'dark-primary'
  size?: 'sm' | 'md' | 'lg'
  iconRight?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, iconRight, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-subtle tracking-wide disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer'

    const sizeStyles = {
      sm: 'text-xs uppercase tracking-wider px-4 py-2 gap-1.5',
      md: 'text-sm uppercase tracking-wider px-6 py-3.5 gap-2',
      lg: 'text-base uppercase tracking-wider px-8 py-4 gap-2.5',
    }

    const variantStyles = {
      primary:
        'bg-obsidian text-white border border-obsidian hover:bg-dark-gray active:scale-[0.99]',
      secondary:
        'bg-transparent text-obsidian border border-obsidian hover:bg-obsidian hover:text-white active:scale-[0.99]',
      'dark-outline':
        'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white hover:text-obsidian active:scale-[0.99]',
      'dark-primary':
        'bg-white text-obsidian border border-white hover:bg-border-gray active:scale-[0.99]',
      text: 'bg-transparent text-obsidian p-0 hover:text-dark-gray group',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        <span>{children}</span>
        {iconRight && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {iconRight}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
