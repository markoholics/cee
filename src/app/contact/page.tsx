import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact CEE | Get in Touch',
  description:
    'Contact Creative Entertainment Enterprises. Tell us which house you need and we will put the right team in front of you within one business day.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 border-b border-white/5" aria-label="Contact us">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-none mb-6">
            Start a conversation.
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-xl">
            Tell us what you are working on. We will route your enquiry to the
            right house and respond within one business day.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24" aria-label="Enquiry form">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: contact info */}
            <div>
              <h2 className="font-display text-2xl font-black text-white mb-8">
                Which house do you need?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Bombay Dreams',
                    tagline: 'Talent and Entertainment',
                    color: '#D4AF37',
                    desc: 'Talent management, celebrity partnerships, brand endorsements, events.',
                  },
                  {
                    name: 'Brandoscopy',
                    tagline: 'Growth and Marketing',
                    color: '#00D9D4',
                    desc: 'Marketing consulting, demand generation, growth, CRM, RevOps.',
                  },
                  {
                    name: 'Labl.co',
                    tagline: 'Commerce and IP',
                    color: '#FF4D6D',
                    desc: 'Celebrity brands, product development, licensing, e-commerce.',
                  },
                  {
                    name: 'H²AI Technologies',
                    tagline: 'AI and Future Skills',
                    color: '#7C5CFF',
                    desc: 'AI education, consulting, workshops, certifications, strategy.',
                  },
                ].map((h) => (
                  <div key={h.name} className="flex gap-4">
                    <div
                      className="w-1 flex-shrink-0 rounded-sm mt-1"
                      style={{ backgroundColor: h.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-white text-sm">{h.name}</p>
                      <p className="text-xs font-medium mb-1" style={{ color: h.color }}>
                        {h.tagline}
                      </p>
                      <p className="text-white/40 text-xs leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <Suspense fallback={<div className="text-white/30 text-sm">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
