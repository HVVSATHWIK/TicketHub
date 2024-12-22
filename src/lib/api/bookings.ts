import { supabase } from '../supabase';
import type { Booking } from '../../types';

export async function getUserBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      event:events (*)
    `)
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data;
}

export async function createBooking(booking: {
  event_id: string;
  seats: number;
  total_amount: number;
}) {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()
    .single();
    
  if (error) throw error;
  return data;
}