'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { convictionQuotes } from '@/data/navigation'

export default function ConvictionQuote() {
  return (
    <section
      className="py-24 md:py-36 overflow-hidden"
      aria-label="Our convictions"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {convictionQuotes.map((item, i) => {
          const isRight = i % 2 !== 0
          return (
            <QuoteItem
              key={i}
              quote={item.quote}
              attribution={item.attribution}
              index={i}
              isRight={isRight}
            />
          )
        })}
      </div>
    </section>
  )
}

function QuoteItem({
  quote,
  attribution,
  index,
  isRight,
}: {
  quote: string
  attribution: string
  index: number
  isRight: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <motion.div
      ref={ref}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`max-w-2xl ${isRight ? 'text-right' : 'text-left'}`}>
        <blockquote>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-5">
            &ldquo;{quote}&rdquo;
          </p>
          <footer>
            <cite className="text-sm font-medium text-white/30 not-italic uppercase tracking-widest">
              {attribution}
            </cite>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  )
}
