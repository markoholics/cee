export type House = {
  id: string
  name: string
  tagline: string
  description: string
  accentColor: string
  accentClass: string
  href: string
  externalHref: string
  services: Service[]
  icp: ICPEntry[]
  stats: Stat[]
}

export type Service = {
  title: string
  description: string
  icon: string
}

export type ICPEntry = {
  label: string
  description: string
}

export type Stat = {
  value: string
  label: string
}

export const houses: House[] = [
  {
    id: 'bombay-dreams',
    name: 'Bombay Dreams',
    tagline: 'Talent and Entertainment House',
    description:
      'We represent the people who move culture. From emerging voices to established names, Bombay Dreams connects talent with the brands, stages and audiences they deserve.',
    accentColor: '#a48333',
    accentClass: 'bombay',
    href: '/bombay-dreams',
    externalHref: 'https://www.bombaydreams.co.in/',
    services: [
      {
        title: 'Talent Management',
        description:
          'End-to-end career strategy, contract negotiation and opportunity curation for artists, athletes and creators at every stage.',
        icon: 'Star',
      },
      {
        title: 'Celebrity Partnerships',
        description:
          'Authentic brand-talent pairings built on shared values, audience alignment and long-term equity — not just reach.',
        icon: 'Handshake',
      },
      {
        title: 'Brand Endorsements',
        description:
          'Full-service endorsement campaigns from deal structuring to creative execution and performance measurement.',
        icon: 'BadgeCheck',
      },
      {
        title: 'Events and Experiences',
        description:
          'Live activations, curated appearances and exclusive experiences that convert attention into lasting brand memory.',
        icon: 'Sparkles',
      },
    ],
    icp: [
      {
        label: 'Talent seeking representation',
        description:
          'Artists, athletes and content creators who want strategic career management, not just bookings.',
      },
      {
        label: 'Brands seeking cultural credibility',
        description:
          'Companies looking to align with talent whose audiences are genuinely engaged.',
      },
      {
        label: 'Event producers',
        description:
          'Organisers who need headliners, MC talent or celebrity keynotes sourced and managed end-to-end.',
      },
    ],
    stats: [
      { value: '200+', label: 'Talent represented' },
      { value: '500+', label: 'Brand campaigns delivered' },
      { value: '12+', label: 'Years in entertainment' },
    ],
  },
  {
    id: 'brandoscopy',
    name: 'Brandoscopy',
    tagline: 'Personal and Luxury Brand Studio',
    description:
      'We sculpt personal and luxury brands. Five kinds of work. One standard. The studio remains intentionally small — a tight team taking no more than a handful of commissions a year. This is not scalability. This is craft.',
    accentColor: '#5f101c',
    accentClass: 'brandoscopy',
    href: '/brandoscopy',
    externalHref: 'https://www.brandoscopy.in/',
    services: [
      {
        title: 'Celebrities',
        description:
          'Personal brand architecture for Indian television names, film actors, and cultural figures whose reputation has outgrown their media presence.',
        icon: 'Star',
      },
      {
        title: 'Founders',
        description:
          'Positioning and narrative strategy for entrepreneurs and business leaders who need to operate as both operator and public figure simultaneously.',
        icon: 'Briefcase',
      },
      {
        title: 'Luxury Houses',
        description:
          'Brand identity and editorial direction for hospitality groups, interiors studios, and lifestyle brands that sit at the top of their category.',
        icon: 'Gem',
      },
      {
        title: 'Heritage Brands',
        description:
          'Reinvention strategy and modern editorial identity for houses with legacy to preserve and new audiences to reach — without losing what made them.',
        icon: 'Landmark',
      },
      {
        title: 'Cultural Icons',
        description:
          'Long-horizon reputation strategy for public figures whose influence spans industries, geographies, and the cultural conversation itself.',
        icon: 'Crown',
      },
    ],
    icp: [
      {
        label: 'Celebrities and public figures',
        description:
          'Indian television names, film actors and cultural figures whose reputation has outgrown their current media presence.',
      },
      {
        label: 'Founders and executives',
        description:
          'Entrepreneurs and business leaders who need to operate as both operator and public figure simultaneously.',
      },
      {
        label: 'Luxury and heritage brands',
        description:
          'Hospitality groups, lifestyle brands and legacy houses seeking brand identity, editorial direction or modern reinvention.',
      },
    ],
    stats: [
      { value: 'Handful', label: 'Commissions per year' },
      { value: '5', label: 'Types of work' },
      { value: '1', label: 'Standard' },
    ],
  },
  {
    id: 'labl-co',
    name: 'Labl.co',
    tagline: 'Commerce and IP House',
    description:
      'Where intellectual property becomes product. Labl.co turns celebrity equity, cultural moments and emerging IP into commerce businesses with real staying power.',
    accentColor: '#b28442',
    accentClass: 'labl',
    href: '/labl-co',
    externalHref: 'https://labl.co.in/',
    services: [
      {
        title: 'Celebrity Brands',
        description:
          'Co-create, launch and scale brands anchored in authentic talent equity — not borrowed credibility.',
        icon: 'Crown',
      },
      {
        title: 'Product Development',
        description:
          'From concept to shelf: industrial design, formulation, sourcing, packaging and compliance across categories.',
        icon: 'Package',
      },
      {
        title: 'Licensing and Merchandising',
        description:
          'Structured IP licensing programmes and merchandise lines that generate recurring revenue and deepen fan connection.',
        icon: 'FileSignature',
      },
      {
        title: 'E-commerce Ventures',
        description:
          'End-to-end DTC build-outs: storefront, fulfilment, performance marketing and community-led growth.',
        icon: 'ShoppingBag',
      },
    ],
    icp: [
      {
        label: 'Celebrities wanting to own equity',
        description:
          'High-profile talent who want to build lasting commercial assets, not just licensing deals.',
      },
      {
        label: 'Consumer brands seeking IP partnerships',
        description:
          'Established brands looking to launch celebrity-anchored lines or sub-brands with genuine cultural relevance.',
      },
      {
        label: 'Investors backing creator commerce',
        description:
          'Funds and family offices interested in co-investing in commerce ventures with built-in audience distribution.',
      },
    ],
    stats: [
      { value: '15+', label: 'Brands launched' },
      { value: '₹50Cr+', label: 'Commerce GMV' },
      { value: '8', label: 'Active licensing programmes' },
    ],
  },
  {
    id: 'h2ai-technologies',
    name: 'H²AI Technologies',
    tagline: 'AI and Future Skills House',
    description:
      'AI that works for people. H²AI Technologies helps organisations understand, deploy and benefit from artificial intelligence — with a commitment to human-first principles throughout.',
    accentColor: '#3c82f5',
    accentClass: 'h2ai',
    href: '/h2ai-technologies',
    externalHref: 'https://www.humantothepowerofai.com/',
    services: [
      {
        title: 'AI Education and Training',
        description:
          'Practical, jargon-free programmes that build genuine AI literacy across every level of an organisation.',
        icon: 'GraduationCap',
      },
      {
        title: 'AI Consulting and Transformation',
        description:
          'End-to-end transformation engagements that map AI opportunities to business outcomes, then execute.',
        icon: 'Brain',
      },
      {
        title: 'Corporate AI Workshops',
        description:
          'Immersive, hands-on sessions designed to shift mindset, unlock use cases and build internal momentum.',
        icon: 'Presentation',
      },
      {
        title: 'AI Academy and Certifications',
        description:
          'Structured learning paths and industry-recognised certifications for AI practitioners and leaders.',
        icon: 'Award',
      },
      {
        title: 'AI Strategy Advisory',
        description:
          'Board-level guidance on AI roadmaps, governance frameworks and responsible deployment at scale.',
        icon: 'Map',
      },
      {
        title: 'Human-First AI Research',
        description:
          'Original research and published content exploring the intersection of human potential and machine intelligence.',
        icon: 'BookOpen',
      },
    ],
    icp: [
      {
        label: 'Enterprise leadership teams',
        description:
          'C-suite and senior leaders who need clarity on AI strategy and a credible partner to execute it.',
      },
      {
        label: 'Mid-market companies starting the AI journey',
        description:
          'Organisations that know AI matters but lack the internal capability to move from pilots to production.',
      },
      {
        label: 'Professionals seeking future-proof skills',
        description:
          'Individuals who want structured, certified AI education that translates directly to career advancement.',
      },
    ],
    stats: [
      { value: '5,000+', label: 'Professionals trained' },
      { value: '120+', label: 'Corporate clients' },
      { value: '94%', label: 'Learner satisfaction' },
    ],
  },
  {
    id: 'markoholics',
    name: 'Markoholics',
    tagline: 'GTM and Growth House',
    description:
      'Go-to-market strategy and growth execution for tech startups and enterprises. Markoholics helps companies find their market, build their motion, and scale with precision.',
    accentColor: '#6b7280',
    accentClass: 'markoholics',
    href: '/markoholics',
    externalHref: 'https://www.markoholics.com/',
    services: [
      {
        title: 'GTM Strategy',
        description:
          'Full go-to-market blueprints for product launches, market entry and expansion — built around your ICP, not a generic playbook.',
        icon: 'Map',
      },
      {
        title: 'Growth Strategy',
        description:
          'Structured growth frameworks that identify your highest-leverage channels and build compounding momentum over time.',
        icon: 'TrendingUp',
      },
      {
        title: 'Startup Growth Advisory',
        description:
          'Hands-on advisory for early and growth-stage startups navigating their first scalable acquisition and retention loops.',
        icon: 'Rocket',
      },
      {
        title: 'Enterprise Growth Consulting',
        description:
          'Large-organisation growth programmes that cut through internal complexity and drive measurable revenue outcomes.',
        icon: 'Building2',
      },
    ],
    icp: [
      {
        label: 'Tech startups pre-Series B',
        description:
          'Founders who have built the product and need a clear, executable go-to-market strategy to acquire their first hundred customers at scale.',
      },
      {
        label: 'Enterprises launching new products',
        description:
          'Large companies that need external growth expertise to move faster than their internal teams can manage alone.',
      },
      {
        label: 'Investors and accelerators',
        description:
          'Funds seeking growth support for portfolio companies at critical inflection points.',
      },
    ],
    stats: [
      { value: '60+', label: 'GTM strategies delivered' },
      { value: '3x', label: 'Average pipeline growth' },
      { value: '40+', label: 'Startups advised' },
    ],
  },
]

export const houseById = (id: string): House | undefined =>
  houses.find((h) => h.id === id)
