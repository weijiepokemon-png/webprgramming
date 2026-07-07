/**
 * MY ASSIGNMENT — Authentication API
 */
const API_BASE = ''

async function parseJson(response) {
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.error || data.message || 'Request failed')
  }
  return data
}

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })
  return parseJson(response)
}

export async function login(username, password) {
  return apiFetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
}

export async function register(payload) {
  return apiFetch('/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function recoverPassword(email) {
  return apiFetch('/recover', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export async function logout() {
  return apiFetch('/logout', { method: 'POST' })
}

export async function getCurrentUser() {
  const response = await fetch(`${API_BASE}/me`, { credentials: 'include' })
  if (response.status === 401) return null
  return parseJson(response)
}
