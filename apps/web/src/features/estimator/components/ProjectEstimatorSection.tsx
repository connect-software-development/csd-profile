import { useState } from 'react'
import { Calculator, ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'
import { formatCurrency } from '@/lib/utils'

export function ProjectEstimatorSection() {
  const { setContactModalOpen } = useAppStore()

  const [projectType, setProjectType] = useState<'core' | 'distributed' | 'cloud_migration'>('core')
  const [scale, setScale] = useState<'mid' | 'large' | 'enterprise'>('mid')
  const [compliance, setCompliance] = useState<string[]>(['iso27001'])
  const [durationMonths, setDurationMonths] = useState<number>(4)

  const toggleCompliance = (item: string) => {
    if (compliance.includes(item)) {
      setCompliance(compliance.filter((c) => c !== item))
    } else {
      setCompliance([...compliance, item])
    }
  }

  // Engineering calculation logic
  const calculateEstimate = () => {
    let baseMonthly = 180000000 // Rp 180 Juta / bln (Squad: 1 Lead Architect, 2 Sr Backend, 1 Sr Frontend, 1 DevOps, 1 QA)

    if (projectType === 'distributed') baseMonthly += 75000000
    if (projectType === 'cloud_migration') baseMonthly += 40000000

    if (scale === 'large') baseMonthly *= 1.4
    if (scale === 'enterprise') baseMonthly *= 1.8

    const complianceAddon = compliance.length * 35000000

    const totalEstimate = baseMonthly * durationMonths + complianceAddon
    const minEstimate = Math.round((totalEstimate * 0.9) / 10000000) * 10000000
    const maxEstimate = Math.round((totalEstimate * 1.15) / 10000000) * 10000000

    return {
      min: minEstimate,
      max: maxEstimate,
      teamSize: scale === 'mid' ? '5 - 6 Senior Engineers' : scale === 'large' ? '8 - 10 Senior Engineers' : '12+ Specialists',
    }
  }

  const estimate = calculateEstimate()

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-light-bg border-b border-border-gray">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <SectionDivider index="05" label="Estimasi Anggaran & Timeline" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block mb-2">
                // TRANSPARENT ARCHITECTURAL SCOPING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-obsidian tracking-tight">
                Kalkulator Skala Proyek & Investasi.
              </h2>
            </div>
            <p className="text-sm text-dark-gray max-w-md font-normal leading-relaxed">
              Model kalkulasi transparan berdasarkan alokasi squad spesialis senior, tanpa markup tersembunyi atau biaya lisensi berulang.
            </p>
          </div>
        </div>

        {/* Interactive Scoping Box */}
        <div className="border border-border-gray bg-white rounded-card shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 7 Columns: Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Parameter 1: Tipe Solusi */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-dark-gray mb-3">
                  01. Fokus Arsitektur Perangkat Lunak:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'core', label: 'Core Platform & ERP', desc: 'Sistem operasional & transaksi inti' },
                    { id: 'distributed', label: 'Distributed Mesh', desc: 'Mikroservis event-driven & IoT scale' },
                    { id: 'cloud_migration', label: 'Cloud & Modernization', desc: 'Migrasi kubernetes & IaC' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setProjectType(t.id as any)}
                      className={`p-3 text-left border rounded-subtle transition-all ${
                        projectType === t.id
                          ? 'border-obsidian bg-obsidian text-white'
                          : 'border-border-gray bg-white text-obsidian hover:bg-light-bg'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold leading-tight mb-1">{t.label}</div>
                      <div
                        className={`text-[11px] leading-tight ${
                          projectType === t.id ? 'text-white/70' : 'text-medium-gray'
                        }`}
                      >
                        {t.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Skala Pengguna & Throughput */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-dark-gray mb-3">
                  02. Target Skala Throughput & Konkurensi:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'mid', label: 'Menengah', desc: 'Hingga 50k req/menit, SLA 99.9%' },
                    { id: 'large', label: 'Menengah-Besar', desc: 'Hingga 500k req/menit, SLA 99.99%' },
                    { id: 'enterprise', label: 'Critical Scale', desc: 'Jutaan req/menit, Zero-downtime HA' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id as any)}
                      className={`p-3 text-left border rounded-subtle transition-all ${
                        scale === s.id
                          ? 'border-obsidian bg-obsidian text-white'
                          : 'border-border-gray bg-white text-obsidian hover:bg-light-bg'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold leading-tight mb-1">{s.label}</div>
                      <div
                        className={`text-[11px] leading-tight ${
                          scale === s.id ? 'text-white/70' : 'text-medium-gray'
                        }`}
                      >
                        {s.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Estimasi Durasi Sprint */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-dark-gray">
                    03. Target Durasi Siklus R&D:
                  </label>
                  <span className="font-mono text-xs font-bold text-obsidian">
                    {durationMonths} Bulan ({durationMonths * 2} Sprints)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(parseInt(e.target.value))}
                  className="w-full h-2 bg-border-gray rounded-lg appearance-none cursor-pointer accent-obsidian"
                />
                <div className="flex justify-between text-[11px] font-mono text-medium-gray mt-1">
                  <span>2 Bulan (Fast MVP)</span>
                  <span>6 Bulan (Standard Core)</span>
                  <span>12 Bulan (Full Modernization)</span>
                </div>
              </div>

              {/* Parameter 4: Standar Regulasi & Audit */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-dark-gray mb-3">
                  04. Standar Kepatuhan & Audit (Pilihan):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'iso27001', label: 'ISO/IEC 27001' },
                    { id: 'ojk_bi', label: 'OJK & BI Reguler' },
                    { id: 'hipaa', label: 'FHIR / Health' },
                    { id: 'soc2', label: 'SOC2 Type II' },
                    { id: 'pci_dss', label: 'PCI-DSS Core' },
                    { id: 'pentest', label: 'External Pentest Rig' },
                  ].map((c) => {
                    const active = compliance.includes(c.id)
                    return (
                      <button
                        key={c.id}
                        onClick={() => toggleCompliance(c.id)}
                        className={`p-2 border rounded-subtle text-xs font-mono flex items-center justify-between transition-colors ${
                          active
                            ? 'bg-light-bg border-obsidian text-obsidian font-bold'
                            : 'border-border-gray text-medium-gray hover:border-obsidian'
                        }`}
                      >
                        <span>{c.label}</span>
                        {active && <Check className="w-3.5 h-3.5 text-obsidian" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Result Box */}
            <div className="lg:col-span-5 bg-obsidian text-white p-6 sm:p-8 rounded-subtle flex flex-col justify-between border border-obsidian">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    ESTIMASI INVESTASI TEKNIS
                  </span>
                  <Calculator className="w-4 h-4 text-white/70" />
                </div>

                <div>
                  <div className="text-xs font-mono text-white/60 uppercase mb-1">
                    Rentang Anggaran Proyek
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                    {formatCurrency(estimate.min)}
                  </div>
                  <div className="text-sm font-mono text-white/60 mt-0.5">
                    s/d {formatCurrency(estimate.max)}
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-4 text-xs font-mono text-white/80">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Komposisi Squad:</span>
                    <span className="font-bold text-white">{estimate.teamSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Durasi Delivery:</span>
                    <span className="font-bold text-white">{durationMonths} Bulan</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Hak Cipta (IP):</span>
                    <span className="font-bold text-white">100% Milik Klien</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Garansi & SRE Support:</span>
                    <span className="font-bold text-white">90 Hari Post-Deploy</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <Button
                  variant="dark-primary"
                  size="md"
                  className="w-full font-mono text-xs"
                  onClick={() => setContactModalOpen(true)}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Klaim Rincian Proposal Resmi
                </Button>
                <p className="text-[11px] text-white/50 text-center font-mono">
                  *Perhitungan di atas merupakan simulasi teknis. Scope final dikunci melalui Statement of Work (SOW).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
