import svgPaths from "./svg-5szophncgs";
type LangSwitchProps = {
  className?: string;
  lang?: "es" | "en";
};

function LangSwitch({ className, lang = "es" }: LangSwitchProps) {
  const isEn = lang === "en";
  return (
    <button className={className || "content-stretch flex gap-[2px] items-center relative"}>
      <div className={`content-stretch flex h-[48px] items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px] ${isEn ? "" : "bg-[#f24405]"}`} data-name="lang-container">
        <p className="font-['Michroma:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-left tracking-[1.68px]">ES</p>
      </div>
      <div className={`content-stretch flex items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px] ${isEn ? "bg-[#f24405] h-[48px]" : ""}`} data-name="lang-container">
        <p className="font-['Michroma:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-left tracking-[1.68px]">EN</p>
      </div>
    </button>
  );
}

function IconFileArrowDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="Icon / FileArrowDown">
      <div className="absolute inset-[10.94%_17.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25">
          <path d={svgPaths.p28275c00} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="Icon / Users">
      <div className="absolute inset-[20.11%_2.44%_20.3%_2.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4452 19.0694">
          <path d={svgPaths.p328d600} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconLayout({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="Icon / Layout">
      <div className="absolute inset-[17.19%_10.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 21">
          <path d={svgPaths.p36bd2200} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconArrowSquareUpRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="Icon / ArrowSquareUpRight">
      <div className="absolute inset-[14.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <path d={svgPaths.pea9a200} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center p-[3px] relative rounded-[2px]"} data-name="logo">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="h-[97px] relative shrink-0 w-[54px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 97">
          <g id="Vector">
            <path d={svgPaths.p11776a80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p33614b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25707f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1a5f2500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p160ac780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3e13da40} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12f87880} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function NavBar({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[1129px]"} data-name="nav-bar-2">
      <Logo className="content-stretch flex items-center p-[3px] relative rounded-[2px] shrink-0" />
      <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="button-row">
        <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">PROJECTS</p>
          <IconArrowSquareUpRight className="relative shrink-0 size-[32px]" />
        </div>
        <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">ABOUT</p>
          <IconLayout className="relative shrink-0 size-[32px]" />
        </div>
        <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">CONTACT</p>
          <IconUsers className="relative shrink-0 size-[32px]" />
        </div>
        <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">CV</p>
          <IconFileArrowDown className="relative shrink-0 size-[32px]" />
        </div>
      </div>
      <LangSwitch className="content-stretch cursor-pointer flex gap-[2px] items-center relative shrink-0" />
    </div>
  );
}