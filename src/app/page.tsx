import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import HouseShowcase from '@/components/home/HouseShowcase'
import MomentsRail from '@/components/home/MomentsRail'
import ConvictionQuote from '@/components/home/ConvictionQuote'
import ProofSection from '@/components/home/ProofSection'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Creative Entertainment Enterprises | Talent. Brands. Commerce. Intelligence.',
  description:
    'CEE — Five Houses. One Dynasty. Bombay Dreams (talent), Brandoscopy (luxury brands), Labl.co (commerce), H²AI Technologies (AI) and Markoholics (GTM). Built to further human potential.',
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
            Five Houses. One Dynasty.
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-snug text-white/90 max-w-3xl">
            Creative Entertainment Enterprises Pvt Ltd is the single legal and
            commercial entity behind five operating houses. Each house has its
            own identity, leadership and market focus. All built on the same
            conviction: talent, brands, commerce and intelligence belong under
            one roof.
          </h2>
          <p className="text-white/40 text-lg mt-8 max-w-2xl leading-relaxed">
            Bombay Dreams finds and manages talent. Brandoscopy sculpts personal and luxury brands. Labl.co turns influence into owned product and IP.
            H&#178;AI Technologies powers everything with human-first AI. Markoholics drives GTM and growth for tech startups and enterprises.
          </p>
        </div>
      </section>
      <HouseShowcase />
      <ConvictionQuote />
      <MomentsRail />
      <ProofSection />
<HomeCTA />
    </>
  )
}
