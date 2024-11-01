import React from 'react';
import { useState, useEffect } from 'react';

const SponsorsCarousel = ({ sponsors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={sponsor.logo} alt={sponsor.name} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button className="bg-gray-800 text-white p-2 rounded">Previous</button>
        <button className="bg-gray-800 text-white p-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
