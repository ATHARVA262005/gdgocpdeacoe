import React from 'react';
import AnimatedGridPattern from './ui/AnimatedGridPattern';
import DockDemo from './ui/DockDemo';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Grid Pattern in the Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 lg:px-16 bg-white py-5">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Link to="/" className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
           <img src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png" alt="gdg logo" width={150} />
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
          GDG on Campus 
          <span className='text-red-500'> Pune District Education Association's</span>
          <span className='text-green-700'> College</span>
          <span className='text-yellow-400'> of</span>
          <span className='text-blue-800'> Engineering</span> 
          - Pune, India
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl">
          GDG on Campus Pune District Education Association's College of Engineering - Pune, India is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit https://developers.google.com/community
          </p>

          {/* Additional Content Below the Tagline */}
          <div className="flex justify-center mt-6">
            {/* Add any additional content or buttons here if necessary */}
            <p className="text-base lg:text-lg text-gray-600">Connecting People , Building Communities</p>
          </div>
        </div>

        <DockDemo/>
      </div>
    </div>
  );
}

export default HeroSection;
