import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
  id: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  reverse = false 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;
    const content = contentRef.current;

    if (!section || !imageEl || !content) return;

    // Set initial states
    gsap.set(imageEl, { x: reverse ? 100 : -100, opacity: 0 });
    gsap.set(content, { x: reverse ? -100 : 100, opacity: 0 });

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

    tl.to(imageEl, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(content, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, 0.2);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [reverse]);

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div 
            ref={imageRef}
            className={`relative ${reverse ? 'lg:col-start-2' : ''}`}
          >
            <img 
              src={image}
              alt={title}
              className="w-full h-96 object-contain rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"></div>
          </div>
          
          <div 
            ref={contentRef}
            className={`${reverse ? 'lg:col-start-1' : ''}`}
          >
            <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
              {subtitle}
            </h3>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;