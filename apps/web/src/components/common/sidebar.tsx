import React from 'react'
import { cn } from '@/lib/utils'

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(
        'w-64 border-r border-border-gray bg-white flex flex-col justify-between p-4 shrink-0 font-sans',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}
