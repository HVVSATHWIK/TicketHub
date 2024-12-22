import React from 'react';
import { Search } from 'lucide-react';

export default function EventFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Categories</option>
          <option value="concert">Concerts</option>
          <option value="movie">Movies</option>
          <option value="sports">Sports</option>
          <option value="theater">Theater</option>
        </select>
      </div>
    </div>
  );
}