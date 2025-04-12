
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, Github, Linkedin, Youtube } from 'lucide-react';

const SocialMedia3D = () => {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "techbros_7",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/techbros_7",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Twitter (X)",
      handle: "TechBros_7",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/TechBros_7",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Facebook",
      handle: "@TechBros",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/TechBros",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "LinkedIn",
      handle: "samuel-atuonye",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/samuel-atuonye",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "GitHub",
      handle: "techbros-7",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/techbros-7",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "YouTube",
      handle: "TechBrosChannel",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://youtube.com/c/TechBrosChannel",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Email",
      handle: "techbrosstores@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:techbrosstores@gmail.com",
      color: "from-green-500 to-green-700"
    },
    {
      name: "WhatsApp",
      handle: "+2347040196739",
      icon: <Phone className="w-6 h-6" />,
      url: "https://wa.me/2347040196739",
      color: "from-green-400 to-green-600"
    }
  ];

  // Simplified staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section id="social-media" className="py-20 relative overflow-hidden">
      {/* Reduced futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        
        {/* Reduced grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-primary" style={{ top: `${i * 10}%` }}></div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-primary" style={{ left: `${i * 10}%` }}></div>
          ))}
        </div>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-tech mb-4">
            Let us <span className="text-primary glow">Connect</span> Digitally
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow me on social media to stay updated with my latest projects, insights, and innovations in tech and development.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                z: 20,
              }}
              className="block relative perspective-1000 card-3d"
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${link.color} backdrop-blur-md border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.3)] h-full transform-3d`}>
                <div className="flex items-center">
                  <div className="mr-4 bg-black/20 p-3 rounded-full">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{link.name}</h3>
                    <p className="text-sm text-white/80">{link.handle}</p>
                  </div>
                </div>
              </div>
              
              {/* Simplified 3D hover effect elements */}
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,153,0.3)]"
          >
            Get in Touch Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia3D;
