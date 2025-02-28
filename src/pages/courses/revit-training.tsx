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
      question: "What is Revit, and why should I learn it?",
      answer:
        "Revit is a Building Information Modeling (BIM) software used for designing and documenting architectural, structural, and MEP projects. Learning Revit opens up career opportunities in architecture, engineering, and construction industries.",
    },
    {
      question: "Who can enroll in this Revit training program?",
      answer:
        "Anyone interested in architectural design, engineering, or construction can join. It is ideal for architects, civil engineers, interior designers, and students in related fields.",
    },
    {
      question:
        "Do I need prior experience in CAD or design software to learn Revit?",
      answer:
        "No prior experience is required. However, basic knowledge of architectural or engineering concepts can be helpful.",
    },
    {
      question: "What are the key features covered in this Revit course?",
      answer:
        "The course covers BIM fundamentals, 2D drafting, 3D modeling, parametric families, structural design, MEP layouts, rendering, and collaboration tools.",
    },
    {
      question: "Is Revit better than AutoCAD?",
      answer:
        "Revit is BIM-based, offering intelligent design and collaboration tools, making it more advanced than AutoCAD for architectural and engineering projects. However, both tools serve different purposes.",
    },
    {
      question:
        "What career opportunities are available after completing this course?",
      answer:
        "You can work as a BIM Modeler, Revit Designer, Architectural Drafter, Structural Engineer, MEP Engineer, or Freelance BIM Consultant.",
    },
    {
      question: "Will I get a certificate after completing the training?",
      answer:
        "Yes, upon successful completion of the course and final project, you will receive a certification that can boost your career prospects.",
    },
    {
      question: "Can I work on real-world projects during the training?",
      answer:
        "Yes, we include hands-on projects that simulate real-world architectural and engineering designs to help you gain practical experience.",
    },
    {
      question: "What software and hardware are required for learning Revit?",
      answer:
        "You need a PC with at least 8GB RAM, a dedicated graphics card, and Autodesk Revit software (which can be downloaded as a student version for free).",
    },
    {
      question: "How long does it take to learn Revit?",
      answer:
        "Our structured Revit training takes around 6 to 8 weeks, depending on the course pace and practice time.",
    },
  ];

  const syllabus = [
    {
      module: "Module 1: Introduction to Revit",
      content: "Overview of BIM, Revit Interface, Navigation, and Workspaces.",
    },
    {
      module: "Module 2: Basic Drawing and Editing Tools",
      content:
        "Creating and Modifying Elements, Using Grids, Levels, and Dimensions.",
    },
    {
      module: "Module 3: Building Elements & Components",
      content: "Walls, Floors, Roofs, Ceilings, Doors, and Windows.",
    },
    {
      module: "Module 4: Working with Views and Annotations",
      content: "Creating Sections, Elevations, Schedules, and Legends.",
    },
    {
      module: "Module 5: Structural Design in Revit",
      content: "Beams, Columns, Slabs, Foundations, and Structural Analysis.",
    },
    {
      module: "Module 6: MEP (Mechanical, Electrical & Plumbing) Basics",
      content: "HVAC, Electrical Systems, Plumbing Layouts, and Coordination.",
    },
    {
      module: "Module 7: Families and Parametric Components",
      content: "Creating Custom Families, Parameters, and Adaptive Components.",
    },
    {
      module: "Module 8: Worksharing and Collaboration",
      content: "Worksets, Central and Local Files, Cloud Collaboration.",
    },
    {
      module: "Module 9: Rendering and Visualization",
      content: "Materials, Lighting, Camera Views, and Walkthroughs.",
    },
    {
      module: "Module 10: Documentation and Project Export",
      content:
        "Printing, Exporting to CAD & PDF, Project Sheets, and Title Blocks.",
    },
    {
      module: "Module 11: Advanced Revit Techniques",
      content: "Phasing, Design Options, Massing, and Conceptual Design.",
    },
    {
      module: "Module 12: Final Project & Certification",
      content:
        "Capstone Project, Portfolio Preparation, and Certification Exam.",
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
      <header className="mt-20 relative min-h-[50vh] sm:h-[40vh] flex items-center justify-center text-white overflow-hidden px-4">
        <div className="relative z-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Revit Training in Nepal
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
            Master Revit Skills with Expert Training. Learn Building Information
            Modeling (BIM), 3D Design, and Structural Drafting for Architecture,
            Engineering, and Construction.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-all"
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
              Revit Training from Expert Rajesh
            </h2>
            <div className="prose prose-lg text-gray-300">
              <p>
                Revit is a powerful Building Information Modeling (BIM) software
                widely used in architecture, engineering, and construction. This
                course, led by expert trainer Rajesh, will equip you with
                in-depth knowledge of Revit’s tools and functionalities,
                enabling you to create precise 3D models, detailed construction
                drawings, and efficient design workflows. Whether you are an
                architect, civil engineer, or interior designer, this course
                will help you master Revit for professional use.
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
                        Gain insights from Rajesh, an industry professional with
                        extensive experience in Revit and BIM technologies.
                      </li>
                      <li>
                        The course covers everything from basic Revit interface
                        navigation to advanced parametric design, detailing, and
                        collaboration tools.
                      </li>
                      <li>
                        Work on real-world projects and develop practical skills
                        in creating architectural and structural models.
                      </li>
                      <li>
                        Master BIM workflows and techniques that are essential
                        for modern architectural and construction projects.
                      </li>
                      <li>
                        Completing this course will enhance your portfolio and
                        job prospects in the architecture and construction
                        industries.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-4 mb-2">
                      Benefits of Choosing Revit as a Career
                    </h3>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        Revit is a key tool for architects, engineers, and
                        construction professionals worldwide.
                      </li>
                      <li>
                        BIM software like Revit allows professionals to
                        streamline design and construction processes, making
                        them highly valuable to employers.
                      </li>
                      <li>
                        Revit specialists can advance into senior roles such as
                        BIM Coordinator, BIM Manager, or Architectural
                        Consultant.
                      </li>
                      <li>
                        With Revit skills, you can offer BIM modeling services
                        to clients as a freelancer or start your own consulting
                        business.
                      </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-4 mb-2">
                      Careers After Revit Training
                    </h3>
                    <ul className="list-inside list-disc pl-5">
                      <li>
                        BIM Modeler: Create detailed 3D building models and
                        digital blueprints for construction projects.
                      </li>
                      <li>
                        Architectural Designer: Design and visualize
                        residential, commercial, and industrial buildings using
                        Revit.
                      </li>
                      <li>
                        Structural Engineer: Use Revit for structural analysis
                        and detailing in construction projects.
                      </li>
                      <li>
                        Interior Designer: Develop realistic interior layouts
                        and furniture placements with Revit’s design tools.
                      </li>
                      <li>
                        MEP Engineer: Work on Mechanical, Electrical, and
                        Plumbing (MEP) design using Revit’s specialized tools.
                      </li>
                      <li>
                        Freelance Revit Specialist: Offer Revit modeling and
                        design services to architecture and construction firms.
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
