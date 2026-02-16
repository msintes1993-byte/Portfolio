import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-5szophncgs';

function IconFileArrowDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <div className="absolute inset-[10.94%_17.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25">
          <path d={svgPaths.p28275c00} fill="var(--foreground)" />
        </svg>
      </div>
    </div>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <div className="absolute inset-[20.11%_2.44%_20.3%_2.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4452 19.0694">
          <path d={svgPaths.p328d600} fill="var(--foreground)" />
        </svg>
      </div>
    </div>
  );
}

function IconLayout({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <div className="absolute inset-[17.19%_10.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 21">
          <path d={svgPaths.p36bd2200} fill="var(--foreground)" />
        </svg>
      </div>
    </div>
  );
}

function IconArrowSquareUpRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <div className="absolute inset-[14.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
          <path d={svgPaths.pea9a200} fill="var(--foreground)" />
        </svg>
      </div>
    </div>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <path d="M4 8H28M4 16H28M4 24H28" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    </div>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <path d="M8 8L24 24M24 8L8 24" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="square"/>
      </svg>
    </div>
  );
}

type LangSwitchProps = {
  className?: string;
  lang?: "es" | "en";
};

function LangSwitch({ className, lang = "es" }: LangSwitchProps) {
  const [currentLang, setCurrentLang] = useState(lang);
  const isEn = currentLang === "en";
  
  return (
    <button 
      className={className || "content-stretch flex gap-[2px] items-center relative"}
      onClick={() => setCurrentLang(isEn ? "es" : "en")}
    >
      <motion.div 
        className="content-stretch flex h-[48px] items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px]"
        animate={{ 
          backgroundColor: isEn ? 'rgba(0, 0, 0, 0)' : 'var(--primary)'
        }}
        transition={{ duration: 0.15, ease: 'linear' }}
      >
        <p style={{
          fontFamily: 'var(--font-family-headers)',
          fontSize: 'var(--text-label)',
          letterSpacing: '1.68px',
          color: 'var(--foreground)'
        }}>
          ES
        </p>
      </motion.div>
      <motion.div 
        className="content-stretch flex items-center justify-center px-[2px] py-[10px] relative shrink-0 w-[34px]"
        animate={{ 
          backgroundColor: isEn ? 'var(--primary)' : 'rgba(0, 0, 0, 0)',
          height: '48px'
        }}
        transition={{ duration: 0.15, ease: 'linear' }}
      >
        <p style={{
          fontFamily: 'var(--font-family-headers)',
          fontSize: 'var(--text-label)',
          letterSpacing: '1.68px',
          color: 'var(--foreground)'
        }}>
          EN
        </p>
      </motion.div>
    </button>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center p-[3px] relative"}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-foreground inset-0 pointer-events-none" />
      <div className="h-[97px] relative shrink-0 w-[54px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 97">
          <g>
            <path d={svgPaths.p11776a80} fill="var(--foreground)" />
            <path d={svgPaths.p33614b80} fill="var(--foreground)" />
            <path d={svgPaths.p25707f00} fill="var(--foreground)" />
            <path d={svgPaths.p1a5f2500} fill="var(--foreground)" />
            <path d={svgPaths.p160ac780} fill="var(--foreground)" />
            <path d={svgPaths.p3e13da40} fill="var(--foreground)" />
            <path d={svgPaths.p12f87880} fill="var(--foreground)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface NavButtonProps {
  children: string;
  icon: React.ReactNode;
  onClick?: () => void;
  scrollTo?: string;
}

function NavButton({ children, icon, onClick, scrollTo }: NavButtonProps) {
  const handleClick = () => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClick?.();
  };

  return (
    <motion.button
      className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shrink-0"
      onClick={handleClick}
      initial={{
        backgroundColor: 'var(--primary)',
        boxShadow: 'var(--elevation-sm)',
        x: 0,
        y: 0,
      }}
      whileHover={{
        backgroundColor: 'var(--accent)',
        boxShadow: '6px 6px 0px 0px var(--foreground)',
        transition: { duration: 0.15, ease: 'linear' }
      }}
      whileTap={{
        backgroundColor: 'var(--destructive)',
        boxShadow: '0px 0px 0px 0px var(--foreground)',
        x: 4,
        y: 4,
        transition: { duration: 0.15, ease: 'linear' }
      }}
    >
      <p style={{
        fontFamily: 'var(--font-family-body)',
        fontSize: 'var(--text-button)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'var(--line-height-button)',
        letterSpacing: 'var(--letter-spacing-button)',
        color: 'var(--primary-foreground)'
      }}>
        {children}
      </p>
      {icon}
    </motion.button>
  );
}

export function NavBar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className={className || "content-stretch flex items-center justify-between relative w-full"}>
        {/* Logo */}
        <Logo className="content-stretch flex items-center p-[3px] relative shrink-0 hidden lg:flex" />
        
        {/* Desktop Buttons + Language Switcher Container */}
        <div className="content-stretch hidden lg:flex gap-[40px] items-center relative shrink-0">
          {/* Navigation Buttons Group */}
          <div className="flex gap-[40px] items-center">
            <NavButton icon={<IconLayout className="relative shrink-0 size-[32px]" />} scrollTo="about">
              ABOUT
            </NavButton>
            <NavButton icon={<IconArrowSquareUpRight className="relative shrink-0 size-[32px]" />} scrollTo="projects">
              PROJECTS
            </NavButton>
            <NavButton icon={<IconUsers className="relative shrink-0 size-[32px]" />} scrollTo="contact">
              CONTACT
            </NavButton>
            <NavButton icon={<IconFileArrowDown className="relative shrink-0 size-[32px]" />}>
              CV
            </NavButton>
          </div>
          
          {/* Language Switcher Desktop */}
          <LangSwitch className="content-stretch cursor-pointer flex gap-[2px] items-center relative shrink-0" />
        </div>

        {/* Tablet Layout */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Tablet Logo */}
          <div className="flex items-center gap-[24px]">
            <Logo className="content-stretch flex items-center p-[3px] relative shrink-0 scale-75 md:scale-90" />
          </div>

          {/* Tablet/Mobile Buttons */}
          <div className="flex gap-[16px] md:gap-[24px] items-center">
            {/* Hamburger Menu */}
            <motion.button 
              className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 bg-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: "linear" }}
              style={{ boxShadow: 'var(--elevation-sm)' }}
            >
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-foreground/60 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "linear" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-popover border-l border-foreground z-50 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.15, ease: "linear" }}
            style={{ boxShadow: '-4px 0px 0px 0px var(--foreground)' }}
          >
            <div className="flex flex-col h-full p-[24px] gap-[32px]">
              {/* Close Button */}
              <div className="flex justify-between items-center">
                <p style={{
                  fontFamily: 'var(--font-family-headers)',
                  fontSize: 'var(--text-label)',
                  letterSpacing: '1.68px',
                  color: 'var(--foreground)'
                }}>
                  MENU
                </p>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-[8px] bg-primary"
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  style={{ boxShadow: 'var(--elevation-sm)' }}
                >
                  <IconClose className="size-[24px]" />
                </motion.button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-[16px]">
                <NavButton icon={<IconLayout className="relative shrink-0 size-[32px]" />} scrollTo="about" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT
                </NavButton>
                <NavButton icon={<IconArrowSquareUpRight className="relative shrink-0 size-[32px]" />} scrollTo="projects" onClick={() => setMobileMenuOpen(false)}>
                  PROJECTS
                </NavButton>
                <NavButton icon={<IconUsers className="relative shrink-0 size-[32px]" />} scrollTo="contact" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT
                </NavButton>
                <NavButton icon={<IconFileArrowDown className="relative shrink-0 size-[32px]" />}>
                  CV
                </NavButton>
              </div>

              {/* Language Switcher in Drawer */}
              <div className="mt-auto pt-[24px] border-t border-border">
                <LangSwitch className="w-full content-stretch cursor-pointer flex gap-[2px] items-center justify-center relative" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
