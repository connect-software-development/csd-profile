import { useState } from 'react'
import { Server, Cpu, Database, Activity, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react'

export function TechBlueprint() {
  const [activeTab, setActiveTab] = useState<'topology' | 'telemetry' | 'runtime'>('topology')

  return (
    <div className="w-full border border-border-gray bg-white rounded-card overflow-hidden shadow-sm">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border-gray px-4 sm:px-6 py-3 bg-light-bg">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-obsidian" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-gray" />
            <div className="w-2.5 h-2.5 rounded-full bg-border-gray" />
          </div>
          <span className="font-mono text-xs text-dark-gray font-semibold tracking-wider">
            ARCH_SPEC://v4.8.2-ENTERPRISE
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-obsidian">
            <span className="inline-block w-2 h-2 rounded-full bg-obsidian animate-ping" />
            STATUS: NOMINAL
          </span>
          <span className="text-medium-gray hidden sm:inline">|</span>
          <span className="text-medium-gray hidden sm:inline">NODES: 32 ACTIVE</span>
          <span className="text-medium-gray hidden md:inline">|</span>
          <span className="text-medium-gray hidden md:inline">AVG LATENCY: 18.4ms</span>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-border-gray text-xs font-mono uppercase tracking-wider bg-white">
        <button
          onClick={() => setActiveTab('topology')}
          className={`px-5 py-2.5 transition-colors border-r border-border-gray ${
            activeTab === 'topology'
              ? 'bg-obsidian text-white font-bold'
              : 'text-medium-gray hover:text-obsidian hover:bg-light-bg'
          }`}
        >
          01. Topology Graph
        </button>
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`px-5 py-2.5 transition-colors border-r border-border-gray ${
            activeTab === 'telemetry'
              ? 'bg-obsidian text-white font-bold'
              : 'text-medium-gray hover:text-obsidian hover:bg-light-bg'
          }`}
        >
          02. Event Stream Telemetry
        </button>
        <button
          onClick={() => setActiveTab('runtime')}
          className={`px-5 py-2.5 transition-colors ${
            activeTab === 'runtime'
              ? 'bg-obsidian text-white font-bold'
              : 'text-medium-gray hover:text-obsidian hover:bg-light-bg'
          }`}
        >
          03. High-Availability Runtime
        </button>
      </div>

      {/* Interactive Main Visual Canvas */}
      <div className="p-6 sm:p-8 bg-white relative">
        {activeTab === 'topology' && (
          <div className="space-y-6">
            {/* Architectural Nodes Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Layer 1: Edge & Ingress */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 01</span>
                  <Activity className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Edge Ingress / WAF
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  Global Anycast DNS, SSL Termination, Zero-Trust Shield.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  Throughput: 140k req/s
                </div>
              </div>

              {/* Layer 2: API Gateway */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 02</span>
                  <Server className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Federated Gateway
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  GraphQL & gRPC Federation with dynamic auth token validation.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  P99: 14.2ms
                </div>
              </div>

              {/* Layer 3: Microservices Core */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 03</span>
                  <Cpu className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Distributed Domain Core
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  Isolated Go & Rust microservices orchestrated on Kubernetes.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  CPU Util: 32% (Auto-scale)
                </div>
              </div>

              {/* Layer 4: Storage & Event Log */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 04</span>
                  <Database className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Dual-Engine Storage
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  PostgreSQL ACID cluster paired with Kafka event streaming.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  Replication: Multi-AZ Sync
                </div>
              </div>
            </div>

            {/* Spec breakdown bar */}
            <div className="border border-border-gray p-4 rounded-subtle bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-obsidian" />
                  <span className="font-bold text-sm">Industrial Compliance & Security Guarantees</span>
                </div>
                <p className="text-xs text-medium-gray">
                  ISO/IEC 27001, SOC2 Type II audit readiness, OJK & Bank Indonesia regulatory compatibility.
                </p>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs shrink-0">
                <span className="border border-border-gray px-3 py-1.5 rounded-subtle bg-light-bg">
                  99.995% Uptime SLA
                </span>
                <span className="border border-obsidian bg-obsidian text-white px-3 py-1.5 rounded-subtle flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="bg-charcoal text-white p-5 rounded-subtle border border-white/10 space-y-2">
              <div className="text-white/40">// REALTIME KAFKA STREAM BUFFER - CLUSTER_APAC_01</div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.082]</span>
                <span className="text-white/60">TOPIC:orders.settlement</span>
                <span>PARTITION:04 OFFSET:19828479 SIZE:4.2KB LATENCY:3.1ms</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.085]</span>
                <span className="text-white/60">TOPIC:inventory.reserve</span>
                <span>PARTITION:02 OFFSET:09482912 SIZE:1.8KB LATENCY:2.4ms</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.091]</span>
                <span className="text-white/60">TOPIC:audit.compliance_log</span>
                <span>PARTITION:00 OFFSET:55928114 SIZE:12.6KB ENCRYPTED:AES-256-GCM</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.096]</span>
                <span className="text-white/60">TOPIC:analytics.telemetry</span>
                <span>EMIT 4,200 events/sec → ClickHouse Data Warehouse Sink</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">AVG REQ DURATION</div>
                <div className="text-lg font-bold text-obsidian">12.8 ms</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">REPLICATION LAG</div>
                <div className="text-lg font-bold text-obsidian">0.02 ms</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">DATA INTEGRITY</div>
                <div className="text-lg font-bold text-obsidian">100.0%</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">ANOMALY RATE</div>
                <div className="text-lg font-bold text-obsidian">0.000%</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'runtime' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-border-gray p-5 rounded-subtle">
              <div className="font-mono text-xs text-medium-gray mb-1">01 / AUTONOMOUS HEALING</div>
              <h5 className="font-bold text-sm text-obsidian mb-2">Kubernetes Dynamic Pod Mesh</h5>
              <p className="text-xs text-dark-gray leading-relaxed">
                Pod failure terdeteksi dalam sub-detik; alokasi beban langsung dialihkan secara transparan tanpa sesi pengguna terputus.
              </p>
            </div>
            <div className="border border-border-gray p-5 rounded-subtle">
              <div className="font-mono text-xs text-medium-gray mb-1">02 / ZERO DOWNTIME</div>
              <h5 className="font-bold text-sm text-obsidian mb-2">Blue-Green & Canary Rollouts</h5>
              <p className="text-xs text-dark-gray leading-relaxed">
                Deployment sistem berskala enterprise tanpa pemadaman terjadwal. 100% verifikasi telemetry sebelum migrasi traffic penuh.
              </p>
            </div>
            <div className="border border-border-gray p-5 rounded-subtle">
              <div className="font-mono text-xs text-medium-gray mb-1">03 / MULTI-REGION FAILOVER</div>
              <h5 className="font-bold text-sm text-obsidian mb-2">Disaster Recovery RTO &lt; 2m</h5>
              <p className="text-xs text-dark-gray leading-relaxed">
                Replikasi lintas data center fisik Jakarta & Singapura dengan Recovery Point Objective (RPO) mendekati nol detik.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Blueprint Footer Bar */}
      <div className="border-t border-border-gray px-4 sm:px-6 py-3 bg-light-bg flex flex-wrap items-center justify-between text-xs font-mono text-medium-gray">
        <span>FRAMEWORK: HEXAGONAL ARCHITECTURE + DDD</span>
        <span className="flex items-center gap-1.5 text-obsidian font-semibold">
          Kinetik Engine v4.8 <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  )
}
