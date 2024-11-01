import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import KeyPointsSection from '../components/KeyPointsSection';
import { ScrollBasedVelocityDemo } from '../components/ui/ScrollBasedVelocityDemo';
import HeroVideoDialogDemo from '../components/ui/VideoDemo';
import JoinUsSection from '../components/JoinUsSection';
import FaqSection from '../components/FaqSection';

const Home = () => {
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
            {/* Add a simple spinner or loader */}
            <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <HeroSection />
      <KeyPointsSection />
      <ScrollBasedVelocityDemo />
      <HeroVideoDialogDemo />
      <JoinUsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
