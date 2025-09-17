import React from 'react';

const HeroContent = () => {
  return (
    <div className="max-w-2xl text-white z-10 
      text-center md:text-left
      mx-auto md:mx-0
    ">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
        Hey Beautiful! Ready for your glow-up?
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
        Discover a new you with our expert stylists and premium products. Book your transformation today.
      </p>
    </div>
  );
};

export default HeroContent;
