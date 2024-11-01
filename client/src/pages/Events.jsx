import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";
import { Input } from "../components/ui/Input";
import EventCard from "../components/EventCard";

const Events = () => {
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const allEvents = [
    {
      id: 1,
      date: 'SEP 20, 2024',
      type: ['ALL', 'CONFERENCE'],
      location: 'VIJAYAWADA, IN',
      title: 'DevFest 2024 Vijayawada',
      tags: ['Data', 'DevFest'],
      description: 'GDG Vijayawada is happy to announce its DevFest 2024 an exciting event for developers, startups, and tech enthusiasts.',
      topic: ['ALL', 'Web Development']
    },
    {
      id: 2,
      date: 'OCT 15, 2024',
      type: ['ALL', 'WORKSHOP'],
      location: 'HYDERABAD, IN',
      title: 'Machine Learning Bootcamp',
      tags: ['AI', 'ML'],
      description: 'An intensive bootcamp on machine learning algorithms and their applications.',
      topic: ['ALL', 'AI/ML']
    },
    // Add more events as needed
  ];
  
  

  useEffect(() => {
    filterEvents();
  }, [searchTerm, selectedType, selectedTopic]);

  const filterEvents = () => {
    const filtered = allEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            event.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || event.type.includes(selectedType);
      const matchesTopic = selectedTopic === '' || event.topic.includes(selectedTopic);
      return matchesSearch && matchesType && matchesTopic;
    });
    setFilteredEvents(filtered);
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming events</h1>
      <p className="mb-6 text-gray-600">
        We can't wait to see you at an upcoming event! On this page, you can advance search by location, select
        event types (how you want to join the event), and/or pick out topics of your interest!
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <Input 
          placeholder="Search for a city or region" 
          className="flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Event types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Types</SelectItem>
            <SelectItem value="CONFERENCE">Conference</SelectItem>
            <SelectItem value="WORKSHOP">Workshop</SelectItem>
            <SelectItem value="MEETUP">Meetup</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedTopic} onValueChange={setSelectedTopic}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Event topics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Topics</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Mobile Development">Mobile Development</SelectItem>
            <SelectItem value="AI/ML">AI/ML</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="events-list">
        {filteredEvents.map(event => (
            <div className='mt-20'>
          <EventCard key={event.id} event={event} />
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500">No events found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Events;