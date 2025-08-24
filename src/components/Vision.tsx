import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Heart, Zap, Eye, ChevronLeft, ChevronRight, Cpu, Radio, Camera, Battery } from 'lucide-react';

const Vision: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visionSlides = [
    {
      icon: Cpu,
      title: 'Smart Motion Core',
      description: 'IMU for stable movement',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Context-Aware Security',
      description: 'Sound and proximity-based threat alerts',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      icon: Camera,
      title: 'Enhanced Vision',
      description: 'Multi-spectrum visual processing',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Radio,
      title: 'Smart Connectivity',
      description: 'Seamless IoT integration',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Advanced behavioral algorithms',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Battery,
      title: 'Adaptive Power Unit',
      description: '2000mAh Long-lasting battery',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade protection systems with AI-powered threat assessment.',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Sophisticated behavioral algorithms for meaningful companionship.',
    },
    {
      icon: Zap,
      title: 'Assisted Autonomy',
      description: 'Innovative modification of a Drone Remote for operation & control.',
    },
    {
      icon: Eye,
      title: 'Enhanced Perception',
      description: 'Multi-spectrum vision and advanced sensor arrays for complete awareness.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visionSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + visionSlides.length) % visionSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-gray-1050 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Our Vision
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl">
              Redefining Security and Companionship
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future where technology meets trust, creating an unprecedented
            bond between humans and artificial intelligence.
          </p>
        </motion.div>

        {/* Vision Slider */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Main Slider Container */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 text-center min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  {(() => {
                    const IconComponent = visionSlides[currentSlide].icon;
                    return (
                      <>
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-6 bg-gradient-to-br ${visionSlides[currentSlide].gradient} rounded-2xl mb-8 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                          <IconComponent className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {visionSlides[currentSlide].title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl text-gray-300 max-w-2xl">
                    {visionSlides[currentSlide].description}
                  </p>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {visionSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;