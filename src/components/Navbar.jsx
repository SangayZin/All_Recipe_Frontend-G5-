// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full">
      <header className="px-4 pt-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-3xl font-bold text-red-500">allrecipes</h1>
        </div>
      </header>

      <nav className="px-4 py-3 flex space-x-6 overflow-x-auto bg-white border-y border-gray-200 relative">
        {/* MEALS Dropdown */}
        <div className="relative group">
          <span
            className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer"
          >
            MEALS
          </span>
          <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white border border-gray-200 rounded shadow-lg z-10 min-w-[150px]">
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50">
              Breakfast
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50">
              Lunch
            </div>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50">
              Dinner
            </div>
          </div>
        </div>

        {/* Other static nav items */}
        <span className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer">
          INGREDIENTS
        </span>
        <span className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer">
          OCCASIONS
        </span>
        <span className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer">
          CUISINES
        </span>
        <span className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer">
          KITCHEN TIPS
        </span>
        <span className="whitespace-nowrap font-medium text-gray-600 hover:text-red-500 text-sm cursor-pointer">
          NEWS
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
