// src/components/FaqSection.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Google Developer Groups (GDG) on Campus?",
    answer: "GDG on Campus is a community of students and developers who organize events, workshops, and sessions to help students and local developers learn and grow their skills in various Google technologies."
  },
  {
    question: "How can I join GDG on Campus?",
    answer: "You can join GDG on Campus by attending our events, participating in workshops, and joining our community groups on social media. You can also visit our website for more details on membership and upcoming events."
  },
  {
    question: "What kind of events does GDG on Campus organize?",
    answer: "We organize a variety of events including hackathons, tech talks, workshops, and networking sessions. These events cover a range of topics from web development to cloud computing and more."
  },
  {
    question: "Are there any prerequisites to join GDG on Campus events?",
    answer: "No, there are generally no prerequisites to attend our events. We welcome participants of all skill levels, from beginners to advanced developers. However, some workshops may have specific requirements, which will be mentioned in the event details."
  },
  {
    question: "How can I get involved with organizing GDG on Campus events?",
    answer: "If you're interested in helping organize events, you can reach out to us through our contact form on the website or attend one of our organizing meetings. We are always looking for enthusiastic volunteers to help with event planning and execution."
  },
  {
    question: "Can I suggest topics or speakers for GDG on Campus events?",
    answer: "Yes, we encourage suggestions for topics and speakers. You can submit your suggestions through our contact form or reach out to us via social media. We are always looking for fresh ideas and engaging speakers for our events."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
