'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import type { House } from '@/data/houses'

// Lazy-loaded scenes per house
const sceneMap: Record<string, React.ComponentType> = {
  'bombay-dreams': dynamic(() => import('@/components/three/BombayDreamsScene'), { ssr: false }),
  brandoscopy: dynamic(() => import('@/components/three/BrandoscopyScene'), { ssr: false }),
  'labl-co': dynamic(() => import('@/components/three/LablScene'), { ssr: false }),
  'h2ai-technologies': dynamic(() => import('@/components/three/H2AIScene'), { ssr: false }),
}

interface HouseHeroProps {
  house: House
}

export default function HouseHero({ house }: HouseHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const SceneComponent = sceneMap[house.id]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  }

  const itemVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label={`${house.name} hero`}
      style={{ background: `radial-gradient(ellipse at 70% 50%, ${house.accentColor}0D 0%, transparent 60%)` }}
    >
      {/* 3D scene background */}
      {SceneComponent && (
        <div
          className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-80"
          aria-hidden="true"
        >
          <SceneComponent />
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* House tag */}
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-5"
            style={{ color: house.accentColor }}
            variants={itemVariants}
          >
            {house.tagline}
          </motion.p>

          {/* House name */}
          <motion.h1
            className="font-display text-5xl md:text-7xl font-black text-white leading-none mb-6"
            variants={itemVariants}
          >
            {house.name}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            variants={itemVariants}
          >
            {house.description}
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8"
            variants={itemVariants}
            aria-label={`${house.name} key metrics`}
          >
            {house.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display text-3xl font-black"
                  style={{ color: house.accentColor }}
                >
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
