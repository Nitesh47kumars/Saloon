import React from 'react';
import { motion } from 'framer-motion';
import { animation } from '../../Motion/Animation';

const AboutContent = () => {
  return (
    <motion.div
      variants={animation("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:w-1/2"
    >
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Welcome to <strong>Glow & Grace Salon</strong> – your destination for beauty, confidence, and self-care.
        We specialize in hair styling, skincare, makeup, and more – tailored exclusively for women who want to
        look and feel their best.
      </p>
      <p className="text-gray-600 text-md leading-relaxed">
        Founded in 2020, our passionate team of certified professionals is committed to delivering exceptional
        services using premium products and modern techniques. Whether you're preparing for a special occasion
        or just need some “me time,” we're here to help you shine.
      </p>

      <a
        href="#services"
        className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-md shadow hover:bg-pink-700 transition"
      >
        Explore Our Services
      </a>
    </motion.div>
  );
};

export default AboutContent;
