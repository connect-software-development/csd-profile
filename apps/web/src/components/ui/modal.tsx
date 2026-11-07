import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'md',
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const maxWidths = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={cn(
          'relative w-full bg-white border border-border-gray shadow-2xl rounded-subtle z-10 my-8 overflow-hidden transform transition-all',
          maxWidths[maxWidth]
        )}
      >
        <div className="flex items-center justify-between border-b border-border-gray px-6 py-4 bg-light-bg">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block">
              // Direct Interface
            </span>
            <h3 className="text-xl font-bold tracking-tight text-obsidian">{title}</h3>
            {subtitle && <p className="text-xs text-medium-gray mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="p-1.5 text-medium-gray hover:text-obsidian hover:bg-border-gray/50 rounded-subtle transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
