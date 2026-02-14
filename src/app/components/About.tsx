import { TechnicalGlyphIndicator, GLYPH_SETS } from './TechnicalGlyphIndicator';

export function About() {
  return (
    <section id="about" className="relative w-full px-[24px] md:px-[48px] lg:px-[80px] py-[120px] md:py-[160px] lg:py-[200px]" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="w-full flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 240px)' }}>
        {/* Section Header */}
        <div className="mb-[80px]">
          <h2 className="text-foreground mb-4">
            // 02. ABOUT ME.
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-primary"></div>
            <TechnicalGlyphIndicator 
              glyphs={GLYPH_SETS.about}
              className="text-muted-foreground"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-[80px]">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="border-l-[3px] border-primary pl-6">
                <p className="text-foreground whitespace-pre-wrap">
                  Especializado en crear experiencias digitales que combinan diseño minimalista 
                  con funcionalidad robusta. Mi enfoque se centra en sistemas de diseño escalables 
                  y arquitecturas de información claras.
                </p>
              </div>

              <div className="border-l-[3px] border-accent pl-6">
                <p className="text-foreground whitespace-pre-wrap">
                  Trabajo en la intersección del diseño y el código, creando prototipos funcionales 
                  y colaborando directamente con equipos de desarrollo para asegurar implementaciones precisas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <label className="block text-foreground mb-4" style={{
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.1em'
              }}>
                // TECHNICAL STACK
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['FIGMA', 'REACT', 'TYPESCRIPT', 'NODE.JS', 'TAILWIND', 'SUPABASE'].map((skill) => (
                  <div 
                    key={skill}
                    className="px-4 py-3 bg-background border border-border text-foreground"
                    style={{
                      boxShadow: '2px 2px 0px 0px var(--foreground)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    <label>{skill}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-foreground mb-4" style={{
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.1em'
              }}>
                // EXPERIENCE
              </label>
              <div className="space-y-4">
                <div className="border-l-[3px] border-destructive pl-6">
                  <p className="text-foreground" style={{
                    fontWeight: 'var(--font-weight-bold)',
                  }}>
                    5+ YEARS
                  </p>
                  <label className="text-muted-foreground">Product Design</label>
                </div>
                <div className="border-l-[3px] border-destructive pl-6">
                  <p className="text-foreground" style={{
                    fontWeight: 'var(--font-weight-bold)',
                  }}>
                    3+ YEARS
                  </p>
                  <label className="text-muted-foreground">Design Systems</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
