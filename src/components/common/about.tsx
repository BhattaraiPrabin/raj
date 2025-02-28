import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SkillsLevel from "./skills";

const AboutSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <SkillsLevel />
        <div className="relative group bg-black bg-opacity-100 text-white border-2 border-white p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl">
          {/* Background effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-rbg-gradient-to-r from-black/10 to-black/50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-[-1]"></div>
          {/* Content of the card */}
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-silver-500">
            I am a passionate Interior Designer and Trainer with over [X years]
            of experience in creating beautiful, functional spaces that inspire.
            My goal is to blend aesthetics with functionality, ensuring every
            project tells a story.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} className="text-red-600" />
              <span>Space Planning & Styling</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} className="text-red-600" />
              <span>Color Consultation</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} className="text-red-600" />
              <span>Furniture Design</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCheck} className="text-red-600" />
              <span>Lighting Solutions</span>
            </li>
          </ul>
          <div className="flex justify-end mt-6">
            <button className="relative align-right px-6 py-3 text-white font-bold rounded-md bg-transparent">
              <span className="absolute inset-0 rounded-md border-2 border-transparent border-gradient-to-r from-blue-400 via-green-500 to-yellow-500 animate-border-gradient"></span>
              <span className="relative z-10">More</span>
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
