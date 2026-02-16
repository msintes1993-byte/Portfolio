import { ImageWithFallback } from './figma/ImageWithFallback';
import { TechnicalGlyphIndicator } from './TechnicalGlyphIndicator';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface CaseStudySection {
  title: string;
  content: string;
  images?: string[];
  layout?: 'single' | 'double' | 'triple';
}

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  glyphs: string;
  heroImage: string;
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  challenge: string;
  solution: string;
  sections: CaseStudySection[];
  results?: {
    metrics: { label: string; value: string }[];
  };
  nextProject?: {
    id: string;
    title: string;
  };
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
  onBack?: () => void;
  onNextProject?: (id: string) => void;
}

export function CaseStudyTemplate({ data, onBack, onNextProject }: CaseStudyTemplateProps) {
  return (
    <div className="w-full bg-background">
      {/* Back Button */}
      <div className="px-[24px] md:px-[48px] lg:px-[80px] pt-[40px]">
        <button
          onClick={onBack}
          className="flex items-center gap-[16px] px-[24px] py-[12px] bg-card border border-border transition-all duration-150"
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
          <ArrowLeft size={20} />
          <span className="text-foreground">BACK TO PROJECTS</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-[24px] md:px-[48px] lg:px-[80px] pt-[40px] md:pt-[64px] pb-[80px] md:pb-[120px]">
        <div className="max-w-[1400px] mx-auto">
          {/* Project Header */}
          <div className="mb-[40px] md:mb-[64px]">
            <div className="mb-[24px]">
              <h1 
                className="text-foreground mb-[16px]"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  lineHeight: 'clamp(56px, 7vw, 96px)',
                  fontWeight: 'var(--font-weight-regular)',
                }}
              >
                {data.title}
              </h1>
              <TechnicalGlyphIndicator 
                glyphs={data.glyphs}
                className="text-muted-foreground"
              />
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[40px] p-[32px] bg-card border border-border">
              <div>
                <label 
                  className="text-muted-foreground block mb-[8px]"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ROLE
                </label>
                <p 
                  className="text-foreground"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-p)',
                    lineHeight: 'var(--line-height-p)',
                  }}
                >
                  {data.role}
                </p>
              </div>
              <div>
                <label 
                  className="text-muted-foreground block mb-[8px]"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.1em',
                  }}
                >
                  TIMELINE
                </label>
                <p 
                  className="text-foreground"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-p)',
                    lineHeight: 'var(--line-height-p)',
                  }}
                >
                  {data.timeline}
                </p>
              </div>
              <div>
                <label 
                  className="text-muted-foreground block mb-[8px]"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '0.1em',
                  }}
                >
                  TOOLS
                </label>
                <div className="flex flex-wrap gap-[8px]">
                  {data.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-[12px] py-[4px] bg-background border border-border text-foreground"
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-regular)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="w-full border border-border overflow-hidden mb-[80px] md:mb-[120px]"
            style={{ boxShadow: 'var(--elevation-sm)' }}
          >
            <ImageWithFallback
              src={data.heroImage}
              alt={data.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[80px] mb-[120px] md:mb-[160px]">
            <div>
              <h2 
                className="text-foreground mb-[24px] pb-[16px] border-b border-primary"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-h2)',
                  lineHeight: 'var(--line-height-h2)',
                }}
              >
                // OVERVIEW
              </h2>
              <p 
                className="text-foreground"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 'var(--text-p)',
                  lineHeight: 'var(--line-height-p)',
                }}
              >
                {data.overview}
              </p>
            </div>
            <div>
              <h2 
                className="text-foreground mb-[24px] pb-[16px] border-b border-destructive"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-h2)',
                  lineHeight: 'var(--line-height-h2)',
                }}
              >
                // CHALLENGE
              </h2>
              <p 
                className="text-foreground"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 'var(--text-p)',
                  lineHeight: 'var(--line-height-p)',
                }}
              >
                {data.challenge}
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-[120px] md:mb-[160px]">
            <div className="mb-[40px]">
              <h2 
                className="text-foreground mb-[24px]"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-h2)',
                  lineHeight: 'var(--line-height-h2)',
                }}
              >
                // SOLUTION
              </h2>
              <div className="h-[2px] w-[120px] bg-accent"></div>
            </div>
            <p 
              className="text-foreground max-w-[900px]"
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'var(--text-p)',
                lineHeight: 'var(--line-height-p)',
              }}
            >
              {data.solution}
            </p>
          </div>

          {/* Dynamic Sections */}
          {data.sections.map((section, index) => (
            <div key={index} className="mb-[120px] md:mb-[160px]">
              <h3 
                className="text-foreground mb-[40px] pb-[16px] border-b border-border"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-h3)',
                  lineHeight: 'var(--line-height-h3)',
                }}
              >
                // {section.title}
              </h3>
              <p 
                className="text-foreground mb-[40px]"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 'var(--text-p)',
                  lineHeight: 'var(--line-height-p)',
                }}
              >
                {section.content}
              </p>

              {/* Section Images */}
              {section.images && section.images.length > 0 && (
                <div 
                  className={`grid gap-[24px] ${
                    section.layout === 'double' 
                      ? 'grid-cols-1 md:grid-cols-2' 
                      : section.layout === 'triple'
                      ? 'grid-cols-1 md:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {section.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className="border border-border overflow-hidden"
                      style={{ boxShadow: 'var(--elevation-sm)' }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${section.title} - Image ${imgIndex + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Results Section */}
          {data.results && (
            <div className="mb-[120px] md:mb-[160px]">
              <h2 
                className="text-foreground mb-[40px]"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-h2)',
                  lineHeight: 'var(--line-height-h2)',
                }}
              >
                // RESULTS & IMPACT
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {data.results.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="p-[32px] bg-card border border-border"
                    style={{ boxShadow: 'var(--elevation-sm)' }}
                  >
                    <div 
                      className="text-primary mb-[16px]"
                      style={{
                        fontFamily: 'var(--font-family-headers)',
                        fontSize: 'clamp(40px, 5vw, 60px)',
                        lineHeight: '1',
                        fontWeight: 'var(--font-weight-regular)',
                      }}
                    >
                      {metric.value}
                    </div>
                    <label 
                      className="text-foreground"
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-bold)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {metric.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Project */}
          {data.nextProject && (
            <div className="pt-[80px] border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <label 
                    className="text-muted-foreground block mb-[8px]"
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    NEXT PROJECT
                  </label>
                  <h3 
                    className="text-foreground"
                    style={{
                      fontFamily: 'var(--font-family-headers)',
                      fontSize: 'var(--text-h3)',
                      lineHeight: 'var(--line-height-h3)',
                    }}
                  >
                    {data.nextProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => onNextProject?.(data.nextProject!.id)}
                  className="flex items-center gap-[16px] px-[32px] py-[16px] bg-primary border border-foreground transition-all duration-150"
                  style={{
                    boxShadow: '4px 4px 0px var(--foreground)',
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'var(--text-button)',
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
                  <span className="text-primary-foreground">VIEW PROJECT</span>
                  <ExternalLink size={20} className="text-primary-foreground" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
