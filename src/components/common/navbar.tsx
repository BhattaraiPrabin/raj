import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <img
            src="/raj/public/assets/images/logo.png"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            Services
          </li>

          {/* Dropdown Menu */}
          <li className="relative">
            <button
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="flex items-center text-white hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              More <i className="fas fa-chevron-down ml-2 text-white"></i>
            </button>

            {isOpen && (
              <ul
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg py-2 z-50"
              >
                <li className="px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                  Contact
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                  Blog
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                  Careers
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
