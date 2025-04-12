
import { motion } from 'framer-motion';
import { Globe, Zap, Shield } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 filter blur-[100px]"
          style={{ top: '10%', left: '5%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-primary/5 filter blur-[100px]"
          style={{ bottom: '10%', right: '5%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Vision</span> & Mission
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Driving technological advancement in Africa through innovation, education, and 
            creating solutions that solve real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vision Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
            <p className="text-gray-400">
              Creating technology that transcends borders and connects people across 
              the globe while addressing universal challenges.
            </p>
          </motion.div>
          
          {/* Vision Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-400">
              Pushing boundaries and challenging the status quo by finding creative 
              solutions to complex problems through technology.
            </p>
          </motion.div>
          
          {/* Vision Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
            <p className="text-gray-400">
              Mentoring the next generation of tech leaders and creating opportunities 
              for underrepresented groups in the technology sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
