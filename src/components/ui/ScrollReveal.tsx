'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: boolean
  once?: boolean
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  stagger = false,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
