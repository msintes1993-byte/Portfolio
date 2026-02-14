import svgPaths from "./svg-3ltnq7dwtx";

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

export default function PrimaryButton() {
  return (
    <div className="bg-[#ff6b2e] content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[10px] relative shadow-[6px_6px_0px_0px_#1a1a1a] size-full" data-name="primary-button">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#1a1a1a] text-[20px] tracking-[1.2px]">BUTTON</p>
      <IconArrowSquareUpRight />
    </div>
  );
}