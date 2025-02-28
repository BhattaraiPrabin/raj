import { useState } from "react";
import Image from "next/image";

const PortfolioProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Interior Design",
    "Exterior Design",
    "Training Projects",
  ];

  const projects = [
    {
      id: 1,
      name: "Luxury Living Room",
      description: "An elegant interior design for a modern home.",
      category: "Interior Design",
      image: "/assets/images/project/living.jpg", // Using .jpeg format
    },
    {
      id: 2,
      name: "Outdoor Oasis",
      description: "A stunning backyard design with a modern aesthetic.",
      category: "Exterior Design",
      image: "/assets/images/project/outdoor.jpg", // Using .jpeg format
    },
    {
      id: 3,
      name: "Design Workshop",
      description: "A comprehensive training project for aspiring designers.",
      category: "Training Projects",
      image: "/assets/images/project/living.jpg", // Using .jpeg format
    },
    {
      id: 4,
      name: "Urban Apartment",
      description: "Minimalist interior for a city apartment.",
      category: "Interior Design",
      image: "/assets/images/project/living.jpg", // Using .jpeg format
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-16 bg-black-900 text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio & Projects</h2>
          <p className="text-gray-400 text-lg">
            Explore my work, from stunning interiors to comprehensive training
            projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
                  : "bg-black-700 text-gray-300"
              } transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={240}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = "/assets/images/placeholder.png"; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white px-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
