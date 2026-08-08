'use client'

import { useEffect, useState } from 'react'

export default function RotatePrompt() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      // Show only on narrow portrait screens (mobile)
      const isPortrait = window.innerHeight > window.innerWidth
      const isMobile = window.innerWidth < 768
      setVisible(isPortrait && isMobile)
    }

    check()
    window.addEventListener('resize', check)
    window.addEventListener('orientationchange', check)
    return () => {
      window.removeEventListener('resize', check)
      window.removeEventListener('orientationchange', check)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A0A0B]"
      role="alert"
      aria-live="polite"
      aria-label="Please rotate your device for the best experience"
    >
      {/* Animated phone icon */}
      <div className="mb-8" aria-hidden="true">
        <svg
          viewBox="0 0 120 120"
          width="120"
          height="120"
          className="rotate-phone-anim"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phone body */}
          <rect
            x="30"
            y="10"
            width="44"
            height="76"
            rx="6"
            stroke="white"
            strokeWidth="4"
          />
          {/* Speaker slot */}
          <rect x="46" y="17" width="12" height="3" rx="1.5" fill="white" />
          {/* Screen */}
          <rect x="34" y="25" width="36" height="52" rx="2" fill="white" fillOpacity="0.08" />
          {/* Home button */}
          <circle cx="52" cy="84" r="4" stroke="white" strokeWidth="3" />

          {/* Rotation arc arrow */}
          <path
            d="M 88 30 A 38 38 0 0 1 90 60"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <polyline
            points="85,58 90,65 96,60"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="text-center px-8">
        <p className="text-white font-display font-black text-2xl tracking-tight leading-none mb-1">
          PLEASE
        </p>
        <p className="text-white font-display font-black text-2xl tracking-tight leading-none mb-1">
          ROTATE
        </p>
        <p className="text-white font-display font-black text-2xl tracking-tight leading-none mb-1">
          YOUR
        </p>
        <p className="text-white font-display font-black text-2xl tracking-tight leading-none">
          PHONE
        </p>
      </div>

      {/* CEE badge */}
      <div className="absolute bottom-10 opacity-30">
        <p className="text-white text-xs font-semibold uppercase tracking-[0.3em]">
          The CEE Company
        </p>
      </div>

    </div>
  )
}
