import { CaseStudyTemplate } from './CaseStudyTemplate';
import { GLYPH_SETS } from './TechnicalGlyphIndicator';

interface CaseStudyPageProps {
  onBack?: () => void;
  onNextProject?: (id: string) => void;
}

export function DesignSystemCaseStudy({ onBack, onNextProject }: CaseStudyPageProps) {
  const caseStudyData = {
    id: '04',
    title: 'DESIGN SYSTEM',
    subtitle: 'Enterprise Component Library',
    glyphs: GLYPH_SETS.system,
    heroImage: 'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcxMDY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    role: 'Lead Product Designer / Design Systems Architect',
    timeline: '6 months (2023)',
    tools: ['Figma', 'React', 'Storybook', 'TypeScript', 'Tokens Studio'],
    overview: 'Built a comprehensive design system from scratch for a growing SaaS platform with 50+ engineers across multiple product teams. The system needed to scale across web, mobile, and future platforms while maintaining consistency and enabling rapid product development.',
    challenge: 'The company was experiencing design debt, inconsistent UI patterns, and slow feature delivery. Teams were duplicating work, and the lack of standardization led to poor user experience. We needed to create a single source of truth that would work for designers and developers while not disrupting ongoing product work.',
    solution: 'Developed a modular, token-based design system with 80+ reusable components, comprehensive documentation, and automated tooling. Implemented a governance model that balanced flexibility with consistency, and created a migration path that allowed teams to adopt incrementally.',
    sections: [
      {
        title: 'RESEARCH & AUDIT',
        content: 'Conducted an exhaustive audit of existing products, identifying 200+ UI inconsistencies. Interviewed 25 designers and developers to understand pain points. Analyzed competitor design systems and industry best practices. Created a component inventory and prioritization matrix based on usage frequency and business impact.',
        images: [
          'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lJTIwc2tldGNofGVufDF8fHx8MTc3MTAwNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'single'
      },
      {
        title: 'FOUNDATION & TOKENS',
        content: 'Established design foundations starting with a token architecture for colors, typography, spacing, and elevation. Created semantic tokens that map to specific use cases, enabling theme switching and responsive behavior. Documented decision-making criteria for when to use each token variant.',
        images: [
          'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDc4MTc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcxMDY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'double'
      },
      {
        title: 'COMPONENT LIBRARY',
        content: 'Built 80+ production-ready components with variants for different use cases. Each component includes anatomy diagrams, usage guidelines, accessibility specs (WCAG AA), and code snippets. Created both Figma and React versions with automated sync between design and code using Tokens Studio and GitHub Actions.',
        images: [
          'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGUlMjBzY3JlZW5zfGVufDF8fHx8MTc3MTA2ODY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDc4MTc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcxMDY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'triple'
      },
      {
        title: 'DOCUMENTATION & ADOPTION',
        content: 'Launched a dedicated documentation site with interactive examples, migration guides, and contribution processes. Conducted training workshops for all product teams. Established office hours and a Slack support channel. Created adoption metrics dashboard to track usage and identify areas needing improvement.',
        images: [
          'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lJTIwc2tldGNofGVufDF8fHx8MTc3MTAwNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'single'
      }
    ],
    results: {
      metrics: [
        { label: 'FASTER DESIGN-TO-DEV', value: '60%' },
        { label: 'COMPONENT ADOPTION', value: '85%' },
        { label: 'REDUCED SUPPORT TICKETS', value: '40%' }
      ]
    },
    nextProject: {
      id: '03',
      title: 'E-COMMERCE PLATFORM'
    }
  };

  return <CaseStudyTemplate data={caseStudyData} onBack={onBack} onNextProject={onNextProject} />;
}
