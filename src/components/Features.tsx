import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Zap, Brain } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "NeoGuard reads your emotions and responds with the perfect companionship for any moment.",
      image: "https://images.pexels.com/photos/8566528/pexels-photo-8566528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "Guardian Mode",
      description: "Advanced security features keep your home safe while you're away.",
      image: "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant response time with cutting-edge AI processing power.",
      image: "https://images.pexels.com/photos/8566529/pexels-photo-8566529.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "NeoGuard learns your routines and preferences to serve you better every day.",
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Intelligent
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the revolutionary capabilities that make NeoGuard more than just a robot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const yTransform = useTransform(
              scrollYProgress,
              [0, 1],
              isEven ? [50, -50] : [-50, 50]
            );

            return (
              <motion.div
                key={feature.title}
                style={{ y: yTransform }}
                className="flex flex-col gap-8"
              >
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 p-4 bg-black/20 backdrop-blur-sm rounded-xl">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;