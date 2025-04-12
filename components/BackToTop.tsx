
import { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-black backdrop-blur-md border border-primary/30 text-primary hover:bg-primary/20 transition-all z-30 shadow-[0_0_15px_rgba(0,255,153,0.3)] perspective-1000"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.2, 
            rotateY: 10,
            rotateX: -10,
            y: -5,
            boxShadow: "0 0 30px rgba(0,255,153,0.6)"
          }}
        >
          <motion.div 
            className="relative"
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="flex flex-col items-center">
              <ChevronUp className="w-5 h-5 mb-1" />
              <ArrowUp className="w-6 h-6" />
            </div>
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 filter blur-sm animate-pulse"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
