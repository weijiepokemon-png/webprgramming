/*

export const AU_STATES = ['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT']

export function validateAustralianAddress({ streetAddress, suburb, state, postCode }) {
  const errors = {}
  if (!streetAddress?.trim()) errors.streetAddress = 'Street address is required'
  if (!suburb?.trim()) errors.suburb = 'Suburb is required'
  if (!state || !AU_STATES.includes(state)) errors.state = 'Select a valid Australian state'
  if (!/^\d{4}$/.test(String(postCode || ''))) errors.postCode = 'Postcode must be 4 digits'
  return errors
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

*/
