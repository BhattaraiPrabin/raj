const ProcessSection = () => {
  return (
    <section className="py-16 bg-black-800 text-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Design Process</h2>
          <p className="text-lg text-gray-400">
            A step-by-step guide to how I bring your design ideas to life.
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div className="flex justify-center items-center">
          {/* Step 1: Consultation */}
          <div className="bg-black-700 rounded-lg p-6 text-center w-1/3">
            <div className="mb-4">
              <img
                src="/assets/icons/consultation-icon.svg"
                alt="Consultation"
                className="mx-auto mb-4 w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-400">
              Understanding the client’s vision and needs to ensure a clear
              project direction.
            </p>
          </div>

          {/* Dotted Line between steps */}
          <div className="mx-8 w-24 border-t-2 border-dotted border-gray-400"></div>

          {/* Step 2: Design Concept */}
          <div className="bg-black-700 rounded-lg p-6 text-center w-1/3">
            <div className="mb-4">
              <img
                src="/assets/icons/design-concept-icon.svg"
                alt="Design Concept"
                className="mx-auto mb-4 w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Concept</h3>
            <p className="text-gray-400">
              Creating initial design drafts and mood boards to visualize the
              direction of the project.
            </p>
          </div>

          {/* Dotted Line between steps */}
          <div className="mx-8 w-24 border-t-2 border-dotted border-gray-400"></div>

          {/* Step 3: Execution */}
          <div className="bg-black-700 rounded-lg p-6 text-center w-1/3">
            <div className="mb-4">
              <img
                src="/assets/icons/execution-icon.svg"
                alt="Execution"
                className="mx-auto mb-4 w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Execution</h3>
            <p className="text-gray-400">
              Delivering the final design, with meticulous attention to detail
              to ensure perfection.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-red-800 text-white font-semibold rounded-full hover:bg-red-700"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
