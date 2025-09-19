import React, { useEffect, useState } from 'react';

const images = [
  'https://m.media-amazon.com/images/I/71PmT8R3rfL.jpg',
  'https://salon074.wordpress.com/wp-content/uploads/2023/12/hair-banner.jpeg',
  'https://m.media-amazon.com/images/I/71s5dPueqqL.jpg',
];

const HeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-screen h-full z-[-1]">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Background ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default HeroBackground;
