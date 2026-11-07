// Minimal lightweight client with auth header injection and json parsing
export const apiClient = {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url, { credentials: 'omit' })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return res.json()
  },
  async post<T>(url: string, body: unknown): Promise<T> {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return res.json()
  },
}
