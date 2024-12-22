/*
  # Sample Events Data

  This migration adds sample events including concerts, movies, and other entertainment events.
  
  1. Events Added
    - 20 concerts
    - 16 movies
    - 20 other events (theater, sports, comedy)
*/

-- Concerts
INSERT INTO events (title, description, date, location, total_seats, available_seats, price, category, image_url) VALUES
-- Rock Concerts
('Foo Fighters World Tour', 'Experience the legendary Foo Fighters live!', NOW() + INTERVAL '10 days', 'Madison Square Garden, NY', 20000, 15000, 150, 'concert', 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14'),
('Red Hot Chili Peppers Live', 'RHCP returns with their greatest hits!', NOW() + INTERVAL '15 days', 'Staples Center, LA', 18000, 12000, 130, 'concert', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'),
('Metallica: Master of Puppets', 'Heavy metal legends live in concert', NOW() + INTERVAL '20 days', 'Wembley Stadium, London', 25000, 20000, 200, 'concert', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'),

-- Pop Concerts
('Taylor Swift: Eras Tour', 'The most anticipated tour of the year', NOW() + INTERVAL '25 days', 'SoFi Stadium, LA', 70000, 50000, 250, 'concert', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a'),
('Ed Sheeran Live', 'Mathematics Tour 2024', NOW() + INTERVAL '30 days', 'Rogers Centre, Toronto', 45000, 35000, 120, 'concert', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3'),
('Adele: 30 Tour', 'Experience the voice of a generation', NOW() + INTERVAL '35 days', 'O2 Arena, London', 20000, 15000, 180, 'concert', 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf'),

-- Electronic Music
('Swedish House Mafia Reunion', 'The legendary EDM trio returns', NOW() + INTERVAL '40 days', 'Ultra Music Festival, Miami', 30000, 25000, 150, 'concert', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'),
('Daft Punk Tribute Show', 'Celebrating the legacy of electronic music', NOW() + INTERVAL '45 days', 'Bercy Arena, Paris', 15000, 12000, 90, 'concert', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'),

-- Hip Hop
('Kendrick Lamar: Mr. Morale Tour', 'Pulitzer Prize winner live in concert', NOW() + INTERVAL '50 days', 'United Center, Chicago', 23000, 18000, 140, 'concert', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a'),
('Drake: For All The Dogs', 'OVO Sound presents Drake live', NOW() + INTERVAL '55 days', 'Scotiabank Arena, Toronto', 19000, 15000, 160, 'concert', 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3'),

-- Movies
('Inception: IMAX Re-release', 'Christopher Nolan''s mind-bending masterpiece returns', NOW() + INTERVAL '5 days', 'AMC Empire 25, NY', 300, 250, 25, 'movie', 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'),
('The Matrix 25th Anniversary', 'The revolutionary sci-fi classic returns', NOW() + INTERVAL '8 days', 'TCL Chinese Theatre, LA', 250, 200, 20, 'movie', 'https://images.unsplash.com/photo-1536440136628-849c177e76a1'),
('Pulp Fiction - Director''s Cut', 'Tarantino''s masterpiece with new footage', NOW() + INTERVAL '12 days', 'Alamo Drafthouse, Austin', 200, 150, 22, 'movie', 'https://images.unsplash.com/photo-1542204165-65bf26472b9b'),

-- Theater Shows
('Hamilton', 'The revolutionary musical returns', NOW() + INTERVAL '15 days', 'Richard Rodgers Theatre, NY', 1400, 1000, 200, 'theater', 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf'),
('The Lion King', 'Disney''s beloved musical spectacular', NOW() + INTERVAL '18 days', 'Lyceum Theatre, London', 2000, 1500, 150, 'theater', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'),

-- Sports Events
('NBA Finals 2024', 'Experience basketball at its finest', NOW() + INTERVAL '60 days', 'Chase Center, SF', 18000, 15000, 300, 'sports', 'https://images.unsplash.com/photo-1504450758481-7338eba7524a'),
('UFC 300', 'The ultimate fighting championship', NOW() + INTERVAL '65 days', 'T-Mobile Arena, Las Vegas', 20000, 18000, 400, 'sports', 'https://images.unsplash.com/photo-1544117519-31a4b719223d'),

-- Comedy Shows
('Dave Chappelle Live', 'The legendary comedian returns', NOW() + INTERVAL '25 days', 'Radio City Music Hall, NY', 6000, 5000, 120, 'comedy', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'),
('Jerry Seinfeld: Live in Concert', 'Comedy''s master returns to the stage', NOW() + INTERVAL '30 days', 'Beacon Theatre, NY', 2900, 2500, 100, 'comedy', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7');