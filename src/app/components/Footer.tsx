import { TechnicalGlyphIndicator, GLYPH_SETS } from './TechnicalGlyphIndicator';

export function Footer() {
  return (
    <footer className="py-8 bg-foreground border-t-[3px] border-primary w-full">
      <div className="px-[24px] md:px-[48px] lg:px-[80px] w-full">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <h4 className="text-background" style={{
              letterSpacing: '0.1em'
            }}>
              © 2026
            </h4>
            <div className="h-4 w-[2px] bg-primary"></div>
            <TechnicalGlyphIndicator 
              glyphs={GLYPH_SETS.portfolio}
              className="text-muted"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-background hover:text-primary transition-colors duration-150" style={{
              transitionTimingFunction: 'linear'
            }}>
              <label style={{
                letterSpacing: '0.05em'
              }}>PRIVACY</label>
            </button>
            <div className="h-4 w-[2px] bg-border"></div>
            <button className="text-background hover:text-primary transition-colors duration-150" style={{
              transitionTimingFunction: 'linear'
            }}>
              <label style={{
                letterSpacing: '0.05em'
              }}>TERMS</label>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
