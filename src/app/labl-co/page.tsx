import type { Metadata } from 'next'
import { houseById } from '@/data/houses'
import HouseHero from '@/components/house/HouseHero'
import ServicePillars from '@/components/house/ServicePillars'
import ICPSection from '@/components/house/ICPSection'
import HoverSwapGrid from '@/components/house/HoverSwapGrid'
import HouseCTA from '@/components/house/HouseCTA'

export const metadata: Metadata = {
  title: 'Labl.co | Commerce and IP House',
  description:
    'Labl.co by CEE. Celebrity brands, product development, licensing and merchandising, e-commerce ventures. Where intellectual property becomes product.',
}

export default function LablCoPage() {
  const house = houseById('labl-co')!
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
