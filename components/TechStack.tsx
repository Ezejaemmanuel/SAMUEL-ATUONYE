
import React from 'react';

interface TechCategoryProps {
  title: string;
  items: string[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, items }) => {
  return (
    <div className="bg-black backdrop-blur-md rounded-xl p-6 hover:bg-black/90 transition-colors border border-primary/10 hover:border-primary/30 card-3d">
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-black border border-primary/20 text-primary hover:bg-primary/10 transition-all hover:scale-105 duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Solidity"]
    },
    {
      title: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Flutter"]
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "Firebase", "Supabase", "Figma"]
    },
    {
      title: "AI/ML",
      items: ["OpenAI APIs", "TensorFlow", "LangChain"]
    },
    {
      title: "Blockchain",
      items: ["Ethereum", "Foundry", "Hardhat", "Ethers.js"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-black/30 backdrop-blur-lg relative">
      {/* 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/50 rounded-full float-animation" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/40 rounded-full float-animation" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-primary/60 rounded-full float-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/30 rounded-full float-animation" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tools & <span className="text-primary">Technologies</span> I Love
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <TechCategory key={index} title={category.title} items={category.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
