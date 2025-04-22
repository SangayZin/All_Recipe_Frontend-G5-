// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">Allrecipes</Link>
        
        {/* Main Navigation */}
        <div className="hidden md:flex space-x-6">
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">MEALS</button>
            {/* Dropdown would go here */}
          </div>
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">INGREDIENTS</button>
          </div>
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">OCCASIONS</button>
          </div>
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">CUISINES</button>
          </div>
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">KITCHEN TIPS</button>
          </div>
          <div className="group relative">
            <button className="font-semibold hover:text-red-600">NEWS</button>
          </div>
        </div>
        
        {/* Right-side links */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="font-semibold hover:text-red-600">Log In</button>
          <button className="font-semibold hover:text-red-600">Magazine</button>
          <button className="font-semibold hover:text-red-600">Newsletters</button>
          <button className="font-semibold hover:text-red-600">Sweepstakes</button>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;