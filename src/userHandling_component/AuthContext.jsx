// I DO NOT KNOW WHAT THIS SCRIPT IS DOING


/**
 * MY ASSIGNMENT — Authentication (session state)
 * Manages login, logout, register, and who is logged in (patron / admin / employee).
 
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getCurrentUser, login as apiLogin, logout as apiLogout, register as apiRegister } from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const current = await getCurrentUser()
      setUser(current)
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const login = useCallback(async (username, password) => {
    const account = await apiLogin(username, password)
    setUser(account)
    return account
  }, [])

  const register = useCallback(async (payload) => {
    const account = await apiRegister(payload)
    setUser(account)
    return account
  }, [])

  const logout = useCallback(async () => {
    await apiLogout()
    setUser(null)
  }, [])

  const value = useMemo(() => ({
    user,
    loading,
    login,
    register,
    logout,
    refresh,
    isAuthenticated: Boolean(user),
    isAdmin: user?.role === 'admin',
    isEmployee: user?.role === 'employee',
    isPatron: user?.role === 'patron',
    canShop: user?.role === 'patron' || !user,
  }), [user, loading, login, register, logout, refresh])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
*/