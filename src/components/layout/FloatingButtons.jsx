import { useState } from "react";
import { Button } from "@nextui-org/react";

const FloatingButton = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-premium-black">
      <Button
        onClick={() => setActiveTab(0)}
        className={`${
          activeTab === 0
            ? "bg-gradient-to-r from-[#c27df2] to-[#da2a7b]"
            : "bg-transparent"
        } text-xl uppercase border-2 border-white hover:bg-light-gray transition-all duration-300 px-10 py-4 rounded-full animate-floating`}
      >
        Click Me
      </Button>
    </div>
  );
};

export default FloatingButton;
