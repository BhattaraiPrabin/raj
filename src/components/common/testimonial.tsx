import { useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Rajesh transformed my living space into a masterpiece. Highly recommended!",
      name: "John Doe",
      image: "/assets/images/testimonials/client1.jpg",
    },
    {
      id: 2,
      quote:
        "Amazing designs and attention to detail. Our office looks incredible now!",
      name: "Jane Smith",
      image: "/assets/images/testimonials/client2.jpg",
    },
    {
      id: 3,
      quote:
        "Professional and creative. The best experience working with Rajesh.",
      name: "Michael Brown",
      image: "/assets/images/testimonials/client3.jpg",
    },
  ];

  const logos = [
    "/assets/images/logos/company1.png",
    "/assets/images/logos/company2.png",
    "/assets/images/logos/company3.png",
    "/assets/images/logos/company4.png",
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-black-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-lg text-gray-600">
            Here’s what some of my clients have to say about my work.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 bg-black-800 text-white rounded-full shadow-md hover:bg-black-700"
          >
            &#8592;
          </button>

          <div className="flex flex-col items-center space-y-6 max-w-xl mx-auto text-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-gray-300"
            />
            <blockquote className="text-lg italic text-gray-700">
              “{testimonials[current].quote}”
            </blockquote>
            <p className="font-semibold">{testimonials[current].name}</p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-black-800 text-white rounded-full shadow-md hover:bg-black-700"
          >
            &#8594;
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Trusted by Leading Brands
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-12 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
