import { WOStatus, WOPriority } from '../types/work-order.types'
import { cn } from '@/lib/utils'

export function WOStatusBadge({ status }: { status: WOStatus }) {
  const styles: Record<WOStatus, string> = {
    open: 'bg-border-gray text-obsidian border-border-gray',
    in_progress: 'bg-obsidian text-white border-obsidian',
    pending_parts: 'bg-light-bg text-dark-gray border-border-gray',
    completed: 'bg-white text-obsidian border-obsidian font-bold',
    cancelled: 'bg-red-50 text-red-700 border-red-200',
  }

  const labels: Record<WOStatus, string> = {
    open: 'OPEN',
    in_progress: 'IN PROGRESS',
    pending_parts: 'WAITING PARTS',
    completed: 'RESOLVED',
    cancelled: 'CANCELLED',
  }

  return (
    <span
      className={cn(
        'font-mono text-[11px] px-2 py-0.5 border rounded-subtle tracking-wider uppercase inline-block',
        styles[status]
      )}
    >
      {labels[status]}
    </span>
  )
}

export function WOPriorityBadge({ priority }: { priority: WOPriority }) {
  const styles: Record<WOPriority, string> = {
    critical: 'text-white bg-obsidian font-bold',
    high: 'text-dark-gray bg-border-gray',
    medium: 'text-medium-gray bg-light-bg',
    low: 'text-medium-gray',
  }

  return (
    <span
      className={cn(
        'font-mono text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider',
        styles[priority]
      )}
    >
      {priority}
    </span>
  )
}
