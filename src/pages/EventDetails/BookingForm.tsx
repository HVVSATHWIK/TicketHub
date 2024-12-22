import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Event } from '../../types';

interface BookingFormProps {
  event: Event;
}

export default function BookingForm({ event }: BookingFormProps) {
  const navigate = useNavigate();
  const [seats, setSeats] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        // Handle authentication later
        alert('Please log in to book tickets');
        return;
      }

      const { error } = await supabase.from('bookings').insert({
        event_id: event.id,
        user_id: user.id,
        seats,
        total_amount: event.price * seats,
      });

      if (error) throw error;

      navigate('/my-bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <div className="mb-6">
        <div className="text-2xl font-bold text-gray-900 mb-2">
          ${event.price}
          <span className="text-sm font-normal text-gray-600"> per ticket</span>
        </div>
        <div className="text-sm text-gray-600">
          {event.available_seats} seats remaining
        </div>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label htmlFor="seats" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Tickets
          </label>
          <select
            id="seats"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {Array.from(
              { length: Math.min(10, event.available_seats) },
              (_, i) => i + 1
            ).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'ticket' : 'tickets'}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${event.price * seats}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
}