export default function LangSwitch() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative size-full" data-name="lang-switch">
      <p className="font-['Michroma:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] tracking-[1.68px]">
        <span className="leading-[normal] text-[#ff6b2e]">[</span>
        <span className="leading-[normal]">ES</span>
        <span className="leading-[normal] text-[#ff6b2e]">]</span>
        <span className="leading-[normal]">{` //  EN`}</span>
      </p>
    </div>
  );
}