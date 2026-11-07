import { useState } from 'react'
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react'
import { Modal } from '@/components/ui/modal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAppStore } from '@/stores/useAppStore'

export function ContactModal() {
  const { isContactModalOpen, setContactModalOpen, showNotification } = useAppStore()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    projectScope: 'core_platform',
    estimatedBudget: 'medium',
    message: '',
    requireNDA: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate direct secure API dispatch
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      showNotification('Tiket konsultasi arsitektur berhasil dicatat. Tim Principal Architect akan menghubungi dalam 1x24 jam.')
    }, 900)
  }

  const handleClose = () => {
    setContactModalOpen(false)
    // reset state after animation
    setTimeout(() => {
      setSubmitted(false)
    }, 300)
  }

  return (
    <Modal
      isOpen={isContactModalOpen}
      onClose={handleClose}
      title="Inisiasi Konsultasi Arsitektur"
      subtitle="Diskusikan arsitektur sistem, kelayakan teknis, dan timeline bersama tim Principal Architect kami."
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-12 h-12 bg-obsidian text-white rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-obsidian font-heading">
            Tiket Spesifikasi Berhasil Diterima
          </h4>
          <p className="text-xs text-dark-gray max-w-md mx-auto leading-relaxed">
            Terima kasih, <strong>{formData.fullName}</strong>. NDA standar dan ringkasan awal telah kami kirimkan ke <strong>{formData.email}</strong>. Principal Architect kami akan mengagendakan technical discovery session.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="sm" onClick={handleClose}>
              Tutup & Kembali ke Laman
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="fullName"
              label="Nama Lengkap"
              required
              placeholder="Contoh: Rian Gunawan"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <Input
              id="email"
              type="email"
              label="Email Perusahaan (Work Email)"
              required
              placeholder="rian@nama-perusahaan.co.id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="company"
              label="Nama Perusahaan / Organisasi"
              required
              placeholder="PT Industri Maju Nusantara"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <Input
              id="role"
              label="Jabatan / Peran"
              placeholder="CTO / VP of Engineering / Head of IT"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <label className="block text-xs uppercase tracking-wider font-mono text-dark-gray">
                Kategori Solusi Utama
              </label>
              <select
                className="w-full px-3.5 py-2.5 bg-white border border-border-gray text-obsidian text-sm rounded-subtle focus:outline-none focus:border-obsidian"
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              >
                <option value="core_platform">Core Enterprise Platform & ERP</option>
                <option value="distributed_microservices">Distributed Microservices & Scale</option>
                <option value="cloud_devops">Cloud Migration & Kubernetes SRE</option>
                <option value="ai_data_pipeline">AI Integration & Kafka Streaming</option>
                <option value="architecture_audit">Audit Arsitektur & Keamanan</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="block text-xs uppercase tracking-wider font-mono text-dark-gray">
                Ekspektasi Timeline
              </label>
              <select
                className="w-full px-3.5 py-2.5 bg-white border border-border-gray text-obsidian text-sm rounded-subtle focus:outline-none focus:border-obsidian"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
              >
                <option value="asap">Segera (Dalam 2-4 minggu ke depan)</option>
                <option value="q_next">Kuartal Depan (Q2 / Q3)</option>
                <option value="exploratory">Eksplorasi Anggaran / Preliminary R&D</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="block text-xs uppercase tracking-wider font-mono text-dark-gray">
              Ringkasan Kebutuhan & Problem Teknis
            </label>
            <textarea
              rows={3}
              className="w-full px-3.5 py-2.5 bg-white border border-border-gray text-obsidian text-sm rounded-subtle placeholder:text-medium-gray/60 focus:outline-none focus:border-obsidian font-sans"
              placeholder="Jelaskan secara singkat sistem yang ingin dibangun, perkiraan volume data/traffic, atau bottleneck pada infrastruktur saat ini..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-between border-t border-border-gray pt-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.requireNDA}
                onChange={(e) => setFormData({ ...formData, requireNDA: e.target.checked })}
                className="rounded border-border-gray text-obsidian focus:ring-0 w-4 h-4"
              />
              <span className="text-xs text-dark-gray flex items-center gap-1 font-mono">
                <Shield className="w-3.5 h-3.5 text-obsidian" /> Kirimkan NDA 2-Arah Terlebih Dahulu
              </span>
            </label>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {isSubmitting ? 'Mengirim Data...' : 'Kirim Tiket Konsultasi'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
