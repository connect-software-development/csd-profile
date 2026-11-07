import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs font-mono text-medium-gray" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={item.label} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-medium-gray/60" />}
            {isLast ? (
              <span className="text-obsidian font-bold">{item.label}</span>
            ) : (
              <span className="hover:text-obsidian cursor-pointer">{item.label}</span>
            )}
          </div>
        )
      })}
    </nav>
  )
}
