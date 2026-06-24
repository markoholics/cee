export type NavItem = {
  label: string
  href: string
  accentColor?: string
  accentClass?: string
  isHouse?: boolean
}

export const navItems: NavItem[] = [
  {
    label: 'Bombay Dreams',
    href: '/bombay-dreams',
    accentColor: '#D4AF37',
    accentClass: 'bombay',
    isHouse: true,
  },
  {
    label: 'Brandoscopy',
    href: '/brandoscopy',
    accentColor: '#00D9D4',
    accentClass: 'brandoscopy',
    isHouse: true,
  },
  {
    label: 'Labl.co',
    href: '/labl-co',
    accentColor: '#FF4D6D',
    accentClass: 'labl',
    isHouse: true,
  },
  {
    label: 'H²AI',
    href: '/h2ai-technologies',
    accentColor: '#7C5CFF',
    accentClass: 'h2ai',
    isHouse: true,
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const partners = [
  'Partner Alpha',
  'Partner Beta',
  'Partner Gamma',
  'Partner Delta',
  'Partner Epsilon',
  'Partner Zeta',
  'Partner Eta',
  'Partner Theta',
]

export const convictionQuotes = [
  {
    quote:
      'Great talent, great brands and great technology are not separate conversations. They are one.',
    attribution: 'CEE founding principle',
  },
  {
    quote: 'We build things that outlast the campaign cycle.',
    attribution: 'Brandoscopy',
  },
  {
    quote: 'AI should amplify human ambition, never replace human judgement.',
    attribution: 'H²AI Technologies',
  },
  {
    quote: 'The best celebrity brand is one the talent would buy themselves.',
    attribution: 'Labl.co',
  },
]
