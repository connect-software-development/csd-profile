export interface MaintenanceSchedule {
  id: string
  assetId: string
  cycleType: 'weekly' | 'monthly' | 'quarterly' | 'annual'
  nextScheduledDate: string
  tasks: string[]
  assignedTechnician: string
}
