// src/components/About/About.jsx

import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <section id="about" className="bg-white mt-25 md:mt-40 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-pink-600 my-10 md:my-14">
        About Us
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
