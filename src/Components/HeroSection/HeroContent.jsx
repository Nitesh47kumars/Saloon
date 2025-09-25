import React from 'react';
import { motion } from 'framer-motion';
import { animation } from '../../Motion/Animation';

const HeroContent = () => {
  return (
    <div
      className="max-w-2xl text-white z-10 
        text-center md:text-left
        mx-auto md:mx-0"
    >
      <motion.h1
        className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
        variants={animation("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        Hey Beautiful! Ready for your glow-up?
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0"
        variants={animation("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        Discover a new you with our expert stylists and premium products. Book your transformation today.
      </motion.p>
    </div>
  );
};

export default HeroContent;
