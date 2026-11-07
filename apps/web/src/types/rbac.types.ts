export type UserRole = 'superadmin' | 'enterprise_lead' | 'client_stakeholder' | 'engineer'

export interface RBACPermission {
  id: string
  name: string
  description: string
}

export interface UserSession {
  id: string
  email: string
  fullName: string
  organization: string
  role: UserRole
  permissions: string[]
}
