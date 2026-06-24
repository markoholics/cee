import type { Metadata } from 'next'
import { houseById } from '@/data/houses'
import HouseHero from '@/components/house/HouseHero'
import ServicePillars from '@/components/house/ServicePillars'
import ICPSection from '@/components/house/ICPSection'
import HoverSwapGrid from '@/components/house/HoverSwapGrid'
import HouseCTA from '@/components/house/HouseCTA'

export const metadata: Metadata = {
  title: 'Bombay Dreams | Talent and Entertainment House',
  description:
    'Bombay Dreams by CEE. Talent management, celebrity partnerships, brand endorsements and live experiences. We represent the people who move culture.',
}

export default function BombayDreamsPage() {
  const house = houseById('bombay-dreams')!
  return (
    <>
      <HouseHero house={house} />
      <ServicePillars house={house} />
      <HoverSwapGrid house={house} />
      <ICPSection house={house} />
      <HouseCTA house={house} />
    </>
  )
}
