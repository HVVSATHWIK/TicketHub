import React from 'react';
import { Calendar, MapPin, Ticket, Clock } from 'lucide-react';
import { Booking } from '../../types';
import { formatDate } from '../../utils/date';

interface BookingCardProps {
  booking: Booking;
}

export default function BookingCard({ booking }: BookingCardProps) {
  if (!booking.event) return null;

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={booking.event.image_url || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'}
            alt={booking.event.title}
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {booking.event.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Booked on {formatDate(booking.created_at)}</span>
              </div>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status]}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(booking.event.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{booking.event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ticket className="w-4 h-4" />
                <span>{booking.seats} {booking.seats === 1 ? 'ticket' : 'tickets'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm text-gray-600">Booking Reference</div>
              <div className="font-mono text-sm bg-gray-50 p-2 rounded">
                {booking.id.slice(0, 8).toUpperCase()}
              </div>
              <div className="text-lg font-bold text-indigo-600">
                Total: ${booking.total_amount}
              </div>
            </div>
          </div>

          {booking.status === 'confirmed' && (
            <button className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              <Ticket className="w-4 h-4 mr-2" />
              Download Ticket
            </button>
          )}
        </div>
      </div>
    </div>
  );
}