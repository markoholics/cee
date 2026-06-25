'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [scrollLocked, setScrollLocked] = useState(true)
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollLocked(false)
      return
    }
    document.body.style.overflow = 'hidden'
    lockTimerRef.current = setTimeout(() => {
      document.body.style.overflow = ''
      setScrollLocked(false)
    }, 1200)
    return () => {
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current)
      document.body.style.overflow = ''
    }
  }, [prefersReducedMotion])

  const containerVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
      }

  const itemVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base"
      aria-label="Hero section"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(164,131,51,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-6"
          variants={itemVariants}
        >
          Creative Entertainment Enterprises
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8 text-white"
          variants={itemVariants}
        >
          Talent. Brands.
          <br className="hidden sm:block" />
          Commerce. Intelligence.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          variants={itemVariants}
        >
          One legal entity. Four operating houses. Built to take human
          potential further.
        </motion.p>

        {/* House colour indicators */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          variants={itemVariants}
          aria-label="Four houses colour indicator"
        >
          {[
            { color: '#a48333', label: 'Bombay Dreams' },
            { color: '#5f101c', label: 'Brandoscopy' },
            { color: '#b28442', label: 'Labl.co' },
            { color: '#3c82f5', label: 'H²AI Technologies' },
          ].map(({ color, label }) => (
            <span
              key={label}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
              title={label}
              aria-label={label}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll arrow — no label text */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollLocked ? 0 : 0.5 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
