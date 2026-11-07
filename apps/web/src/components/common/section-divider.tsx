import { cn } from '@/lib/utils'

export interface SectionDividerProps {
  label?: string
  index?: string
  dark?: boolean
  className?: string
}

export function SectionDivider({ label, index, dark = false, className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-between border-t py-3 select-none',
        dark ? 'border-white/15 text-white/50' : 'border-border-gray text-medium-gray',
        className
      )}
    >
      {index && <span className="font-mono text-xs tracking-widest">{index}</span>}
      {label && (
        <span className="font-mono text-[11px] tracking-widest uppercase ml-auto">
          {label}
        </span>
      )}
    </div>
  )
}
