import { TechnicalGlyphIndicator, GLYPH_SETS } from './TechnicalGlyphIndicator';
import portraitImage from 'figma:asset/53278f4aafc8d13b888e817d239f6368f90aeef3.png';

export function Hero() {
  return (
    <section className="flex flex-col relative px-[24px] md:px-[48px] lg:px-[80px] py-[120px] md:py-[160px] lg:py-[200px]">
      {/* Hero Section */}
      <div className="content-stretch flex flex-col justify-between items-start relative w-full" style={{ minHeight: 'calc(100vh - 240px)' }}>
        {/* Main Title */}
        <div className="content-stretch flex items-center justify-start relative w-full mb-[120px] md:mb-[160px]">
          <h1 className="text-foreground whitespace-pre-wrap">
            {`// 01. HELLO. I AM [YOUR NAME].`}
          </h1>
        </div>

        {/* Middle Content Group */}
        <div className="content-stretch flex flex-col gap-[80px] items-start relative w-full">
          {/* Subtitle with Orange Border */}
          <div className="content-stretch flex gap-[40px] items-start relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
              <div aria-hidden="true" className="absolute border-destructive border-b-[1px] border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
              <p className="text-foreground w-full whitespace-pre-wrap">
                PRODUCT DESIGNER \ SCALABLE DESIGN SYSTEMS \ AI INTERFACES
              </p>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
              <TechnicalGlyphIndicator 
                glyphs={GLYPH_SETS.interface}
                className="text-foreground w-full whitespace-pre-wrap"
              />
            </div>
          </div>

          {/* Description with Portrait */}
          <div className="content-stretch flex flex-col md:flex-row gap-[40px] items-start justify-between relative w-full">
            <p className="text-foreground w-full max-w-[583px] whitespace-pre-wrap">
              Soy un diseñador de producto que construye sistemas de diseño escalables y herramientas SaaS complejas. 
              Trato el diseño como un proceso lógico, usando herramientas técnicas para prototipar ideas y 
              estructuras para hacer la transferencia al desarrollo más fluida. 
              Recientemente, he estado diseñando interfaces para agentes de IA, 
              enfocándome en convertir datos backend complejos en productos claros y usables.
            </p>
            
            {/* Portrait Image */}
            <div className="w-full md:w-auto md:max-w-[35vw] lg:max-w-[30vw] shrink-0 md:ml-auto">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={portraitImage}
                  alt="Portrait illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
