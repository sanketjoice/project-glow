import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import badge from "./Project Glow - Design Assets/SVG Selected/police-badge 1.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import calendarIcon from "./Project Glow - Design Assets/SVG Selected/Daily tracker.svg";
import g from "./Project Glow - Design Assets/Project Glow Logo/G.png";
import analysis from "./Project Glow - Design Assets/SVG Selected/menu-skin-analysis.svg";
import scanner from "./Project Glow - Design Assets/SVG Selected/menu-product scanner.svg";
import calendar from "./Project Glow - Design Assets/SVG Selected/planner 1.png";
import skincare from "./Project Glow - Design Assets/SVG Selected/skincare (1) 1.png";
import { useNavigate } from "react-router-dom";

export default function DailyTracker() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/project-glow/home");
  };
  const handleButtonclick = () => {
    navigate("/project-glow/skinanlysishome");
  };
  const handleShelfClick = () => {
    navigate("/project-glow/myshelf");
  };
  const handleProfileClick = () => {
    navigate("/project-glow/userprofile");
  };
  const handleContinue = () => {
    navigate("/project-glow/basictracker");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-white overflow-y-auto">
      <div className="w-[390px]  rounded-xl shadow-lg flex flex-col bg-[#F4F7F2] ">
        {/* Header */}
        <div className="flex justify-between h-[54px] py-[8px] px-[20px] bg-[#F4F7F2] fixed w-full max-w-[390px] z-20 items-center mb-4">
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <div className="flex items-center space-x-2">
            <img src={badge} alt="Medal" className="h-[24px] w-[24px]" />
            <span className="text-[12px]">1</span>
            <img src={gem} alt="Gem" className="w-[24px]" />
            <span className="text-[12px]">10</span>
            <div
              className="bg-[#303030] hover:cursor-pointer rounded-full w-[38px] h-[38px] flex items-center justify-center text-white font-bold"
              onClick={handleProfileClick}
            >
              JC
            </div>
          </div>
        </div>
        {/* Calendar Icon */}
        <div className="flex justify-center mt-[90px] mb-4">
          <img
            src={calendarIcon}
            alt="Calendar"
            className="w-[100px] h-[100px]"
          />
        </div>

        {/* Title */}
        <h2 className="text-[28px] font-semibold leading-[40px]  text-center mb-2">
          Get to know how routine affects your skin health
        </h2>

        {/* Subtitle */}
        <p className=" text-gray-600 mb-6 text-[14px] m-auto w-[261px] h-[44px] text-center">
          Take less then 2 mins but the outcome is insightful in a long run
        </p>

        {/* Advance Tracker Card */}
        <div className="bg-white rounded-[10px] border border-[#BDBDBD] px-[20px] py-[16px] mb-4 shadow-sm w-[330px] h-[193px] m-auto">
          <h3 className="font-bold text-lg mb-1">Advance Daily Tracker</h3>
          <ul className="list-disc ml-5 mb-4 space-y-0">
            <li>Check-in twice a day</li>
            <li>Take photo for record</li>
            <li>In-depth understanding of skin health</li>
          </ul>
          <button className="bg-[#303030] text-white px-[16px] py-[10px] w-[137px] h-[44px] rounded-lg hover:bg-gray-800 transition-colors">
            Upgrade Now
          </button>
        </div>

        {/* Basic Tracker Card */}
        <div className="bg-white rounded-[10px] p-4 shadow-sm w-[330px] h-[193px] mb-[150px] m-auto border border-[#BDBDBD]">
          <h3 className="font-bold text-lg mb-3">Basic Daily Tracker</h3>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Check-in once a day</li>
            <li>General understanding of skin health</li>
          </ul>
          <button
            className="border border-[#303030] px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <div className=" bottom-0 w-[390px]  bg-[#303030] fixed  px-5 py-4 flex justify-around items-center">
          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleHomeClick}
          >
            <img src={g} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Home</span>
          </div>

          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleButtonclick}
          >
            <img src={analysis} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Skin Analysis</span>
          </div>

          <div className="flex flex-col items-center text-white hover:cursor-pointer">
            <img src={scanner} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Scanner</span>
          </div>

          <div className="flex flex-col items-center text-white hover:cursor-pointer">
            <img src={calendar} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Daily Tracker</span>
            <div className="w-[70px] h-0.5 bg-white mt-1" />
          </div>

          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleShelfClick}
          >
            <img src={skincare} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">My Shelf</span>
          </div>
        </div>
      </div>
    </div>
  );
}
