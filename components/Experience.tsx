
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Smartphone, Code, FileText, Rocket } from 'lucide-react';
import { useRef } from 'react';
import CountUp from 'react-countup';

const TimelineItem = ({ icon, title, description, index, total }: { icon: React.ReactNode, title: string, description: string, index: number, total: number }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });
  
  // Simplified animations
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, -10]);
  
  const isOdd = index % 2 === 0;
  
  return (
    <motion.div 
      ref={itemRef}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      style={{ opacity, scale, x: isOdd ? x : useTransform(x, value => -value) }}
      className={`relative mb-24 last:mb-0 ${isOdd ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} lg:w-[45%] position-relative`}
    >
      {/* Timeline connector */}
      <div className="hidden lg:block absolute top-8 w-8 h-0.5 bg-primary/70 
                      left-[calc(100%)] right-auto"
                      style={{ left: isOdd ? 'calc(100%)' : 'auto', right: isOdd ? 'auto' : 'calc(100%)' }}></div>
      
      {/* Timeline dot */}
      <div className="absolute top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 z-10
                      left-[calc(100%+0.5rem)] right-auto"
                      style={{ left: isOdd ? 'calc(100% + 0.5rem)' : 'auto', right: isOdd ? 'auto' : 'calc(100% + 0.5rem)' }}></div>
      
      <div className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_35px_rgba(0,255,153,0.25)] card-3d">
        <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-black border border-primary/30 group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary font-tech">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineering",
      description: "Building cutting-edge AI-powered applications and integrating large language models into business solutions that drive automation and insights.",
      icon: <Brain className="w-6 h-6 text-primary" />
    },
    {
      title: "Mobile Development",
      description: "Creating responsive and user-friendly mobile applications using Flutter and React Native for cross-platform compatibility and seamless user experiences.",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Fullstack Development",
      description: "Architecting and developing end-to-end solutions using MERN and PERN stacks for scalable web applications that meet complex business requirements.",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "Tech Content Writing",
      description: "Sharing knowledge and insights through technical articles on Medium, Dev.to, and LinkedIn, helping others learn and grow in their tech journey.",
      icon: <FileText className="w-6 h-6 text-primary" />
    },
    {
      title: "Startup Leadership",
      description: "Leading and growing TECHBROS from inception, managing teams, and driving business strategy and vision to create impactful digital solutions.",
      icon: <Rocket className="w-6 h-6 text-primary" />
    }
  ];

  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  });
  
  // Simplified animations
  const statsOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const statsY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, 30]);

  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>
      
      {/* Reduced animated particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 px-6 mx-auto position-relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-tech">
            Core <span className="text-primary">Experience</span>
          </h2>
        </motion.div>
        
        {/* Stats Section - with simplified animations */}
        <motion.div
          ref={statsRef}
          style={{ opacity: statsOpacity, y: statsY }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 border border-primary/20 card-3d text-center">
              <h3 className="text-5xl font-bold text-primary mb-2 font-tech">
                <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="glass-card rounded-xl p-6 border border-primary/20 card-3d text-center">
              <h3 className="text-5xl font-bold text-primary mb-2 font-tech">
                <CountUp end={50} duration={2} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="glass-card rounded-xl p-6 border border-primary/20 card-3d text-center">
              <h3 className="text-5xl font-bold text-primary mb-2 font-tech">
                <CountUp end={30} duration={2} enableScrollSpy scrollSpyOnce />+
              </h3>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
          </div>
        </motion.div>
        
        {/* Timeline section */}
        <div className="relative">
          {/* Center line for timeline */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="relative flex flex-col">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                icon={exp.icon} 
                title={exp.title} 
                description={exp.description}
                index={index}
                total={experiences.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
