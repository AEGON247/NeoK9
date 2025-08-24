import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaSatelliteDish, FaBatteryFull, FaWifi, 
  FaMicrochip, FaRocket, FaCog 
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TechnicalDetailsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const specifications = [
    {
      category: 'Sensors',
      icon: FaSatelliteDish,
      items: [
        { label: 'Proximity Sensors', value: '4x Ultra-sonic (front, rear, sides)' },
        { label: 'IMU (6-DoF)', value: 'Integrated accelerometer & gyroscope' },
        { label: 'Light Sensor', value: 'Ambient light sensor for low-light switching' },
        { label: 'Audio Sensor', value: 'Neck Sound Sensor' },
      ],
    },
    {
      category: 'Power & Battery',
      icon: FaBatteryFull,
      items: [
        { label: 'Battery Life', value: 'Up to 8 hours active use' },
        { label: 'Charging Time', value: '2 hours fast charge' },
        { label: 'Power Management', value: 'Smart power optimization' },
        { label: 'Standby Mode', value: '72 hours standby time' },
      ],
    },
    {
      category: 'Connectivity',
      icon: FaWifi,
      items: [
        { label: 'Wi-Fi', value: '802.11ac dual-band' },
        { label: 'Bluetooth', value: 'Bluetooth 5.0 Low Energy' },
        { label: 'Mobile App', value: 'iOS & Android compatible' },
        { label: 'Cloud Sync', value: 'Real-time data synchronization' },
      ],
    },
    {
      category: 'Processing',
      icon: FaMicrochip,
      items: [
        { label: 'CPU', value: 'ARM Cortex-A78 Quad-core 2.8GHz' },
        { label: 'AI Processor', value: 'Neural Processing Unit (NPU)' },
        { label: 'Memory', value: '8GB LPDDR5 RAM' },
        { label: 'Storage', value: '128GB eUFS 3.1' },
      ],
    },
    {
      category: 'Movement',
      icon: FaRocket,
      items: [
        { label: 'Max Speed', value: '12 mph (19 km/h)' },
        { label: 'Range', value: '25 miles on single charge' },
        { label: 'Terrain', value: 'All-terrain adaptive legs' },
        { label: 'Stability', value: 'Dynamic balance control' },
      ],
    },
    {
      category: 'Features',
      icon: FaCog,
      items: [
        { label: 'Voice Control', value: 'Natural language processing' },
        { label: 'Face Recognition', value: 'Multi-user identification' },
        { label: 'Emotion AI', value: 'Emotional response system' },
        { label: 'Learning', value: 'Adaptive behavior algorithms' },
      ],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    gsap.set(cards, { y: 100, opacity: 0 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen bg-gradient-to-b from-gray-1050 to-teal-950 text-white py-20"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Technical Specifications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Precision-engineered with cutting-edge technology and uncompromising attention to detail.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div
              key={spec.category}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative group bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 
                        backdrop-blur-sm transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 
                              rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl 
                                group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {spec.category}
                </h3>
              </div>

              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex justify-between items-start gap-4 p-3 bg-gray-800/30 rounded-lg 
                               hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <span className="text-gray-300 font-medium">{item.label}</span>
                    <span className="text-cyan-400 font-semibold text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 
                              group-hover:opacity-100 transition-opacity duration-700 animate-ping" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetailsSection;