import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import MagicCard from "../components/ui/MagicCard";

const gdgorganizer = [
  {
    name: 'Atharva Ralegankar',
    position: 'GDG Campus Organizer',
    bio: 'Experienced leader in tech with a passion for innovation and team growth.',
    image: 'https://via.placeholder.com/100',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
];

const teamData = {
  'Core Commitee': [
    { name: 'Samarth Shinde', position: 'Vice President', bio: 'Leading with a strategic vision.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/samarthshinde' },
    { name: 'Sakshi Pawar', position: 'Women In Tech', bio: 'Leading with a strategic vision.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/samarthshinde' },
    { name: 'Sagar Wavhal', position: 'Archivist', bio: 'Leading with a strategic vision.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/samarthshinde' },
  ],
  'Management': [
    { name: 'Kiran Rokade', position: 'Management Head', bio: 'Expert in team management.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/kiranrokade' },
    { name: 'Member 1', position: 'Team Member', bio: 'Organized and efficient.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Goal-oriented and detail-focused.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Adept at multitasking.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Content': [
    { name: 'Mrunali Patil', position: 'Content Lead', bio: 'Creative and innovative.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/mrunalipatil' },
    { name: 'Member 1', position: 'Content Member', bio: 'Passionate about content creation.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Content Member', bio: 'Skilled in storytelling.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Content Member', bio: 'Focused on innovation.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Web Development': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Cloud': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Design': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Machine Learning': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Cybersecurity': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Mobile development': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Data Science': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ],
  'Outreach': [
    { name: 'Pratik Mahale', position: 'Cloud Lead', bio: 'Cloud expert with years of experience.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/pratikmahale' },
    { name: 'Member 1', position: 'Team Member', bio: 'Cloud enthusiast.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member1' },
    { name: 'Member 2', position: 'Team Member', bio: 'Passionate about cloud computing.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member2' },
    { name: 'Member 3', position: 'Team Member', bio: 'Innovative cloud solutions expert.', image: 'https://via.placeholder.com/100', linkedin: 'https://linkedin.com/in/member3' }
  ]
};

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <div className="p-4 md:p-8 space-y-8">
        <section>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-4xl font-bold mb-4">GDG Campus Organizer (Formerly GDSC Lead)</h2>
            <p className="text-black text-sm md:text-base"> A GDG Campus Organizer is a dedicated student leader who manages and drives the activities of Google Developer Groups at their university. They organize events, workshops, and meetups to foster a community of developers, promote Google’s technologies, and provide valuable learning and networking opportunities for fellow students. They act as a bridge between the university and the broader GDG network, encouraging collaboration and innovation within the tech community.</p>
          </div>
        </section>

        <section className="space-y-8 flex flex-col items-center">
          <div className='flex flex-col md:flex-row gap-5'>
            {gdgorganizer.map(member => (
              <MagicCard
                key={member.name}
                className="cursor-pointer flex-col items-center justify-center shadow-red-500 shadow-lg m-5 p-4 max-w-xs md:max-w-sm"
                gradientColor="#D9D9D955"
              >
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                  <img src={member.image} alt={member.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-green-500" />
                  <div className="text-center md:text-left mt-4 md:mt-0">
                    <p className="text-black text-lg font-bold">{member.name}</p>
                    <p className="text-black">{member.position}</p>
                    <p className="text-black text-sm mt-2">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-black flex items-center justify-center md:justify-start space-x-1 mt-2">
                      <FaLinkedin />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </section>
      </div>

      <div className="p-4 md:p-8 space-y-8">
        {Object.keys(teamData).map((teamLead) => (
          <section key={teamLead} className="space-y-8 flex flex-col items-center">
            <h3 className="text-green-500 text-lg md:text-xl font-bold mb-4">{teamLead} Members</h3>
            <div className="flex flex-col md:flex-row gap-5">
              {teamData[teamLead].map((member, index) => (
                <MagicCard
                  key={member.name}
                  className={`cursor-pointer flex-col items-center justify-center p-4 max-w-xs ${index === 0 ? 'shadow-blue-500 shadow-md' : 'shadow-yellow-500 shadow-md'}`}
                  gradientColor="#D9D9D955"
                >
                  <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
                    <img src={member.image} alt={member.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-green-500" />
                    <div className="text-center md:text-left mt-4 md:mt-0">
                      <p className="text-black text-lg font-bold">{member.name}</p>
                      <p className="text-black">{member.position}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-black flex items-center justify-center md:justify-start space-x-1 mt-2">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Team;
