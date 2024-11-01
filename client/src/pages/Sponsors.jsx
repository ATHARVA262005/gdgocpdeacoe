"use client";
import React, { useState, useEffect } from 'react';
import SponsorsCarousel from '../components/SponsorsCarousel';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/HeroHighlight";
import TimelineDemo from '../components/TimeLineDemo';
import ShimmerButton from '../components/ui/ShimmerBtton';

const sponsorsData = [
  { name: 'Company A', logo: '/path/to/logoA.png' },
  { name: 'Company B', logo: '/path/to/logoB.png' },
  { name: 'Company C', logo: '/path/to/logoC.png' },
  // Add more sponsors here
];

const Sponsors = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-500 ${loading ? 'blur-md' : 'blur-0'}`}>
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Want To be Our{" "}<br/>
        <Highlight className="text-black dark:text-white text-7xl md:text-9xl">
          Sponsors.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    <TimelineDemo/>
    
      
    </div>
  );
};

export default Sponsors;
