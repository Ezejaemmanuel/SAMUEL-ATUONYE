
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Brands = () => {
  const brands = [
    {
      name: "Schiager Digital",
      location: "Norway",
      logo: "SD",
      description: "Collaborated on AI-driven predictive analytics solutions for the Scandinavian market.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-blue-900/40 to-blue-600/20" 
    },
    {
      name: "Care4U",
      location: "USA",
      logo: "C4U",
      description: "Developed mobile health applications focused on patient care and medical record management.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-green-900/40 to-emerald-600/20"
    },
    {
      name: "Opay",
      location: "Nigeria",
      logo: "OP",
      description: "Contributed to the fintech ecosystem by enhancing payment security protocols.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-purple-900/40 to-violet-600/20"
    },
    {
      name: "Livescore",
      location: "Multinational",
      logo: "LS",
      description: "Built real-time sports data integration systems for global sports enthusiasts.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-amber-900/40 to-yellow-600/20"
    },
    {
      name: "EasyPayTech",
      location: "Nigeria",
      logo: "EPT",
      description: "Created blockchain-based payment solutions for streamlined cross-border transactions.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-red-900/40 to-rose-600/20"
    },
    {
      name: "GlobalTech",
      location: "UK",
      logo: "GT",
      description: "Designed AI-powered customer service platforms for multinational enterprises.",
      website: "https://example.com",
      gradient: "bg-gradient-to-br from-teal-900/40 to-cyan-600/20"
    }
  ];

  return (
    <section id="brands" className="py-24 relative overflow-hidden">
      {/* Simplified glassmorphism background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
      
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 filter blur-[150px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 filter blur-[150px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 1 }}
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
            Brands I have <span className="text-primary">Partnered With</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Card 
                className="backdrop-blur-md bg-black/40 border-primary/10 hover:border-primary/30 transition-all group hover:shadow-[0_0_30px_rgba(0,255,153,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-60 mixture-blend-overlay pointer-events-none">
                  <div className={`h-full w-full ${brand.gradient} opacity-40`}></div>
                </div>
                
                <CardHeader className="pb-3 relative">
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center text-xl font-bold text-white mb-2 group-hover:shadow-lg transition-all`}>
                      {brand.logo}
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full backdrop-blur-sm bg-black/60 border border-primary/20 text-primary">
                      {brand.location}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-3 text-white">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-gray-300 text-sm">
                    {brand.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="relative">
                  <a 
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-primary flex items-center hover:underline group"
                  >
                    Visit website <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
