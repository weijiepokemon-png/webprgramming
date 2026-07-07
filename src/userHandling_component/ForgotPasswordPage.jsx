import { useState } from 'react'
import { Link } from 'react-router-dom'
import { recoverPassword } from '../api/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setMessage('')
    try {
      const result = await recoverPassword(email)
      setMessage(result.message)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="panel auth-panel">
      <h1>Account recovery</h1>
      <p>Enter your email and we will send mock recovery instructions.</p>

      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {error && <p className="field-error" role="alert">{error}</p>}
        {message && <p className="status-message" role="status">{message}</p>}
        <button type="submit" className="button">Send recovery email</button>
      </form>

      <p><Link to="/login">Back to sign in</Link></p>
    </section>
  )
}
