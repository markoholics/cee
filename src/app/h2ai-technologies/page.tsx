import type { Metadata } from 'next'
import { houseById } from '@/data/houses'
import HouseHero from '@/components/house/HouseHero'
import ServicePillars from '@/components/house/ServicePillars'
import ICPSection from '@/components/house/ICPSection'
import HouseCTA from '@/components/house/HouseCTA'

export const metadata: Metadata = {
  title: 'H²AI Technologies | AI and Future Skills House',
  description:
    'H²AI Technologies by CEE. AI education and training, consulting, corporate workshops, certifications and strategy advisory. Human-first AI.',
}

export default function H2AIPage() {
  const house = houseById('h2ai-technologies')!
  return (
    <>
      <HouseHero house={house} />
      <ServicePillars house={house} />
      <ICPSection house={house} />
      <HouseCTA house={house} />
    </>
  )
}
