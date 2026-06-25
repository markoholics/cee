'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Service {
  title: string
  description: string
}

interface House {
  id: string
  name: string
  href: string
  externalHref: string
  accentColor: string
  tagline: string
  services: Service[]
}

export default function HouseDiagram({ houses }: { houses: House[] }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="border border-white/15 px-8 py-4 text-center">
        <p className="font-display text-2xl font-black text-white">CEE</p>
        <p className="text-white/40 text-xs mt-1">
          Creative Entertainment Enterprises Pvt Ltd
        </p>
      </div>

      <div className="w-px h-8 bg-white/10" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {houses.map((house) => (
          <Link
            key={house.id}
            href={house.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white/5 p-6 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${house.accentColor}40`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
            }}
            aria-label={`Explore ${house.name} (opens external site)`}
          >
            <div
              className="w-8 h-1 mb-5"
              style={{ backgroundColor: house.accentColor }}
              aria-hidden="true"
            />
            <h3 className="font-display text-xl font-black text-white mb-1">
              {house.name}
            </h3>
            <p className="text-xs font-medium mb-4" style={{ color: house.accentColor }}>
              {house.tagline}
            </p>
            <ul className="space-y-1.5">
              {house.services.slice(0, 3).map((s) => (
                <li key={s.title} className="text-xs text-white/40">
                  {s.title}
                </li>
              ))}
            </ul>
            <div
              className="flex items-center gap-1 mt-6 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: house.accentColor }}
            >
              Explore {house.name}
              <ArrowRight size={12} aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
