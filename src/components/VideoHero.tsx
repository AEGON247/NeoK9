import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const logo = logoRef.current;
    const overlay = overlayRef.current;

    if (!container || !video || !logo || !overlay) return;

    // Set initial states
    gsap.set(logo, { scale: 1, y: 0 });
    gsap.set(overlay, { opacity: 0 });

    // Create scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate logo scaling and movement
    tl.to(logo, {
      scale: 0.3,
      y: -200,
      duration: 1,
      ease: "power2.out"
    })
    // Fade in overlay
    .to(overlay, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut"
    }, 0.3);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/9665239/9665239-uhd_2732_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo */}
      <div 
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-wider">
            NeoGuard
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest">
            THE NEXT EVOLUTION OF COMPANIONSHIP
          </p>
        </div>
      </div>

      {/* Content Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <div className="text-center text-white max-w-4xl px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Your New Best Friend
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Advanced AI companionship technology designed for the modern world
          </p>
          <button
            onClick={() => {
              const target = document.getElementById("section-0");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="pointer-events-auto bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            DISCOVER NeoGuard
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;