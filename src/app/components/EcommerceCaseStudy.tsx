import { CaseStudyTemplate } from './CaseStudyTemplate';
import { GLYPH_SETS } from './TechnicalGlyphIndicator';

interface CaseStudyPageProps {
  onBack?: () => void;
  onNextProject?: (id: string) => void;
}

export function EcommerceCaseStudy({ onBack, onNextProject }: CaseStudyPageProps) {
  const caseStudyData = {
    id: '03',
    title: 'E-COMMERCE PLATFORM',
    subtitle: 'Next-Gen Shopping Experience',
    glyphs: GLYPH_SETS.platform,
    heroImage: 'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5NzUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    role: 'Lead UX/UI Designer',
    timeline: '8 months (2023-2024)',
    tools: ['Figma', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    overview: 'Redesigned a legacy e-commerce platform serving 500K monthly users. The goal was to modernize the shopping experience, improve conversion rates, and build a scalable architecture for future growth. Worked closely with engineering and product teams to balance user needs with technical constraints.',
    challenge: 'The existing platform had a 68% cart abandonment rate, confusing navigation, and slow checkout flow. Mobile experience was particularly poor, accounting for 70% of traffic but only 30% of conversions. Backend systems were fragmented, making it difficult to implement consistent features across touchpoints.',
    solution: 'Created a unified, mobile-first experience with streamlined navigation, intelligent search, and a simplified 3-step checkout. Implemented personalization features using AI to surface relevant products. Built a microservices architecture to enable rapid iteration and A/B testing without system-wide deployments.',
    sections: [
      {
        title: 'USER RESEARCH',
        content: 'Conducted 45 user interviews and analyzed 6 months of analytics data. Created user personas and journey maps for different customer segments. Identified key friction points: product discovery, size/fit uncertainty, and checkout complexity. Ran competitive analysis on top 15 e-commerce platforms.',
        images: [
          'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lJTIwc2tldGNofGVufDF8fHx8MTc3MTAwNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGUlMjBzY3JlZW5zfGVufDF8fHx8MTc3MTA2ODY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'double'
      },
      {
        title: 'INFORMATION ARCHITECTURE',
        content: 'Restructured product taxonomy based on user mental models from card sorting sessions. Reduced navigation depth from 5 levels to 3. Implemented faceted search with smart filters that adapt based on category. Created a consistent pattern library for product cards, listings, and detail pages.',
        images: [
          'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5NzUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'single'
      },
      {
        title: 'CHECKOUT OPTIMIZATION',
        content: 'Reduced checkout from 7 steps to 3 with progressive disclosure. Implemented guest checkout and one-click payment options. Added real-time validation and clear error messaging. Created persistent cart with saved items across devices. Integrated with major payment providers for seamless transactions.',
        images: [
          'https://images.unsplash.com/photo-1765226410758-9ae3d34cd791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBwYXltZW50JTIwY2hlY2tvdXQlMjBzY3JlZW58ZW58MXx8fHwxNzcxMDY4Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5NzUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'double'
      },
      {
        title: 'TESTING & ITERATION',
        content: 'Ran 12 rounds of usability testing with 80+ participants. Launched beta to 10% of users for feedback. Monitored analytics and heat maps to identify issues. Iterated on high-friction areas weekly. Created a continuous optimization framework with monthly A/B tests on key conversion points.',
        images: [
          'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcxMDY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGUlMjBzY3JlZW5zfGVufDF8fHx8MTc3MTA2ODY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDc4MTc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'triple'
      }
    ],
    results: {
      metrics: [
        { label: 'REDUCED CART ABANDONMENT', value: '42%' },
        { label: 'INCREASED MOBILE CONVERSIONS', value: '156%' },
        { label: 'FASTER CHECKOUT', value: '3.2MIN' }
      ]
    },
    nextProject: {
      id: '05',
      title: 'ANALYTICS DASHBOARD'
    }
  };

  return <CaseStudyTemplate data={caseStudyData} onBack={onBack} onNextProject={onNextProject} />;
}
