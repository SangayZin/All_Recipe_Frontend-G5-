// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="px-4 pt-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold text-red-500">allrecipes</h1>
        </div>
      </header>

      <nav className="px-4 py-3 flex space-x-6 overflow-x-auto bg-white border-y border-gray-200">
        <Link to="/meals" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          MEALS
        </Link>
        <Link to="/ingredients" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          INGREDIENTS
        </Link>
        <Link to="/occasions" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          OCCASIONS
        </Link>
        <Link to="/cuisines" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          CUISINES
        </Link>
        <Link to="/kitchen-tips" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          KITCHEN TIPS
        </Link>
        <Link to="/news" className="whitespace-nowrap font-medium text-gray-800 hover:text-red-500 text-sm">
          NEWS
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;