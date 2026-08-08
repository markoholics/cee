'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { houses } from '@/data/houses'
import { hexToRgbString } from '@/lib/utils'

function HouseSection({ house, index }: { house: typeof houses[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.12, 0.12, 0]
  )

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [60, -60])

  const isEven = index % 2 === 0

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      id={`house-${house.id}`}
    >
      {/* Background colour wash on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: house.accentColor,
          opacity: backgroundOpacity,
        }}
        aria-hidden="true"
      />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${house.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${house.accentColor} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-24">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            isEven ? '' : 'lg:grid-flow-col-dense'
          }`}
        >
          {/* Text content */}
          <motion.div
            style={{ y }}
            className={isEven ? 'lg:order-1' : 'lg:order-2'}
          >
            {/* House number */}
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 opacity-40"
              style={{ color: house.accentColor }}
            >
              House 0{index + 1}
            </p>

            {/* House name */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-4 text-white">
              {house.name}
            </h2>

            {/* Tagline */}
            <p
              className="text-sm font-medium uppercase tracking-widest mb-6"
              style={{ color: house.accentColor }}
            >
              {house.tagline}
            </p>

            {/* Description */}
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              {house.description}
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 mb-10" aria-label={`${house.name} capabilities`}>
              {house.services.slice(0, 4).map((service) => (
                <span
                  key={service.title}
                  className="px-3 py-1.5 text-xs font-medium border rounded-sm transition-colors duration-200"
                  style={{
                    borderColor: `${house.accentColor}40`,
                    color: house.accentColor,
                    backgroundColor: `${house.accentColor}08`,
                  }}
                >
                  {service.title}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={house.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold group transition-colors duration-200"
              style={{ color: house.accentColor }}
              aria-label={`Explore ${house.name} (opens external site)`}
            >
              Explore {house.name}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* Visual accent — abstract shape */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-40, 40]) }}
            className={`hidden lg:flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            aria-hidden="true"
          >
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border opacity-10 animate-pulse"
                style={{ borderColor: house.accentColor }}
              />
              {/* Mid ring */}
              <div
                className="absolute inset-8 rounded-full border opacity-20"
                style={{ borderColor: house.accentColor }}
              />
              {/* Inner glow */}
              <div
                className="absolute inset-16 rounded-full opacity-30"
                style={{
                  backgroundColor: house.accentColor,
                  filter: 'blur(24px)',
                }}
              />
              {/* Stats */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                {house.stats.slice(0, 1).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="font-display text-4xl font-black"
                      style={{ color: house.accentColor }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/40 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function HouseShowcase() {
  return (
    <section aria-label="Our four houses">
      {houses.map((house, index) => (
        <HouseSection key={house.id} house={house} index={index} />
      ))}
    </section>
  )
}
