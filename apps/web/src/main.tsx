import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RootLayout } from '@/app/layout'
import { ErrorBoundary } from '@/components/feedback/error-boundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RootLayout />
    </ErrorBoundary>
  </React.StrictMode>
)
