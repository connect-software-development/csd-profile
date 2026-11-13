import { useState } from 'react'
import { UserSession } from '@/types/rbac.types'

export function useAuthSession() {
  const [session] = useState<UserSession>({
    id: 'usr_enterprise_01',
    email: 'principal.architect@connectsoftware.dev',
    fullName: 'Aditya Pratama, M.Sc.',
    organization: 'Connect Software Development',
    role: 'superadmin',
    permissions: ['all:read', 'all:write', 'architecture:deploy'],
  })

  return { session, isAuthenticated: true }
}
