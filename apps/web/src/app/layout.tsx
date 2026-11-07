import React from 'react'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { ContactModal } from '@/features/contact/components/ContactModal'
import { useAppStore } from '@/stores/useAppStore'
import { HomePage } from './page'
import { DashboardPage } from './(dashboard)/page'
import { LoginPage } from './(auth)/login/page'
import { CheckCircle2, X } from 'lucide-react'

export function RootLayout() {
  const { activeView, notification, clearNotification } = useAppStore()

  return (
    <div className="min-h-screen flex flex-col bg-white text-obsidian selection:bg-obsidian selection:text-white">
      {/* Toast Notification Bar */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-obsidian text-white border border-white/20 p-4 rounded-subtle shadow-2xl flex items-start gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
          <div className="text-xs font-mono leading-relaxed flex-1">{notification}</div>
          <button
            onClick={clearNotification}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Tutup Notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* View Switching */}
      {activeView === 'portal' ? (
        <DashboardPage />
      ) : activeView === 'login' ? (
        <LoginPage />
      ) : (
        <>
          <Header />
          <main className="flex-1">
            <HomePage />
          </main>
          <Footer />
          <ContactModal />
        </>
      )}
    </div>
  )
}
