import { WorkOrder } from '../types/work-order.types'

const INITIAL_WORK_ORDERS: WorkOrder[] = [
  {
    id: 'wo-101',
    code: 'WO-CSD-0101',
    title: 'Optimasi Latensi Model Serving GraphRAG & ICD-10 Cache',
    assetName: 'Universitas PGRI Madiun (Medical AI)',
    assignedTo: 'Jofanza Denis (Lead AI Architect)',
    priority: 'high',
    status: 'completed',
    createdAt: '2026-11-04',
    scheduledDate: '2026-11-06',
  },
  {
    id: 'wo-102',
    code: 'WO-CSD-0102',
    title: 'Automasi Batch OCR Processing & Verifikasi Transkrip Magang',
    assetName: 'PT. Marstech Global (SIM-Magang)',
    assignedTo: 'Dimas Prayogo (Sr Software Engineer)',
    priority: 'high',
    status: 'completed',
    createdAt: '2026-11-06',
    scheduledDate: '2026-11-08',
  },
  {
    id: 'wo-103',
    code: 'WO-CSD-0103',
    title: 'Stress Testing Konkurensi Engine KRS Nest.js & PostgreSQL 50k Concurrent',
    assetName: 'Clyrova.ID (SIAKAD Multi-Kampus)',
    assignedTo: 'Muhammad Toha Ikhsan (Cloud & DevOps)',
    priority: 'critical',
    status: 'in_progress',
    createdAt: '2026-11-08',
    scheduledDate: '2026-11-11',
  },
  {
    id: 'wo-104',
    code: 'WO-CSD-0104',
    title: 'Sinkronisasi Multi-Outlet POS Next.js, Express & Prisma MySQL',
    assetName: 'MS Harmony Butik & Nabawi Store',
    assignedTo: 'Dimas Prayogo (Lead Fullstack)',
    priority: 'medium',
    status: 'in_progress',
    createdAt: '2026-11-09',
    scheduledDate: '2026-11-12',
  },
  {
    id: 'wo-105',
    code: 'WO-CSD-0105',
    title: 'Integrasi Sistem Surat Mandiri & Portal Desa Krebet (React & Laravel)',
    assetName: 'Pemerintah Desa Krebet (desakrebet.my.id)',
    assignedTo: 'Jofanza Denis (Lead Architect)',
    priority: 'high',
    status: 'completed',
    createdAt: '2026-11-05',
    scheduledDate: '2026-11-07',
  },
  {
    id: 'wo-106',
    code: 'WO-CSD-0106',
    title: 'Audit Keamanan & Penetrasi API Gateway Multi-Tenant',
    assetName: 'Connect Core Platform (Multi-Client)',
    assignedTo: 'Muhammad Toha Ikhsan (VP DevOps)',
    priority: 'medium',
    status: 'open',
    createdAt: '2026-11-10',
    scheduledDate: '2026-11-15',
  },
]

export const workOrderApi = {
  getWorkOrders: async (): Promise<WorkOrder[]> => {
    return Promise.resolve(INITIAL_WORK_ORDERS)
  },
}
