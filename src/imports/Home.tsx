import svgPaths from "./svg-4mxovrcc1b";
import imgImage12 from "figma:asset/a0644366e0f1048d84b4936e16bc16078e436c4a.png";

function Logo() {
  return (
    <div className="h-[103px] relative shrink-0 w-[60px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 103">
        <g id="logo">
          <rect height="102.5" rx="1.75" stroke="var(--stroke-0, black)" strokeWidth="0.5" width="59.5" x="0.25" y="0.25" />
          <g id="Vector">
            <path d={svgPaths.p1bd05000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p6e4b980} fill="var(--fill-0, black)" />
            <path d={svgPaths.p32d7cd80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p84a5c80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p383c7100} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c1675f0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p28e29800} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconArrowSquareUpRight() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / ArrowSquareUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / ArrowSquareUpRight">
          <path d={svgPaths.p3e04e100} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">PROJECTS</p>
      <IconArrowSquareUpRight />
    </div>
  );
}

function IconLayout() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / Layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Layout">
          <path d={svgPaths.p8326e00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">ABOUT</p>
      <IconLayout />
    </div>
  );
}

function IconUsers() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / Users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / Users">
          <path d={svgPaths.p10e21c00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton2() {
  return (
    <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">CONTACT</p>
      <IconUsers />
    </div>
  );
}

function IconFileArrowDown() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon / FileArrowDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / FileArrowDown">
          <path d={svgPaths.p13cd580} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton3() {
  return (
    <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">CV</p>
      <IconFileArrowDown />
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="button-row">
      <PrimaryButton />
      <PrimaryButton1 />
      <PrimaryButton2 />
      <PrimaryButton3 />
    </div>
  );
}

function LangContainer() {
  return (
    <div className="bg-[#f24405] content-stretch flex h-[48px] items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px]" data-name="lang-container">
      <p className="font-['Michroma:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[1.68px]">ES</p>
    </div>
  );
}

function LangContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px]" data-name="lang-container">
      <p className="font-['Michroma:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[1.68px]">EN</p>
    </div>
  );
}

function LangSwitch() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="lang-switch-02">
      <LangContainer />
      <LangContainer1 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1129px]" data-name="nav-bar-2">
      <Logo />
      <ButtonRow />
      <LangSwitch />
    </div>
  );
}

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

function PageContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="page-content-container">
      <Hero />
      <DescriptionContainer />
      <div className="absolute flex h-[488.752px] items-center justify-center left-[537.15px] top-[7.12px] w-[661.709px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.68deg]">
          <div className="h-[439px] relative shadow-[0px_10px_6.5px_0px_rgba(0,0,0,0.15)] w-[628px]" data-name="image 12">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f2f0e4] relative size-full" data-name="Home">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[80px] py-[43px] relative size-full">
        <NavBar />
        <PageContentContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}