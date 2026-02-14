import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-3ltnq7dwtx';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  icon?: 'arrow' | 'layout' | 'none';
  type?: 'button' | 'submit' | 'reset';
}

function IconArrowSquareUpRight({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.p3e04e100} fill={color} />
      </svg>
    </div>
  );
}

function IconLayout({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M27 5.5H5C4.60218 5.5 4.22064 5.65804 3.93934 5.93934C3.65804 6.22064 3.5 6.60218 3.5 7V25C3.5 25.3978 3.65804 25.7794 3.93934 26.0607C4.22064 26.342 4.60218 26.5 5 26.5H27C27.3978 26.5 27.7794 26.342 28.0607 26.0607C28.342 25.7794 28.5 25.3978 28.5 25V7C28.5 6.60218 28.342 6.22064 28.0607 5.93934C27.7794 5.65804 27.3978 5.5 27 5.5ZM5 6.5H27C27.1326 6.5 27.2598 6.55268 27.3536 6.64645C27.4473 6.74021 27.5 6.86739 27.5 7V12.5H4.5V7C4.5 6.86739 4.55268 6.74021 4.64645 6.64645C4.74021 6.55268 4.86739 6.5 5 6.5ZM4.5 25V13.5H12.5V25.5H5C4.86739 25.5 4.74021 25.4473 4.64645 25.3536C4.55268 25.2598 4.5 25.1326 4.5 25ZM27 25.5H13.5V13.5H27.5V25C27.5 25.1326 27.4473 25.2598 27.3536 25.3536C27.2598 25.4473 27.1326 25.5 27 25.5Z" fill={color} />
      </svg>
    </div>
  );
}

export function ButtonIndustrial({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  icon = 'arrow',
  type = 'button'
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[10px] relative shrink-0 border border-foreground ${className}`}
      initial={{
        backgroundColor: isPrimary ? 'var(--primary)' : 'var(--background)',
        boxShadow: 'var(--elevation-sm)',
        x: 0,
        y: 0,
      }}
      whileHover={{
        backgroundColor: isPrimary ? 'var(--accent)' : 'var(--secondary)',
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
      <motion.span 
        className="shrink-0"
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 'var(--text-button)',
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 'var(--line-height-button)',
          letterSpacing: 'var(--letter-spacing-button)',
        }}
        initial={{ color: isPrimary ? 'var(--primary-foreground)' : 'var(--foreground)' }}
        whileHover={{ 
          color: isPrimary ? 'var(--accent-foreground)' : 'var(--secondary-foreground)',
          transition: { duration: 0.15, ease: 'linear' }
        }}
        whileTap={{ 
          color: 'var(--destructive-foreground)',
          transition: { duration: 0.15, ease: 'linear' }
        }}
      >
        {children.toUpperCase()}
      </motion.span>
      {icon !== 'none' && (
        <motion.div
          initial={{ '--icon-color': isPrimary ? 'var(--primary-foreground)' : 'var(--foreground)' } as any}
          whileHover={{ 
            '--icon-color': isPrimary ? 'var(--accent-foreground)' : 'var(--secondary-foreground)',
            transition: { duration: 0.15, ease: 'linear' }
          } as any}
          whileTap={{ 
            '--icon-color': 'var(--destructive-foreground)',
            transition: { duration: 0.15, ease: 'linear' }
          } as any}
        >
          {icon === 'arrow' ? (
            <IconArrowSquareUpRight color="var(--icon-color, #1a1a1a)" />
          ) : (
            <IconLayout color="var(--icon-color, #1a1a1a)" />
          )}
        </motion.div>
      )}
    </motion.button>
  );
}
