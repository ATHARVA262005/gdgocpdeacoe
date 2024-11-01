import React from 'react';
import IconCloudDemo from './ui/IconCloudDemo'; // Ensure the path is correct
import HyperText from "./ui/HyperText";
import HeroVideoDialogDemo from './ui/VideoDemo';


function KeyPointsSection() {
  return (
    <>
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-10 space-y-6 lg:space-y-0">
      {/* First Column: IconCloud */}
      <div className="flex-1 flex items-center justify-center">
        <IconCloudDemo />
      </div>

      {/* Second Column: Key Points */}
      <div className="flex-1 flex flex-col space-y-8">
        <div className="space-y-4">
          <HyperText
            className="text-3xl font-bold text-gray-800"
            text="Connect"
            />
          <p className="text-lg text-gray-600">
            Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.
          </p>
        </div>
        <div className="space-y-4">
          <HyperText
            className="text-3xl font-bold text-gray-800"
            text="Learn"
            />
          <p className="text-lg text-gray-600">
            Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.
          </p>
        </div>
        <div className="space-y-4">
          <HyperText
            className="text-3xl font-bold text-gray-800"
            text="Grow"
            />
          <p className="text-lg text-gray-600">
            Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.
          </p>
        </div>
      </div>


    </div>
      
      </>
  );
}

export default KeyPointsSection;
