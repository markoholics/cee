import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { houses } from '@/data/houses'
import HouseDiagram from '@/components/about/HouseDiagram'

export const metadata: Metadata = {
  title: 'About CEE | Creative Entertainment Enterprises',
  description:
    'The story behind Creative Entertainment Enterprises Pvt Ltd. One legal entity. Four operating houses. Built to take human potential further.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-24 border-b border-white/5"
        aria-label="About CEE"
      >
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">
            About CEE
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-none mb-8">
            One entity.<br />Four houses.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Creative Entertainment Enterprises Pvt Ltd was built on a single conviction:
            that talent, brand growth, commerce and intelligence are not separate
            problems. They are one problem, and they deserve one roof.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 border-b border-white/5" aria-label="Our origin">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bombay mb-4">
                Origin
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-6">
                Why we built it this way.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white/60 leading-relaxed">
                Most entertainment and marketing businesses are built for one lane.
                A talent agency that cannot advise on brand strategy. A marketing
                consultancy that has never negotiated a celebrity contract. A
                commerce business that does not understand the mechanics of fame.
              </p>
              <p className="text-white/60 leading-relaxed">
                CEE was designed from day one to hold all four. Not as a
                conglomerate, but as an integrated operating system where insight
                from one house makes every other house smarter.
              </p>
              <p className="text-white/60 leading-relaxed">
                We are a private limited company headquartered in India. We work
                across entertainment, consumer, technology and professional
                services sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four houses diagram */}
      <section className="py-24 border-b border-white/5" aria-label="The four houses">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-4">
              Structure
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white">
              Four houses. One parent.
            </h2>
          </div>

          <HouseDiagram houses={houses} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" aria-label="Contact CEE">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
            Work with CEE.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Tell us which house you need and we will put the right people in
            the room.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-bombay text-base px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-bombay-light group"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
