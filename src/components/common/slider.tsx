import React from "react";

const Slider: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out transform translate-x-0"
          style={{
            backgroundImage: `url('/assets/images/slider/1.jpg')`,
          }}
        >
          {/* Overlay with reduced opacity */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="flex justify-center items-center w-full h-full bg-opacity-50">
            <div className="relative w-full max-w-none text-center">
              <div className="text-[120px] font-extrabold animate-typing overflow-visible whitespace-nowrap border-r-4 border-white text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
                Raj Managlo Here..
              </div>
              <div className="text-2xl font-semibold mt-4 text-white">
                Interior Designer & Trainer{" "}
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button className="relative px-6 py-3 text-white font-bold rounded-md bg-transparent">
                  <span className="absolute inset-0 rounded-md border-2 border-transparent border-gradient-to-r from-blue-400 via-green-500 to-yellow-500 animate-border-gradient"></span>
                  <span className="relative z-10">Hire Now</span>
                </button>
                <button className="relative px-6 py-3 text-white font-bold rounded-md bg-transparent">
                  <span className="absolute inset-0 rounded-md border-10 border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-border-gradient"></span>
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
