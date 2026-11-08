import { useState } from 'react'
import { Server, Cpu, Database, Activity, ArrowRight, CheckCircle2, Brain, Eye, Terminal, Layers, Cloud } from 'lucide-react'

export function TechBlueprint() {
  const [activeTab, setActiveTab] = useState<'topology' | 'telemetry' | 'matrix'>('topology')

  const stackCategories = [
    {
      title: 'ML & Deep Learning',
      icon: <Brain className="w-4 h-4 text-obsidian" />,
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face Transformers'],
    },
    {
      title: 'Computer Vision',
      icon: <Eye className="w-4 h-4 text-obsidian" />,
      items: ['YOLO (Object Detection)', 'OCR Pipelines', 'CNN Architectures', 'TF Lite', 'TF.js', 'OpenCV'],
    },
    {
      title: 'NLP, LLMs & Agentic RAG',
      icon: <Terminal className="w-4 h-4 text-obsidian" />,
      items: ['GraphRAG (Knowledge Graph)', 'Agentic Pipelines', 'Tool-Calling Agents', 'Vector Retrieval', 'Transformer Models', 'Prompt Engineering', 'LLM API Integration'],
    },
    {
      title: 'AI Integration & Serving',
      icon: <Cpu className="w-4 h-4 text-obsidian" />,
      items: ['FastAPI Model Serving', 'YOLO (CV Ingestion)', 'OCR Automation', 'LLM API Gateways'],
    },
    {
      title: 'Frontend Frameworks',
      icon: <Layers className="w-4 h-4 text-obsidian" />,
      items: ['React.js', 'Next.js', 'Vue.js', 'Svelte.js', 'Nuxt.js', 'Yew (Rust Wasm)'],
    },
    {
      title: 'Backend Ecosystem',
      icon: <Server className="w-4 h-4 text-obsidian" />,
      items: ['Node.js / Express.js', 'Nest.js', 'FastAPI (Python)', 'Gin (Golang)', 'Flask', 'Laravel (PHP)'],
    },
    {
      title: 'Databases & Query',
      icon: <Database className="w-4 h-4 text-obsidian" />,
      items: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Knex.js Query Builder'],
    },
    {
      title: 'DevOps & Deployment',
      icon: <Cloud className="w-4 h-4 text-obsidian" />,
      items: ['Docker Containers', 'GitHub Actions (CI/CD)', 'Google Cloud Platform (GCP)', 'Vercel Edge', 'Git/GitHub'],
    },
  ]

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
            CONNECT_STACK_SPEC://FULL-SPECTRUM-2026
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 text-obsidian">
            <span className="inline-block w-2 h-2 rounded-full bg-obsidian animate-ping" />
            STATUS: PRODUCTION ACTIVE
          </span>
          <span className="text-medium-gray hidden sm:inline">|</span>
          <span className="text-medium-gray hidden sm:inline">AI &amp; AGENTIC READY</span>
          <span className="text-medium-gray hidden md:inline">|</span>
          <span className="text-medium-gray hidden md:inline">MULTI-LANGUAGE CORE</span>
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
          01. System Topology &amp; AI Pipeline
        </button>
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`px-5 py-2.5 transition-colors border-r border-border-gray ${
            activeTab === 'telemetry'
              ? 'bg-obsidian text-white font-bold'
              : 'text-medium-gray hover:text-obsidian hover:bg-light-bg'
          }`}
        >
          02. AI Inference &amp; Event Stream
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-5 py-2.5 transition-colors ${
            activeTab === 'matrix'
              ? 'bg-obsidian text-white font-bold'
              : 'text-medium-gray hover:text-obsidian hover:bg-light-bg'
          }`}
        >
          03. Full-Spectrum Tech Matrix
        </button>
      </div>

      {/* Main Interactive Visual Canvas */}
      <div className="p-6 sm:p-8 bg-white relative">
        {activeTab === 'topology' && (
          <div className="space-y-6">
            {/* 4-Layer Architectural Node Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Layer 1: Modern Frontend & Edge */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 01</span>
                  <Activity className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Frontend &amp; Edge UI
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  React.js, Next.js, Vue.js, Svelte.js, Nuxt.js, Yew (Wasm) hosted on Vercel &amp; GCP.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  Tech: SSR / SPA / Edge PWA
                </div>
              </div>

              {/* Layer 2: Polyglot Backend Services */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 02</span>
                  <Server className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Microservices &amp; API
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  FastAPI (Python), Gin (Golang), Nest.js, Express, Flask &amp; Laravel.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  Runtime: Docker / REST / gRPC
                </div>
              </div>

              {/* Layer 3: AI, CV & Agentic Engine */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 03</span>
                  <Cpu className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Agentic AI &amp; Vision Core
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  YOLO, OCR, OpenCV, PyTorch, TF, GraphRAG &amp; Tool-Calling Agents.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  Inference: FastAPI Model Serving
                </div>
              </div>

              {/* Layer 4: Relational & Vector Persistence */}
              <div className="border border-border-gray p-4 bg-light-bg rounded-subtle hover:border-obsidian transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] text-medium-gray uppercase">LAYER 04</span>
                  <Database className="w-4 h-4 text-obsidian" />
                </div>
                <h4 className="font-bold text-sm tracking-tight text-obsidian mb-1">
                  Databases &amp; Retrieval
                </h4>
                <p className="text-xs text-medium-gray mb-3">
                  PostgreSQL, MySQL, Prisma, Knex.js &amp; Vector Embeddings Index.
                </p>
                <div className="font-mono text-[11px] text-dark-gray bg-white border border-border-gray px-2 py-1 rounded-subtle">
                  ORM: Type-Safe Prisma / Knex
                </div>
              </div>
            </div>

            {/* Polyglot Languages & DevOps Bar */}
            <div className="border border-border-gray p-4 rounded-subtle bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-obsidian" />
                  <span className="font-bold text-sm">Polyglot Language Standard &amp; Automated Delivery</span>
                </div>
                <p className="text-xs text-medium-gray font-mono">
                  Languages: JavaScript, TypeScript, Python, Golang, PHP, Rust, SQL | CI/CD: Docker + GitHub Actions + GCP
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                <span className="border border-obsidian bg-obsidian text-white px-3 py-1.5 rounded-subtle flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero Vendor Lock-in
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="bg-charcoal text-white p-5 rounded-subtle border border-white/10 space-y-2">
              <div className="text-white/40">// REALTIME AI PIPELINE &amp; MODEL SERVING LOGS</div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.082]</span>
                <span className="text-white/60">YOLOv8_VISION:</span>
                <span>Camera feed Line_04 inference completed (14.2ms) - 6 objects detected (TF Lite/OpenCV)</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.088]</span>
                <span className="text-white/60">OCR_PIPELINE:</span>
                <span>Document batch parsed via OCR Pipeline - 12 key/value records structured to PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.094]</span>
                <span className="text-white/60">GRAPHRAG_QUERY:</span>
                <span>Knowledge Graph traversal + Vector Retrieval - 4 entities grounded via Hugging Face embeddings</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.099]</span>
                <span className="text-white/60">AGENTIC_DISPATCH:</span>
                <span>Tool-Calling Agent invoked FastAPI endpoint - automated work order generated &amp; synced</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-medium-gray">[10:42:01.105]</span>
                <span className="text-white/60">DEVOPS_SYNC:</span>
                <span>GitHub Actions CI/CD deployed Docker image to Google Cloud Platform with zero downtime</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">CV INFERENCE SPEED</div>
                <div className="text-lg font-bold text-obsidian">14.2 ms</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">OCR ACCURACY RATE</div>
                <div className="text-lg font-bold text-obsidian">99.4%</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">GRAPHRAG CONTEXT RECALL</div>
                <div className="text-lg font-bold text-obsidian">98.8%</div>
              </div>
              <div className="border border-border-gray p-3 rounded-subtle">
                <div className="text-medium-gray text-[10px]">BUILD PIPELINE RUNTIME</div>
                <div className="text-lg font-bold text-obsidian">42 dtk</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stackCategories.map((cat) => (
                <div key={cat.title} className="border border-border-gray p-4 rounded-subtle bg-light-bg">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-obsidian uppercase mb-3 border-b border-border-gray pb-2">
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] bg-white border border-border-gray px-2 py-1 rounded-subtle text-dark-gray"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Bar */}
            <div className="border border-border-gray p-4 rounded-subtle bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-obsidian">CORE LANGUAGES:</span>
                <span className="text-dark-gray">JavaScript • TypeScript • Python • Golang • PHP • Rust • SQL</span>
              </div>
              <div className="text-medium-gray">
                Verified Production Stacks
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blueprint Footer Bar */}
      <div className="border-t border-border-gray px-4 sm:px-6 py-3 bg-light-bg flex flex-wrap items-center justify-between text-xs font-mono text-medium-gray">
        <span>ARCHITECTURAL DOMAIN: FULL-SPECTRUM SOFTWARE &amp; AGENTIC AI</span>
        <span className="flex items-center gap-1.5 text-obsidian font-semibold">
          Connect Software Development Platform <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  )
}
