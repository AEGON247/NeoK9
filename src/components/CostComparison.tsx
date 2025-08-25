import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useInView, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const CostComparison: React.FC = () => {
  const normalItems = [
    { label: 'Emotional support robot', cost: 32000 },
    { label: 'Child security system', cost: 8000 },
    { label: 'Intruder alert', cost: 2400 },
    { label: 'Blind aid', cost: 4200 },
    { label: 'Terrain Mapping Bot', cost: 11500 },
  ];

  const totalNormalCost = normalItems.reduce((sum, item) => sum + item.cost, 0);
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: false, margin: '-100px' });

  useEffect(() => {
  if (isInView) {
    motionValue.set(0); // Reset to 0 before animating
    setTimeout(() => {
      motionValue.set(totalNormalCost); // Animate to target
    }, 100); // slight delay for smoother trigger
  }
}, [isInView, totalNormalCost]);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest).toLocaleString());

    const [animatedTotal, setAnimatedTotal] = useState("0");

    useEffect(() => {
      const unsubscribe = displayValue.on("change", (v) => {
        setAnimatedTotal(v);
      });
      motionValue.set(totalNormalCost); // Start animation
      return () => unsubscribe();
    }, []);

useEffect(() => {
  motionValue.set(totalNormalCost);
}, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-1050 to-teal-800 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Normal Cost */}
        <motion.div
          className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Normal Cost</h3>
          <div className="space-y-4 text-gray-300 text-lg font-medium">
            {normalItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {i === 0 ? '' : '+ '}
                {item.label} : {item.cost.toLocaleString()}
              </motion.div>
            ))}
          </div>

          {/* Horizontal Line */}
          <motion.div
            className="mt-6 h-px bg-gray-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Animated Total */}
          <motion.div ref={counterRef} className="mt-4 text-cyan-400 text-3xl font-bold">
            Total: {animatedTotal}
          </motion.div></motion.div>

        {/* Our Cost */}
        <motion.div
          className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-6 text-center">Our Cost</h3>
          <motion.div
            className="text-cyan-400 text-5xl font-bold text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            35,000
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostComparison;