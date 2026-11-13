import { useState } from 'react'
import { ArrowUpRight, TrendingUp, Cpu, Server, Activity, ArrowRight, Brain, Eye } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)
  const { setContactModalOpen } = useAppStore()

  const studies = [
    {
      id: 'unipma-medical-ai',
      category: 'AGENTIC AI & MEDICAL CHATBOT',
      client: 'UNIVERSITAS PGRI MADIUN',
      projectScope: 'Chatbot Medical Agentic AI & GraphRAG Retrieval',
      title: 'Chatbot Medical Agentic AI: GraphRAG + Tool-Calling Agents + FastAPI',
      problem:
        'Mahasiswa dan staf medis memerlukan akses cepat dan tervalidasi ke ribuan modul SOP klinis, jurnal medis, dan referensi farmakologi tanpa risiko halusinasi informasi AI generatif umum.',
      solution:
        'Connect mengimplementasikan GraphRAG (Knowledge Graph RAG) dipadu dengan Agentic Pipelines dan Tool-Calling Agents berbasis PyTorch & Hugging Face Transformers, disajikan melalui FastAPI model serving dengan antarmuka responsif Next.js / React.js terhubung PostgreSQL vector retrieval.',
      primaryMetric: {
        value: '99.1%',
        label: 'Akurasi Faktual & Eliminasi Halusinasi',
      },
      secondaryMetric: {
        value: '< 1.1 dtk',
        label: 'Latensi Respons FastAPI Model Serving',
      },
      thirdMetric: {
        value: '25,000+',
        label: 'Konsultasi Pengetahuan Terlayani / Bulan',
      },
      architecturePoints: [
        'GraphRAG menggabungkan Knowledge Graph relasional dengan Vector Retrieval untuk grounding jawaban berbasis referensi resmi',
        'Agentic Pipelines dengan Tool-Calling Agents otomatis mengeksekusi validasi dosis obat dan terminologi medis ICD-10',
        'Model serving inferensi via FastAPI & PyTorch terisolasi dalam Docker container di Google Cloud Platform (GCP)',
        'Antarmuka web interaktif berbasis Next.js & React.js dengan visualisasi sumber rujukan data secara transparan',
      ],
      techTags: ['GraphRAG', 'Agentic Pipelines', 'Tool-Calling Agents', 'PyTorch', 'Hugging Face Transformers', 'FastAPI (Python)', 'PostgreSQL', 'Next.js', 'React.js', 'Docker', 'Google Cloud Platform'],
    },
    {
      id: 'marstech-internship-ocr',
      category: 'ENTERPRISE SYSTEM & OCR AUTOMATION',
      client: 'PT. MARSTECH GLOBAL',
      projectScope: 'System Information Internship Management (SIM-Magang)',
      title: 'SIM-Magang & Automated Document Ingestion: OCR Pipeline + Nest.js + Prisma',
      problem:
        'Verifikasi berkas pendaftaran magang, logbook harian, transkrip, dan laporan berkala ribuan peserta dari puluhan universitas secara manual membebani tim HR hingga 2 minggu per batch.',
      solution:
        'Connect membangun platform web Sistem Informasi Manajemen Magang dengan OCR Pipeline berbasis TensorFlow dan Text Preprocessing untuk otomatisasi ekstraksi berkas identitas dan dokumen nilai, didukung arsitektur backend modular Nest.js / Node.js dan database PostgreSQL via Prisma ORM.',
      primaryMetric: {
        value: '85%',
        label: 'Reduksi Beban Administrasi Verifikasi HR',
      },
      secondaryMetric: {
        value: '0 Hari',
        label: 'Zero Paperwork (100% Digital Workflow)',
      },
      thirdMetric: {
        value: '12,000+',
        label: 'Peserta & Alumni Magang Terkelola',
      },
      architecturePoints: [
        'OCR Pipeline dengan TensorFlow dan Text Preprocessing mengekstraksi data transkrip dan kartu identitas otomatis',
        'Arsitektur enterprise backend modular Nest.js & TypeScript dengan basis data PostgreSQL via Prisma ORM',
        'Automated CI/CD pipeline menggunakan GitHub Actions menuju containerized Docker runtime di Google Cloud Platform',
        'Dashboard pelaporan analitik berbasis React.js dengan visualisasi KPI penilaian kinerja magang real-time',
      ],
      techTags: ['OCR Pipelines', 'TensorFlow', 'FastAPI (Python)', 'Nest.js', 'Node.js', 'PostgreSQL', 'Prisma', 'React.js', 'Docker', 'GitHub Actions', 'GCP'],
    },
    {
      id: 'clyrova-siakad-mesh',
      category: 'ACADEMIC INFORMATION SYSTEM (SIAKAD)',
      client: 'CLYROVA.ID',
      projectScope: 'System Information Management (SIAKAD Multi-Kampus)',
      title: 'High-Concurrency SIAKAD Core Platform: Gin Golang + Laravel + MySQL + Vue.js',
      problem:
        'Lonjakan ribuan mahasiswa yang mengakses portal akademik secara serentak pada periode pengisian Kartu Rencana Studi (KRS) massal sering memicu kegagalan database lock dan downtime sistem.',
      solution:
        'Connect merancang pemisahan layanan: engine transaksi antrean KRS berkecepatan tinggi menggunakan Gin (Golang) dan Knex.js query optimization, dipadukan sistem administrasi kurikulum berbasis Laravel (PHP) & MySQL, serta frontend Vue.js / Nuxt.js yang ringan dan ramah bandwidth.',
      primaryMetric: {
        value: '99.98%',
        label: 'Uptime SLA Saat Periode Puncak KRS',
      },
      secondaryMetric: {
        value: '18.2 ms',
        label: 'Latensi Rata-rata Request KRS Mahasiswa',
      },
      thirdMetric: {
        value: '80,000+',
        label: 'Mahasiswa & Dosen Terlayani Aktif',
      },
      architecturePoints: [
        'Engine konkurensi Go routine & Gin (Golang) berkecepatan tinggi menangani lonjakan transaksi KRS tanpa antrean macet',
        'Modul manajemen akademik dan kurikulum terintegrasi Laravel (PHP) dengan cluster database MySQL teroptimasi',
        'Antarmuka Single Page Application (SPA) / SSR berbasis Vue.js dan Nuxt.js dengan kecepatan render optimal',
        'Automated delivery via Docker container dengan orkestrasi di Google Cloud Platform (GCP)',
      ],
      techTags: ['Gin (Golang)', 'Laravel (PHP)', 'MySQL', 'Knex.js', 'Vue.js', 'Nuxt.js', 'Docker', 'GitHub Actions', 'Google Cloud Platform'],
    },
    {
      id: 'harmony-nabawi-omnichannel',
      category: 'OMNICHANNEL POS & FASHION COMMERCE',
      client: 'MS HARMONY BUTIK & NABAWI STORE',
      projectScope: 'Butik Marketplace, Company Profile & Omnichannel POS System',
      title: 'Omnichannel POS, Inventory Sync & Visual Marketplace: YOLO + Svelte.js + Next.js',
      problem:
        'Discrepancy stok antara kasir toko fisik offline dengan katalog marketplace online butik memicu pembatalan order konsumen dan proses input foto katalog produk baru yang lambat.',
      solution:
        'Connect membangun solusi omnichannel terpadu: kasir Point Of Sale (POS) ultra-ringan berbasis Svelte.js dengan offline cache, platform e-commerce & Company Profile elegan berbasis Next.js, sinkronisasi inventaris multi-outlet real-time via Node.js / Express.js & PostgreSQL Prisma, serta model YOLO untuk deteksi visual atribut produk.',
      primaryMetric: {
        value: '100%',
        label: 'Akurasi Sinkronisasi Stok Fisik vs Online',
      },
      secondaryMetric: {
        value: '< 300 ms',
        label: 'Waktu Proses Transaksi Kasir POS',
      },
      thirdMetric: {
        value: 'Rp 4.8 M',
        label: 'Gross Merchandise Value (GMV) / Kuartal',
      },
      architecturePoints: [
        'Point of Sale (POS) ultra-ringan berbasis Svelte.js dengan dukungan transaksi kasir offline-first',
        'Katalog fashion marketplace dan Company Profile elegan dengan arsitektur modern Next.js / React.js di Vercel',
        'Model Computer Vision YOLO (Object Detection) untuk kategorisasi dan visual tagging atribut pakaian otomatis',
        'Sinkronisasi inventaris multi-cabang real-time berbasis Node.js / Express.js dengan PostgreSQL via Prisma ORM',
      ],
      techTags: ['YOLO (Object Detection)', 'Next.js', 'Svelte.js', 'Node.js / Express.js', 'PostgreSQL', 'Prisma', 'Docker', 'Vercel', 'Google Cloud Platform'],
    },
  ]

  const current = studies[selectedCase]

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-obsidian text-white border-b border-white/10 relative">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <SectionDivider index="03" label="Bukti Empiris & Rekam Jejak Klien" dark />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/40 block mb-2">
                // PROVEN OUTCOMES // CONNECT_STACK_SPEC
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Dampak Nyata Pada Skala Produksi.
              </h2>
            </div>
            <p className="text-sm text-white/70 max-w-md font-normal leading-relaxed">
              Solusi perangkat lunak dan implementasi AI Connect diukur dari keandalan matematis, efisiensi operasional nyata, dan dampak langsung pada organisasi klien.
            </p>
          </div>
        </div>

        {/* Case Selector Tabs matching Trust Bar Clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
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

        {/* Featured Case Card (Dark High-Contrast Banham Style) */}
        <div className="border border-white/20 bg-charcoal rounded-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Background Grid Accent */}
          <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 7 Columns: Story & Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-white/10 text-white font-mono text-[11px] uppercase tracking-wider rounded-subtle">
                    {current.category}
                  </span>
                  <span className="px-2.5 py-1 bg-white text-obsidian font-mono text-[11px] uppercase tracking-wider font-bold rounded-subtle">
                    {current.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight leading-snug">
                  {current.title}
                </h3>
                <div className="font-mono text-xs text-white/60 mt-1">
                  Scope: {current.projectScope}
                </div>
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
                    SOLUSI CONNECT SOFTWARE DEVELOPMENT
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{current.solution}</p>
                </div>
              </div>

              {/* Architecture Points */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">
                  // Keunggulan Implementasi & Connect Stack
                </div>
                {current.architecturePoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-white/90">
                    <span className="font-mono text-white/40">›</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills from connect_stack_spec */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  // CONNECT_STACK_SPEC TERAPLIKASI:
                </div>
                <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Right 5 Columns: Verified Metrics */}
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

              {/* Direct Inquiry CTA */}
              <div className="pt-4">
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="w-full py-3 px-5 bg-white text-obsidian font-mono text-xs uppercase tracking-wider font-bold rounded-subtle hover:bg-border-gray transition-colors flex items-center justify-center gap-2"
                >
                  <span>Konsultasi Proyek Serupa</span>
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
