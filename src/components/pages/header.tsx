import React from "react";
import "tailwindcss/tailwind.css";

const Header: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 mt-16"
      style={{ backgroundImage: "url('/path/to/your/banner-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-8">
        <h1 className="text-4xl font-bold text-center">Course Name</h1>
        <p className="text-lg mt-4 text-center">
          Duration: 6 months | Placement Support: Yes | Mode: Online
        </p>
      </div>
    </div>
  );
};

export default Header;
