import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={id} className="block text-xs uppercase tracking-wider font-mono text-dark-gray">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full px-3.5 py-2.5 bg-white border border-border-gray text-obsidian text-sm rounded-subtle placeholder:text-medium-gray/60 transition-colors duration-200 focus:outline-none focus:border-obsidian focus:ring-1 focus:ring-obsidian',
            error && 'border-red-600 focus:border-red-600 focus:ring-red-600',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 font-mono">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
