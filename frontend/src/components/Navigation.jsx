import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Neural
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/vision" 
              className={`transition-colors ${isActive('/vision') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
            >
              Our Vision
            </Link>
            <Link 
              to="/hiring" 
              className={`transition-colors ${isActive('/hiring') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
            >
              We're Hiring
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className={`block transition-colors ${isActive('/') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/vision" 
              className={`block transition-colors ${isActive('/vision') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Vision
            </Link>
            <Link 
              to="/hiring" 
              className={`block transition-colors ${isActive('/hiring') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              We're Hiring
            </Link>
            <Link 
              to="/contact" 
              className={`block transition-colors ${isActive('/contact') ? 'text-orange-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;