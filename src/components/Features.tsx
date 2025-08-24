import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Cpu, Shield, Zap, Wifi, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: Cpu,
      title: "Smart Vision",
      description: "Scans floor and obstacles in real time.\nLearns routes for smoother navigation.\nAdapts to uneven or new surfaces."
    },
    {
      icon: Shield,
      title: "Guard Mode",
      description: "Scans floor and obstacles in real time.\nLearns routes for smoother navigation.\nAdapts to uneven or new surfaces."
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Scans floor and obstacles in real time.\nLearns routes for smoother navigation.\nAdapts to uneven or new surfaces."
    },
    {
      icon: Wifi,
      title: "WiFi Link",
      description: "Scans floor and obstacles in real time.\nLearns routes for smoother navigation.\nAdapts to uneven or new surfaces."
    },
    {
      icon: Heart,
      title: "Companion Mode",
      description: "Scans floor and obstacles in real time.\nLearns routes for smoother navigation.\nAdapts to uneven or new surfaces."
    },
  ];

  const radius = 160; // Increased for spacing
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-gray-1050 to-teal-950 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-white"
        >
          Key
          <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Features
          </span>
        </motion.h2>

        {/* Circular Feature Map */}
        <div className="relative mx-auto w-[28rem] h-[28rem]">
          {/* Center Core */}
          <motion.div
            className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-gradient-to-br 
                       from-cyan-500/20 to-teal-500/20 border border-cyan-400/30
                       flex items-center justify-center text-white font-semibold text-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            NovaK9
          </motion.div>

          {/* Segments around the circle */}
          {features.map((feature, i) => {
            const angle = (i * 360) / features.length - 90;
            const x = radius * Math.cos((angle * Math.PI) / 180)-55;
            const y = radius * Math.sin((angle * Math.PI) / 180)-55;
            const isExpanded = expandedIndex === i;
            const isLeftSide = angle > 90 && angle < 270;

            // Base position (equidistant from center)
            const baseX = `calc(50% + ${x}px)`;
            const baseY = `calc(50% + ${y}px)`;

            // Expansion offset only when expanded
            const offsetX = isExpanded && isLeftSide ? "-180px" : isExpanded ? "0px" : "0px";

            return (
              <motion.div
                key={i}
                className={`absolute cursor-pointer ${isExpanded ? "z-30" : "z-10"}`}
                style={{
                  top: baseY,
                  left: `calc(${baseX} + ${offsetX})`,
                  transform: "translate(-50%, -50%)"
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 120, damping: 10 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                <motion.div
                  layout
                  className={`backdrop-blur-md border border-gray-700/50
                              rounded-2xl p-4 flex flex-col justify-center
                              hover:shadow-cyan-400/30 hover:border-cyan-400/40
                              transition-all duration-300 text-white
                              ${isExpanded ? "h-auto w-72" : "w-28 h-28"}
                              ${isExpanded ? (isLeftSide ? "items-end text-right" : "items-start text-left") : "items-center"}
                              bg-gray-800/40`}
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                  {isExpanded && (
                    <p className="text-xs whitespace-pre-line text-gray-300 mt-2">
                      {feature.description}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;