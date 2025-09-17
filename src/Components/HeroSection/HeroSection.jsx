import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start px-6 md:px-16 overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
