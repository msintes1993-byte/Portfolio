function Content() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="content">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1a1a1a] text-[14px]">LINK</p>
    </div>
  );
}

export default function Links() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full" data-name="links">
      <Content />
    </div>
  );
}