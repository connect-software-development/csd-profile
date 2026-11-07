import { WorkOrder } from '../types/work-order.types'

const INITIAL_WORK_ORDERS: WorkOrder[] = [
  {
    id: 'wo-101',
    code: 'WO-2026-0891',
    title: 'Kalibrasi Sensor Presipitasi & Motor Turbin Line 04',
    assetName: 'CNC Milling Center Haas VF-4',
    assignedTo: 'Bambang Sudirjo (Sr SRE)',
    priority: 'critical',
    status: 'in_progress',
    createdAt: '2026-11-06',
    scheduledDate: '2026-11-09',
  },
  {
    id: 'wo-102',
    code: 'WO-2026-0892',
    title: 'Penggantian Katup Tekanan Hidrolik Utama',
    assetName: 'Hydraulic Press 500T Komatsu',
    assignedTo: 'Dimas Wicaksono',
    priority: 'high',
    status: 'pending_parts',
    createdAt: '2026-11-07',
    scheduledDate: '2026-11-10',
  },
  {
    id: 'wo-103',
    code: 'WO-2026-0893',
    title: 'Audit Firmware IoT Edge Gateway & Pembaruan Kripto',
    assetName: 'Gateway Edge Telemetri IoT #01',
    assignedTo: 'Siti Rahma (Firmware Lead)',
    priority: 'medium',
    status: 'completed',
    createdAt: '2026-11-05',
    scheduledDate: '2026-11-07',
  },
  {
    id: 'wo-104',
    code: 'WO-2026-0894',
    title: 'Lubrikasi Bearing Robotika Solder Otomatis',
    assetName: 'KUKA Industrial Arm KR-60',
    assignedTo: 'Ahmad Fauzi',
    priority: 'low',
    status: 'open',
    createdAt: '2026-11-08',
    scheduledDate: '2026-11-12',
  },
]

export const workOrderApi = {
  getWorkOrders: async (): Promise<WorkOrder[]> => {
    return Promise.resolve(INITIAL_WORK_ORDERS)
  },
}
