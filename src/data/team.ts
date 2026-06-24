export type TeamMember = {
  name: string
  role: string
  house: string | null
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Placeholder Name',
    role: 'Founder and Chief Executive',
    house: null,
    bio: 'Built CEE with a conviction that talent, brands, commerce and intelligence belong under one roof.',
  },
  {
    name: 'Placeholder Name',
    role: 'Managing Director, Bombay Dreams',
    house: 'bombay-dreams',
    bio: 'Two decades in entertainment management across film, music and sport.',
  },
  {
    name: 'Placeholder Name',
    role: 'Managing Director, Brandoscopy',
    house: 'brandoscopy',
    bio: 'Former CMO turned growth architect. Has scaled five companies past Series B.',
  },
  {
    name: 'Placeholder Name',
    role: 'Managing Director, Labl.co',
    house: 'labl-co',
    bio: 'Consumer products veteran who has launched brands across beauty, lifestyle and fashion.',
  },
  {
    name: 'Placeholder Name',
    role: 'Managing Director, H²AI Technologies',
    house: 'h2ai-technologies',
    bio: 'AI researcher and educator committed to demystifying machine intelligence for human benefit.',
  },
]
