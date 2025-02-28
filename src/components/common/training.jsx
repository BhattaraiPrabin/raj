import { useState, useEffect } from "react";

const TrainingProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Interior Design Basics",
      description:
        "Learn the fundamentals of interior design, including color theory, space planning, and furniture arrangement.",
      targetAudience: "Aspiring designers, home renovators",
      duration: "4 weeks",
      image: "/assets/images/project/living.jpg", // Add the path to the image
    },
    {
      id: 2,
      title: "Advanced 3D Modeling",
      description:
        "Dive deep into advanced techniques of 3D modeling using software like AutoCAD and SketchUp for professional designs.",
      targetAudience: "Professional designers, architects",
      duration: "6 weeks",
      image: "/assets/images/project/living.jpg", // Add the path to the image
    },
    {
      id: 3,
      title: "Design Consultation & Project Management",
      description:
        "Master the art of client communication and learn how to manage and deliver successful design projects.",
      targetAudience: "Design managers, business owners",
      duration: "3 weeks",
      image: "/assets/images/project/living.jpg", // Add the path to the image
    },
    {
      id: 4,
      title: "Creative Space Planning & Layouts",
      description:
        "Understand the intricacies of spatial design, layout planning, and ergonomics for both residential and commercial spaces.",
      targetAudience: "Interior designers, architects",
      duration: "5 weeks",
      image: "/assets/images/project/living.jpg", // Add the path to the image
    },
  ];

  const successMetrics = {
    studentsTrained: 1200,
    successRate: 95,
    clientFeedback: 4.8,
  };

  // Countdown function for metrics
  const [studentsTrainedCount, setStudentsTrainedCount] = useState(0);
  const [successRateCount, setSuccessRateCount] = useState(0);
  const [clientFeedbackCount, setClientFeedbackCount] = useState(0);

  useEffect(() => {
    // Function to animate the counter
    const countUp = (value, setter, intervalTime = 30, maxIncrement = 50) => {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(value / maxIncrement); // Increment the counter in small steps
        if (start >= value) {
          clearInterval(interval);
          setter(value); // Ensure final value is set
        } else {
          setter(start); // Update count during animation
        }
      }, intervalTime); // Delay between increments
    };

    countUp(successMetrics.studentsTrained, setStudentsTrainedCount);
    countUp(successMetrics.successRate, setSuccessRateCount); // Success rate as number
    countUp(successMetrics.clientFeedback, setClientFeedbackCount); // Feedback as number
  }, []);

  return (
    <section className="py-16 bg-black-900 text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Design Workshops & Training
          </h2>
          <p className="text-lg text-gray-400">
            Join our expertly designed programs and take your design skills to
            the next level.
          </p>
        </div>

        {/* Course Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-slate-900 rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105 group"
            >
              {/* Image */}
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

              {/* Enroll Now Button with Hover Arrow */}
              <a
                href="#enroll"
                className="inline-block px-6 py-2 text-red-800 rounded-full  relative group"
              >
                Enroll Now
                <span className="absolute right-0 transform translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-12 text-center relative">
          {/* Floating Gradient Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"></div>

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
