'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import type { House } from '@/data/houses'
import { staggerContainer, fadeUp } from '@/lib/motion'

interface ICPSectionProps {
  house: House
}

export default function ICPSection({ house }: ICPSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      className="py-20 md:py-32 border-t border-white/5"
      aria-label={`Who ${house.name} is for`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Heading */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ color: house.accentColor }}
            >
              Ideal for
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight">
              Who this is for.
            </h2>
            <p className="text-white/40 text-base leading-relaxed mt-6 max-w-md">
              {house.name} works best when the ambition is clear and the
              stakes are real. Here is who we do our best work with.
            </p>
          </div>

          {/* ICP cards */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
            role="list"
            aria-label="Ideal client profiles"
          >
            {house.icp.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                role="listitem"
                className="flex gap-4 p-6 border border-white/5 bg-white/[0.02]"
              >
                <CheckCircle2
                  size={20}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: house.accentColor }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-white mb-1.5">
                    {entry.label}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
