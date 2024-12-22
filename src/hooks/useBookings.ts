import { useState, useEffect } from 'react';
import { getUserBookings } from '../lib/api/bookings';
import type { Booking } from '../types';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await getUserBookings();
        setBookings(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch bookings'));
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  return { bookings, loading, error };
}