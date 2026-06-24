'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion'

// Lazy-load the 3D scene, no SSR
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full" aria-hidden="true" />,
})

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [scrollLocked, setScrollLocked] = useState(true)
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Brief scroll-lock moment on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollLocked(false)
      return
    }

    // Lock scroll for 1.2s to let the scene animate in
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
          transition: { staggerChildren: 0.15, delayChildren: 0.4 },
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
      {/* 3D scene background */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        aria-hidden="true"
      >
        <HeroScene />
      </div>

      {/* Radial gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-base/40 to-base/80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-6"
          variants={itemVariants}
        >
          Creative Entertainment Enterprises
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8"
          variants={itemVariants}
        >
          <span className="text-gradient-bombay">Talent.</span>{' '}
          <span className="text-gradient-brandoscopy">Brands.</span>{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient-labl">Commerce.</span>{' '}
          <span className="text-gradient-h2ai">Intelligence.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          variants={itemVariants}
        >
          One legal entity. Four operating houses. Built to take human
          potential further.
        </motion.p>

        {/* House colour dots */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          variants={itemVariants}
          aria-label="Four houses colour indicator"
        >
          {[
            { color: '#D4AF37', label: 'Bombay Dreams' },
            { color: '#00D9D4', label: 'Brandoscopy' },
            { color: '#FF4D6D', label: 'Labl.co' },
            { color: '#7C5CFF', label: 'H²AI Technologies' },
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollLocked ? 0 : 0.5 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">
          Scroll
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
