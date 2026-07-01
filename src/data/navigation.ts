export type NavItem = {
  label: string
  href: string
  accentColor?: string
  accentClass?: string
  isHouse?: boolean
  external?: boolean
}

export const navItems: NavItem[] = [
  {
    label: 'Bombay Dreams',
    href: 'https://www.bombaydreams.co.in/',
    accentColor: '#a48333',
    accentClass: 'bombay',
    isHouse: true,
    external: true,
  },
  {
    label: 'Brandoscopy',
    href: 'https://www.brandoscopy.in/',
    accentColor: '#5f101c',
    accentClass: 'brandoscopy',
    isHouse: true,
    external: true,
  },
  {
    label: 'Labl.co',
    href: 'https://labl.co.in/',
    accentColor: '#b28442',
    accentClass: 'labl',
    isHouse: true,
    external: true,
  },
  {
    label: 'H²AI',
    href: 'https://www.humantothepowerofai.com/',
    accentColor: '#3c82f5',
    accentClass: 'h2ai',
    isHouse: true,
    external: true,
  },
  {
    label: 'Markoholics',
    href: 'https://www.markoholics.com/',
    accentColor: '#6b7280',
    accentClass: 'markoholics',
    isHouse: true,
    external: true,
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
    quote: 'The best celebrity brand is one that sells itself.',
    attribution: 'Labl.co',
  },
  {
    quote: 'Most startups do not fail because the product is wrong. They fail because the market never heard of it.',
    attribution: 'Markoholics',
  },
]
