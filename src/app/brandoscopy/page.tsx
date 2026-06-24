import type { Metadata } from 'next'
import { houseById } from '@/data/houses'
import HouseHero from '@/components/house/HouseHero'
import ServicePillars from '@/components/house/ServicePillars'
import ICPSection from '@/components/house/ICPSection'
import HouseCTA from '@/components/house/HouseCTA'

export const metadata: Metadata = {
  title: 'Brandoscopy | Growth and Marketing House',
  description:
    'Brandoscopy by CEE. Marketing consulting, demand generation, growth marketing, CRM and revenue operations. Growth without guesswork.',
}

export default function BrandoscopyPage() {
  const house = houseById('brandoscopy')!
  return (
    <>
      <HouseHero house={house} />
      <ServicePillars house={house} />
      <ICPSection house={house} />
      <HouseCTA house={house} />
    </>
  )
}
