// src/components/About/About.jsx

import React from 'react';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
