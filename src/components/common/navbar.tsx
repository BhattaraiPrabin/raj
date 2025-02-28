import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-8 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            <Link href="/autocad-training">AutoCAD Training</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            <Link href="/revit-training">Revit Training</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            <Link href="/sap-training">SAP Training</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">
            <Link href="/etabs-training">ETABS Training</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white text-center py-4 shadow-lg">
          <ul className="space-y-4 text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer transition duration-300">
              <Link href="/autocad-training" onClick={() => setIsOpen(false)}>
                AutoCAD Training
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300">
              <Link href="/revit-training" onClick={() => setIsOpen(false)}>
                Revit Training
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300">
              <Link href="/sap-training" onClick={() => setIsOpen(false)}>
                SAP Training
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer transition duration-300">
              <Link href="/etabs-training" onClick={() => setIsOpen(false)}>
                ETABS Training
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
