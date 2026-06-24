'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion'
import { houses } from '@/data/houses'

export default function ProofSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      className="py-20 md:py-32 border-t border-white/5"
      aria-label="Our track record"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5"
        >
          {houses.map((house) =>
            house.stats.map((stat, si) =>
              si === 0 ? (
                <motion.div
                  key={`${house.id}-${si}`}
                  variants={fadeUp}
                  className="bg-base p-8 md:p-12 flex flex-col gap-2"
                >
                  <p
                    className="font-display text-3xl md:text-5xl font-black"
                    style={{ color: house.accentColor }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mt-2 opacity-40"
                    style={{ color: house.accentColor }}
                  >
                    {house.name}
                  </p>
                </motion.div>
              ) : null
            )
          )}
        </motion.div>

        {/* All stats below */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-px grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5"
        >
          {houses.map((house) =>
            house.stats.slice(1).map((stat, si) => (
              <motion.div
                key={`${house.id}-extra-${si}`}
                variants={fadeUp}
                className="bg-base p-8 md:p-12 flex flex-col gap-2 border-t border-white/5"
              >
                <p
                  className="font-display text-3xl md:text-4xl font-black"
                  style={{ color: house.accentColor }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm">{stat.label}</p>
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mt-2 opacity-40"
                  style={{ color: house.accentColor }}
                >
                  {house.name}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
