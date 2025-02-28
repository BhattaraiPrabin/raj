import { useState } from "react";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("Interior Design");

  const services = [
    {
      title: "Interior Design",
      description:
        "Crafting elegant and functional interiors that match your vision.",
      icon: "/assets/icons/interior-design.webp",
    },
    {
      title: "Exterior Design",
      description: "Designing exteriors that make a lasting impression.",
      icon: "/assets/icons/exterior-design.webp",
    },
    {
      title: "Space Planning & Layouts",
      description:
        "Maximizing efficiency with smart space layouts and planning.",
      icon: "/assets/icons/space-planning.webp",
    },
    {
      title: "Design Consultation",
      description: "Offering expert advice to bring your design ideas to life.",
      icon: "/assets/icons/design-consultation.webp",
    },
    {
      title: "Training & Workshops",
      description: "Empowering others with skills and knowledge in design.",
      icon: "/assets/icons/training-workshops.webp",
    },
  ];

  const activeService = services.find((service) => service.title === activeTab);

  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Transforming Spaces with Tailored Design Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            Delivering exceptional design services to meet your unique needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => setActiveTab(service.title)}
              className={`px-6 py-2 rounded-full ${
                activeTab === service.title
                  ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
                  : "bg-black-700 text-gray-300"
              } transition-all duration-300`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        {activeService && (
          <div className="flex flex-col items-center text-center bg-black-800 rounded-lg p-6 shadow-md">
            <img
              src={activeService.icon}
              alt={activeService.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {activeService.title}
            </h3>
            <p className="text-gray-400">{activeService.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesTabs;
