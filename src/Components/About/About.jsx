// src/components/About.jsx

import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Salon interior or team"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <strong>Glow & Grace Salon</strong> – your destination for beauty, confidence, and self-care. We specialize in hair styling, skincare, makeup, and more – tailored exclusively for women who want to look and feel their best.
          </p>
          <p className="text-gray-600 text-md leading-relaxed">
            Founded in 2020, our passionate team of certified professionals is committed to delivering exceptional services using premium products and modern techniques. Whether you're preparing for a special occasion or just need some “me time,” we're here to help you shine.
          </p>

          {/* CTA Button */}
          <a
            href="#services"
            className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-md shadow hover:bg-pink-700 transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
