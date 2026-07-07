/**
 * MY ASSIGNMENT — Authentication (register page)
 */
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AU_STATES, validateAustralianAddress, validateEmail } from '../utils/validation'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { register, isAuthenticated } = useAuth()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    streetAddress: '',
    suburb: '',
    state: 'NSW',
    postCode: '',
    phoneNumber: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) return <Navigate to="/account" replace />

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateAustralianAddress(form)
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!validateEmail(form.email)) nextErrors.email = 'Enter a valid email address'
    if (form.password.length < 4) nextErrors.password = 'Password must be at least 4 characters'
    if (form.password !== form.confirmPassword) nextErrors.confirmPassword = 'Passwords do not match'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setLoading(true)
    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
        streetAddress: form.streetAddress,
        suburb: form.suburb,
        state: form.state,
        postCode: form.postCode,
        phoneNumber: form.phoneNumber || null,
      })
      navigate('/account')
    } catch (err) {
      setErrors({ form: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="panel auth-panel">
      <h1>Create patron account</h1>
      <form className="form-grid" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend>Account details</legend>
          <label htmlFor="name">Full name</label>
          <input id="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={form.password} onChange={(event) => updateField('password', event.target.value)} />
          {errors.password && <p className="field-error">{errors.password}</p>}

          <label htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} />
          {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}
        </fieldset>

        <fieldset>
          <legend>Australian address</legend>
          <label htmlFor="streetAddress">Street address</label>
          <input id="streetAddress" value={form.streetAddress} onChange={(event) => updateField('streetAddress', event.target.value)} />
          {errors.streetAddress && <p className="field-error">{errors.streetAddress}</p>}

          <label htmlFor="suburb">Suburb</label>
          <input id="suburb" value={form.suburb} onChange={(event) => updateField('suburb', event.target.value)} />
          {errors.suburb && <p className="field-error">{errors.suburb}</p>}

          <label htmlFor="state">State</label>
          <select id="state" value={form.state} onChange={(event) => updateField('state', event.target.value)}>
            {AU_STATES.map((state) => <option key={state} value={state}>{state}</option>)}
          </select>

          <label htmlFor="postCode">Postcode</label>
          <input id="postCode" value={form.postCode} onChange={(event) => updateField('postCode', event.target.value)} />
          {errors.postCode && <p className="field-error">{errors.postCode}</p>}

          <label htmlFor="phoneNumber">Phone (optional)</label>
          <input id="phoneNumber" value={form.phoneNumber} onChange={(event) => updateField('phoneNumber', event.target.value)} />
        </fieldset>

        {errors.form && <p className="field-error" role="alert">{errors.form}</p>}

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Creating account…' : 'Register'}
        </button>
      </form>

      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </section>
  )
}
