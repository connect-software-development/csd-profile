import { useState } from 'react'
import { ArrowUpRight, TrendingUp, Cpu, Server, Activity, ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)
  const { setContactModalOpen } = useAppStore()

  const studies = [
    {
      id: 'fintech-core',
      category: 'FINANCIAL SERVICES',
      client: 'Bank Multi-Nasional Kemitraan',
      title: 'Modernisasi Core Settlement Engine: 10x Throughput & Sub-15ms Settlement',
      problem:
        'Sistem kliring warisan (legacy batch processing) mengalami bottleneck setiap jam penutupan bursa dengan error rate 1.8% dan downtime terjadwal 4 jam per minggu.',
      solution:
        'Arsitektur ulang menjadi Event-Driven microservices berbasis Go & Apache Kafka dengan sinkronisasi dual-engine PostgreSQL dan snapshot in-memory Redis cluster.',
      primaryMetric: {
        value: '99.999%',
        label: 'Kliring Uptime SLA Terverifikasi',
      },
      secondaryMetric: {
        value: '14.2 ms',
        label: 'P99 Latensi Transaksi (dari 1.8s)',
      },
      thirdMetric: {
        value: '12 Juta+',
        label: 'Transaksi Sukses Harian',
      },
      architecturePoints: [
        'Distributed Saga Pattern untuk rollback otomatis tanpa inkonsistensi saldo',
        'Multi-AZ hot standby disaster recovery (RPO: 0 detik, RTO: <45 detik)',
        'Full compliance dengan standar regulasi Bank Indonesia & OJK sandbox',
      ],
      techTags: ['Golang', 'Apache Kafka', 'PostgreSQL HA', 'Kubernetes', 'Prometheus/Grafana'],
    },
    {
      id: 'logistics-iot',
      category: 'LOGISTICS & SUPPLY CHAIN',
      client: 'Operator Armada Dingin Nasional (Cold-Chain)',
      title: 'Platform Telemetri Armada IoT: 450+ Titik Sensor Dingin Realtime',
      problem:
        'Kerugian akibat kerusakan kargo suhu sensitif (farmasi & vaksin) mencapai Rp 3.8 Miliar per tahun karena deteksi anomali suhu armada terlambat lebih dari 40 menit.',
      solution:
        'Membangun edge gateway ingestion yang memproses data sensor IoT setiap 3 detik via MQTT, dianalisis secara streaming oleh model deteksi anomali real-time.',
      primaryMetric: {
        value: '-87%',
        label: 'Penurunan Insiden Kerusakan Kargo',
      },
      secondaryMetric: {
        value: '3.0 dtk',
        label: 'Deteksi & Peringatan Otomatis Supir/Dispatch',
      },
      thirdMetric: {
        value: 'Rp 4.2 M',
        label: 'Efisiensi Biaya Operasional Tahunan',
      },
      architecturePoints: [
        'MQTT Broker clustered dengan toleransi koneksi sinyal seluler putus-nyambung',
        'Time-series data warehouse ClickHouse untuk query telemetri multi-tahun kilat',
        'Integrasi automated dispatch rerouting melalui peta geografis presisi tinggi',
      ],
      techTags: ['Rust', 'MQTT / EMQX', 'ClickHouse', 'React WebGIS', 'Docker Swarm Edge'],
    },
    {
      id: 'industrial-erp',
      category: 'MANUFACTURING & HEAVY INDUSTRY',
      client: 'Pabrikan Komponen Otomotif Tier-2',
      title: 'Transformasi Manufacturing Execution System (MES) & Predictive Maintenance',
      problem:
        'Pencatatan produksi manual berbasis lembar kertas dan spreadsheet lambat mengakibatkan downtime mesin mendadak serta keterlambatan pemenuhan jadwal vendor OEM.',
      solution:
        'Platform web responsif terintegrasi PLC mesin pabrik dengan RBAC modular bertingkat untuk operator lantai produksi, supervisor, dan direksi.',
      primaryMetric: {
        value: '+34%',
        label: 'Kenaikan Overall Equipment Effectiveness (OEE)',
      },
      secondaryMetric: {
        value: '0 Menit',
        label: 'Pencatatan Kertas (100% Digital Realtime)',
      },
      thirdMetric: {
        value: '99.4%',
        label: 'Akurasi Jadwal Pemeliharaan Preventif',
      },
      architecturePoints: [
        'PWA Offline-First dengan sinkronisasi otomatis saat jaringan pabrik stabil',
        'Kamera visi komputer edge untuk deteksi cacat fisik produk cetak otomatis',
        'Sistem Work Order dinamis berbasis kanban terhubung gudang suku cadang',
      ],
      techTags: ['TypeScript', 'FastAPI Python', 'Next.js App Shell', 'Zustand', 'OPC-UA'],
    },
  ]

  const current = studies[selectedCase]

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-obsidian text-white border-b border-white/10 relative">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <SectionDivider index="03" label="Bukti Empiris & Rekam Jejak" dark />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
                // PROVEN OUTCOMES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Dampak Nyata Pada Skala Produksi.
              </h2>
            </div>
            <p className="text-sm text-white/70 max-w-md font-normal leading-relaxed">
              Arsitektur perangkat lunak yang baik diukur dari keandalan matematis dan dampak finansial langsung bagi bisnis klien.
            </p>
          </div>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {studies.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(idx)}
              className={`p-4 text-left border rounded-subtle transition-all duration-300 font-mono ${
                selectedCase === idx
                  ? 'bg-charcoal border-white text-white shadow-lg'
                  : 'bg-transparent border-white/15 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              <div className="text-[10px] tracking-widest uppercase mb-1">
                CASE 0{idx + 1} // {item.category}
              </div>
              <div className="font-sans font-bold text-sm tracking-tight text-white line-clamp-1">
                {item.client}
              </div>
            </button>
          ))}
        </div>

        {/* Featured Case Card (Dark High-Contrast) */}
        <div className="border border-white/20 bg-charcoal rounded-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Background Grid Accent */}
          <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 7 Columns: Story & Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-2.5 py-1 bg-white/10 text-white font-mono text-[11px] uppercase tracking-wider rounded-subtle mb-3">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-snug">
                  {current.title}
                </h3>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-white/10 p-4 rounded-subtle bg-black/30">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">
                    TANTANGAN SISTEM
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{current.problem}</p>
                </div>
                <div className="border border-white/10 p-4 rounded-subtle bg-black/30">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">
                    SOLUSI ARSITEKTUR KINETIK
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{current.solution}</p>
                </div>
              </div>

              {/* Architecture Points */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">
                  // Keunggulan Implementasi
                </div>
                {current.architecturePoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-white/90">
                    <span className="font-mono text-white/40">›</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-black/50 border border-white/15 text-white/90 font-mono text-[11px] rounded-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Big Metric Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/15 pt-8 lg:pt-0 lg:pl-8 space-y-6">
              <div className="space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                  // METRIK TERVERIFIKASI
                </div>

                <div className="border-b border-white/10 pb-5">
                  <div className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
                    {current.primaryMetric.value}
                  </div>
                  <div className="text-xs font-mono text-white/60 mt-1 uppercase">
                    {current.primaryMetric.label}
                  </div>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                    {current.secondaryMetric.value}
                  </div>
                  <div className="text-xs font-mono text-white/60 mt-1 uppercase">
                    {current.secondaryMetric.label}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                    {current.thirdMetric.value}
                  </div>
                  <div className="text-xs font-mono text-white/60 mt-1 uppercase">
                    {current.thirdMetric.label}
                  </div>
                </div>
              </div>

              {/* Direct Inquiry from Case Study */}
              <div className="pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3 px-5 bg-white text-obsidian font-mono text-xs uppercase tracking-wider font-bold rounded-subtle hover:bg-border-gray transition-colors flex items-center justify-center gap-2"
                >
                  <span>Diskusikan Kasus Serupa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
