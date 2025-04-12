
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <motion.div 
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced background effects */}
        <motion.div 
          className="absolute top-[30%] left-[20%] w-72 h-72 bg-primary/10 rounded-full filter blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-primary/5 rounded-full filter blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        {/* Reduced 3D floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/80"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${i * 12}%`,
              top: `${i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container max-w-3xl px-6 text-center perspective-1000 relative z-10">
        <motion.div
          initial={{ opacity: 0, rotateX: 10 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6 }}
          className="transform-3d"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-tech font-bold text-shadow-3d">
              <span className="text-primary glow inline-block">FUTURE</span>
              <span className="inline-block mx-2">&times;</span>
              <span className="text-primary glow inline-block">CODE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-10"
          >
            <p className="text-xl sm:text-2xl italic text-gray-300">
              Where Imagination Meets Implementation
            </p>
          </motion.div>

          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.p 
              className="text-2xl sm:text-3xl font-tech"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              I am <span className="text-primary font-semibold">SAMUEL ATUONYE</span>
            </motion.p>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              Founder & CEO @ TECHBROS
            </motion.p>
            
            <motion.div
              className="pt-5 flex justify-center space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              {/* Simplified hover animations */}
              <motion.span 
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 glowing-border"
              >
                AI
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 glowing-border"
              >
                Mobile
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 glowing-border"
              >
                Fullstack
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 glowing-border"
              >
                Content
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
