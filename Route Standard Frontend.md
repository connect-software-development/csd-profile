apps/web/
├── public/                     # Static assets, PWA icons, manifest.json
│   ├── icons/
│   ├── manifest.json
│   └── sw.js                   # Service worker custom caching
├── src/
│   ├── app/                    # Next.js App Router (Routing Layer ONLY - No heavy logic)
│   │   ├── (auth)/             # Route Group untuk Autentikasi
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/        # Authenticated App Shell & RBAC Routing
│   │   │   ├── layout.tsx      # Dynamic Sidebar & Navbar based on RBAC roles
│   │   │   ├── work-orders/    # Modul Work Order (List, Detail, Create)
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── assets/         # Manajemen Aset & Mesin Pabrik
│   │   │   ├── maintenance/    # Jadwal Preventif & Corrective Maintenance
│   │   │   ├── inventory/      # Suku Cadang & Gudang Sparepart
│   │   │   ├── reports/        # Laporan KPI & Downtime Analitik
│   │   │   └── settings/       # Konfigurasi Pengguna & Hak Akses (RBAC)
│   │   ├── api/                # BFF (Backend for Frontend) NextAuth endpoints
│   │   │   └── auth/[...nextauth]/
│   │   └── layout.tsx          # Root Layout (Providers: Theme, Query, Toast)
│   ├── components/             # Shared & Atomic UI Components lintas fitur
│   │   ├── ui/                 # Shadcn UI Primitives (Button, Modal, Input, Table)
│   │   ├── common/             # Enterprise Layouts (Sidebar, Breadcrumb, Header)
│   │   └── feedback/           # Error Boundary, Skeleton Loaders, Fallbacks
│   ├── features/               # Modular Business Logic (Feature-Driven Architecture)
│   │   ├── work-orders/        # Kapsulasi fitur Work Order
│   │   │   ├── components/     # WorkOrderTable.tsx, WOStatusBadge.tsx
│   │   │   ├── hooks/          # useWorkOrders.ts, useUpdateWOStatus.ts
│   │   │   ├── services/       # workOrderApi.ts (TanStack Query / Axios mutations)
│   │   │   └── types/          # work-order.types.ts
│   │   ├── assets/             # Kapsulasi fitur Asset Management
│   │   ├── maintenance/        # Kapsulasi fitur Preventif / Jadwal
│   │   └── inventory/          # Kapsulasi fitur Inventory Suku Cadang
│   ├── hooks/                  # Global React Hooks (useDebounce, useAuthSession)
│   ├── lib/                    # External library instances & Utils
│   │   ├── apiClient.ts        # Axios instance dengan auto-refresh JWT interceptor
│   │   └── utils.ts            # Tailwind merger (cn), formatting utils
│   ├── stores/                 # Global Client State (Zustand)
│   │   ├── useAppStore.ts
│   │   └── useWorkOrderStore.ts
│   └── types/                  # Global TypeScript interfaces & RBAC definitions
│       └── rbac.types.ts
├── next.config.mjs             # PWA configuration, Security Headers (CSP, HSTS)
├── tailwind.config.ts
└── tsconfig.json