/**
 * MY ASSIGNMENT — Authentication (login page)
 */
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isAuthenticated, user } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    const redirect = user?.role === 'admin'
      ? '/admin/items'
      : user?.role === 'employee'
        ? '/employee'
        : '/account'
    return <Navigate to={redirect} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const account = await login(username, password)
      const redirect = location.state?.from
        || (account.role === 'admin' ? '/admin/items' : account.role === 'employee' ? '/employee' : '/')
      navigate(redirect, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="panel auth-panel">
      <h1>Sign in</h1>
      <p>Use your patron email or staff username.</p>

      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="username">Email or username</label>
        <input
          id="username"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error && <p className="field-error" role="alert">{error}</p>}

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <p>
        <Link to="/register">Create a patron account</Link>
        {' · '}
        <Link to="/forgot-password">Forgot password?</Link>
      </p>

      <div className="demo-credentials">
        <p><strong>Demo accounts</strong></p>
        <ul>
          <li>Patron: jane.l.j.citizen@somemail.com / JCpw</li>
          <li>Admin: adminAccount / adminPW</li>
        </ul>
      </div>
    </section>
  )
}
