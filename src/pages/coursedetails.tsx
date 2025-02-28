import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

const CourseLandingPage = () => {
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [activeTab, setActiveTab] = useState<"syllabus" | "faq">("syllabus");
  const [openSyllabusIndex, setOpenSyllabusIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the duration of the course?",
      answer: "The course duration is 6 weeks, with flexible learning options.",
    },
    {
      question: "Is there any placement support?",
      answer: "Yes, we provide 100% placement support with top companies.",
    },
    {
      question: "What are the prerequisites for this course?",
      answer: "Basic knowledge of Java programming is recommended, but beginners are welcome.",
    },
    {
      question: "Can I pay the fee in installments?",
      answer: "Yes, we offer flexible payment options, including EMI.",
    },
  ];

  const syllabus = [
    {
      module: "Module 1: Introduction to Spring Framework",
      content: "Overview, Features, Advantages, Architecture, Core Container.",
    },
    {
      module: "Module 2: Dependency Injection with Spring",
      content: "Understanding DI, Configurations, Annotations.",
    },
    {
      module: "Module 3: Spring AOP",
      content: "Aspect-Oriented Programming, Advice, Pointcuts.",
    },
    {
      module: "Module 4: Spring MVC Framework",
      content: "Model-View-Controller, Controllers, Views, Forms.",
    },
    {
      module: "Module 5: Spring ORM",
      content: "Object-Relational Mapping, Hibernate Integration.",
    },
    {
      module: "Module 6: Spring Security",
      content: "Authentication, Authorization, Security Configurations.",
    },
    {
      module: "Module 7: Spring Boot",
      content: "Auto-Configuration, Starters, Actuator.",
    },
    {
      module: "Module 8: Spring Cloud",
      content: "Microservices, Config Server, Eureka, Zuul.",
    },
    {
      module: "Module 9: Testing with Spring",
      content: "Unit Testing, Integration Testing, Mocking.",
    },
    {
      module: "Module 10: Spring Integration",
      content: "Enterprise Integration Patterns, Messaging.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      review: "This course transformed my design skills and gave me the confidence to take on real-world projects!",
    },
    {
      name: "Ramesh Singh",
      review: "The instructors are knowledgeable and supportive. Highly recommend these training programs!",
    },
    {
      name: "Anjali Patel",
      review: "The hands-on projects were incredibly helpful. I landed a job right after completing the course!",
    },
  ];

  const popularCourses = [
    {
      title: "Advanced Java Programming",
      description: "Master advanced Java concepts and frameworks.",
      duration: "8 Weeks",
    },
    {
      title: "Full Stack Web Development",
      description: "Learn front-end and back-end development with React and Node.js.",
      duration: "10 Weeks",
    },
    {
      title: "Data Science with Python",
      description: "Explore data analysis, machine learning, and visualization.",
      duration: "12 Weeks",
    },
    {
      title: "Cloud Computing with AWS",
      description: "Learn cloud infrastructure and deployment with AWS.",
      duration: "6 Weeks",
    },
  ];

  return (
    <div className="text-white">
      <Navbar />
      {/* Banner Section */}
      <header className="mt-10 relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Java Spring Framework Training</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Master the Java Spring Framework with our comprehensive training program designed to elevate your skills and career.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-all"
          >
            Enroll Now
          </motion.button>
        </div>
      </header>

      {/* Course Details Section */}
      <section className="py-16 px-4 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Duration</h3>
            <p className="text-gray-300">6 Weeks</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Career</h3>
            <p className="text-gray-300">Java Developer</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Fee</h3>
            <p className="text-gray-300">Affordable Fees</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Placement</h3>
            <p className="text-gray-300">100% Support</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Course Overview, Syllabus, FAQs, Testimonials */}
        <div className="lg:col-span-2">
          {/* Course Overview Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Course Overview</h2>
            <div className="prose prose-lg text-gray-300">
              <p>
                The Java Spring Framework Training is a comprehensive program designed to equip you with the skills needed to excel in Java development. This course covers everything from the basics of the Spring Framework to advanced topics like Spring Boot, Spring Cloud, and Spring Security. Whether you're a beginner or an experienced developer, this course will help you master the tools and techniques used by industry professionals.
              </p>
              {!showFullOverview && (
                <button
                  onClick={() => setShowFullOverview(true)}
                  className="text-red-600 font-bold mt-4"
                >
                  Show More...
                </button>
              )}
              {showFullOverview && (
                <>
                  <p>
                    The Spring Framework is one of the most popular frameworks for building enterprise-level Java applications. It provides a comprehensive programming and configuration model for modern Java-based enterprise applications. With its powerful features like Dependency Injection, Aspect-Oriented Programming, and MVC architecture, Spring simplifies the development process and improves application performance.
                  </p>
                  <p>
                    In this course, you'll learn how to build scalable, secure, and high-performance applications using the Spring Framework. You'll also gain hands-on experience with real-world projects, ensuring that you're job-ready by the end of the program. Our expert trainers will guide you through each module, providing personalized feedback and support to help you succeed.
                  </p>
                  <p>
                    By the end of this course, you'll have a deep understanding of the Spring Framework and its ecosystem. You'll be able to design and develop robust applications, integrate with databases, implement security features, and deploy applications to the cloud. Whether you're looking to start a career in Java development or advance your existing skills, this course is the perfect choice.
                  </p>
                  <button
                    onClick={() => setShowFullOverview(false)}
                    className="text-red-600 font-bold mt-4"
                  >
                    Show Less
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Tabs for Syllabus and FAQs */}
          <section className="mb-16">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab("syllabus")}
                className={`px-6 py-3 font-bold ${
                  activeTab === "syllabus"
                    ? "bg-red-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Syllabus
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-6 py-3 font-bold ${
                  activeTab === "faq"
                    ? "bg-red-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Syllabus Content */}
            {activeTab === "syllabus" && (
              <div className="space-y-4">
                {syllabus.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <h3
                      className="text-xl font-bold mb-2 cursor-pointer"
                      onClick={() => setOpenSyllabusIndex(openSyllabusIndex === index ? null : index)}
                    >
                      {item.module}
                    </h3>
                    {openSyllabusIndex === index && (
                      <p className="text-gray-300">{item.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* FAQ Content */}
            {activeTab === "faq" && (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <h3
                      className="text-xl font-bold mb-2 cursor-pointer"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      {faq.question}
                    </h3>
                    {openFaqIndex === index && (
                      <p className="text-gray-300">{faq.answer}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="text-lg italic mb-4">&quot;{testimonial.review}&quot;</p>
                  <p className="text-red-600 font-bold">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Skills?</h2>
            <p className="text-xl mb-8">Join our training programs and take your career to the next level.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-all"
            >
              Get Started Today
            </motion.button>
          </section>
        </div>

        {/* Right Side: Popular Courses and Contact Form */}
        <div className="lg:col-span-1">
          {/* Popular Courses Section */}
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

          {/* Contact Form Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your phone number"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Submit
              </motion.button>
            </form>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CourseLandingPage;