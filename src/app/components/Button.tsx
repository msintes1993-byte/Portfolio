import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-6d416xagq8';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  showIcon?: boolean;
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

export function Button({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  showIcon = true,
  type = 'button'
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[10px] relative border-2 border-foreground ${className}`}
      initial={{
        backgroundColor: isPrimary ? 'var(--primary)' : 'var(--background)',
        boxShadow: '4px 4px 0px 0px var(--foreground)',
        x: 0,
        y: 0,
      }}
      whileHover={{
        backgroundColor: isPrimary ? 'var(--accent)' : 'var(--secondary)',
        boxShadow: '6px 6px 0px 0px var(--foreground)',
        transition: { duration: 0.2 }
      }}
      whileTap={{
        backgroundColor: 'var(--destructive)',
        boxShadow: '0px 0px 0px 0px var(--foreground)',
        x: 4,
        y: 4,
        transition: { duration: 0.1 }
      }}
      style={{
        fontFamily: 'var(--font-family-body)',
        fontSize: 'var(--text-button)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'var(--line-height-button)',
        letterSpacing: 'var(--letter-spacing-button)',
      }}
    >
      <motion.span 
        className="shrink-0"
        initial={{ color: isPrimary ? 'var(--primary-foreground)' : 'var(--foreground)' }}
        whileHover={{ 
          color: isPrimary ? 'var(--accent-foreground)' : 'var(--secondary-foreground)',
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          color: 'var(--destructive-foreground)',
          transition: { duration: 0.1 }
        }}
      >
        {children.toUpperCase()}
      </motion.span>
      {showIcon && (
        <motion.div
          initial={{ '--icon-color': isPrimary ? 'var(--primary-foreground)' : 'var(--foreground)' } as any}
          whileHover={{ 
            '--icon-color': isPrimary ? 'var(--accent-foreground)' : 'var(--secondary-foreground)',
            transition: { duration: 0.2 }
          } as any}
          whileTap={{ 
            '--icon-color': 'var(--destructive-foreground)',
            transition: { duration: 0.1 }
          } as any}
        >
          <IconArrowSquareUpRight color="var(--icon-color, #1a1a1a)" />
        </motion.div>
      )}
    </motion.button>
  );
}
