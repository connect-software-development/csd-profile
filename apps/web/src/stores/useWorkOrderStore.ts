import { create } from 'zustand'
import { WorkOrder } from '@/features/work-orders/types/work-order.types'

interface WorkOrderStore {
  selectedOrder: WorkOrder | null
  setSelectedOrder: (order: WorkOrder | null) => void
  filterStatus: string
  setFilterStatus: (status: string) => void
}

export const useWorkOrderStore = create<WorkOrderStore>((set) => ({
  selectedOrder: null,
  setSelectedOrder: (order) => set({ selectedOrder: order }),
  filterStatus: 'all',
  setFilterStatus: (status) => set({ filterStatus: status }),
}))
