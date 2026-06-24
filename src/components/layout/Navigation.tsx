'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-base/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-black text-2xl tracking-tight text-white hover:opacity-80 transition-opacity"
            aria-label="CEE — Creative Entertainment Enterprises, go to homepage"
          >
            CEE
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative text-sm font-medium transition-colors duration-200 group',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    )}
                    style={
                      item.accentColor
                        ? ({
                            '--house-accent': item.accentColor,
                          } as React.CSSProperties)
                        : undefined
                    }
                  >
                    {item.label}
                    {/* Accent underline */}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-px transition-all duration-300',
                        item.accentColor
                          ? 'group-hover:w-full w-0'
                          : 'hidden'
                      )}
                      style={
                        item.accentColor
                          ? { backgroundColor: item.accentColor }
                          : undefined
                      }
                      aria-hidden="true"
                    />
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 w-full h-px"
                        style={
                          item.accentColor
                            ? { backgroundColor: item.accentColor }
                            : { backgroundColor: '#fff' }
                        }
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-base flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                href="/"
                className="font-display font-black text-2xl tracking-tight text-white"
                onClick={() => setMobileOpen(false)}
              >
                CEE
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              <ul className="space-y-6" role="list">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block font-display text-3xl font-bold transition-colors duration-200',
                        pathname === item.href
                          ? 'text-white'
                          : 'text-white/50 hover:text-white'
                      )}
                      style={
                        item.accentColor && pathname === item.href
                          ? { color: item.accentColor }
                          : undefined
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.isHouse && (
                      <span
                        className="block text-xs font-medium mt-1 opacity-60"
                        style={item.accentColor ? { color: item.accentColor } : undefined}
                      >
                        {item.href === '/bombay-dreams'
                          ? 'Talent and Entertainment'
                          : item.href === '/brandoscopy'
                          ? 'Growth and Marketing'
                          : item.href === '/labl-co'
                          ? 'Commerce and IP'
                          : 'AI and Future Skills'}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer of overlay */}
            <div className="px-8 py-6 border-t border-white/5">
              <p className="text-white/30 text-xs">
                Creative Entertainment Enterprises Pvt Ltd
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
