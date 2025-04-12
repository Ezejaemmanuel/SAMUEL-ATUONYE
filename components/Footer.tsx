import { Heart } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Journey",
    href: "#journey"
  }, {
    name: "Tech Stack",
    href: "#tech-stack"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Brands",
    href: "#brands"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <footer className="py-12 bg-slate-950">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Samuel Atuonye
            </a>
            <p className="mt-2 text-gray-400">Founder & CEO @ TechBros</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {quickLinks.map((link, index) => <a key={index} href={link.href} className="px-4 py-1 text-sm text-gray-400 hover:text-primary transition-colors">
                {link.name}
              </a>)}
          </div>
          
          <div className="flex items-center text-gray-400">
            <p>Built with</p>
            <Heart className="w-4 h-4 mx-1 text-primary fill-primary" />
            <p>by Samuel Atuonye</p>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TechBros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;