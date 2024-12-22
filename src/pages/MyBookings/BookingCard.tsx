import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Booking } from '../../types';
import { formatDate } from '../../utils/date';

interface BookingCardProps {
  booking: Booking;
}

export default function BookingCard({ booking }: BookingCardProps) {
  if (!booking.event) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{booking.event.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          booking.status === 'confirmed'
            ? 'bg-green-100 text-green-800'
            : booking.status === 'cancelled'
            ? 'bg-red-100 text-red-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
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
            <span>{booking.seats} tickets</span>
          </div>
        </div>

        <div className="space-y-2 md:text-right">
          <div className="text-sm text-gray-600">Booking ID</div>
          <div className="font-mono text-sm">{booking.id.slice(0, 8)}</div>
          <div className="text-lg font-bold text-indigo-600">
            Total: ${booking.total_amount}
          </div>
        </div>
      </div>
    </div>
  );
}