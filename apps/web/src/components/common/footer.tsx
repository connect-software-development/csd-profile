import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from './container'
import { useAppStore } from '@/stores/useAppStore'

export function Footer() {
  const { setContactModalOpen } = useAppStore()

  return (
    <footer className="bg-obsidian text-white border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-subtle text-obsidian font-mono font-bold text-sm">
                K/
              </div>
              <div>
                <span className="font-heading font-bold text-lg tracking-tight text-white block leading-tight">
                  KINETIK
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase block">
                  SYSTEMS INDONESIA
                </span>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Rekayasa perangkat lunak presisi tinggi, modernisasi sistem warisan (*legacy*), dan arsitektur *cloud-native* untuk industri berskala menengah di Asia Tenggara.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-white/60">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>ISO 27001 & SOC2 Type II Certified</span>
            </div>
          </div>

          {/* Column 2: Architecture & Capabilities */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
              // Kapabilitas Inti
            </div>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. Custom Enterprise Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. Cloud Migration & Kubernetes Mesh
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. High-Throughput Event Streaming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Data Pipeline & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  05. Legacy Modernization & Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Locations */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
              // Lokasi Operasional
            </div>
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <div className="text-white font-medium flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Jakarta R&D Center
                </div>
                <p className="text-white/60 leading-relaxed">
                  Menara Sentraya Lt. 24, Jl. Iskandarsyah Raya No. 1A, Kebayoran Baru, Jakarta Selatan 12160
                </p>
              </div>
              <div className="pt-2">
                <div className="text-white font-medium flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Singapore Engineering Hub
                </div>
                <p className="text-white/60 leading-relaxed">
                  Marina Bay Financial Centre Tower 1, Level 11, Singapore 018981
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Direct Inquiries */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
              // Inisiasi Kerjasama
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Jadwalkan review arsitektur atau diskusi kelayakan teknis bersama Principal Architect kami.
            </p>
            <div className="space-y-2 text-xs font-mono pt-1">
              <a
                href="mailto:engineering@kinetiksystems.io"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-white/50" />
                <span>engineering@kinetiksystems.io</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-3.5 h-3.5 text-white/50" />
                <span>+62 (21) 5088-2940</span>
              </div>
            </div>
            <div className="pt-3">
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full text-center py-2.5 px-4 bg-white text-obsidian font-mono text-xs uppercase tracking-wider font-semibold rounded-subtle hover:bg-border-gray transition-colors flex items-center justify-center gap-2"
              >
                <span>Buka Tiket Konsultasi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            &copy; {new Date().getFullYear()} PT Kinetik Rekayasa Sistem. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-white cursor-pointer">Service Level Agreement</span>
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
