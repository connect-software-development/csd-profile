import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in UI boundary:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-border-gray bg-light-bg rounded-subtle text-center">
          <span className="font-mono text-xs uppercase text-red-600 tracking-widest mb-2">
            ERR_BOUNDARY_INTERCEPT
          </span>
          <h2 className="text-xl font-bold text-obsidian mb-2">Komponen Mengalami Kendala</h2>
          <p className="text-sm text-medium-gray max-w-md mb-6">
            Sistem runtime mengisolasi error ini tanpa merusak keseluruhan aplikasi.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-obsidian text-white text-xs uppercase tracking-wider rounded-subtle font-mono"
          >
            Muat Ulang Halaman
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-border-gray/70 rounded-subtle ${className}`} />
}
