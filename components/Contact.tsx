
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Me",
      info: "techbrosstores@gmail.com",
      desc: "For project inquiries and collaborations",
      url: "mailto:techbrosstores@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Me",
      info: "+2347040196739",
      desc: "Available Monday-Friday, 9AM-5PM",
      url: "tel:+2347040196739"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* 3D background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"></div>
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
            Let&apos;s <span className="text-primary glow">Discuss</span> Your Project
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-tech">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
                  className="block p-6 bg-black/40 backdrop-blur-md border border-primary/20 rounded-xl transform-3d hover:shadow-[0_0_20px_rgba(0,255,153,0.2)]"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-primary font-mono mb-2">{item.info}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.a>
              ))}
            </div>
            
            <div className="bg-black/30 backdrop-blur-md border border-primary/20 rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4 font-tech">My Location</h4>
              <div className="aspect-video relative overflow-hidden rounded-lg border border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932733483!2d3.1159003!3d6.548055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1650312234027!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map location"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-tech">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/30 backdrop-blur-md border border-primary/20 rounded-xl p-6 perspective-1000">
              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your name" 
                  className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-zinc-950" 
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your email" 
                  className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-zinc-950" 
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.01 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={5} 
                  placeholder="Your message" 
                  className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none bg-zinc-950"
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              <motion.div 
                className="text-sm text-gray-400 text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I&apos;ll respond to your message as soon as possible!
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
