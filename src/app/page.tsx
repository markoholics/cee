import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import HouseShowcase from '@/components/home/HouseShowcase'
import MomentsRail from '@/components/home/MomentsRail'
import ConvictionQuote from '@/components/home/ConvictionQuote'
import ProofSection from '@/components/home/ProofSection'
import PartnerMarquee from '@/components/home/PartnerMarquee'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Creative Entertainment Enterprises | Talent. Brands. Commerce. Intelligence.',
  description:
    'CEE is one legal entity with four operating houses: Bombay Dreams (talent), Brandoscopy (growth), Labl.co (commerce) and H²AI Technologies (AI). Built to take human potential further.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        className="py-24 md:py-36 border-t border-white/5"
        aria-label="What CEE is"
      >
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
            One entity. Four houses.
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-snug text-white/90 max-w-3xl">
            Creative Entertainment Enterprises Pvt Ltd is the single legal and
            commercial entity behind four operating houses. Each house has its
            own identity, leadership and market focus. All built on the same
            conviction: talent, brands, commerce and intelligence belong under
            one roof.
          </h2>
          <p className="text-white/40 text-lg mt-8 max-w-2xl leading-relaxed">
            Bombay Dreams finds and manages talent. Brandoscopy builds the
            growth engine. Labl.co turns influence into owned product and IP.
            H&#178;AI Technologies ensures everything is powered by human-first
            artificial intelligence.
          </p>
        </div>
      </section>
      <HouseShowcase />
      <ConvictionQuote />
      <MomentsRail />
      <ProofSection />
      <PartnerMarquee />
      <HomeCTA />
    </>
  )
}
