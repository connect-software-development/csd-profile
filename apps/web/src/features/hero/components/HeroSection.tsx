import { ArrowRight, Shield, Cpu, Zap, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { TechBlueprint } from "@/components/common/tech-blueprint";
import { useAppStore } from "@/stores/useAppStore";

export function HeroSection() {
  const { setContactModalOpen } = useAppStore();

  const trustLogos = [
    {
      name: "UNIVERSITAS PGRI MADIUN",
      desc: "Chatbot Medical Agentic AI & GraphRAG",
      href: "#case-studies",
    },
    {
      name: "PT. MARSTECH GLOBAL",
      desc: "SIM-Magang & OCR Ingestion (Nest/Prisma)",
      href: "#case-studies",
    },
    {
      name: "CLYROVA.ID",
      desc: "SIAKAD Multi-Kampus (Nest & React)",
      href: "#case-studies",
    },
    {
      name: "MS HARMONY BUTIK",
      desc: "Fashion Marketplace (Next & React)",
      href: "#case-studies",
    },
    {
      name: "NABAWI STORE",
      desc: "Omnichannel POS (Next & Express)",
      href: "#case-studies",
    },
    {
      name: "PEMERINTAH DESA KREBET",
      desc: "Portal Layanan Publik (React & Laravel)",
      href: "https://desakrebet.my.id/",
      external: true,
    },
  ];

  return (
    <section
      id="hero"
      className="pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white bg-grid-pattern relative border-b border-border-gray"
    >
      <Container>
        {/* Top Tagline / Status Chip */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-light-bg border border-border-gray text-xs font-mono uppercase tracking-wider text-dark-gray rounded-subtle">
            <span className="w-2 h-2 rounded-full bg-obsidian inline-block" />
            <span>Industrial Grade Software Development</span>
          </div>
          <span className="font-mono text-xs text-medium-gray hidden sm:inline">
            // CONNECT SOFTWARE DEVELOPMENT //
          </span>
        </div>

        {/* Hero Title & Sub-headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-obsidian tracking-tight leading-[1.08] mb-6">
              Engineering Precise Software Solutions.
            </h1>
            <p className="text-lg sm:text-xl text-dark-gray leading-relaxed max-w-2xl font-normal">
              Kami merancang dan membangun platform terdistribusi, sistem inti
              transaksional (<b>core systems</b>), dan arsitektur{" "}
              <b>cloud-native</b> berdaya tahan tinggi untuk industri skala
              menengah di Indonesia.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-3 space-y-4">
            <div className="border-l-2 border-obsidian pl-4 space-y-2">
              <div className="font-mono text-xs text-medium-gray uppercase tracking-widest">
                Dibalik Connect Software Development
              </div>
              <p className="text-sm font-medium text-obsidian leading-relaxed">
                Kenali para Principal Architect, Lead Engineer, dan spesialis
                sistem di balik Connect Software Development. Klik{" "}
                <b>About Us</b> untuk mempelajari rekam jejak dan kapabilitas
                tim kami.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                About Us
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setContactModalOpen(true)}
              >
                Inisiasi Konsultasi Teknis
              </Button>
            </div>
          </div>
        </div>

        {/* Large Architectural Blueprint Visual */}
        <div className="mb-16">
          <TechBlueprint />
        </div>

        {/* Trust Bar / Industrial Client Logos */}
        <div className="border border-border-gray p-6 rounded-card bg-light-bg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-border-gray pb-4">
            <div className="font-mono text-xs uppercase tracking-wider text-medium-gray flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-obsidian" />
              <span>Dipercaya Oleh Organisasi & Industri Skala Menengah</span>
            </div>
            <div className="text-xs font-mono text-dark-gray">
              Total Kerjasama Client :{" "}
              <span className="font-bold text-obsidian">&gt; 6 Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trustLogos.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target={client.external ? "_blank" : undefined}
                rel={client.external ? "noopener noreferrer" : undefined}
                className="p-3 bg-white border border-border-gray rounded-subtle hover:border-obsidian hover:shadow-sm transition-all text-center group cursor-pointer block"
              >
                <div className="font-mono font-bold text-xs tracking-tight text-obsidian group-hover:text-dark-gray">
                  {client.name}
                </div>
                <div className="text-[11px] text-medium-gray mt-0.5 font-mono">
                  {client.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
