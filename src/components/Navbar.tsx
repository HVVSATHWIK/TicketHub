import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ticket, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(supabase.auth.getUser());

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Ticket className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">TicketHub</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Events
              </Link>
              {user && (
                <Link 
                  to="/my-bookings" 
                  className="text-gray-700 hover:text-indigo-600 font-medium"
                >
                  My Bookings
                </Link>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}