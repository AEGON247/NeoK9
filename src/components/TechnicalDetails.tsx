import React from 'react';
import { motion } from 'framer-motion';
import { FaSatelliteDish, FaBatteryFull, FaWifi, FaMicrochip, FaRocket, FaCog } from 'react-icons/fa';

const TechnicalDetails: React.FC = () => {
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

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technical
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every component of NovaK9 has been engineered to perfection, 
            delivering unmatched performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{spec.category}</h3>
              </div>
              
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-700 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-gray-300 font-medium">{item.label}</span>
                      <span className="text-cyan-400 text-right font-semibold text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;