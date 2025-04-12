"use client";


import { useEffect, useState } from 'react';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Vision from '@/components/Vision';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Showcase3D from '@/components/Showcase3D';
import Brands from '@/components/Brands';
import Testimonials from '@/components/Testimonials';
import SocialMedia3D from '@/components/SocialMedia3D';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Delay showing main content until after intro animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Intro />

      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <About />
        <Vision />
        <Journey />
        <TechStack />
        <Experience />
        <Showcase3D />
        <Brands />
        <Testimonials />
        <SocialMedia3D />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
