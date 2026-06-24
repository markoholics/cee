'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { House } from '@/data/houses'

// PLACEHOLDER: replace with real showcase items per house
const showcaseItems = [
  {
    id: 1,
    calmLabel: 'Campaign 01',
    activeLabel: 'Campaign in full motion',
    calmDesc: 'A brand alignment project across three channels.',
    activeDesc: 'Launched to 4M impressions in the first 48 hours. Sold out by day five.',
  },
  {
    id: 2,
    calmLabel: 'Campaign 02',
    activeLabel: 'The pivot that worked',
    calmDesc: 'Mid-flight creative optimisation.',
    activeDesc: 'CTR improved 3.2x. Cost per acquisition dropped 40%.',
  },
  {
    id: 3,
    calmLabel: 'Campaign 03',
    activeLabel: 'Built for legacy',
    calmDesc: 'A long-form content partnership.',
    activeDesc: 'Still generating organic traffic 18 months after publication.',
  },
  {
    id: 4,
    calmLabel: 'Campaign 04',
    activeLabel: 'The collaboration',
    calmDesc: 'Two brands. One shared audience.',
    activeDesc: 'Net promoter score rose 22 points post-campaign.',
  },
]

interface HoverSwapGridProps {
  house: House
}

function SwapCard({
  item,
  accentColor,
}: {
  item: typeof showcaseItems[0]
  accentColor: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden border border-white/5 bg-white/[0.02] p-8 cursor-pointer min-h-[180px] flex flex-col justify-between"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`${item.calmLabel}: hover for details`}
      style={{
        borderColor: hovered ? `${accentColor}40` : undefined,
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background glow on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(ellipse at center, ${accentColor}12 0%, transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Calm state */}
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.div
            key="calm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: accentColor }}
            >
              {item.calmLabel}
            </p>
            <p className="text-white/40 text-sm">{item.calmDesc}</p>
          </motion.div>
        ) : (
          /* Active state */
          <motion.div
            key="active"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="relative z-10"
          >
            <p
              className="font-display text-xl font-bold text-white mb-3"
            >
              {item.activeLabel}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.activeDesc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accent line */}
      <div
        className="relative z-10 mt-auto pt-6"
        aria-hidden="true"
      >
        <motion.div
          className="h-px"
          style={{ backgroundColor: accentColor }}
          animate={{ width: hovered ? '100%' : '24px' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default function HoverSwapGrid({ house }: HoverSwapGridProps) {
  return (
    <section
      className="py-20 md:py-32 border-t border-white/5"
      aria-label="Work showcase"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: house.accentColor }}
          >
            Showcase
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white">
            Hover to see the story.
          </h2>
          {/* PLACEHOLDER: replace grid items with real case study data */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showcaseItems.map((item) => (
            <SwapCard key={item.id} item={item} accentColor={house.accentColor} />
          ))}
        </div>
      </div>
    </section>
  )
}
