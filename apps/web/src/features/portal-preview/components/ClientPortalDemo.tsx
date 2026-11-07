import { useState } from 'react'
import {
  Wrench,
  Boxes,
  CalendarClock,
  Warehouse,
  BarChart3,
  Settings,
  Shield,
  UserCheck,
  Bell,
  Search,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'
import { WorkOrderTable } from '@/features/work-orders/components/WorkOrderTable'
import { useAppStore } from '@/stores/useAppStore'
import { UserRole } from '@/types/rbac.types'

export function ClientPortalDemo() {
  const { setActiveView } = useAppStore()
  const [currentRole, setCurrentRole] = useState<UserRole>('superadmin')
  const [activeTab, setActiveTab] = useState<'work-orders' | 'assets' | 'maintenance' | 'inventory' | 'reports' | 'settings'>('work-orders')

  const rbacRoles: { role: UserRole; label: string; desc: string }[] = [
    { role: 'superadmin', label: 'Super Admin', desc: 'Akses penuh arsitektur, RBAC, dan audit trail' },
    { role: 'enterprise_lead', label: 'Enterprise Lead', desc: 'Manajemen alur kerja, budget approval & KPI' },
    { role: 'engineer', label: 'Field Engineer', desc: 'Eksekusi work orders & telemetri mesin' },
  ]

  return (
    <div className="min-h-screen bg-light-bg text-obsidian flex flex-col font-sans">
      {/* Top Banner indicating Standard Folder Architecture */}
      <div className="bg-obsidian text-white px-4 py-2 text-xs font-mono flex flex-wrap items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          <span>ROUTE_LAYER://apps/web/src/app/(dashboard)/layout.tsx</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60">Simulasi Hak Akses (RBAC):</span>
          <div className="flex items-center gap-1.5">
            {rbacRoles.map((r) => (
              <button
                key={r.role}
                onClick={() => setCurrentRole(r.role)}
                className={`px-2 py-0.5 rounded-subtle text-[11px] transition-colors ${
                  currentRole === r.role
                    ? 'bg-white text-obsidian font-bold'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setActiveView('landing')}
            className="flex items-center gap-1 text-white hover:text-white/70 ml-2 border-l border-white/20 pl-3 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Company Profile
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Dynamic Sidebar based on RBAC */}
        <aside className="w-64 border-r border-border-gray bg-white flex flex-col justify-between p-4 hidden md:flex shrink-0">
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="w-7 h-7 bg-obsidian text-white flex items-center justify-center font-mono text-xs font-bold rounded-subtle">
                K/
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-obsidian">KINETIK CLOUD</div>
                <div className="font-mono text-[10px] text-medium-gray">ENTERPRISE MES v4.8</div>
              </div>
            </div>

            <nav className="space-y-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab('work-orders')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'work-orders'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Work Orders</span>
              </button>

              <button
                onClick={() => setActiveTab('assets')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'assets'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Boxes className="w-4 h-4" />
                <span>Manajemen Aset Mesin</span>
              </button>

              <button
                onClick={() => setActiveTab('maintenance')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'maintenance'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <CalendarClock className="w-4 h-4" />
                <span>Preventif & Perawatan</span>
              </button>

              <button
                onClick={() => setActiveTab('inventory')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'inventory'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Warehouse className="w-4 h-4" />
                <span>Gudang Sparepart</span>
              </button>

              <button
                onClick={() => setActiveTab('reports')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'reports'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Laporan KPI & Downtime</span>
              </button>

              {currentRole === 'superadmin' && (
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                    activeTab === 'settings'
                      ? 'bg-obsidian text-white font-bold'
                      : 'text-dark-gray hover:bg-light-bg'
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Konfigurasi RBAC</span>
                </button>
              )}
            </nav>
          </div>

          {/* User Session Footer Card */}
          <div className="border border-border-gray p-3 rounded-subtle bg-light-bg font-mono text-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <UserCheck className="w-3.5 h-3.5 text-obsidian" />
              <span className="font-bold text-obsidian capitalize">{currentRole}</span>
            </div>
            <p className="text-[11px] text-medium-gray leading-tight">
              {rbacRoles.find((r) => r.role === currentRole)?.desc}
            </p>
          </div>
        </aside>

        {/* Main Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          {/* Top Bar inside App Shell */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border-gray">
            <div>
              <div className="font-mono text-xs text-medium-gray uppercase tracking-widest">
                PORTAL INTERFACE // {activeTab.toUpperCase()}
              </div>
              <h2 className="text-2xl font-bold font-heading text-obsidian capitalize">
                {activeTab.replace('-', ' ')}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-medium-gray" />
                <input
                  type="text"
                  placeholder="Cari aset / nomor WO..."
                  className="pl-8 pr-3 py-1.5 bg-white border border-border-gray text-xs rounded-subtle font-mono w-48 sm:w-64 focus:outline-none focus:border-obsidian"
                />
              </div>
              <button className="p-2 bg-white border border-border-gray rounded-subtle hover:border-obsidian">
                <Bell className="w-4 h-4 text-obsidian" />
              </button>
            </div>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">TOTAL ASSET UPTIME</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">99.82%</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> +0.4% dari bulan lalu
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">ACTIVE WORK ORDERS</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">14 Tiket</div>
              <div className="text-[11px] text-medium-gray font-mono mt-1">
                2 Berstatus Critical High
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">MEAN TIME TO REPAIR</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">38 Menit</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Lebih cepat 12m dari target
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">SPAREPART BUFFER HEALTH</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">94.6%</div>
              <div className="text-[11px] text-amber-700 font-mono mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> 2 item perlu restock
              </div>
            </div>
          </div>

          {/* Tab Content Rendering */}
          {activeTab === 'work-orders' && <WorkOrderTable />}

          {activeTab === 'assets' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian">Modul Manajemen Mesin & Aset Pabrik</h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Terintegrasi dengan sensor IoT lapangan melalui protokol OPC-UA dan MQTT. Setiap mesin memiliki histori pemeliharaan dan telemetri getaran/suhu otomatis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="border border-border-gray p-3 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray">CNC Milling Center Haas VF-4</div>
                  <div className="text-obsidian font-bold mt-1">STATUS: OPERATING (98% LOAD)</div>
                </div>
                <div className="border border-border-gray p-3 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray">Hydraulic Press 500T Komatsu</div>
                  <div className="text-obsidian font-bold mt-1">STATUS: SERVICING (STANDBY)</div>
                </div>
                <div className="border border-border-gray p-3 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray">KUKA Robot Solder Line B</div>
                  <div className="text-obsidian font-bold mt-1">STATUS: CALIBRATED (100% OK)</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian">Jadwal Preventif & Corrective Maintenance</h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Algoritma prediktif mendeteksi keausan komponen sebelum kerusakan katastropik terjadi, meminimalkan unplanned downtime hingga 85%.
              </p>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian">Gudang Suku Cadang & Multi-Warehouse Sync</h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Pelacakan stok komponen kritis real-time dengan barcode scan dan otomatisasi purchase order ke supplier terverifikasi.
              </p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian">Laporan Analitik KPI & Downtime Pabrik</h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Otomatisasi ekspor data ke PDF/Excel sesuai format standar audit manufaktur dan ISO 9001/55000.
              </p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian flex items-center gap-2">
                <Shield className="w-4 h-4 text-obsidian" /> Konfigurasi Keamanan & Role-Based Access Control (RBAC)
              </h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Pengaturan hak akses granular untuk Superadmin, Enterprise Lead, Inspector, dan Field Engineer dengan audit log yang tidak dapat diubah (immutable trail).
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
