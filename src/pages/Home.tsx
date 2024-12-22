import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Music, Film } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Book Your Next Experience
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover and book tickets for the most exciting events happening around you.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Music, title: 'Concerts', color: 'text-pink-500' },
          { icon: Film, title: 'Movies', color: 'text-blue-500' },
          { icon: Calendar, title: 'Events', color: 'text-green-500' },
          { icon: MapPin, title: 'Venues', color: 'text-purple-500' }
        ].map(({ icon: Icon, title, color }) => (
          <div key={title} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Icon className={`w-12 h-12 ${color} mx-auto mb-4`} />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured events will be loaded from Supabase */}
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <Link
          to="/events"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Browse All Events
        </Link>
      </section>
    </div>
  );
}