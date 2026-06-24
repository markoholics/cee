'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      className="py-24 md:py-40 relative overflow-hidden"
      aria-label="Get in touch"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #D4AF37 0%, #7C5CFF 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
          Start here
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-none mb-6">
          Which house can help you?
        </h2>
        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Tell us what you are working on. We will route your enquiry to the
          right team and respond within one business day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-bombay text-base px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-bombay-light active:scale-[0.98] group"
          >
            Start a conversation
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-white/15 text-white/70 px-8 py-4 text-sm font-semibold transition-all duration-200 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            Learn about CEE
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
