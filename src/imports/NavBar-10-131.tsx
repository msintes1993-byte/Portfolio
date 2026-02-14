import svgPaths from "./svg-syrjxxqmdz";

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

export default function NavBar({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#fbf9f5] content-stretch flex flex-col items-center justify-center pb-[24px] pt-[16px] px-[24px] relative w-[1000px]"} data-name="nav-bar">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_black]" />
      <div className="relative shrink-0 w-full" data-name="content">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center leading-[normal] relative shrink-0" data-name="logo">
              <p className="font-['Michroma:Regular',sans-serif] not-italic relative shrink-0 text-[14px] text-black tracking-[1.68px]">SYS.01</p>
              <p className="font-['Michroma:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[#666] text-[12px]" style={{ fontVariationSettings: "\'wght\' 400" }}>
                履歴書
              </p>
            </div>
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="link-row">
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="links">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[86px] pt-[10px] px-[10px] relative shrink-0" data-name="links">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="content">
                    <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">LINK</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="logo">
                  <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[12px]">SEC-0X</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="links">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[86px] pt-[10px] px-[10px] relative shrink-0" data-name="links">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="content">
                    <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">LINK</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="logo">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="logo">
                    <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[12px]">SEC-0X</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="links">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[86px] pt-[10px] px-[10px] relative shrink-0" data-name="links">
                  <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="content">
                    <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">LINK</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="logo">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="logo">
                    <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#666] text-[12px]">SEC-0X</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex items-center justify-center p-[10px] relative shrink-0" data-name="lang-switch">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
              <p className="font-['Michroma:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-left tracking-[1.68px]">
                <span className="leading-[normal] text-[#ff6b2e]">[</span>
                <span className="leading-[normal]">ES</span>
                <span className="leading-[normal] text-[#ff6b2e]">]</span>
                <span className="leading-[normal]">{` //  EN`}</span>
              </p>
            </button>
            <div className="bg-[#f24405] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shadow-[4px_4px_0px_0px_#1a1a1a] shrink-0" data-name="primary-button">
              <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">CV</p>
              <IconFileArrowDown className="relative shrink-0 size-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}