import image_bdd15cb90d8d49040d6edf10afdeab3b1773109d from 'figma:asset/bdd15cb90d8d49040d6edf10afdeab3b1773109d.png'
import imgHeroImage from "figma:asset/5bf89d35ed2de6efd508b9f513e03878766d9c0a.png";

export function Hero() {
  return (
    <section 
      className="flex flex-col relative px-[24px] md:px-[48px] lg:px-[80px] pt-[40px] md:pt-[56px] lg:pt-[72px] pb-[80px] md:pb-[120px] lg:pb-[160px]"
      style={{
        minHeight: 'calc(100vh - 120px)'
      }}
    >
      {/* Main Container with Two Columns */}
      <div className="content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[40px] lg:gap-[80px] relative w-full h-full">
        
        {/* Content Left - Text Content */}
        <div className="content-stretch flex flex-col gap-[40px] md:gap-[63px] items-start relative flex-1 max-w-full lg:flex-[2] self-start">
          
          {/* Hero Title and Subtitle Container */}
          <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] lg:gap-[32px] items-start relative w-full">
            
            {/* Main Title H1 */}
            <div className="content-stretch flex items-center justify-start relative w-full overflow-hidden">
              <h1 
                className="text-foreground flex-1 min-w-0"
                style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'clamp(32px, 9vw, 100px)',
                  lineHeight: 'clamp(40px, 10vw, 120px)',
                  fontWeight: 'var(--font-weight-regular)',
                  wordBreak: 'normal',
                  overflowWrap: 'normal',
                  whiteSpace: 'normal'
                }}
              >PRODUCT DESIGNER</h1>
            </div>

            {/* Subtitle Section with Orange Border and Japanese Text */}
            <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start relative w-full">
              {/* Left part with orange border */}
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                <p 
                  className="text-foreground w-full border-b border-solid border-destructive"
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 'clamp(14px, 2.2vw, 20px)',
                    lineHeight: 'clamp(20px, 3vw, 32px)',
                    fontWeight: 'var(--font-weight-regular)',
                    paddingBottom: '8px'
                  }}
                >
                  PRODUCT DESIGNER \ SCALABLE DESIGN SYSTEMS \ AI INTERFACES
                </p>
              </div>
              
              {/* Japanese text */}
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                <p 
                  className="text-foreground whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-family-body), "Noto Sans JP"',
                    fontSize: 'clamp(14px, 2.2vw, 20px)',
                    lineHeight: 'clamp(20px, 3vw, 32px)',
                    fontWeight: 'var(--font-weight-regular)'
                  }}
                >インターフェース</p>
              </div>
            </div>
          </div>

          {/* Description Container */}
          <div className="content-stretch flex items-start relative w-full">
            <p 
              className="text-foreground w-full max-w-[583px]"
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'clamp(14px, 2vw, 20px)',
                lineHeight: 'clamp(22px, 3vw, 32px)',
                fontWeight: 'var(--font-weight-regular)'
              }}
            >
              I am a Product Designer who builds scalable Design Systems and complex SaaS tools in Figma. I treat design as a logic-driven process, using technical tools like Lovable and Supabase to prototype ideas and understanding JSON structures to make developer hand-off smoother. Recently, I have been designing interfaces for AI agents, focusing on turning complex backend data into clear, usable products.
            </p>
          </div>
        </div>

        {/* Content Right - Image */}
        <div className="content-stretch flex flex-col items-center lg:items-start relative shrink-0 w-full lg:w-auto lg:flex-[1] lg:min-w-0">
          <div 
            className="relative w-full max-w-[500px] lg:max-w-full"
            style={{
              transform: 'rotate(-4.68deg)',
              transformOrigin: 'center'
            }}
          >
            <img 
              alt="Design interface preview" 
              className="w-full h-auto object-cover" 
              src={image_bdd15cb90d8d49040d6edf10afdeab3b1773109d}
              style={{
                maxWidth: '100%',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
