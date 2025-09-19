import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section
      className="
        relative 
        w-full 
        h-[100vh] 
        flex 
        flex-col md:flex-row 
        items-center 
        justify-center md:justify-start
        px-4 md:ps-12 xl:ps-45
        overflow-hidden
      "
    >
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
