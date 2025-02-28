import React from "react";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black p-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <img
              src="/raj/public/assets/images/logo.png"
              alt="Logo"
              className="h-8 cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-8 text-white text-lg font-semibold">
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
      </div>
    </nav>
  );
};

export default Navbar;
