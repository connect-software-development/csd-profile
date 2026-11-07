import { useState } from 'react'
import { ChevronDown, ChevronUp, Terminal, Shield, GitCommit, RefreshCw } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'

export function ArchitectureSection() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const steps = [
    {
      num: '01',
      phase: 'DISCOVERY & DOMAIN MODELING',
      title: 'Audit Arsitektur & Event Storming',
      summary:
        'Kami mengurai domain bisnis Anda menjadi bounded contexts yang terisolasi dengan rapi sebelum satu baris kode pun ditulis.',
      details: [
        'Domain-Driven Design (DDD) workshop bersama domain expert & tim engineering klien.',
        'Pemetaan dependency graph sistem eksisting untuk mengidentifikasi bottleneck dan single point of failure (SPOF).',
        'Penyusunan Architecture Decision Records (ADR) transparan dengan mitigasi risiko teknis.',
      ],
      output: 'Architecture Blueprint Document, ADRs, & Data Flow Diagram.',
    },
    {
      num: '02',
      phase: 'ARCHITECTURE SPIKES & BENCHMARKING',
      title: 'Validasi Proof-of-Concept & Stress Testing',
      summary:
        'Pengujian empiris batas performa throughput dan latensi pada lingkungan terkontrol sebelum implementasi skala penuh.',
      details: [
        'Penyusunan stress-test rig menggunakan k6 & Locust untuk mensimulasikan beban 10x di atas peak traffic historis.',
        'Eksperimen konkurensi database, locking mechanism, dan partition strategy.',
        'Penetapan Service Level Objectives (SLO) & error budget yang disepakati bersama manajemen.',
      ],
      output: 'Empirical Performance Benchmark Report & Validated Skeleton Code.',
    },
    {
      num: '03',
      phase: 'TEST-DRIVEN RESILIENT SPRINTS',
      title: 'Pengembangan Berbasis Kontrak & CI/CD Otomatis',
      summary:
        'Siklus sprint dua mingguan yang ketat dengan penekanan pada coverage testing otomatis (Unit, Integration, Contract, & E2E).',
      details: [
        'Semua pull request wajib lolos static analysis (SonarQube/Linter) dan security scan dependensi (Trivy/Snyk).',
        'Preview environments otomatis per-branch untuk review visual dan user acceptance testing (UAT).',
        'Dokumentasi OpenAPI / gRPC Protobuf yang selalu tersinkronisasi otomatis.',
      ],
      output: 'Deployable Container Artifacts & Automated Regression Test Suites.',
    },
    {
      num: '04',
      phase: 'OBSERVABILITY & OPERATIONAL HANDOVER',
      title: 'Zero-Downtime Rollout & Telemetri 24/7',
      summary:
        'Peluncuran bertahap (Canary) yang diawasi penuh oleh metrik telemetri real-time dengan rollback otomatis jika error budget terlampaui.',
      details: [
        'Setup dashboard Prometheus, Grafana, dan distributed tracing OpenTelemetry.',
        'Penyusunan Runbook & On-Call Playbook komprehensif untuk tim operasional internal klien.',
        'Mentorship dan transfer pengetahuan intensif kepada internal developer klien selama fase transisi.',
      ],
      output: 'Live SRE Dashboards, Operational Runbooks, & Complete IP Transfer.',
    },
  ]

  const stackCategories = [
    {
      category: 'Bahasa & Runtime',
      items: [
        { name: 'Golang', role: 'Microservices throughput tinggi & concurrency', mature: true },
        { name: 'Rust', role: 'Edge processing, IoT MQTT broker, ultra-low latency', mature: true },
        { name: 'TypeScript', role: 'Frontend apps, BFF API, Next.js / Vite ecosystems', mature: true },
        { name: 'Python', role: 'AI pipelines, RAG ingestion, data engineering', mature: true },
      ],
    },
    {
      category: 'Infrastruktur & Cloud',
      items: [
        { name: 'Kubernetes (K8s)', role: 'Container orchestration, auto-scaling, self-healing', mature: true },
        { name: 'Terraform', role: 'Multi-cloud Infrastructure-as-Code (AWS/GCP/Azure)', mature: true },
        { name: 'Docker', role: 'Standardized build artifacts & lightweight containers', mature: true },
        { name: 'Cloudflare', role: 'Global edge network, WAF, DDoS mitigation, DNS', mature: true },
      ],
    },
    {
      category: 'Data & Event Streaming',
      items: [
        { name: 'PostgreSQL HA', role: 'ACID transactional core dengan streaming replication', mature: true },
        { name: 'Apache Kafka', role: 'Distributed log, event sourcing, decoupled queues', mature: true },
        { name: 'ClickHouse', role: 'OLAP data warehouse untuk analitik real-time', mature: true },
        { name: 'Redis Cluster', role: 'In-memory distributed cache & rate-limiting locks', mature: true },
      ],
    },
    {
      category: 'Observabilitas & Keamanan',
      items: [
        { name: 'OpenTelemetry', role: 'Distributed tracing lintas ribuan mikroservis', mature: true },
        { name: 'Prometheus & Grafana', role: 'Metrics collection, real-time alert triggers', mature: true },
        { name: 'Vault by HashiCorp', role: 'Centralized secrets management & dynamic credentials', mature: true },
        { name: 'OAuth2 / OIDC', role: 'Enterprise Single Sign-On (SSO) & fine-grained RBAC', mature: true },
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
              Kualitas perangkat lunak bukan kebetulan; ia adalah hasil dari disiplin arsitektur yang konsisten dan pemilihan teknologi yang matang.
            </p>
          </div>
        </div>

        {/* 4-Step Accordion / Clean List */}
        <div className="mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-medium-gray mb-4">
            // FASE PENGEMBANGAN SISTEM (THE KINETIK PROTOCOL)
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
