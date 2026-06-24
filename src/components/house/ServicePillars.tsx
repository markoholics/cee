'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Star,
  Handshake,
  BadgeCheck,
  Sparkles,
  LineChart,
  TrendingUp,
  Zap,
  Users,
  Settings2,
  Crown,
  Package,
  FileSignature,
  ShoppingBag,
  GraduationCap,
  Brain,
  Presentation,
  Award,
  Map,
  BookOpen,
} from 'lucide-react'
import type { House } from '@/data/houses'
import { staggerContainer, fadeUp } from '@/lib/motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  Star,
  Handshake,
  BadgeCheck,
  Sparkles,
  LineChart,
  TrendingUp,
  Zap,
  Users,
  Settings2,
  Crown,
  Package,
  FileSignature,
  ShoppingBag,
  GraduationCap,
  Brain,
  Presentation,
  Award,
  Map,
  BookOpen,
}

interface ServicePillarsProps {
  house: House
}

export default function ServicePillars({ house }: ServicePillarsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      className="py-20 md:py-32 border-t border-white/5"
      aria-label={`${house.name} services`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
            style={{ color: house.accentColor }}
          >
            What we do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white">
            Service pillars
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Services"
        >
          {house.services.map((service) => {
            const Icon = iconMap[service.icon] || Star
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                role="listitem"
                className="group p-8 border border-white/5 hover:border-opacity-40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                style={
                  {
                    '--house-accent': house.accentColor,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${house.accentColor}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-sm mb-6"
                  style={{ backgroundColor: `${house.accentColor}15` }}
                  aria-hidden="true"
                >
                  <Icon size={18} style={{ color: house.accentColor }} />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-6 h-px w-8 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: house.accentColor }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
