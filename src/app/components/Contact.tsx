import { ButtonIndustrial } from './ButtonIndustrial';
import { TechnicalGlyphIndicator, GLYPH_SETS } from './TechnicalGlyphIndicator';

export function Contact() {
  return (
    <section id="contact" className="relative w-full px-[24px] md:px-[48px] lg:px-[80px] py-[120px] md:py-[160px] lg:py-[200px]" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="w-full flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 240px)' }}>
        {/* Section Header */}
        <div className="mb-[80px]">
          <h2 className="text-foreground mb-4">
            // 06. GET IN TOUCH.
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-24 bg-primary"></div>
            <TechnicalGlyphIndicator 
              glyphs={GLYPH_SETS.contact}
              className="text-muted-foreground"
            />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-[80px]">
          {/* Contact Info */}
          <div className="space-y-[40px]">
            <div>
              <p className="text-foreground mb-8">
                ¿Tienes un proyecto en mente? Colaboremos para crear algo excepcional. 
                Especializado en sistemas de diseño, interfaces complejas y productos escalables.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="border-l-[3px] border-primary pl-6">
                <label className="text-foreground mb-2 block" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.1em'
                }}>
                  // EMAIL
                </label>
                <p className="text-muted-foreground">
                  hola@tuportfolio.com
                </p>
              </div>

              {/* Location */}
              <div className="border-l-[3px] border-primary pl-6">
                <label className="text-foreground mb-2 block" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.1em'
                }}>
                  // LOCATION
                </label>
                <p className="text-muted-foreground">
                  España · Europe/Madrid
                </p>
              </div>

              {/* Availability */}
              <div className="border-l-[3px] border-accent pl-6">
                <label className="text-foreground mb-2 block" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.1em'
                }}>
                  // STATUS
                </label>
                <p className="text-accent">
                  Available for Projects
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <label className="text-foreground mb-4 block" style={{
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.1em'
              }}>
                // CONNECT
              </label>
              <div className="flex flex-wrap gap-3">
                {['GITHUB', 'LINKEDIN', 'TWITTER', 'DRIBBBLE'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 bg-background border border-border text-foreground transition-all duration-150 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    style={{
                      letterSpacing: '0.05em',
                      transitionTimingFunction: 'linear'
                    }}
                  >
                    <label>{social}</label>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border border-border p-8 relative" style={{boxShadow: 'var(--elevation-sm)'}}>
            <form className="space-y-6">
              <div>
                <label className="block text-foreground mb-2" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.05em'
                }}>
                  // NAME
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input-background border border-border text-foreground focus:border-ring focus:outline-none transition-colors duration-150"
                  style={{
                    transitionTimingFunction: 'linear'
                  }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.05em'
                }}>
                  // EMAIL
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input-background border border-border text-foreground focus:border-ring focus:outline-none transition-colors duration-150"
                  style={{
                    transitionTimingFunction: 'linear'
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2" style={{
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.05em'
                }}>
                  // MESSAGE
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border border-border text-foreground focus:border-ring focus:outline-none transition-colors resize-none duration-150"
                  style={{
                    transitionTimingFunction: 'linear'
                  }}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <ButtonIndustrial type="submit" className="w-full" icon="arrow">
                SEND MESSAGE
              </ButtonIndustrial>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
