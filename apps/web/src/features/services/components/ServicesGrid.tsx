import { Code2, CloudCog, Cpu, Layers, ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function ServicesGrid() {
  const { setContactModalOpen } = useAppStore()

  const services = [
    {
      index: '01/',
      title: 'Custom Enterprise Software',
      category: 'CORE PLATFORM',
      icon: <Layers className="w-5 h-5 text-obsidian" />,
      description:
        'Pembangunan platform operasional inti, otomasi alur kerja pabrik & logistik, serta sistem transaksi berkecepatan tinggi yang disesuaikan secara presisi dengan model bisnis perusahaan Anda.',
      features: [
        'Hexagonal & Clean Architecture',
        'Multi-tenant database isolation',
        'Automated regression & contract testing',
        'Audit-ready RBAC & access trail',
      ],
      deliverable: 'Source code 100% kepemilikan klien, zero vendor lock-in.',
    },
    {
      index: '02/',
      title: 'Cloud & DevOps Architecture',
      category: 'INFRASTRUCTURE',
      icon: <CloudCog className="w-5 h-5 text-obsidian" />,
      description:
        'Modernisasi infrastruktur on-premise ke hybrid/multi-cloud (AWS, GCP, Azure, IDCloudHost). Implementasi Kubernetes cluster dengan gitops CI/CD dan observabilitas terpadu.',
      features: [
        'Terraform Infrastructure as Code (IaC)',
        'Zero-downtime blue/green deployments',
        'SRE & Chaos Engineering practices',
        'Cost optimization (finops) hingga -40%',
      ],
      deliverable: 'Automated CI/CD pipelines & live SLA dashboards.',
    },
    {
      index: '03/',
      title: 'AI & Data Engineering',
      category: 'INTELLIGENCE',
      icon: <Cpu className="w-5 h-5 text-obsidian" />,
      description:
        'Penyusunan pipeline data real-time, integrasi model LLM privat di dalam jaringan perusahaan, serta sistem analitik prediktif untuk optimasi inventaris dan deteksi fraud.',
      features: [
        'Private On-Prem / VPC LLM deployment',
        'Event streaming via Apache Kafka',
        'Vector DB & Semantic Search (RAG)',
        'ClickHouse real-time data warehouse',
      ],
      deliverable: 'Autonomous analytical agents & unified telemetry lakes.',
    },
    {
      index: '04/',
      title: 'High-Scale Distributed Systems',
      category: 'SCALE & RESILIENCE',
      icon: <Code2 className="w-5 h-5 text-obsidian" />,
      description:
        'Refactoring sistem monolitik warisan (*legacy monolithic*) menjadi jaringan mikroservis terdistribusi yang mampu menangani lonjakan jutaan request concurrent tanpa degradasi.',
      features: [
        'gRPC & Protobuf inter-service mesh',
        'Distributed lock & saga pattern consensus',
        'Redis distributed caching cluster',
        'Sub-20 millisecond P99 response time',
      ],
      deliverable: 'High-concurrency benchmark report & load test assets.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-border-gray">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <SectionDivider index="02" label="Layanan Rekayasa Perangkat Lunak" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block mb-2">
                // ARCHITECTURAL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-obsidian tracking-tight">
                Disiplin Rekayasa Tanpa Kompromi.
              </h2>
            </div>
            <p className="text-sm text-dark-gray max-w-md font-normal leading-relaxed">
              Kami tidak sekadar membuat aplikasi. Kami membangun aset teknologi strategis dengan standar arsitektur industri finansial dan manufaktur maju.
            </p>
          </div>
        </div>

        {/* 4-Column Grid with Thin Border Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-gray">
          {services.map((item) => (
            <div
              key={item.index}
              className="border-r border-b border-border-gray p-6 sm:p-7 flex flex-col justify-between hover:bg-light-bg transition-colors duration-300 group"
            >
              <div>
                {/* Card Header: Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-base font-bold text-medium-gray group-hover:text-obsidian transition-colors">
                    {item.index}
                  </span>
                  <div className="p-2 border border-border-gray bg-white rounded-subtle group-hover:border-obsidian transition-colors">
                    {item.icon}
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-medium-gray block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-obsidian mb-3 leading-snug group-hover:text-dark-gray">
                  {item.title}
                </h3>
                <p className="text-xs text-dark-gray leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 border-t border-border-gray pt-4 mb-6">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs text-dark-gray">
                      <Check className="w-3.5 h-3.5 text-obsidian shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Footer */}
              <div className="border-t border-border-gray pt-4">
                <div className="font-mono text-[11px] text-medium-gray">
                  <span className="font-semibold text-obsidian">Deliverable:</span> {item.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Bottom CTA */}
        <div className="mt-12 p-6 border border-border-gray bg-light-bg rounded-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-bold text-sm text-obsidian">
              Membutuhkan audit arsitektur sebelum memulai pengembangan sistem baru?
            </span>
            <p className="text-xs text-medium-gray">
              Tim Principal Architect kami menyediakan preliminary assessment tanpa komitmen awal.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setContactModalOpen(true)}
            iconRight={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Minta Audit Arsitektur
          </Button>
        </div>
      </Container>
    </section>
  )
}
