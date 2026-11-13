import { useState } from 'react'
import {
  Wrench,
  Globe,
  Activity,
  Layers,
  Settings,
  Shield,
  UserCheck,
  Bell,
  Search,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Server,
  Cpu,
  CheckCircle2,
  FileCode,
  ArrowUpRight,
} from 'lucide-react'
import { WorkOrderTable } from '@/features/work-orders/components/WorkOrderTable'
import { useAppStore } from '@/stores/useAppStore'
import { UserRole } from '@/types/rbac.types'

export function ClientPortalDemo() {
  const { setActiveView } = useAppStore()
  const [currentRole, setCurrentRole] = useState<UserRole>('superadmin')
  const [activeTab, setActiveTab] = useState<'projects' | 'work-orders' | 'telemetry' | 'deliverables' | 'settings'>('projects')
  const [searchQuery, setSearchQuery] = useState('')

  const rbacRoles: { role: UserRole; label: string; desc: string }[] = [
    { role: 'superadmin', label: 'Super Admin', desc: 'Akses penuh arsitektur, RBAC, dan audit trail' },
    { role: 'enterprise_lead', label: 'Enterprise Lead', desc: 'Manajemen alur kerja, SLA approval & KPI' },
    { role: 'engineer', label: 'Lead Engineer', desc: 'Eksekusi deployment sprint & telemetri sistem' },
  ]

  const clientDeployments = [
    {
      id: 'desa-krebet',
      client: 'Pemerintah Desa Krebet',
      category: 'Civic Tech & Public Service Portal',
      system: 'Portal Layanan Warga & Sistem Informasi Desa Mandiri',
      stack: 'React.js • Laravel • MySQL • Tailwind CSS',
      uptime: '99.99%',
      latency: '0.6s',
      status: 'Live Production',
      metrics: '100% Digital Persuratan Mandiri • 4,500+ Warga & UMKM',
      version: 'v1.2.0',
      environment: 'Production Web Server',
      link: 'https://desakrebet.my.id/',
      lead: 'Jofanza Denis Aldida, S.Kom.',
    },
    {
      id: 'unipma',
      client: 'Universitas PGRI Madiun',
      category: 'Agentic AI & Medical Chatbot',
      system: 'Chatbot Medical Agentic AI & GraphRAG Retrieval',
      stack: 'FastAPI • PyTorch • Hugging Face • PostgreSQL Vector • Next.js',
      uptime: '99.95%',
      latency: '1.1s',
      status: 'Live Production',
      metrics: '99.1% Akurasi Faktual • 25,000+ Sesi/Bln',
      version: 'v2.4.0',
      environment: 'Production (GCP Container)',
      link: null,
      lead: 'Jofanza Denis Aldida, S.Kom.',
    },
    {
      id: 'marstech',
      client: 'PT. Marstech Global',
      category: 'Enterprise System & OCR Automation',
      system: 'SIM-Magang & Automated Document Ingestion Pipeline',
      stack: 'Nest.js • TypeScript • Prisma ORM • PostgreSQL • Docker',
      uptime: '99.98%',
      latency: '42ms',
      status: 'Live Production',
      metrics: '85% Reduksi Beban HR • 12,000+ Peserta',
      version: 'v3.1.2',
      environment: 'Production (GCP Container)',
      link: null,
      lead: 'Dimas Prayogo, S.Kom.',
    },
    {
      id: 'clyrova',
      client: 'Clyrova.ID',
      category: 'Academic Information System (SIAKAD)',
      system: 'High-Concurrency SIAKAD Core Engine & Transactional Mesh',
      stack: 'Nest.js • React.js • PostgreSQL • TypeScript • Docker',
      uptime: '99.99%',
      latency: '18.2ms',
      status: 'Live Production',
      metrics: '80,000+ Mahasiswa Aktif • 18ms KRS Response',
      version: 'v4.0.1',
      environment: 'Production (Multi-Zone GCP)',
      link: null,
      lead: 'Muhammad Toha Ikhsan, S.Kom.',
    },
    {
      id: 'harmony-nabawi',
      client: 'MS Harmony Butik & Nabawi Store',
      category: 'Omnichannel POS & Fashion Commerce',
      system: 'Omnichannel POS, Real-Time Inventory & Marketplace',
      stack: 'Next.js • React.js • Express.js • Prisma • MySQL',
      uptime: '99.92%',
      latency: '12ms',
      status: 'Live Production',
      metrics: '100% Sinkronisasi Stok • < 300ms Transaksi Kasir',
      version: 'v2.0.4',
      environment: 'Production (Edge Vercel + GCP)',
      link: null,
      lead: 'Dimas Prayogo, S.Kom.',
    },
  ]

  const filteredDeployments = clientDeployments.filter(
    (d) =>
      d.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.system.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              <img
                src="/Connect Logo.jpg"
                alt="Connect Logo"
                className="h-7 w-auto max-h-7 object-contain rounded-subtle border border-border-gray/60"
              />
              <div>
                <div className="font-heading font-bold text-sm text-obsidian leading-tight">CONNECT PORTAL</div>
                <div className="font-mono text-[10px] text-medium-gray uppercase tracking-widest">CLIENT CONSOLE v2.4</div>
              </div>
            </div>

            <nav className="space-y-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'projects'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Klien &amp; Sistem Aktif</span>
              </button>

              <button
                onClick={() => setActiveTab('work-orders')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'work-orders'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Work Orders &amp; Sprints</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'telemetry'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Telemetri SLA &amp; Uptime</span>
              </button>

              <button
                onClick={() => setActiveTab('deliverables')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-subtle transition-colors text-left ${
                  activeTab === 'deliverables'
                    ? 'bg-obsidian text-white font-bold'
                    : 'text-dark-gray hover:bg-light-bg'
                }`}
              >
                <FileCode className="w-4 h-4" />
                <span>Artefak &amp; Serah Terima IP</span>
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
              <span className="font-bold text-obsidian capitalize">{currentRole.replace('_', ' ')}</span>
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
              <h2 className="text-2xl font-bold font-heading text-obsidian">
                {activeTab === 'projects' && 'Klien & Sistem Produksi Aktif'}
                {activeTab === 'work-orders' && 'Engineering Work Orders & Sprints'}
                {activeTab === 'telemetry' && 'Telemetri Performa & Service Level Agreement (SLA)'}
                {activeTab === 'deliverables' && 'Repositori & Serah Terima Hak Kekayaan Intelektual'}
                {activeTab === 'settings' && 'Konfigurasi Hak Akses Granular (RBAC)'}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-medium-gray" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari sistem / nama klien..."
                  className="pl-8 pr-3 py-1.5 bg-white border border-border-gray text-xs rounded-subtle font-mono w-48 sm:w-64 focus:outline-none focus:border-obsidian"
                />
              </div>
              <button
                className="p-2 bg-white border border-border-gray rounded-subtle hover:border-obsidian"
                title="Notifikasi Sistem"
              >
                <Bell className="w-4 h-4 text-obsidian" />
              </button>
            </div>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">AVERAGE SYSTEM SLA</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">99.96%</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Uptime stabil lintas 6 sistem
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">ACTIVE CLIENT PLATFORMS</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">6 Platform</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> 100% Production Operational
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">MEAN RESPONSE LATENCY</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">22.4 ms</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> P99 API &amp; Edge Latency
              </div>
            </div>

            <div className="border border-border-gray bg-white p-4 rounded-subtle">
              <div className="text-[11px] font-mono text-medium-gray uppercase">SPRINT ON-TRACK RATE</div>
              <div className="text-2xl font-bold font-heading text-obsidian mt-1">100%</div>
              <div className="text-[11px] text-emerald-700 font-mono mt-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Zero Critical Blocker
              </div>
            </div>
          </div>

          {/* Tab Content Rendering */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-obsidian">Portofolio Kerjasama &amp; Sistem Produksi Klien</h3>
                  <p className="text-xs text-medium-gray">
                    Daftar sistem operasional yang dirancang, dibangun, dan dimonitor oleh Connect Software Development.
                  </p>
                </div>
                <div className="text-xs font-mono text-medium-gray">
                  Menampilkan {filteredDeployments.length} Sistem
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredDeployments.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border-gray bg-white p-5 rounded-subtle hover:border-obsidian transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-light-bg border border-border-gray rounded-subtle text-dark-gray font-semibold">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="font-mono text-[11px] font-bold text-emerald-700">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-bold text-lg text-obsidian font-heading mb-1">
                        {item.client}
                      </h4>
                      <div className="font-mono text-xs text-dark-gray font-semibold mb-3">
                        {item.system}
                      </div>

                      <div className="space-y-2 mb-4 bg-light-bg/60 p-3 rounded-subtle border border-border-gray/60 font-mono text-xs">
                        <div className="flex items-center justify-between text-dark-gray">
                          <span className="text-medium-gray">Tech Stack:</span>
                          <span className="font-semibold text-right">{item.stack}</span>
                        </div>
                        <div className="flex items-center justify-between text-dark-gray">
                          <span className="text-medium-gray">Output Terverifikasi:</span>
                          <span className="font-semibold text-emerald-800">{item.metrics}</span>
                        </div>
                        <div className="flex items-center justify-between text-dark-gray">
                          <span className="text-medium-gray">Environment:</span>
                          <span>{item.environment}</span>
                        </div>
                        <div className="flex items-center justify-between text-dark-gray">
                          <span className="text-medium-gray">Architect Lead:</span>
                          <span>{item.lead}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border-gray pt-3 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <span className="text-medium-gray">SLA: <b className="text-obsidian">{item.uptime}</b></span>
                        <span className="text-medium-gray">P99: <b className="text-obsidian">{item.latency}</b></span>
                      </div>

                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-obsidian text-white rounded-subtle text-xs hover:bg-dark-gray font-bold transition-colors"
                        >
                          <span>Kunjungi {item.link.replace('https://', '')}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-medium-gray text-[11px]">
                          Private Enterprise Cluster
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'work-orders' && <WorkOrderTable />}

          {activeTab === 'telemetry' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-6">
              <div>
                <h3 className="font-bold text-base text-obsidian">Metrik Telemetri SLA &amp; Keandalan Sistem</h3>
                <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                  Data observabilitas real-time yang ditarik dari Prometheus, Grafana, dan OpenTelemetry lintas seluruh kluster klien.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">UNIPMA // FASTAPI INFERENCE</div>
                  <div className="text-xl font-bold text-obsidian mt-1">1.08 dtk</div>
                  <div className="text-[11px] text-emerald-700 mt-1">GraphRAG &amp; Vector Lookup Tercepat</div>
                </div>

                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">MARSTECH // OCR ACCURACY</div>
                  <div className="text-xl font-bold text-obsidian mt-1">99.4% Precision</div>
                  <div className="text-[11px] text-emerald-700 mt-1">Otomasi Berkas Mahasiswa Teruji</div>
                </div>

                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">CLYROVA // NEST &amp; POSTGRES</div>
                  <div className="text-xl font-bold text-obsidian mt-1">18.2 ms P99</div>
                  <div className="text-[11px] text-emerald-700 mt-1">Zero Lock saat Lonjakan KRS Massal</div>
                </div>

                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">HARMONY &amp; NABAWI // EXPRESS &amp; MYSQL</div>
                  <div className="text-xl font-bold text-obsidian mt-1">0 Discrepancy</div>
                  <div className="text-[11px] text-emerald-700 mt-1">Next.js &amp; Prisma Real-Time Sync</div>
                </div>

                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">DESA KREBET // REACT &amp; LARAVEL</div>
                  <div className="text-xl font-bold text-obsidian mt-1">100% Online</div>
                  <div className="text-[11px] text-emerald-700 mt-1">Layanan Surat Mandiri &amp; MySQL</div>
                </div>

                <div className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="text-medium-gray uppercase text-[10px]">CI/CD DEPLOYMENT PIPELINE</div>
                  <div className="text-xl font-bold text-obsidian mt-1">42 dtk</div>
                  <div className="text-[11px] text-emerald-700 mt-1">GitHub Actions to Container Registry</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'deliverables' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian">Repositori, Dokumen Arsitektur &amp; 100% Hak Milik Klien</h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Seluruh kode sumber, konfigurasi kontainer Docker, spesifikasi API OpenAPI/gRPC, dan Architecture Decision Records (ADR) diserahkan sepenuhnya kepada klien tanpa keterikatan vendor (*zero vendor lock-in*).
              </p>
              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="p-3 border border-border-gray rounded-subtle flex items-center justify-between bg-light-bg">
                  <div>
                    <span className="font-bold text-obsidian block">desa-krebet-portal-v1</span>
                    <span className="text-[11px] text-medium-gray">Full source code React.js + Laravel + MySQL schemas</span>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Handed Over (100% IP)
                  </span>
                </div>

                <div className="p-3 border border-border-gray rounded-subtle flex items-center justify-between bg-light-bg">
                  <div>
                    <span className="font-bold text-obsidian block">unipma-medical-graphrag-ai</span>
                    <span className="text-[11px] text-medium-gray">FastAPI serving image, PyTorch weights, &amp; Knowledge Graph schemas</span>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Handed Over (100% IP)
                  </span>
                </div>

                <div className="p-3 border border-border-gray rounded-subtle flex items-center justify-between bg-light-bg">
                  <div>
                    <span className="font-bold text-obsidian block">marstech-sim-magang-ocr</span>
                    <span className="text-[11px] text-medium-gray">Nest.js enterprise repo, Prisma migrations, &amp; OCR pipeline scripts</span>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Handed Over (100% IP)
                  </span>
                </div>

                <div className="p-3 border border-border-gray rounded-subtle flex items-center justify-between bg-light-bg">
                  <div>
                    <span className="font-bold text-obsidian block">clyrova-siakad-nest-platform</span>
                    <span className="text-[11px] text-medium-gray">Nest.js enterprise backend &amp; React.js frontend client (PostgreSQL)</span>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Handed Over (100% IP)
                  </span>
                </div>

                <div className="p-3 border border-border-gray rounded-subtle flex items-center justify-between bg-light-bg">
                  <div>
                    <span className="font-bold text-obsidian block">harmony-nabawi-omnichannel</span>
                    <span className="text-[11px] text-medium-gray">Next.js marketplace, React.js POS, Express.js backend &amp; Prisma MySQL</span>
                  </div>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Handed Over (100% IP)
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="border border-border-gray bg-white p-6 rounded-card space-y-4">
              <h3 className="font-bold text-base text-obsidian flex items-center gap-2">
                <Shield className="w-4 h-4 text-obsidian" /> Konfigurasi Keamanan &amp; Role-Based Access Control (RBAC)
              </h3>
              <p className="text-xs text-dark-gray leading-relaxed max-w-2xl">
                Pengaturan hak akses granular untuk Superadmin, Enterprise Lead, dan Lead Engineer dengan audit log yang tidak dapat diubah (immutable trail).
              </p>
              <div className="border border-border-gray rounded-subtle p-4 bg-light-bg space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border-gray pb-2">
                  <span className="font-bold text-obsidian">Kebijakan Otentikasi</span>
                  <span className="text-emerald-700 font-semibold">MFA &amp; OAuth2 / OIDC Aktif</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-gray pb-2">
                  <span className="font-bold text-obsidian">Rotasi Kunci API Gateway</span>
                  <span className="text-dark-gray">Otomatis Setiap 30 Hari</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-obsidian">Audit Trail Log Level</span>
                  <span className="text-dark-gray">VERBOSE (All Mutations Recorded)</span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
