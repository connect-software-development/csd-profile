import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'

export function ArchitectureSection() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const steps = [
    {
      num: '01',
      phase: 'PRAGMATIC DISCOVERY & DOMAIN MODELING',
      title: 'Discovery Domain & Arsitektur Modular',
      summary:
        'Kami memetakan proses bisnis inti dan membedah kebutuhan produk menjadi modul-modul terisolasi (modular monolith atau lean microservices) yang siap tumbuh seiring skala traksi pengguna tanpa over-engineering awal.',
      details: [
        'Workshop Domain-Driven Design (DDD) & penyusunan skema MVP hingga target skala menengah.',
        'Pemodelan basis data relasional (PostgreSQL/MySQL) dengan boundary API yang bersih dan konsisten.',
        'Penyusunan Architecture Decision Records (ADR) pragmatis untuk mencegah technical debt sejak hari pertama.',
      ],
      output: 'Modular Architecture Blueprint, Data Schema Model, & Roadmap Rilis.',
    },
    {
      num: '02',
      phase: 'TYPE-SAFE SPRINTS & CONTRACT TESTING',
      title: 'Pengembangan Berbasis Kontrak & Tipe Data Ketat',
      summary:
        'Siklus sprint berkala dengan type-safety menyeluruh dari backend hingga frontend, penulisan kode bersih, dan testing otomatis untuk menjaga stabilitas rilis fitur baru.',
      details: [
        'Implementasi full type-safety end-to-end (TypeScript, Prisma ORM, OpenAPI/REST, gRPC).',
        'Automated regression testing untuk memvalidasi alur bisnis kritis dan integritas transaksi finansial/operasional.',
        'Preview environment otomatis per branch untuk validasi cepat tim produk dan User Acceptance Testing (UAT).',
      ],
      output: 'Type-Safe Codebase Repository, OpenAPI Contract Spec, & Automated Test Suite.',
    },
    {
      num: '03',
      phase: 'LEAN CLOUD & CI/CD PIPELINE',
      title: 'Kontainerisasi Docker & Automasi CI/CD Efisien',
      summary:
        'Otomasi deployment dari branch Git langsung ke cloud runtime terkelola (GCP, VPS terukur, Vercel) menggunakan GitHub Actions tanpa overhead kluster yang berlebihan.',
      details: [
        'Standardisasi lightweight Docker containers untuk portabilitas absolut antara lokal dan produksi.',
        'Automated CI/CD pipeline (linting, build verification, & automated deployment zero-downtime).',
        'Proteksi edge network, auto-SSL, dan optimasi CDN menggunakan Cloudflare & Vercel Edge.',
      ],
      output: 'Automated GitHub Actions CI/CD, Container Artifacts, & Zero-Downtime Deployment.',
    },
    {
      num: '04',
      phase: 'OBSERVABILITY & INTELLECTUAL TRANSFER',
      title: 'Telemetri Real-Time, Monitoring & 100% Hak Milik Klien',
      summary:
        'Pemantauan performa aplikasi aktif 24/7, manajemen log terpusat, dan penyerahan aset kode sumber secara lengkap dengan dokumentasi operasional terstruktur.',
      details: [
        'Setup dashboard telemetri real-time (Prometheus & Grafana) serta logging insiden terpadu.',
        'Optimasi indeks database, strategi query caching Redis, dan eliminasi bottleneck latensi.',
        'Transfer 100% hak kekayaan intelektual (source code, blueprint, kredensial cloud) tanpa royalti tersembunyi.',
      ],
      output: 'Live Telemetry Dashboard, Operational Runbooks, & Complete IP Transfer.',
    },
  ]

  const stackCategories = [
    {
      category: 'Frontend & User Interface',
      items: [
        { name: 'Next.js & React', role: 'Full-stack SSR/SSG performa tinggi, SEO teroptimasi, ekosistem industri', mature: true },
        { name: 'Vue.js & Nuxt', role: 'Antarmuka reaktif ringan, rendering cepat & efisien konsumsi resource', mature: true },
        { name: 'Svelte.js', role: 'UI kasir POS & dashboard ultra-cepat tanpa virtual DOM overhead', mature: true },
        { name: 'TypeScript & Tailwind', role: 'Type-safety end-to-end dengan standardisasi desain UI modern', mature: true },
      ],
    },
    {
      category: 'Backend & Core Engine',
      items: [
        { name: 'Nest.js (TypeScript)', role: 'Arsitektur modular enterprise untuk core logic bisnis terstruktur', mature: true },
        { name: 'Gin (Golang)', role: 'Core transaksional berkecepatan tinggi & konkurensi antrean massal', mature: true },
        { name: 'FastAPI (Python)', role: 'Inference serving AI, GraphRAG retrieval, & pipeline data cepat', mature: true },
        { name: 'Laravel (PHP)', role: 'Platform stabil & teruji untuk modul administrasi dan manajemen bisnis', mature: true },
      ],
    },
    {
      category: 'Data & Persistence',
      items: [
        { name: 'PostgreSQL', role: 'Basis data relasional ACID utama dengan integritas transaksional tinggi', mature: true },
        { name: 'Redis', role: 'In-memory cache super cepat, session management, & background job queue', mature: true },
        { name: 'MySQL', role: 'Database relasional terpercaya untuk sistem operasional & akademik', mature: true },
        { name: 'Prisma & Knex.js', role: 'Type-safe ORM & query builder fleksibel untuk manipulasi data aman', mature: true },
      ],
    },
    {
      category: 'DevOps, Cloud & AI',
      items: [
        { name: 'Docker & GCP', role: 'Kontainerisasi terstandar & cloud hosting terukur hemat biaya', mature: true },
        { name: 'GitHub Actions', role: 'Automated CI/CD untuk continuous test, build, & zero-downtime deploy', mature: true },
        { name: 'Cloudflare & Vercel', role: 'Global edge CDN, proteksi WAF, mitigasi DDoS & caching cepat', mature: true },
        { name: 'Agentic AI & YOLO', role: 'Integrasi LLM RAG, otomasi Computer Vision & pipeline OCR siap pakai', mature: true },
      ],
    },
  ]

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-white border-b border-border-gray">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <SectionDivider index="04" label="Standar Teknis & Metodologi" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block mb-2">
                // METHODOLOGY & ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-obsidian tracking-tight">
                Standar Rekayasa Teruji.
              </h2>
            </div>
            <p className="text-sm text-dark-gray max-w-md font-normal leading-relaxed">
              Arsitektur pragmatis untuk startup baru menuju menengah: kecepatan rilis tinggi, fondasi kode modular, dan infrastruktur cloud terukur tanpa kompromi keandalan sistem.
            </p>
          </div>
        </div>

        {/* 4-Step Accordion / Clean List */}
        <div className="mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-medium-gray mb-4">
            // FASE PENGEMBANGAN SISTEM (THE CONNECT PROTOCOL)
          </div>

          <div className="border-t border-border-gray">
            {steps.map((step, idx) => {
              const isOpen = openStep === idx
              return (
                <div key={step.num} className="border-b border-border-gray">
                  <button
                    onClick={() => setOpenStep(isOpen ? null : idx)}
                    className="w-full py-5 sm:py-6 flex items-start sm:items-center justify-between text-left hover:bg-light-bg/60 transition-colors px-2 sm:px-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="font-mono text-sm font-bold text-medium-gray">
                        {step.num}/
                      </span>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-medium-gray">
                          {step.phase}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-obsidian tracking-tight">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-1 border border-border-gray rounded-subtle text-medium-gray shrink-0 mt-2 sm:mt-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-2 sm:px-4 pb-6 pt-2 bg-light-bg/40 animate-in fade-in duration-200">
                      <p className="text-sm text-dark-gray leading-relaxed mb-4 max-w-3xl">
                        {step.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border-gray pt-4">
                        <div className="space-y-2">
                          <div className="font-mono text-xs uppercase text-medium-gray">
                            Aktivitas Inti:
                          </div>
                          {step.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-2 text-xs text-dark-gray">
                              <span className="font-mono text-obsidian">›</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white border border-border-gray p-4 rounded-subtle flex flex-col justify-center">
                          <span className="font-mono text-[11px] text-medium-gray uppercase mb-1">
                            Key Output Deliverable
                          </span>
                          <span className="font-mono text-xs font-bold text-obsidian">
                            {step.output}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stack Clean Grid */}
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-medium-gray mb-6 flex items-center justify-between">
            <span>// TECH STACK RESMI & MATANG DI PRODUKSI</span>
            <span className="text-dark-gray font-semibold">ZERO EXPERIMENTAL CODE IN PROD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stackCategories.map((group) => (
              <div key={group.category} className="border border-border-gray p-5 rounded-subtle bg-light-bg">
                <div className="font-mono text-xs font-bold uppercase text-obsidian mb-4 border-b border-border-gray pb-2">
                  {group.category}
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="bg-white p-2.5 border border-border-gray rounded-subtle">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono font-bold text-xs text-obsidian">{item.name}</span>
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          Production Standard
                        </span>
                      </div>
                      <p className="text-[11px] text-medium-gray leading-tight">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
