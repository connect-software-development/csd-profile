import { useWorkOrders } from '../hooks/useWorkOrders'
import { WOStatusBadge, WOPriorityBadge } from './WOStatusBadge'
import { Clock, Filter, Plus } from 'lucide-react'

export function WorkOrderTable() {
  const { data, loading } = useWorkOrders()

  return (
    <div className="border border-border-gray bg-white rounded-card overflow-hidden">
      <div className="p-4 sm:p-5 border-b border-border-gray flex flex-wrap items-center justify-between gap-4 bg-light-bg">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-medium-gray block">
            // LIVE CLIENT SPRINT &amp; DELIVERY QUEUE
          </span>
          <h4 className="text-base font-bold text-obsidian tracking-tight">
            Engineering Work Orders &amp; Deployment Sprints
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 border border-border-gray rounded-subtle text-xs font-mono bg-white flex items-center gap-1.5 text-obsidian hover:border-obsidian">
            <Filter className="w-3.5 h-3.5" /> Filter Status
          </button>
          <button className="px-3 py-1.5 bg-obsidian text-white rounded-subtle text-xs font-mono flex items-center gap-1.5 hover:bg-dark-gray">
            <Plus className="w-3.5 h-3.5" /> Tiket Baru
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-light-bg border-b border-border-gray font-mono uppercase text-medium-gray text-[11px]">
            <tr>
              <th className="py-3 px-4">WO Code</th>
              <th className="py-3 px-4">Deskripsi Tugas</th>
              <th className="py-3 px-4">Klien &amp; Sistem Terkait</th>
              <th className="py-3 px-4">Lead Engineer</th>
              <th className="py-3 px-4">Prioritas</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Target Rilis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-gray font-sans">
            {loading ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-medium-gray font-mono">
                  Loading telemetry stream...
                </td>
              </tr>
            ) : (
              data.map((wo) => (
                <tr key={wo.id} className="hover:bg-light-bg/50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-obsidian">{wo.code}</td>
                  <td className="py-3.5 px-4 font-medium text-obsidian max-w-xs">{wo.title}</td>
                  <td className="py-3.5 px-4 text-dark-gray font-mono text-[11px]">{wo.assetName}</td>
                  <td className="py-3.5 px-4 text-dark-gray">{wo.assignedTo}</td>
                  <td className="py-3.5 px-4">
                    <WOPriorityBadge priority={wo.priority} />
                  </td>
                  <td className="py-3.5 px-4">
                    <WOStatusBadge status={wo.status} />
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-medium-gray flex items-center justify-end gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{wo.scheduledDate}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
