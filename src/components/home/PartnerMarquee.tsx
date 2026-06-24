'use client'

import { useReducedMotion } from 'framer-motion'
import { partners } from '@/data/navigation'

// Double the list for seamless loop
const doubledPartners = [...partners, ...partners]

export default function PartnerMarquee() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-16 border-t border-b border-white/5 overflow-hidden"
      aria-label="Partner organisations"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/20">
          Trusted by
        </p>
      </div>

      <div className="relative flex overflow-hidden" aria-hidden={prefersReducedMotion ? undefined : 'true'}>
        {/* First track */}
        <div
          className={`flex gap-12 shrink-0 ${
            prefersReducedMotion ? '' : 'animate-marquee'
          }`}
          style={
            prefersReducedMotion
              ? { flexWrap: 'wrap', padding: '0 24px', gap: '24px' }
              : {}
          }
          aria-label="Partner names"
        >
          {doubledPartners.map((name, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-6"
            >
              {/* PLACEHOLDER: replace with actual partner logos via <Image> */}
              <div
                className="w-5 h-5 rounded-sm bg-white/10"
                aria-hidden="true"
              />
              <span className="text-white/25 text-sm font-medium whitespace-nowrap hover:text-white/50 transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Second track — only shown for animation */}
        {!prefersReducedMotion && (
          <div
            className="flex gap-12 shrink-0 animate-marquee2 absolute top-0 left-0"
            aria-hidden="true"
          >
            {doubledPartners.map((name, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 flex items-center gap-3 px-6"
              >
                <div className="w-5 h-5 rounded-sm bg-white/10" aria-hidden="true" />
                <span className="text-white/25 text-sm font-medium whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
