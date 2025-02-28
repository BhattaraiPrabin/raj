import React, { useEffect, useState } from "react";

const SkillsLevel = () => {
  const [progress, setProgress] = useState({
    AutoCAD: 0,
    SketchUp: 0,
    SpacePlanning: 0,
    Visualization: 0,
  });

  useEffect(() => {
    const increaseProgress = (skill: string, target: number) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < target) {
          currentProgress += 1;
          setProgress((prevProgress) => ({
            ...prevProgress,
            [skill]: currentProgress,
          }));
        } else {
          clearInterval(interval);
        }
      }, 60); // Animation speed
    };

    increaseProgress("AutoCAD", 80);
    increaseProgress("SketchUp", 80);
    increaseProgress("SpacePlanning", 90);
    increaseProgress("Visualization", 70);
  }, []);

  return (
    <section className="py-16 text-white container mx-auto">
      <div className="flex justify-center items-center text-4xl font-semibold">
        My Skills{" "}
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Section 1 */}
        <div className="space-y-8">
          {/* Skill 1: AutoCAD */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/autocad.webp"
              alt="AutoCAD"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full text-center">
              <h3 className="text-xl font-semibold">AutoCAD</h3>
              <p>Draft, Prepare design for interior</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="h-4 rounded-full animate-border-gradient-skill bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                  style={{ width: `${progress.AutoCAD}%` }}
                ></div>
              </div>
              <p className="text-lg mt-2 text-blue-500">{progress.AutoCAD}%</p>
            </div>
          </div>

          {/* Skill 2: SketchUp */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/sketchup.png"
              alt="SketchUp"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full text-center">
              <h3 className="text-xl font-semibold">SketchUp</h3>
              <p>3D modeling and visualization tool</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${progress.SketchUp}%` }}
                ></div>
              </div>
              <p className="text-lg mt-2 text-green-500">
                {progress.SketchUp}%
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-8">
          {/* Skill 3: Space Planning */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/autocad.webp"
              alt="Space Planning"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full text-center">
              <h3 className="text-xl font-semibold">Space Planning</h3>
              <p>Optimizing space for maximum efficiency</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{ width: `${progress.SpacePlanning}%` }}
                ></div>
              </div>
              <p className="text-lg mt-2 text-red-500">
                {progress.SpacePlanning}%
              </p>
            </div>
          </div>

          {/* Skill 4: 3D Visualization */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/icons/autocad.webp"
              alt="3D Visualization"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-full text-center">
              <h3 className="text-xl font-semibold">3D Visualization</h3>
              <p>Creating immersive visual experiences</p>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: `${progress.Visualization}%` }}
                ></div>
              </div>
              <p className="text-lg mt-2 text-yellow-500">
                {progress.Visualization}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsLevel;
