import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import badge from "./Project Glow - Design Assets/SVG Selected/police-badge 1.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import products from "./Project Glow - Design Assets/SVG Selected/skincare products.svg";
import { useState } from "react";
import g from "./Project Glow - Design Assets/Project Glow Logo/G.png";
import analysis from "./Project Glow - Design Assets/SVG Selected/menu-skin-analysis.svg";
import scanner from "./Project Glow - Design Assets/SVG Selected/menu-product scanner.svg";
import calendar from "./Project Glow - Design Assets/SVG Selected/planner 1.png";
import skincare from "./Project Glow - Design Assets/SVG Selected/skincare (1) 1.png";
import { useNavigate } from "react-router-dom";

export default function MyShelf() {
  const [activeTab, setActiveTab] = useState("Scanned");
  const tabs = ["Scanned", "In-Use", "Bookmarks"];
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/project-glow/home");
  };
  const handleTrackerClick = () => {
    navigate("/project-glow/dailytracker");
  };
  const handleButtonclick = () => {
    navigate("/project-glow/skinanlysishome");
  };
  const handleProfileClick = () => {
    navigate("/project-glow/userprofile");
  };
  return (
    <div className="flex justify-center items-start min-h-screen bg-white overflow-y-auto">
      <div className="w-[390px] rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex justify-between items-center h-[54px] fixed w-full max-w-[390px] py-[8px] px-[20px] bg-[#F4F7F2] z-10">
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <div className="flex items-center space-x-2">
            <img src={badge} alt="Medal" className="h-[24px] w-[24px]" />
            <span className="text-[12px]">1</span>
            <img src={gem} alt="Gem" className="w-[24px]" />
            <span className="text-[12px]">10</span>
            <div
              className="bg-[#303030] rounded-full w-[38px] h-[38px] flex items-center
                   hover:cursor-pointer justify-center text-white font-bold "
              onClick={handleProfileClick}
            >
              JC
            </div>
          </div>
        </div>
        <div className="w-full max-w-[390px] mt-[70px] mx-auto bg-[#F4F7F2] p-4 rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="flex justify-between border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-[16px] font-semibold text-[#303030] pb-2 flex-1 ${
                  activeTab === tab
                    ? "border-b-[3px] border-black"
                    : "text-[#303030]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Empty State */}
          <div className="flex flex-col mb-[200px] items-center text-center mt-[50px] px-4">
            <img
              src={products}
              alt="Product Icon"
              className="w-[100px] h-[100px]"
            />
            <h5 className="text-[28px] font-semibold mt-7">
              Build Your Skin Shelf!
            </h5>
            <p className="text-[#303030] text-[14px] mt-3 leadin-[22px] w-[310px] h-[88px]">
              Every great skincare journey starts with the right products. Scan
              or save your favorite products here to keep them organized and
              tailored to your skin’s needs.
            </p>
            <button className="bg-[#303030] w-[260px] h-[44px] text-white text-[16px] px-[40px] py-[10px] rounded-md mt-16">
              Scan Your First Product
            </button>
          </div>
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

          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleTrackerClick}
          >
            <img src={calendar} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Daily Tracker</span>
          </div>

          <div className="flex flex-col items-center text-white hover:cursor-pointer">
            <img src={skincare} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">My Shelf</span>
            <div className="w-[50px] h-0.5 bg-white mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
