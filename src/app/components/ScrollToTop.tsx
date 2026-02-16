import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function IconArrowUp({ className }: { className?: string }) {
  return (
    <svg 
      className={className || "size-6"} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Show button when navbar disappears (scrolled down more than 200px)
      setIsVisible(scrollContainer.scrollTop > 200);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;
    
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 w-12 h-12 items-center justify-center bg-primary z-50"
          style={{
            boxShadow: '4px 4px 0px #1A1A1A',
            color: 'var(--primary-foreground)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'linear' }}
          whileHover={{
            boxShadow: '6px 6px 0px #1A1A1A',
            backgroundColor: 'var(--accent)',
            transition: { duration: 0.15, ease: 'linear' }
          }}
          whileTap={{
            boxShadow: '0px 0px 0px #1A1A1A',
            x: 4,
            y: 4,
            transition: { duration: 0.15, ease: 'linear' }
          }}
          aria-label="Scroll to top"
        >
          <IconArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
