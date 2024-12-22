export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  total_seats: number;
  available_seats: number;
  price: number;
  category: string;
  image_url: string;
}

export interface Booking {
  id: string;
  user_id: string;
  event_id: string;
  seats: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  event?: Event;
}