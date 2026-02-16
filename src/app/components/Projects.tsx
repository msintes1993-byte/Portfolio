import { ImageWithFallback } from './figma/ImageWithFallback';
import { TechnicalGlyphIndicator, GLYPH_SETS } from './TechnicalGlyphIndicator';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const navigate = useNavigate();
  const projects = [
    {
      id: '03',
      title: 'E-COMMERCE PLATFORM',
      subtitleGlyphs: GLYPH_SETS.platform,
      description: 'Sistema completo de comercio con gestión de inventario, procesamiento de pagos y panel de administración. Arquitectura escalable construida con microservicios.',
      image: 'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBsYXB0b3B8ZW58MXx8fHwxNzcwNzk5ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['REACT', 'NODE.JS', 'POSTGRESQL']
    },
    {
      id: '04',
      title: 'DESIGN SYSTEM',
      subtitleGlyphs: GLYPH_SETS.system,
      description: 'Framework de componentes reutilizables con documentación completa. Tokens de diseño, guías de uso y herramientas para equipos de producto distribuidos.',
      image: 'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDc4MTc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['FIGMA', 'REACT', 'STORYBOOK']
    },
    {
      id: '05',
      title: 'ANALYTICS DASHBOARD',
      subtitleGlyphs: GLYPH_SETS.dashboard,
      description: 'Visualización de datos en tiempo real con gráficos interactivos. Sistema de reportes personalizables con exportación y alertas automáticas.',
      image: 'https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBjb21wdXRlcnxlbnwxfHx8fDE3NzA4OTY3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TYPESCRIPT', 'D3.JS', 'API']
    }
  ];

  return (
    <section id="projects" className="relative px-[24px] md:px-[48px] lg:px-[80px] py-[120px] md:py-[160px] lg:py-[200px]">
      <div className="w-full flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 240px)' }}>
        {/* Section Header */}
        <div className="mb-[80px]">
          <h2 className="text-foreground mb-4">
            // SELECTED PROJECTS.
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-primary"></div>
            <TechnicalGlyphIndicator 
              glyphs={GLYPH_SETS.projects}
              className="text-muted-foreground"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-[80px]">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <div className="grid lg:grid-cols-2 gap-[40px] items-start">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="relative">
                    <div aria-hidden="true" className="absolute border-primary border-b-[1px] border-solid left-0 right-0 bottom-0 pointer-events-none" />
                    <h3 className="text-foreground pb-4">
                      {`// ${project.id}. ${project.title}`}
                    </h3>
                  </div>
                  
                  <TechnicalGlyphIndicator 
                    glyphs={project.subtitleGlyphs}
                    className="text-muted-foreground"
                  />

                  <p className="text-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <div 
                        key={tag}
                        className="px-4 py-2 bg-background border border-border"
                        style={{
                          boxShadow: '2px 2px 0px 0px var(--foreground)',
                          letterSpacing: '0.05em'
                        }}
                      >
                        <label>{tag}</label>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Button */}
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex items-center gap-[16px] px-[24px] py-[12px] bg-primary border border-foreground transition-all duration-150 mt-4"
                    style={{
                      boxShadow: '4px 4px 0px var(--foreground)',
                      fontFamily: 'var(--font-family-body)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: 'var(--letter-spacing-button)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '6px 6px 0px var(--foreground)';
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '4px 4px 0px var(--foreground)';
                      e.currentTarget.style.transform = 'translate(0, 0)';
                    }}
                  >
                    <span className="text-primary-foreground">VIEW CASE STUDY</span>
                    <ExternalLink size={16} className="text-primary-foreground" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="relative border border-border overflow-hidden" style={{boxShadow: 'var(--elevation-sm)'}}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent px-4 py-2 border border-border">
                    <h4 className="text-accent-foreground">
                      {project.id}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
