import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoHero from './components/VideoHero';
import ScrollSection from './components/ScrollSection';
import Vision from './components/Vision';
import TechnicalDetailsSection from './components/TechnicalDetailsSection';
import FinalCTA from './components/FinalCTA';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import AboutUs from './components/AboutUs'
import Features from './components/Features';
import CostComparison from './components/CostComparison';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useSmoothScroll();

  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
  }, []);

  const sections = [
    {
      title: "All-Terrain Explorer",
      subtitle: "BUILT FOR ADVENTURE",
      description: "From city streets to mountain trails, NovaK9's advanced mobility system conquers any terrain. Dynamic balance control and adaptive leg mechanisms ensure stability in any environment.",
      image: "/assets/FrontAnime.png",
    },
    {
      title: "Guardian Protocol",
      subtitle: "SECURITY FIRST",
      description: "Advanced sensor arrays and AI-powered threat detection keep your home secure. NovaK9's guardian mode provides 24/7 monitoring with intelligent alerts and autonomous response capabilities.",
      image: "/assets/SideAnime.png",
      reverse: true
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <VideoHero />
      
      <Vision />
      
      {sections.map((section, index) => (
        <React.Fragment key={section.title}>
          <ScrollSection id={`section-${index}`} {...section} />
        </React.Fragment>
      ))}

      <Features />
      <CostComparison />
      <TechnicalDetailsSection />
      <AboutUs />
      <FinalCTA />
    </div>
  );
}

export default App;