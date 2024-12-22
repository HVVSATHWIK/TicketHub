import { useState, useEffect } from 'react';
import { getEvents } from '../lib/api/events';
import type { Event } from '../types';

export function useEvents(filters?: {
  category?: string;
  search?: string;
  date?: string;
}) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getEvents(filters);
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch events'));
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [filters?.category, filters?.search, filters?.date]);

  return { events, loading, error };
}