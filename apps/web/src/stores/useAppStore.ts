import { create } from 'zustand'

interface AppState {
  activeSection: string
  isContactModalOpen: boolean
  isEstimateModalOpen: boolean
  activeView: 'landing' | 'portal' | 'login'
  notification: string | null
  setActiveSection: (section: string) => void
  setContactModalOpen: (open: boolean) => void
  setEstimateModalOpen: (open: boolean) => void
  setActiveView: (view: 'landing' | 'portal' | 'login') => void
  showNotification: (msg: string) => void
  clearNotification: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: 'hero',
  isContactModalOpen: false,
  isEstimateModalOpen: false,
  activeView: 'landing',
  notification: null,
  setActiveSection: (section) => set({ activeSection: section }),
  setContactModalOpen: (open) => set({ isContactModalOpen: open }),
  setEstimateModalOpen: (open) => set({ isEstimateModalOpen: open }),
  setActiveView: (view) => set({ activeView: view }),
  showNotification: (msg) => {
    set({ notification: msg })
    setTimeout(() => {
      set({ notification: null })
    }, 4000)
  },
  clearNotification: () => set({ notification: null }),
}))
