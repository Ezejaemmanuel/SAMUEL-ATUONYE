
import { Lightbulb, Users, MessageSquare } from 'lucide-react';

const Journey = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Talent Development",
      description: "Nurturing and growing talent through mentorship, training, and creating opportunities for professional growth."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Diversity and Inclusion",
      description: "Building diverse teams where everyone feels welcome, valued, and has equal opportunities to contribute and succeed."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Open Communication",
      description: "Fostering transparent, honest, and respectful communication that encourages feedback and collaborative problem-solving."
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-primary/5 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Journey & <span className="text-primary">Approach</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/10">
          <p className="text-gray-300 leading-relaxed">
            As Founder and CEO, I am committed to creating a positive and inclusive team culture that fosters creativity, collaboration, and growth.
            Our team is built on a foundation of shared values, mutual respect, and a passion for technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-black rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-[0_0_25px_rgba(0,255,153,0.15)] card-3d"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-black border border-primary/20 mb-4 group-hover:bg-primary/10 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
