import { useState } from 'react'
import { ArrowLeft, Shield, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAppStore } from '@/stores/useAppStore'

export function LoginPage() {
  const { setActiveView, showNotification } = useAppStore()
  const [email, setEmail] = useState('lead.architect@enterprise.id')
  const [password, setPassword] = useState('••••••••••••')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    showNotification('Autentikasi SSO Enterprise berhasil. Mengalihkan ke portal...')
    setActiveView('portal')
  }

  return (
    <div className="min-h-screen bg-light-bg flex flex-col justify-center items-center p-4 font-sans">
      <div className="w-full max-w-md bg-white border border-border-gray rounded-card shadow-sm p-8">
        <button
          onClick={() => setActiveView('landing')}
          className="flex items-center gap-1.5 text-xs font-mono text-medium-gray hover:text-obsidian mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Company Profile
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center font-mono font-bold text-sm rounded-subtle">
            K/
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-obsidian block">KINETIK SSO</span>
            <span className="font-mono text-[10px] text-medium-gray tracking-widest uppercase">
              // ZERO-TRUST PORTAL ACCESS
            </span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            id="login-email"
            label="Corporate SSO Identity (Email)"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="login-pass"
            label="Hardware Key / Passcode"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-xs font-mono text-medium-gray pt-1">
            <span className="flex items-center gap-1 text-obsidian">
              <Shield className="w-3.5 h-3.5 text-obsidian" /> MFA Enforced
            </span>
            <span className="cursor-pointer hover:underline">Lupa Kunci?</span>
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full mt-2">
            Masuk ke Client Portal
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-border-gray text-center">
          <span className="font-mono text-[11px] text-medium-gray">
            Route: apps/web/src/app/(auth)/login/page.tsx
          </span>
        </div>
      </div>
    </div>
  )
}
