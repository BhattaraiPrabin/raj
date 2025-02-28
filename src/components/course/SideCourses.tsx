import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string;
}

const popularCourses: Course[] = [
  {
    title: "AutoCAD Training",
    description:
      "Learn to create 2D and 3D designs with AutoCAD for engineering and architecture.",
    duration: "6 Weeks",
  },
  {
    title: "SAP Training",
    description:
      "Get hands-on experience with SAP modules like SAP FICO, SAP MM, and SAP SD.",
    duration: "10 Weeks",
  },
  {
    title: "Revit Training",
    description:
      "Master Building Information Modeling (BIM) with Revit for architecture and construction.",
    duration: "8 Weeks",
  },
  {
    title: "ETABS Training",
    description:
      "Learn structural design and analysis using ETABS for modern buildings.",
    duration: "8 Weeks",
  },
];

const SideCourses: React.FC = () => {
  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Our Popular Courses</h2>
      <div className="space-y-4">
        {popularCourses.map((course, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p className="text-gray-300">{course.description}</p>
            <p className="text-sm text-gray-400">{course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideCourses;
