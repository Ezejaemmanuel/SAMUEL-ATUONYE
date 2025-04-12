
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Users, Code, Award, Coffee } from "lucide-react";

const StatCard = ({ icon, value, label, delay }: { icon: React.ReactNode, value: number, label: string, delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="backdrop-blur-md bg-black/30 rounded-xl border border-primary/10 p-6 text-center flex flex-col items-center"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
        <CountUp 
          end={value} 
          duration={2} 
          enableScrollSpy={true}
          scrollSpyDelay={200}
          scrollSpyOnce={true}
        />
        <span className="text-primary">+</span>
      </h3>
      <p className="text-sm text-gray-300">{label}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      position: "CTO at Tech Innovators",
      text: "Working with Samuel was a game-changer for our project. His expertise in AI and mobile development helped us launch our product ahead of schedule with features that exceeded our expectations.",
      image: "AJ"
    },
    {
      name: "Sophia Chen",
      position: "Founder of FinTech Solutions",
      text: "Samuel's deep understanding of blockchain technology and his ability to translate complex technical concepts into practical solutions was invaluable to our fintech startup.",
      image: "SC"
    },
    {
      name: "Michael Adams",
      position: "Product Manager at DataFlow",
      text: "The TechBros team under Samuel's leadership delivered a sophisticated data analysis system that has transformed how we make business decisions. Their attention to detail and technical prowess is outstanding.",
      image: "MA"
    },
    {
      name: "Olivia Martinez",
      position: "Director of Innovation at HealthTech",
      text: "Samuel's approach to problem-solving and his commitment to delivering high-quality solutions make him a standout tech leader. His work on our healthcare app has received praise from users and stakeholders alike.",
      image: "OM"
    }
  ];

  const stats = [
    { icon: <Users className="w-7 h-7 text-primary" />, value: 20, label: "Happy Clients", delay: 0 },
    { icon: <Code className="w-7 h-7 text-primary" />, value: 50, label: "Projects Completed", delay: 0.1 },
    { icon: <Award className="w-7 h-7 text-primary" />, value: 5, label: "Years Experience", delay: 0.2 },
    { icon: <Coffee className="w-7 h-7 text-primary" />, value: 2500, label: "Cups of Coffee", delay: 0.3 }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/5 w-80 h-80 rounded-full bg-primary/5 filter blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-primary/5 filter blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Client <span className="text-primary">Testimonials</span>
          </h2>
        </motion.div>

        <div className="mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="backdrop-blur-md bg-black/40 border-primary/10 hover:border-primary/30 transition-all h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="w-8 h-8 text-primary/40 mb-4" />
                        <p className="text-gray-300 mb-6 flex-grow">&quot;{testimonial.text}&quot;</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center text-lg font-bold text-white">
                            {testimonial.image}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-2">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0" />
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            By the <span className="text-primary">Numbers</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
