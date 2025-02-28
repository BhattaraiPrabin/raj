"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ServicesTabs from "./service-tab";

type Program = {
  id: number;
  title: string;
  description: string;
  targetAudience: string;
  duration: string;
  image: string;
  link: string;
};

type Metrics = {
  studentsTrained: number;
  successRate: number;
  clientFeedback: number;
};

const TrainingProgramsSection: React.FC = () => {
  const programs: Program[] = [
    {
      id: 1,
      title: "AutoCAD Training",
      description:
        "Master AutoCAD skills with expert training. Learn 2D and 3D design, drafting, and modeling for architecture and engineering.",
      targetAudience: "Architects, engineers, designers",
      duration: "6 weeks",
      image: "/assets/images/autocad.jpg",
      link: "/courses/autocad-training",
    },
    {
      id: 2,
      title: "Revit Training",
      description:
        "Learn Revit for BIM, architectural modeling, structural design, and MEP workflows to enhance your design skills.",
      targetAudience: "Architects, BIM professionals, engineers",
      duration: "8 weeks",
      image: "/assets/images/revit.jpg",
      link: "/courses/revit-training",
    },
    {
      id: 3,
      title: "SAP Training",
      description:
        "Get hands-on experience in SAP for structural analysis, design, and engineering solutions used in construction projects.",
      targetAudience: "Structural engineers, civil engineers",
      duration: "5 weeks",
      image: "/assets/images/sap.jpg",
      link: "/courses/sap-training",
    },
    {
      id: 4,
      title: "ETABS Training",
      description:
        "Learn ETABS for structural analysis and design of buildings with advanced modeling and simulation techniques.",
      targetAudience: "Civil engineers, structural designers",
      duration: "6 weeks",
      image: "/assets/images/etabs.jpg",
      link: "/courses/etabs-training",
    },
  ];

  const successMetrics: Metrics = {
    studentsTrained: 1200,
    successRate: 95,
    clientFeedback: 4.8,
  };

  const [studentsTrainedCount, setStudentsTrainedCount] = useState(0);
  const [successRateCount, setSuccessRateCount] = useState(0);
  const [clientFeedbackCount, setClientFeedbackCount] = useState(0);

  useEffect(() => {
    const countUp = (
      value: number,
      setter: React.Dispatch<React.SetStateAction<number>>,

      intervalTime = 30,
      maxIncrement = 50
    ) => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(value / maxIncrement);
        if (start >= value) {
          clearInterval(interval);
          setter(value);
        } else {
          setter(start);
        }
      }, intervalTime);
    };

    countUp(successMetrics.studentsTrained, setStudentsTrainedCount);
    countUp(successMetrics.successRate, setSuccessRateCount);
    countUp(successMetrics.clientFeedback, setClientFeedbackCount);
  }, []);

  return (
    <section className="py-16 bg-black-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Engineering & Design Training
          </h2>
          <p className="text-lg text-gray-400">
            Enhance your skills with our industry-focused training programs.
          </p>
        </div>

        {/* Change the grid to a single row with 4 items */}
        <div className="grid grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-slate-900 rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              <div className="mb-4 rounded-xl overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-gray-400 mb-4">{program.description}</p>
              <p className="text-gray-300">
                <strong>Target Audience:</strong> {program.targetAudience}
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Duration:</strong> {program.duration}
              </p>
              <Link
                href={program.link}
                className="inline-block px-6 py-2 text-red-800 rounded-full relative group"
              >
                Learn More
                <span className="absolute right-0 transform translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>

        <ServicesTabs />

        <div className="mt-12 text-center relative">
          <h3 className="text-2xl font-bold text-white mb-6">
            Success Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black-800 p-6 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">
                Students Trained
              </p>
              <p className="text-6xl text-white">{studentsTrainedCount}+</p>
            </div>
            <div className="bg-black-800 p-6 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">Success Rate</p>
              <p className="text-6xl text-white">{successRateCount}%</p>
            </div>
            <div className="bg-black-800 p-6 rounded-lg shadow-lg bg-opacity-70 backdrop-blur-sm">
              <p className="text-lg font-semibold text-white">
                Client Feedback
              </p>
              <p className="text-6xl text-white">{clientFeedbackCount}+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;
