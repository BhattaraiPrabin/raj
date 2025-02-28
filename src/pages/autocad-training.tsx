import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Link from "next/link";

const CourseLandingPage = () => {
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [activeTab, setActiveTab] = useState<"syllabus" | "faq">("syllabus");
  const [openSyllabusIndex, setOpenSyllabusIndex] = useState<number | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is AutoCAD, and why should I learn it?",
      answer:
        "AutoCAD is a computer-aided design (CAD) software used for creating precise 2D and 3D designs. Learning AutoCAD enhances skills in architecture, engineering, and design industries.",
    },
    {
      question: "Who can enroll in AutoCAD training in Nepal?",
      answer:
        "Anyone interested in design, drafting, architecture, or engineering can enroll. Beginners, students, professionals, and entrepreneurs are welcome.",
    },
    {
      question: "What topics are covered in AutoCAD training?",
      answer:
        "The training covers 2D drafting, 3D modeling, layers, dimensions, plotting, rendering, and advanced tools for professional CAD drawings.",
    },
    {
      question: "How long does the AutoCAD training course take?",
      answer:
        "The duration varies, but most courses range from 1 to 3 months, depending on the level of training (basic, intermediate, or advanced).",
    },
    {
      question: "Do I need prior experience to join the AutoCAD course?",
      answer:
        "No prior experience is required for beginner-level courses. However, a basic understanding of technical drawing or design concepts can be helpful.",
    },
    {
      question: "Is AutoCAD training available online in Nepal?",
      answer:
        "Yes, many training centers in Nepal offer both online and offline AutoCAD courses to accommodate different learning preferences.",
    },
    {
      question:
        "What career opportunities are available after AutoCAD training?",
      answer:
        "After completing the training, you can work as an AutoCAD designer, draftsman, architect, civil engineer, mechanical designer, or interior designer.",
    },
    {
      question: "Which industries use AutoCAD skills in Nepal?",
      answer:
        "AutoCAD is widely used in architecture, civil engineering, mechanical engineering, electrical design, interior design, and construction industries.",
    },
    {
      question: "Will I get a certificate after completing the AutoCAD course?",
      answer:
        "Yes, most training centers provide a recognized certificate upon successful completion, which can boost your resume.",
    },
    {
      question: "How much does AutoCAD training cost in Nepal?",
      answer:
        "The cost varies depending on the institute and course level, but typically ranges from NPR 10,000 to NPR 25,000 for a complete training package.",
    },
  ];

  const syllabus = [
    {
      module: "Module 1: Introduction to AutoCAD",
      content:
        "Overview, Interface, File Management, Basic Terminology, Setting Preferences.",
    },
    {
      module: "Module 2: Basic Drawing Tools",
      content:
        "Drawing Lines, Circles, Arcs, Polylines, Editing Tools: Trim, Extend, Copy, Move.",
    },
    {
      module: "Module 3: Working with Layers",
      content:
        "Layer Creation, Management, Layer Visibility, Freeze, Lock, and Assigning Layers.",
    },
    {
      module: "Module 4: Advanced Drawing Tools",
      content:
        "Creating Complex Shapes, Spline Tool, Hatching, Polygons, Rectangles, Gradients.",
    },
    {
      module: "Module 5: Blocks and Attributes",
      content:
        "Inserting and Creating Blocks, Custom Blocks, Defining and Using Block Attributes.",
    },
    {
      module: "Module 6: Dimensioning and Annotations",
      content:
        "Linear, Angular, Radial Dimensions, Multileaders, Text Styles, Creating Annotations.",
    },
    {
      module: "Module 7: Working with Views and Printing",
      content:
        "Creating Views, Viewports, Plotting, Print Settings, Scale and Area Setup.",
    },
    {
      module: "Module 8: 3D Modeling and Visualization",
      content:
        "Introduction to 3D, Creating 3D Objects (Extrude, Revolve, Sweep), Rendering Techniques.",
    },
    {
      module: "Module 9: Project Work and Practical Exercises",
      content:
        "Hands-on Floor Plan Design, Applying Tools and Techniques in a Real Project.",
    },
    {
      module: "Module 10: AutoCAD Certification Preparation",
      content: "Review, Practice Tests, Key Concepts, Exam Preparation.",
    },
  ];

  const testimonials = [
    {
      name: "Sushil Gurung",
      review:
        "Learning AutoCAD with Shoba Ji has been an amazing experience. The lessons were clear and practical, helping me understand complex concepts easily.",
    },

    {
      name: "Suman Bhattarai",
      review:
        "The AutoCAD course gave me the confidence to work on professional projects. The learning pace was perfect and the content was comprehensive.",
    },
    {
      name: "Pratik Rai",
      review:
        "I appreciate the clear explanation of all AutoCAD tools and techniques. The course gave me a strong foundation in design and drafting.",
    },
    {
      name: "Bina Adhikari",
      review:
        "Thanks to Shoba Ji, I now feel comfortable designing complex drawings in AutoCAD. The lessons were engaging and full of real-life applications.",
    },
    {
      name: "Rajesh Thapa",
      review:
        "The AutoCAD classes were very informative and helped me improve my drafting skills. I highly recommend this course to anyone interested in design.",
    },
    {
      name: "Pooja Koirala",
      review:
        "Shoba Ji’s course helped me understand AutoCAD from the basics to advanced techniques. The practical exercises were especially useful.",
    },
    {
      name: "Madhav Subedi",
      review:
        "The training exceeded my expectations. I learned everything I needed to start designing in AutoCAD and now feel ready for professional work.",
    },
    {
      name: "Niraj Gurung",
      review:
        "I really enjoyed the AutoCAD training. The sessions were well-organized, and Shoba Ji’s teaching was clear and easy to understand.",
    },
    {
      name: "Laxmi Pariyar",
      review:
        "I highly recommend this AutoCAD course. The training was practical and helped me a lot with my architectural work.",
    },
    {
      name: "Manoj Shrestha",
      review:
        "The AutoCAD lessons were well-structured and gave me a great understanding of design. I’m now using AutoCAD in my daily work confidently.",
    },
    {
      name: "Jeevan Nepali",
      review:
        "This AutoCAD course helped me get hands-on experience with professional tools and enhanced my skills. I’m now more confident in my design abilities.",
    },
    {
      name: "Sita Rai",
      review:
        "Shoba Ji’s practical approach and patience made learning AutoCAD easy and enjoyable. I can now create precise designs with ease.",
    },
  ];
  const popularCourses = [
    {
      title: "AutoCAD Training",
      description:
        "Learn to create 2D and 3D designs with AutoCAD for engineering and architecture.",
      duration: "6 Weeks",
      link: "/courses/autocad-training", // Link to course details
    },
    {
      title: "SAP Training",
      description:
        "Get hands-on experience with SAP modules like SAP FICO, SAP MM, and SAP SD.",
      duration: "10 Weeks",
      link: "/courses/sap-training",
    },
    {
      title: "Revit Training",
      description:
        "Master Building Information Modeling (BIM) with Revit for architecture and construction.",
      duration: "8 Weeks",
      link: "/courses/revit-training",
    },
    {
      title: "ETABS Training",
      description:
        "Learn structural design and analysis using ETABS for modern buildings.",
      duration: "8 Weeks",
      link: "/courses/etabs-training",
    },
  ];

  return (
    <div className="text-white">
      <Navbar />
      {/* Banner Section */}
      <header className="mt-20 relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">AutoCAD Training in Nepal</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Master AutoCAD Skills with Expert Training. Learn 2D and 3D Design,
            Drafting, and Modeling for Architecture, Engineering, and
            Construction.
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
            <p className="text-gray-300">1.5 Months</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Career</h3>
            <p className="text-gray-300">Drafting Expert</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Fee</h3>
            <p className="text-gray-300">Affordable Fees</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Placement</h3>
            <p className="text-gray-300">Support</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Course Overview, Syllabus, FAQs, Testimonials */}
        <div className="lg:col-span-2">
          {/* Course Overview Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              AutoCAD Training from Expert Rajesh
            </h2>
            <div className="prose prose-lg text-gray-300">
              <p>
                AutoCAD is one of the most widely used software applications for
                2D and 3D design. In this comprehensive course, students will
                learn essential AutoCAD skills that are applicable to various
                industries like architecture, engineering, and construction.
                Under the expert guidance of Rajesh, an industry professional
                with years of experience, you will gain hands-on knowledge of
                drawing, modeling, and visualization techniques using AutoCAD.
              </p>
              {!showFullOverview && (
                <button
                  onClick={() => setShowFullOverview(true)}
                  className="text-red-600 font-bold mt-4"
                >
                  Show More...
                </button>
              )}
              <div className="p-4">
                {showFullOverview && (
                  <>
                    <h3 className="text-2xl font-semibold mt-4 mb-2">
                      Why Choose This Program?
                    </h3>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        Learn from Rajesh, an experienced AutoCAD professional
                        who has worked on numerous real-world projects.
                      </li>
                      <li>
                        The course covers a range of topics, from basic design
                        fundamentals to advanced 3D modeling and visualization,
                        making you job-ready.
                      </li>
                      <li>
                        With practical assignments, you will gain experience
                        working on real-life design projects.
                      </li>
                      <li>
                        The course ensures that you are equipped with the
                        knowledge to handle all types of AutoCAD projects
                        efficiently, whether 2D drafting or 3D modeling.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-4 mb-2">
                      Benefits of Choosing AutoCAD as a Career
                    </h3>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        <strong>High Demand in Multiple Industries:</strong>{" "}
                        AutoCAD professionals are in demand across industries
                        like architecture, construction, interior design,
                        mechanical engineering, and civil engineering.
                      </li>
                      <li>
                        <strong>Versatile Skillset:</strong> AutoCAD skills are
                        applicable to a wide range of design projects, from
                        residential homes to large-scale industrial structures.
                      </li>
                      <li>
                        <strong>Opportunities for Growth:</strong> With AutoCAD
                        skills, you can move into senior positions or even start
                        your own freelance design business.
                      </li>
                      <li>
                        <strong>Global Career Options:</strong> AutoCAD is used
                        globally, which means your skills can open up job
                        opportunities in many countries.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-4 mb-2">
                      Careers After AutoCAD
                    </h3>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        <strong>Architectural Draftsperson:</strong> Work on
                        architectural designs and floor plans, creating detailed
                        drafts for construction.
                      </li>
                      <li>
                        <strong>Civil Drafter:</strong> Create plans and
                        blueprints for infrastructure projects such as roads,
                        bridges, and utility systems.
                      </li>
                      <li>
                        <strong>Mechanical Drafter:</strong> Design mechanical
                        components and systems, including machines, engines, and
                        tools.
                      </li>
                      <li>
                        <strong>Interior Designer:</strong> Use AutoCAD to
                        create floor plans and layouts for residential and
                        commercial spaces.
                      </li>
                      <li>
                        <strong>3D Modeler:</strong> Create realistic 3D models
                        of buildings, landscapes, and mechanical parts for
                        visualization purposes.
                      </li>
                      <li>
                        <strong>Freelance AutoCAD Specialist:</strong> Offer
                        your AutoCAD expertise to various clients as a freelance
                        designer, working on diverse projects.
                      </li>
                    </ul>

                    <button
                      onClick={() => setShowFullOverview(false)}
                      className="text-red-600 font-bold mt-4"
                    >
                      Show Less
                    </button>
                  </>
                )}
              </div>
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
                      onClick={() =>
                        setOpenSyllabusIndex(
                          openSyllabusIndex === index ? null : index
                        )
                      }
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
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === index ? null : index)
                      }
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="text-lg italic mb-4">
                    &quot;{testimonial.review}&quot;
                  </p>
                  <p className="text-red-600 font-bold">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Skills?
            </h2>
            <p className="text-xl mb-8">
              Join our training programs and take your career to the next level.
            </p>
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
            <div className="flex flex-col gap-y-6">
              {" "}
              {/* Increased spacing */}
              {popularCourses.map((course, index) => (
                <Link key={index} href={course.link}>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-sm cursor-pointer hover:bg-gray-600 transition duration-300">
                    <h3 className="text-lg font-bold">{course.title}</h3>
                    <p className="text-gray-300">{course.description}</p>
                    <p className="text-sm text-gray-400">{course.duration}</p>
                  </div>
                </Link>
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
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
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
