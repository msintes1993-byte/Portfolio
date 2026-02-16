import imgImage12 from "figma:asset/a0644366e0f1048d84b4936e16bc16078e436c4a.png";

function H() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="h1">
      <div className="flex-[1_0_0] font-['Michroma:Regular',sans-serif] leading-[120px] min-h-px min-w-px not-italic relative text-[#1a1a1a] text-[100px] whitespace-pre-wrap">
        <p className="mb-0">PRODUCT</p>
        <p>DESIGN</p>
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="h3">
      <div aria-hidden="true" className="absolute border-[#c43200] border-b-3 border-solid inset-[0_0_-1.5px_0] pointer-events-none" />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-full whitespace-pre-wrap">PRODUCT DESIGNER \ SCALABLE DESIGN SYSTEMS \ AI INTERFACES</p>
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="h3">
      <p className="font-['Satoshi:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#1a1a1a] text-[20px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wght\' 400" }}>
        インターフェース
      </p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="subtitle">
      <H1 />
      <H2 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[767px]" data-name="hero">
      <H />
      <Subtitle />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="bg-[rgba(242,240,228,0.01)] content-stretch flex items-center justify-center relative shrink-0" data-name="text-container">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] w-[583px] whitespace-pre-wrap">I am a Product Designer who builds scalable Design Systems and complex SaaS tools in Figma. I treat design as a logic-driven process, using technical tools like Lovable and Supabase to prototype ideas and understanding JSON structures to make developer hand-off smoother. Recently, I have been designing interfaces for AI agents, focusing on turning complex backend data into clear, usable products.</p>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="description-container">
      <TextContainer />
    </div>
  );
}

export default function PageContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative size-full" data-name="page-content-container">
      <Hero />
      <DescriptionContainer />
      <div className="absolute flex h-[488.752px] items-center justify-center left-[537.15px] top-[7.12px] w-[661.709px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "1280" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.68deg]">
          <div className="h-[439px] relative shadow-[0px_10px_6.5px_0px_rgba(0,0,0,0.15)] w-[628px]" data-name="image 12">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
          </div>
        </div>
      </div>
    </div>
  );
}