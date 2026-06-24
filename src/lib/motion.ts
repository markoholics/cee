import type { Variants } from 'framer-motion'

export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  snappy: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
  inOut: [0.76, 0, 0.24, 1],
} as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: ease.smooth },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.smooth },
  },
}

export const reducedMotionVariants = (variants: Variants): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
})
