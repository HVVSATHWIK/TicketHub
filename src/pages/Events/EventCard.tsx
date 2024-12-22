import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../../types';
import { formatDate } from '../../utils/date';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <img
        src={event.image_url || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">
            ${event.price}
          </span>
          <span className="text-sm text-gray-500">
            {event.available_seats} seats left
          </span>
        </div>
      </div>
    </Link>
  );
}