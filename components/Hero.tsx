import { ChevronDown, Zap, Box, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Simplified variants with reduced motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Simplified 3D Cube animation with less rotation and longer duration
  const cubeVariants = {
    animate: {
      rotateY: [0, 180],
      rotateX: [0, 180],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  // Reduced number of 3D floating elements
  const floatingElements = [
    { icon: <Box className="text-primary/80" />, size: 40, delay: 0 },
    { icon: <Package className="text-primary/60" />, size: 30, delay: 1 },
    { icon: <Box className="text-primary/40" />, size: 25, delay: 2 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Reduced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[20%] left-[15%] w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[10%] w-60 h-60 bg-primary/5 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Reduced 3D Floating Elements with simplified animations */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotateY: [0, 180],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: el.delay
            }}
          >
            <div style={{ width: el.size, height: el.size }}>
              {el.icon}
            </div>
          </motion.div>
        ))}
        
        {/* Reduced floating 3D particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${i * 12}%`,
              top: `${i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container relative z-10 px-6 py-12 mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced 3D Effect Cube - with simplified animation */}
        <motion.div 
          className="absolute -top-10 right-[10%] opacity-40 hidden lg:block"
          variants={cubeVariants}
          animate="animate"
        >
          <div className="relative w-24 h-24 perspective-1000">
            <div className="absolute w-full h-full transform-3d">
              <div className="absolute w-full h-full border-2 border-primary transform translate-z-12 bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute w-full h-full border-2 border-primary transform -translate-z-12 bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute w-full h-full border-2 border-primary transform rotate-y-90 translate-x-12 bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute w-full h-full border-2 border-primary transform rotate-y-90 -translate-x-12 bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute w-full h-full border-2 border-primary transform rotate-x-90 translate-y-12 bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute w-full h-full border-2 border-primary transform rotate-x-90 -translate-y-12 bg-primary/10 backdrop-blur-sm"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="absolute -left-10 top-[30%] opacity-40 hidden lg:block animate-spin-slow">
          <Box size={60} className="text-primary" />
        </motion.div>

        {/* Simplified text animations */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 perspective-1000 font-tech"
          variants={itemVariants}
        >
          <span className="block transform-3d hover-rotate">
            <span className="text-gradient">Innovate.</span> <span className="text-primary glow">Create.</span> <span className="text-gradient">Transform.</span>
          </span>
        </motion.h1>
        
        <motion.div 
          className="mb-6 flex items-center justify-center"
          variants={itemVariants}
        >
          <Zap className="text-primary animate-pulse mr-2" size={24} />
          <h2 className="text-xl sm:text-2xl text-gray-300 inline-flex items-center">
            I am <span className="text-primary font-semibold font-tech ml-2 text-shadow-3d">SAMUEL ATUONYE</span>
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-lg sm:text-xl max-w-2xl mb-12 text-gray-400"
          variants={itemVariants}
        >
          As a tech entrepreneur and fullstack developer, I craft innovative solutions 
          that bridge the gap between cutting-edge technology and real-world business needs.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.a 
            href="#about" 
            className="flex items-center justify-center px-8 py-3 rounded-full bg-black border border-primary text-primary font-medium hover:bg-primary/10 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,153,0.2)]"
            whileHover={{ 
              y: -3,
              boxShadow: "0 0 25px rgba(0,255,153,0.4)"
            }}
          >
            Discover My Story
          </motion.a>
          <motion.a 
            href="#contact" 
            className="flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,153,0.3)]"
            whileHover={{ 
              y: -3,
              boxShadow: "0 0 25px rgba(0,255,153,0.5)"
            }}
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <motion.a
            href="#about"
            className="p-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 hover:bg-primary/20 transition-all group flex items-center justify-center"
            whileHover={{ scale: 1.1, y: -3 }}
          >
            <ChevronDown className="w-8 h-8 text-primary group-hover:animate-bounce-slow" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
