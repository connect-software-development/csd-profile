export type WOStatus = 'open' | 'in_progress' | 'pending_parts' | 'completed' | 'cancelled'
export type WOPriority = 'critical' | 'high' | 'medium' | 'low'

export interface WorkOrder {
  id: string
  code: string
  title: string
  assetName: string
  assignedTo: string
  priority: WOPriority
  status: WOStatus
  createdAt: string
  scheduledDate: string
}
