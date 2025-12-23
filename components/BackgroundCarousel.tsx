
import React, { useState, useEffect } from 'react';
import { CAROUSEL_IMAGES } from '../constants';

const BackgroundCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 10000); // Changed from 5s to 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {CAROUSEL_IMAGES.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out bg-center bg-cover scale-110 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image.url}')` }}
          aria-hidden={index !== currentIndex}
        >
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/80 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;
