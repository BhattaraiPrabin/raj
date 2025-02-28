const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 mt-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Explore Our Training Programs
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Tailored programs designed to elevate your skills in interior and
            exterior design, led by industry expert Rajesh.
          </p>

          {/* CTA Button */}
          <a
            href="#courses-grid"
            className="inline-block px-8 py-3 bg-red-800 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
