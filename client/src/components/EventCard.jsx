import React from 'react';
import { Button } from "../components/ui/Button";

const EventCard = ({ event }) => (
    <div className="flex items-start space-x-4 mb-6">
      <div className="w-16 h-16 bg-red-500 rounded-full flex-shrink-0"></div>
      <div className="flex-grow">
        <div className="text-sm text-gray-500">{event.date} - {event.type.join(', ')} - {event.location}</div>
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <div className="flex space-x-2 my-2">
          {event.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <p className="text-gray-700">{event.description}</p>
        <Button className="mt-2" variant="blue" >View details</Button>
      </div>
    </div>
  );
  

  export default EventCard;