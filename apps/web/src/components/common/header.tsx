import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Terminal, ShieldCheck } from 'lucide-react'
import { Container } from './container'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { setContactModalOpen, setEstimateModalOpen, activeView, setActiveView } = useAppStore()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Studi Kasus', href: '#case-studies' },
    { label: 'Arsitektur & Tech', href: '#architecture' },
    { label: 'Estimasi Proyek', href: '#estimator' },
  ]

  const handleNavClick = (href: string) => {
    setActiveView('landing')
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white border-b ${
        isScrolled ? 'border-border-gray shadow-sm py-3.5' : 'border-border-gray py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setActiveView('landing')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 text-left group"
          >
            <img
              src="/Connect Logo.jpg"
              alt="Connect Software Development Logo"
              className="h-9 w-auto max-h-9 object-contain rounded-subtle border border-border-gray/60"
            />
            <div>
              <span className="font-heading font-bold text-lg tracking-tight text-obsidian block leading-tight">
                CONNECT
              </span>
              <span className="font-mono text-[10px] tracking-widest text-medium-gray uppercase block">
                SOFTWARE DEVELOPMENT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="relative py-1 text-sm font-medium text-obsidian transition-colors hover:text-dark-gray group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-obsidian transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Portal Demo Switcher (Route Standard RBAC preview) */}
            <button
              onClick={() => setActiveView(activeView === 'portal' ? 'landing' : 'portal')}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-subtle border flex items-center gap-1.5 transition-colors ${
                activeView === 'portal'
                  ? 'bg-obsidian text-white border-obsidian'
                  : 'bg-light-bg text-dark-gray border-border-gray hover:border-obsidian'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{activeView === 'portal' ? 'Lihat Website' : 'Client Portal'}</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setEstimateModalOpen(true)}
              className="text-xs uppercase font-mono tracking-wider font-semibold px-4 py-2 text-obsidian border border-border-gray hover:border-obsidian rounded-subtle transition-colors"
            >
              Kalkulator Scope
            </button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => setContactModalOpen(true)}
              iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Konsultasi Solusi
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setActiveView(activeView === 'portal' ? 'landing' : 'portal')}
              className="p-2 border border-border-gray rounded-subtle text-xs font-mono"
            >
              {activeView === 'portal' ? 'Web' : 'Portal'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-obsidian border border-border-gray rounded-subtle hover:bg-light-bg"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border-gray space-y-3 pb-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-sm font-medium text-obsidian border-b border-border-gray/50"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setEstimateModalOpen(true)
                }}
              >
                Kalkulator Scope & Anggaran
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setContactModalOpen(true)
                }}
              >
                Mulai Konsultasi Arsitektur
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
