/*
  # Initial Schema for Ticket Booking System

  1. New Tables
    - events
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - date (timestamptz)
      - location (text)
      - total_seats (integer)
      - available_seats (integer)
      - price (decimal)
      - category (text)
      - created_at (timestamptz)
      - image_url (text)
    
    - bookings
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - event_id (uuid, foreign key)
      - seats (integer)
      - total_amount (decimal)
      - status (text)
      - created_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date timestamptz NOT NULL,
  location text NOT NULL,
  total_seats integer NOT NULL,
  available_seats integer NOT NULL,
  price decimal NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  image_url text
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  event_id uuid REFERENCES events NOT NULL,
  seats integer NOT NULL,
  total_amount decimal NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for events
CREATE POLICY "Events are viewable by everyone" 
  ON events 
  FOR SELECT 
  TO public 
  USING (true);

CREATE POLICY "Only admins can insert events" 
  ON events 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Only admins can update events" 
  ON events 
  FOR UPDATE 
  TO authenticated 
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Policies for bookings
CREATE POLICY "Users can view their own bookings" 
  ON bookings 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings" 
  ON bookings 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings" 
  ON bookings 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);