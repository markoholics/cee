'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const houseOptions = [
  { value: 'bombay-dreams', label: 'Bombay Dreams — Talent and Entertainment' },
  { value: 'brandoscopy', label: 'Brandoscopy — Growth and Marketing' },
  { value: 'labl-co', label: 'Labl.co — Commerce and IP' },
  { value: 'h2ai-technologies', label: 'H²AI Technologies — AI and Future Skills' },
  { value: 'general', label: 'General enquiry — not sure yet' },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const preselectedHouse = searchParams.get('house') || ''

  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [fields, setFields] = useState({
    name: '',
    email: '',
    house: preselectedHouse,
    message: '',
  })

  const [errors, setErrors] = useState<Partial<typeof fields>>({})

  useEffect(() => {
    if (preselectedHouse) {
      setFields((f) => ({ ...f, house: preselectedHouse }))
    }
  }, [preselectedHouse])

  const validate = () => {
    const newErrors: Partial<typeof fields> = {}
    if (!fields.name.trim()) newErrors.name = 'Please enter your name.'
    if (!fields.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!fields.house) newErrors.house = 'Please select a house.'
    if (!fields.message.trim()) newErrors.message = 'Please tell us what you need.'
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((er) => ({ ...er, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setFormState('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }
      setFormState('success')
    } catch (err: unknown) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const inputClasses =
    'w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-bombay/60 transition-colors duration-200'
  const labelClasses = 'block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2'
  const errorClasses = 'text-xs text-labl mt-1.5'

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 p-8 border border-bombay/30 bg-bombay/5"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle2 size={32} className="text-bombay" aria-hidden="true" />
        <div>
          <h3 className="font-display text-2xl font-black text-white mb-2">
            Message received.
          </h3>
          <p className="text-white/60 leading-relaxed">
            Thank you for reaching out. We will be back in touch within one
            business day.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Full name"
            className={inputClasses}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className={errorClasses} role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClasses}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className={errorClasses} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* House */}
        <div>
          <label htmlFor="house" className={labelClasses}>
            Which house?
          </label>
          <select
            id="house"
            name="house"
            value={fields.house}
            onChange={handleChange}
            className={`${inputClasses} appearance-none`}
            aria-required="true"
            aria-describedby={errors.house ? 'house-error' : undefined}
            aria-invalid={!!errors.house}
          >
            <option value="" disabled>
              Select a house...
            </option>
            {houseOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.house && (
            <p id="house-error" className={errorClasses} role="alert">
              {errors.house}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            What do you need?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={handleChange}
            placeholder="Give us a brief on what you are working on..."
            className={`${inputClasses} resize-none`}
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p id="message-error" className={errorClasses} role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* API error */}
        <AnimatePresence>
          {formState === 'error' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start gap-3 p-4 border border-labl/30 bg-labl/5"
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle size={16} className="text-labl flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-labl">{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full bg-bombay text-base px-6 py-4 text-sm font-semibold transition-all duration-200 hover:bg-bombay-light active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formState === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            'Send enquiry'
          )}
        </button>

        <p className="text-white/20 text-xs leading-relaxed">
          By submitting this form you agree to our{' '}
          <a href="/legal" className="underline hover:text-white/40 transition-colors">
            Privacy Policy
          </a>
          . We will never share your details with third parties without your
          consent.
        </p>
      </div>
    </form>
  )
}
