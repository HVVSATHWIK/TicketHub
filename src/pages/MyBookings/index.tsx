import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Booking } from '../../types';
import BookingCard from './BookingCard';

export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // Handle authentication later
        return;
      }

      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          event:events (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-white rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h2>
          <p className="text-gray-600">Your booking history will appear here</p>
        </div>
      )}
    </div>
  );
}