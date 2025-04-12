import { Users, Clock, Code } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-zinc-950">
      <div className="container px-6 mx-auto bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              As the founder and CEO of <span className="text-primary font-medium">TECHBROS</span>, a pioneering tech startup in Nigeria, 
              I, Samuel Atuonye, leverage my expertise in artificial intelligence, tech content creation, and 
              full-stack development to drive innovation and deliver cutting-edge digital solutions for local and 
              international clients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With over five years of experience in building high-impact projects, I remain committed to 
              fostering a culture of technological advancement and pushing the boundaries of what is possible 
              in the digital landscape with both local and International brands.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-secondary h-64 md:h-80 relative">
              {/* Placeholder avatar - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <span className="text-5xl text-primary">SA</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-1/3"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="rounded-lg p-4 text-center transition-colors bg-gray-950">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              
              <div className="rounded-lg p-4 text-center transition-colors bg-gray-950">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">10+</h3>
                <p className="text-sm text-gray-400">Global Clients</p>
              </div>
              
              <div className="rounded-lg p-4 text-center transition-colors bg-gray-950">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary/10 mb-3">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">20+</h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;