import { supabase } from '../supabase';
import type { Event } from '../../types';

export async function getEvents(filters?: {
  category?: string;
  search?: string;
  date?: string;
}) {
  let query = supabase.from('events').select('*');

  if (filters?.category) {
    query = query.eq('category', filters.category);
  }
  
  if (filters?.search) {
    query = query.ilike('title', `%${filters.search}%`);
  }
  
  if (filters?.date) {
    query = query.gte('date', filters.date);
  }

  const { data, error } = await query.order('date', { ascending: true });
  if (error) throw error;
  return data;
}

export async function getEventById(id: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) throw error;
  return data;
}