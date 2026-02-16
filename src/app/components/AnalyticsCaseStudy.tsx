import { CaseStudyTemplate } from './CaseStudyTemplate';
import { GLYPH_SETS } from './TechnicalGlyphIndicator';

interface CaseStudyPageProps {
  onBack?: () => void;
  onNextProject?: (id: string) => void;
}

export function AnalyticsCaseStudy({ onBack, onNextProject }: CaseStudyPageProps) {
  const caseStudyData = {
    id: '05',
    title: 'ANALYTICS DASHBOARD',
    subtitle: 'Real-Time Data Intelligence Platform',
    glyphs: GLYPH_SETS.dashboard,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MDk4NjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    role: 'Senior Product Designer / Data Visualization Specialist',
    timeline: '5 months (2024)',
    tools: ['Figma', 'TypeScript', 'D3.js', 'WebSocket', 'GraphQL'],
    overview: 'Designed a comprehensive analytics platform for enterprise customers to monitor business metrics in real-time. The dashboard needed to handle large datasets, provide customizable views, and enable data-driven decision making for teams across marketing, sales, and operations.',
    challenge: 'Existing reporting tools were slow, required technical knowledge to use, and lacked real-time capabilities. Users were spending hours creating custom reports in spreadsheets. The platform needed to balance power-user needs for deep analysis with executive needs for quick insights at a glance.',
    solution: 'Built a flexible dashboard system with drag-and-drop widgets, customizable time ranges, and intelligent data drill-downs. Implemented real-time updates via WebSockets, pre-configured templates for common use cases, and collaborative features for sharing insights across teams.',
    sections: [
      {
        title: 'DATA DISCOVERY',
        content: 'Interviewed 30+ users across different roles to understand their reporting workflows. Created a data hierarchy and taxonomy that mapped to mental models. Analyzed competitors like Tableau, Looker, and Google Analytics. Identified key metrics and KPIs for each user segment.',
        images: [
          'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lJTIwc2tldGNofGVufDF8fHx8MTc3MTAwNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'single'
      },
      {
        title: 'INFORMATION ARCHITECTURE',
        content: 'Designed a modular widget system with 15+ chart types (line, bar, pie, heatmap, etc.). Created a consistent pattern for data filtering, grouping, and comparison. Established clear visual hierarchy to distinguish between overview metrics and detailed analysis. Implemented progressive disclosure to manage complexity.',
        images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MDk4NjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1ldHJpY3MlMjB2aXN1YWxpemF0aW9uJTIwc2NyZWVufGVufDF8fHx8MTc3MTA2ODc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'double'
      },
      {
        title: 'VISUALIZATION DESIGN',
        content: 'Created a comprehensive color system for data visualization optimized for accessibility and clarity. Designed responsive chart behaviors for mobile and tablet. Built interactive tooltips with contextual information. Implemented smart defaults for axis scaling and data aggregation based on selected time ranges.',
        images: [
          'https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1ldHJpY3MlMjB2aXN1YWxpemF0aW9uJTIwc2NyZWVufGVufDF8fHx8MTc3MTA2ODc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MDk4NjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGUlMjBzY3JlZW5zfGVufDF8fHx8MTc3MTA2ODY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'triple'
      },
      {
        title: 'CUSTOMIZATION & COLLABORATION',
        content: 'Designed a drag-and-drop dashboard builder that allows users to create custom layouts. Implemented save/share functionality with permission controls. Created pre-built templates for common use cases (Sales, Marketing, Operations). Added annotation and commenting features for team collaboration on insights.',
        images: [
          'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzcxMDY4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MDk4NjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        layout: 'double'
      }
    ],
    results: {
      metrics: [
        { label: 'DAILY ACTIVE USERS', value: '+180%' },
        { label: 'TIME TO INSIGHT', value: '85%' },
        { label: 'CUSTOM DASHBOARDS CREATED', value: '2.3K' }
      ]
    },
    nextProject: {
      id: '04',
      title: 'DESIGN SYSTEM'
    }
  };

  return <CaseStudyTemplate data={caseStudyData} onBack={onBack} onNextProject={onNextProject} />;
}
