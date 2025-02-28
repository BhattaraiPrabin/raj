import React from "react";
import Navbar from "@/components/common/navbar";
import Slider from "@/components/common/slider";
import AboutSection from "@/components/common/about";
// import ServicesTabs from "@/components/common/service-tab";
import PortfolioProjects from "@/components/common/portfolio";
import TrainingProgramsSection from "@/components/common/training";
import ProcessSection from "@/components/common/process";
import ContactSection from "@/components/common/contact";
// import TestimonialsSection from "@/components/common/testimonial";
import Footer from "@/components/common/footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="container mx-auto px-4 py-8 min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Zone</h1>
        <p className="text-lg text-gray-300 mb-8">
          Every draft, model, and plan tells a story of precision, creativity,
          and innovation. My approach combines modern tools with timeless design
          principles to craft solutions that stand out.
        </p>
        <AboutSection />
        <TrainingProgramsSection />
   
        <PortfolioProjects />
        {/* <TestimonialsSection /> */}
      </div>
      <ProcessSection />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
