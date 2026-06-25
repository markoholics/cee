'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const moments = [
  {
    id: 1,
    label: 'Celebrity Management',
    caption: 'Representing leading talent and creators in television and the internet for digital, OTT and TV projects.',
    house: 'Bombay Dreams',
    houseColor: '#a48333',
  },
  {
    id: 2,
    label: 'Brand Sprint',
    caption: 'Six weeks from brief to pipeline. Three times the qualified leads.',
    house: 'Brandoscopy',
    houseColor: '#5f101c',
  },
  {
    id: 3,
    label: 'Celebrity Brand Launch',
    caption: 'A lifestyle brand built on talent equity. Sold out in 72 hours.',
    house: 'Labl.co',
    houseColor: '#b28442',
  },
  {
    id: 4,
    label: 'AI Workshop',
    caption: '200 executives. One day. Measurable shifts in AI confidence scores.',
    house: 'H²AI Technologies',
    houseColor: '#3c82f5',
  },
  {
    id: 5,
    label: 'CRM Overhaul',
    caption: 'Lifecycle revenue up 40% in the first quarter after relaunch.',
    house: 'Brandoscopy',
    houseColor: '#5f101c',
  },
  {
    id: 6,
    label: 'Licensing Deal',
    caption: 'IP extended into three new product categories without dilution.',
    house: 'Labl.co',
    houseColor: '#b28442',
  },
  {
    id: 7,
    label: 'AI Strategy',
    caption: 'Board-ready AI roadmap. Delivered in three weeks. Approved in one.',
    house: 'H²AI Technologies',
    houseColor: '#3c82f5',
  },
  {
    id: 8,
    label: 'Campaign Launch',
    caption: 'An endorsement deal that tripled brand recall among 18-34 audiences.',
    house: 'Bombay Dreams',
    houseColor: '#a48333',
  },
]

export default function MomentsRail() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 overflow-hidden" aria-label="Moments from our work">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-3">
          Moments
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-black text-white">
          Work worth talking about.
        </h2>
      </div>

      {/* Horizontal scroll container — all cards uniform height */}
      <div
        ref={scrollRef}
        className="flex gap-5 px-6 overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing items-stretch"
        role="list"
        aria-label="Moments cards"
        onMouseDown={(e) => {
          const el = scrollRef.current
          if (!el) return
          const startX = e.pageX - el.offsetLeft
          const startScroll = el.scrollLeft
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft
            el.scrollLeft = startScroll - (x - startX)
          }
          const onUp = () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        {moments.map((moment) => (
          <motion.div
            key={moment.id}
            role="listitem"
            className="flex-shrink-0 w-64 md:w-72 rounded-sm border border-white/5 bg-white/[0.03] p-6 flex flex-col"
            whileHover={{ scale: 1.02, borderColor: `${moment.houseColor}40` }}
            transition={{ duration: 0.2 }}
          >
            {/* House badge */}
            <span
              className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-sm mb-4 self-start"
              style={{
                color: moment.houseColor,
                backgroundColor: `${moment.houseColor}15`,
              }}
            >
              {moment.house}
            </span>

            {/* Label */}
            <h3 className="font-display text-xl font-bold text-white mb-2">
              {moment.label}
            </h3>

            {/* Caption — grows to fill remaining space so cards align at bottom */}
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              {moment.caption}
            </p>

            {/* Colour accent line — always at bottom */}
            <div
              className="mt-6 h-px w-12"
              style={{ backgroundColor: moment.houseColor }}
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-white/20 mt-6 px-6" aria-hidden="true">
        Drag to explore
      </p>
    </section>
  )
}
