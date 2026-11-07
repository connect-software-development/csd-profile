export interface MachineAsset {
  id: string
  assetTag: string
  name: string
  facilityLocation: string
  telemetryStatus: 'online' | 'degraded' | 'offline'
  healthScore: number
  lastInspectionDate: string
}
