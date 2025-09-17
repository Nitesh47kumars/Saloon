import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section
      className="
        relative 
        w-full 
        h-[90vh] 
        flex 
        flex-col md:flex-row 
        items-center 
        justify-center md:justify-start
        px-6 md:px-16 
        overflow-hidden
      "
    >
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
