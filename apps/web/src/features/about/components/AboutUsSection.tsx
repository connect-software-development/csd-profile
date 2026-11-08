import { Users, ShieldCheck, Terminal, Award, ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/container'
import { SectionDivider } from '@/components/common/section-divider'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function AboutUsSection() {
  const { setContactModalOpen } = useAppStore()

  const leaders = [
    {
      role: 'FOUNDER, President of AI Engineering & Software Engineering',
      name: 'Jofanza Denis Aldida, S.Kom.',
      bio: 'Mendirikan Connect Software Development untuk menjembatani kebutuhan teknologi industri skala menengah dengan standar keandalan enterprise global. Bersertifikasi MTCNA dan AI Engineer Specialist.',
      credentials: 'MTCNA Certified • AI Engineer Specialist • Bangkit Academy 2024 Machine Learning Graduated by Google, GoTo, Traveloka • Ex-Google Student Ambassador 2025 • Ex-AI Engineer & Software Engineer at PT. MARSTECH GLOBAL • 3+ Years Experience',
    },
    {
      role: 'Vice President of Cloud & DevOps Architecture',
      name: 'Muhammad Toha Ikhsan, S.Kom.',
      bio: 'Membangun arsitektur sistem, mengawasi implementasi cloud, dan keandalan high-availability (SRE). Bersertifikasi MTCNA dan Cloud Computing Specialist.',
      credentials: 'MTCNA Certified • Cloud Computing Specialist • Bangkit Academy 2024 Cloud Computing Graduated by Google, GoTo, Traveloka • Ex-Cloud & DevOps Engineer at PT. MARSTECH GLOBAL • 3+ Years Experience',
    },
    {
      role: 'Vice President of Operations & Software Engineering',
      name: 'Dimas Prayogo, S.Kom.',
      bio: 'Membangun arsitektur desain interface, mengawasi pengembangan sistem, dan memastikan kualitas kode melalui praktik clean code dan automated testing.',
      credentials: 'MTCNA Certified • Software Engineering Specialist • Coding Camp 2026 powered by DBS Foundation Graduated • Ex-Software Engineer at PT. MARSTECH GLOBAL • 3+ Years Experience',
    },
    {
      role: 'PRINCIPAL DATA & DISTRIBUTED CORE',
      name: 'Fauzan Hakim, Ph.D.',
      bio: 'Fokus pada distributed storage engines, streaming pipelines dengan Apache Kafka/ClickHouse, dan inferensi model AI skala industri di on-premises.',
      credentials: 'Ph.D. Distributed Systems • Kafka Specialist',
    },
  ]

  const values = [
    {
      no: '01',
      title: 'Disiplin Rekayasa Tanpa Asumsi',
      desc: 'Setiap keputusan arsitektur diuji melalui stress testing, benchmarking terukur, dan Architecture Decision Records (ADR) transparan.',
    },
    {
      no: '02',
      title: 'Kepemilikan Intelektual 100% Klien',
      desc: 'Klien memegang hak cipta penuh atas seluruh kode sumber, blueprint arsitektur, dan konfigurasi infrastruktur tanpa royalti tersembunyi.',
    },
    {
      no: '03',
      title: 'Senior-Only Engineering Squads',
      desc: 'Kami tidak menugaskan junior tanpa pendampingan. Setiap sprint dikawal oleh Principal dan Senior Software Engineer berpengalaman tinggi.',
    },
    {
      no: '04',
      title: 'Jaminan Garansi & Observabilitas SRE',
      desc: 'Dukungan post-deployment aktif 60 hari dengan setup dashboard telemetri 24/7 dan penanganan insiden sub-15 menit.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-border-gray">
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <SectionDivider index="01" label="Tentang Connect Software Development" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block mb-2">
                // ABOUT US & THE COLLECTIVE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-obsidian tracking-tight">
                Insinyur & Arsitek Dibalik Connect.
              </h2>
            </div>
            <p className="text-sm text-dark-gray max-w-md font-normal leading-relaxed">
              Connect Software Development adalah rumah rekayasa perangkat lunak presisi tinggi yang didirikan untuk menjembatani kebutuhan teknologi industri skala menengah dengan standar keandalan enterprise global.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-widest text-medium-gray mb-6 flex items-center justify-between">
            <span>// DEWAN ARSITEK & LEADERSHIP</span>
            <span className="text-dark-gray font-semibold">LEAD BY PRACTITIONERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border-gray">
            {leaders.map((leader, i) => (
              <div
                key={leader.name}
                className="border-r border-b border-border-gray p-6 sm:p-7 flex flex-col justify-between hover:bg-light-bg transition-colors duration-300 group"
              >
                <div>
                  <div className="font-mono text-xs text-medium-gray mb-3 flex items-center justify-between">
                    <span>DIR_0{i + 1}</span>
                    <Terminal className="w-3.5 h-3.5 text-obsidian" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-dark-gray font-semibold mb-1">
                    {leader.role}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-obsidian mb-3 group-hover:text-dark-gray">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-dark-gray leading-relaxed mb-6 font-normal">
                    {leader.bio}
                  </p>
                </div>

                <div className="border-t border-border-gray pt-3">
                  <span className="font-mono text-[11px] text-medium-gray block">
                    {leader.credentials}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="border border-border-gray bg-light-bg rounded-card p-6 sm:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-medium-gray mb-6">
            // PRINSIP REKAYASA CONNECT SOFTWARE DEVELOPMENT
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div key={val.no} className="space-y-2">
                <span className="font-mono text-sm font-bold text-obsidian block">
                  {val.no}/
                </span>
                <h4 className="font-bold text-sm text-obsidian">{val.title}</h4>
                <p className="text-xs text-dark-gray leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border-gray flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-dark-gray">
              <ShieldCheck className="w-4 h-4 text-obsidian" />
              <span>Transparansi Penuh • Kode Bersih • Tanpa Ketergantungan Vendor</span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setContactModalOpen(true)}
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Mulai Konsultasi Dengan Tim Kami
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
