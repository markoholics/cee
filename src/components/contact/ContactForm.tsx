'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react'

const houseOptions = [
  {
    value: 'bombay-dreams',
    label: 'Bombay Dreams',
    sub: 'Talent and Entertainment',
    color: '#a48333',
  },
  {
    value: 'brandoscopy',
    label: 'Brandoscopy',
    sub: 'Growth and Marketing',
    color: '#5f101c',
  },
  {
    value: 'labl-co',
    label: 'Labl.co',
    sub: 'Commerce and IP',
    color: '#b28442',
  },
  {
    value: 'h2ai-technologies',
    label: 'H²AI Technologies',
    sub: 'AI and Future Skills',
    color: '#3c82f5',
  },
  {
    value: 'general',
    label: 'General enquiry',
    sub: 'Not sure yet',
    color: '#ffffff',
  },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function HouseSelect({
  value,
  onChange,
  error,
}: {
  value: string
  onChange: (val: string) => void
  error?: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = houseOptions.find((o) => o.value === value)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-left flex items-center justify-between gap-3 focus:outline-none focus:border-white/30 transition-colors duration-200"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select a house"
      >
        {selected ? (
          <span className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: selected.color }}
              aria-hidden="true"
            />
            <span className="text-white">{selected.label}</span>
            <span className="text-white/40 hidden sm:inline">— {selected.sub}</span>
          </span>
        ) : (
          <span className="text-white/25">Select a house...</span>
        )}
        <ChevronDown
          size={16}
          className={`text-white/40 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            aria-label="House options"
            className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#141414] border border-white/10 overflow-hidden shadow-2xl"
          >
            {houseOptions.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={value === opt.value}
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors duration-150 group"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: opt.color }}
                  aria-hidden="true"
                />
                <span className="text-white text-sm font-medium">{opt.label}</span>
                <span className="text-white/40 text-xs ml-1">— {opt.sub}</span>
                {value === opt.value && (
                  <span className="ml-auto text-white/60 text-xs">Selected</span>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {error && (
        <p id="house-error" className="text-xs text-red-400 mt-1.5" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    'w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors duration-200'
  const labelClasses = 'block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2'

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 p-8 border border-white/20 bg-white/[0.03]"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle2 size={32} className="text-white" aria-hidden="true" />
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
            <p id="name-error" className="text-xs text-red-400 mt-1.5" role="alert">
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
            <p id="email-error" className="text-xs text-red-400 mt-1.5" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* House — custom dropdown */}
        <div>
          <label className={labelClasses}>
            Which house?
          </label>
          <HouseSelect
            value={fields.house}
            onChange={(val) => {
              setFields((f) => ({ ...f, house: val }))
              if (errors.house) setErrors((er) => ({ ...er, house: undefined }))
            }}
            error={errors.house}
          />
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
            <p id="message-error" className="text-xs text-red-400 mt-1.5" role="alert">
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
              className="flex items-start gap-3 p-4 border border-white/20 bg-white/5"
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle size={16} className="text-white flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-white/80">{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full bg-white text-black px-6 py-4 text-sm font-semibold transition-all duration-200 hover:bg-white/90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
