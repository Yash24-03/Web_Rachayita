import { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function FlowChart() {
  const [currentScreen, setCurrentScreen] = useState("Home");

  function setScreen(screenName) {
    setCurrentScreen(screenName);
  }

  function renderScreen() {
    switch (currentScreen) {
      case "Home":
        return <HomeScreen setScreen={setScreen} />;
      case "Course Selection":
        return <CourseSelectionScreen setScreen={setScreen} />;
      case "Module Selection":
        return <ModuleSelectionScreen setScreen={setScreen} />;
      case "Unit Selection":
        return <UnitSelectionScreen setScreen={setScreen} />;
      case "Payment":
        return <PaymentScreen setScreen={setScreen} />;
      case "Module Overview":
        return <ModuleOverview setScreen={setScreen} />;
      case "Unit Overview":
        return <UnitOverview setScreen={setScreen} />;
      case "One-on-One Lecture":
        return <OneOnOneLectureScreen setScreen={setScreen} />;
      default:
        return null;
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <HiMenuAlt1 className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-semibold">Flow Chart</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <BsFillPersonFill className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <AiOutlineLogout className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {/* Main Content */}
      <main className="relative flex-grow">
        {renderScreen()}
      </main>
      {/* Bottom Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <BiGitRepoForked className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-500 text-sm">
            Step 4: Select a course and proceed to module selection
          </p>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <IoMdClose className="w-6 h-6" onClick={() => setScreen("Home")} />
          </button>
        </div>
      </nav>
      </div>
      );
}

export default FlowChart;
