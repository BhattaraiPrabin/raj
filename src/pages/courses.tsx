import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const CourseArchivePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Interior Design",
    "Exterior Design",
    "Design Theory",
    "Practical Training",
    "Advanced Techniques",
  ];

  const courses = [
    {
      id: 1,
      title: "Mastering Interior Design",
      category: "Interior Design",
      description: "Learn space planning, furniture arrangement, and color theory.",
      duration: "6 weeks",
      difficulty: "Beginner",
      image: "/assets/images/project/living.jpg",
    },
    {
      id: 2,
      title: "Exterior Design Essentials",
      category: "Exterior Design",
      description: "Master landscape design and outdoor aesthetics.",
      duration: "8 weeks",
      difficulty: "Intermediate",
      image: "/assets/images/project/living.jpg",
    },
    {
      id: 3,
      title: "Advanced 3D Rendering",
      category: "Advanced Techniques",
      description: "Create stunning 3D visualizations with cutting-edge software.",
      duration: "10 weeks",
      difficulty: "Advanced",
      image: "/assets/images/project/living.jpg",
    },
    {
      id: 4,
      title: "Practical Training in Design Tools",
      category: "Practical Training",
      description: "Hands-on training in AutoCAD, SketchUp, and more.",
      duration: "5 weeks",
      difficulty: "Beginner",
      image: "/assets/images/project/living.jpg",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <header className="relative bg-black text-white py-20 text-center mt-9">
        <h1 className="text-5xl font-bold">Explore Our Training Programs</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Tailored programs designed to elevate your skills in interior and exterior design, led by industry experts.
        </p>
        <button className="relative my-6 px-6 py-3 text-white font-bold rounded-md bg-transparent">
                  <span className="absolute inset-0 rounded-md border-10 border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-border-gradient"></span>
                  <span className="relative z-10">Learn More</span>
                </button>
      </header>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 md:px-20 bg-black text-white shadow-lg">
        <div className="flex flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <div className="flex gap-2 flex-wrap mt-4 md:mt-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all ${
                  selectedCategory === category
                    ? "bg-red-600 text-white border-color-red-600"
                    : "bg-black text-whit hover:bg-gray-800"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Course List Section */}
      <section className="py-16 px-4 md:px-20 bg-black text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-100 mb-4">{course.description}</p>
                <p className="text-sm font-medium text-gray-100 mb-2">
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p className="text-sm font-medium text-gray-100">
                  <strong>Difficulty:</strong> {course.difficulty}
                </p>
              </div>
              <a
                href="#enroll"
                className="inline-block px-6 py-2 text-red-800 rounded-full  relative group"
              >
                Enroll Now
                <span className="absolute right-0 transform translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md"
          >
            <p className="text-lg italic">&quot;This course transformed my design skills and gave me the confidence to take on real-world projects!&quot;</p>
            <p className="mt-4 font-bold text-red-600">- Priya Sharma</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md"
          >
            <p className="text-lg italic">&quot;The instructors are knowledgeable and supportive. Highly recommend these training programs!&quot;</p>
            <p className="mt-4 font-bold text-red-600">- Ramesh Singh</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Skills?</h2>
        <p className="text-lg mb-6">Join our training programs and take your design journey to the next level.</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#contact"
          className="inline-block bg-white text-red-600 px-8 py-4 font-bold rounded-full shadow-lg hover:bg-gray-200"
        >
          Get Started Today
        </motion.a>
      </footer>
      <Footer />
    </div>
   
  );
};

export default CourseArchivePage;
