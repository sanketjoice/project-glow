import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import badge from "./Project Glow - Design Assets/SVG Selected/police-badge 1.png"
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import backgroundImage from "./Project Glow - Design Assets/Images/Img-14.png"
import pm from "./Project Glow - Design Assets/SVG Selected/pm-25.svg";
import hydratedSkin from "./Project Glow - Design Assets/SVG Selected/hydrated-skin.svg";
import products from "./Project Glow - Design Assets/SVG Selected/skincare products.svg";
import dumbell from "./Project Glow - Design Assets/SVG Selected/dumbbell.svg";
import medical from "./Project Glow - Design Assets/SVG Selected/medical.svg";
import g from "./Project Glow - Design Assets/Project Glow Logo/G.png";
import analysis from "./Project Glow - Design Assets/SVG Selected/menu-skin-analysis.svg";
import scanner from "./Project Glow - Design Assets/SVG Selected/menu-product scanner.svg";
import calendar from "./Project Glow - Design Assets/SVG Selected/planner 1.png";
import skincare from "./Project Glow - Design Assets/SVG Selected/skincare (1) 1.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/checkin"); 
  };
  const handleTextClick = () => {
    navigate("/project-glow/analysisresult"); 
  };
    const dates = [11, 12, 13, 14, 16, 17, 18];
  const status = ["full", "full", "full", "half", "half", "full", "empty"];

  return (
    <div className="flex justify-center items-start min-h-screen bg-white overflow-y-auto">

      <div className="w-[390px]  rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
      {/* Header */}
      <div className="flex justify-between h-[54px] py-[8px] px-[20px] bg-[#F4F7F2] items-center mb-4">
        <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
        <div className="flex items-center space-x-2">
          <img src={badge} alt="Medal" className="h-[24px] w-[24px]" />
          <span className="text-[12px]">1</span>
          <img src={gem} alt="Gem" className="w-[24px]" />
          <span className="text-[12px]">10</span>
          <div className="bg-[#303030] rounded-full w-[38px] h-[38px] flex items-center justify-center text-white font-bold">JC</div>
        </div>
      </div>

      {/* Greeting */}
      <div className="bg-[#E2E7DF] flex p-4 mb-4 gap-4">
        <div>
        <h2 className="text-[18px] text-[#303030] font-semibold">Good morning Jane!</h2>
        <p className="text-[16px] text-black">How's your skin feeling?</p>
        </div>
        <button className="mt-1 w-[152px] h-[46px] border-[#303030] px-4 py-2 border rounded-[6px] bg-white ml-4 text-[14px]"
        onClick={handleNextClick}>Morning Check-in</button>
      </div>

      {/* Calendar */}
      <div className="flex justify-between px-4">
        <p className="text-[#303030] text-[14px]">November 2024</p>
        <p className="text-[#303030] text-[14px]">Today</p>
      </div>
      <div className="flex justify-center space-x-8 bg-[#F4F7F2] p-4">
      {dates.map((date, index) => (
        <div key={date} className="flex flex-col items-center">
          <span className={`text-[#303030] text-[16px] ${date === 18 ? "font-bold underline" : ""}`}>{date}</span>
          <div className="relative w-5 h-5 mt-1">
            {status[index] === "full" && (
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#22AD5C" }}></div>
            )}
            {status[index] === "half" && (
              <div className="w-5 h-5 rounded-full bg-gray-300 overflow-hidden" style={{ backgroundColor: "#E0E0E0" }}>
                <div className="w-1/2 h-full" style={{ backgroundColor: "#22AD5C" }}></div>
              </div>
            )}
            {status[index] === "empty" && (
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#E0E0E0" }}></div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="border border-[#BDBDBD] w-[350px] flex self-center mb-4"></div>
      {/* Skin Info */}
      <div className="flex justify-around items-start bg-[#F4F7F2] p-2 rounded-xl shadow-sm">
      {/* Skin Score */}
      <div className="flex flex-col items-start px-3">
        <p className="text-sm text-gray-700 font-semibold">Skin Score</p>
        <div className="flex items-baseline">
          <span className="text-[24px] font-semibold text-black">78</span>
          <span className="text-lg text-gray-700">/100</span>
        <span className="text-green-600 font-semibold ml-[2px] text-sm">Good!</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-gray-300"></div>

      {/* Skin Age */}
      <div className="flex flex-col items-start px-4">
        <p className="text-sm text-gray-700 font-semibold">Skin Age</p>
        <div className="flex items-baseline">
          <span className="text-[24px] font-bold text-black">25</span>
          <span className="text-sm text-gray-700 ml-1">Years old</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-gray-300"></div>

      {/* Analysis Report */}
      <div className="flex flex-col items-center px-4">
        <p className="text-[12px] text-gray-700 font-semibold">Analysis Report</p>
        <div className="flex items-center">
          <span className="text-[24px] font-bold text-black mr-1">1</span>
          <a href="#" className="text-sm text-black underline" onClick={handleTextClick}>Read latest</a>
        </div>
      </div>
    </div>

      {/* Comprehensive Level */}
      <div className="mb-4 mt-4">
        <div className="flex justify-between px-4">
        <p className="text-[14px] text-[#303030] font-medium">Comprehensive level</p>
        <p className="underline text-[14px]">What is it about?</p>
        </div>
        <div className="flex mt-3  items-center ">
        <div className="w-[290px] bg-gray-200 rounded-full h-[12px] mx-4 mt-1">
          <div className="bg-purple-500 h-[12px] rounded-full" style={{ width: "60%" }}></div>
        </div>
        <p className="text-[24px] mt-0 font-semibold">60%</p>
        </div>
      </div>

      <button className="w-[249px] h-[40px] bg-white border border-[#303030] rounded-lg py-2 px-[16px] text-[16px] 
      justify-center self-center font-medium mb-4">
        Schedule Next Skin Analysis
      </button>
      <div className="border border-[#BDBDBD] w-[350px] flex self-center my-4"></div>

      <div className="relative w-[350px] rounded-[10px] mx-4 h-[150px] overflow-hidden">
      {/* Background image */}
      <img 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        src={backgroundImage}
      />
      
      {/* Content overlay */}
      <div className="relative h-full flex flex-col items-center justify-center p-4 space-y-3">
        {/* Main text */}
        <h2 className="text-[18px] font-semibold text-center max-w-[280px] leading-tight">
          Check if your skincare products are suitable for you
        </h2>
        
        {/* Scanner button */}
        <div className="relative">
          <button className="bg-[#FBBF24] hover:bg-yellow-500 text-gray-800 px-[28px] py-[8px] w-[213px] h-[40px] 
          rounded-[6px] text-[16px] font-medium transition-colors duration-200">
            Try Product Scanner
          </button>
        </div>
      </div>
    </div>
      <p className="text-[16px] font-semibold px-4 mt-6">Skincare tips for you</p>
        <div className="flex px-4 gap-4 mt-4">
            <img src={pm} alt="" className="w-[56px] h-[56px] p-[10px] border border-[#BDBDBD] rounded-[10px]" />
            <img src={hydratedSkin} alt="" className="w-[56px] h-[56px] p-[10px] border border-[#BDBDBD] rounded-[10px]" />
            <img src={products} alt="" className="w-[56px] h-[56px] p-[10px] border border-[#BDBDBD] rounded-[10px]" />
            <img src={dumbell} alt="" className="w-[56px] h-[56px] p-[10px] border border-[#BDBDBD] rounded-[10px]" />
            <img src={medical} alt="" className="w-[56px] h-[56px] p-[10px] border border-[#BDBDBD] rounded-[10px]" />
        </div>
        <div>
        <div className="w-[350px] p-4 border border-[#BDBDBD] rounded-xl bg-[#F4F7F2] ml-4 mt-6 flex items-start gap-4">
      <img src={pm} alt="PM2.5 Log" className="w-12 h-12" />
      <div>
        <h2 className="font-semibold text-[14px] text-[#303030]">Environmental Conditions</h2>
        <p className=" text-[14px] text-[#303030] mt-1">
          Pollution levels are elevated. Make sure to cleanse thoroughly tonight to remove impurities.
        </p>
      </div>
    </div>
 <div className="w-[350px] p-4 border border-[#BDBDBD] rounded-xl bg-[#F4F7F2] ml-4 mt-3 flex items-start gap-4">
      <img src={hydratedSkin} alt="PM2.5 Log" className="w-12 h-12" />
      <div>
        <h2 className="font-semibold text-[14px] text-[#303030]">Hydration and Moisture Reminders</h2>
        <p className=" text-[14px] text-[#303030] mt-1">
        It’s a dry day today! Drink water regularly and consider a hydrating serum to keep your skin moisturized.
        </p>
      </div>
    </div>
 <div className="w-[350px] p-4 border border-[#BDBDBD] rounded-xl bg-[#F4F7F2] ml-4 mt-3 flex items-start gap-4">
      <img src={products} alt="PM2.5 Log" className="w-12 h-12" />
      <div>
        <h2 className="font-semibold text-[14px] text-[#303030]">Product Usage Suggetions</h2>
        <p className=" text-[14px] text-[#303030] mt-1">
        To support your anti-aging goal, apply a retinol-based product tonight. Don’t forget to use SPF during the day!
        </p>
      </div>
    </div>
 <div className="w-[350px] p-4 border border-[#BDBDBD] rounded-xl bg-[#F4F7F2] ml-4 mt-3 flex items-start gap-4">
      <img src={dumbell} alt="PM2.5 Log" className="w-12 h-12" />
      <div>
        <h2 className="font-semibold text-[14px] text-[#303030]">Health and Wellness</h2>
        <p className=" text-[14px] text-[#303030] mt-1">
        Did you get enough rest? Poor sleep affects skin’s ability to repair itself, so aim for at least 7-8 hours.
        </p>
      </div>
 </div>
 <div className="w-[350px] p-4 border border-[#BDBDBD] rounded-xl bg-[#F4F7F2] ml-4 mt-3 flex items-start gap-4">
      <img src={medical} alt="PM2.5 Log" className="w-12 h-12" />
      <div>
        <h2 className="font-semibold text-[14px] text-[#303030]">Ingredient Awareness</h2>
        <p className=" text-[14px] text-[#303030] mt-1">
        Remember, products with fragrance may irritate sensitive skin. Check labels carefully!
        </p>
      </div>
 </div>
        </div>
        <div className="bg-[#DDD6FE] rounded-[10px] w-[350px] h-[118px] mx-4 mt-4 items-center justify-center p-5">
            <div className="flex justify-center items-center gap-[10px]">
            <div className="w-[25px] border border-[#303030] h-0"></div>
            <p className="text-[16px]">Myth buster</p>
            <div className="w-[25px] border border-[#303030] h-0"></div>
            </div>
            <p className="text-[16px] font-semibold text-center">Natural Ingredients Are Always Better?</p>
            <p className="underline text-[14px] text-center">Did you know?</p>
        </div>
        <div className=" bottom-0 w-[390px] mt-10 bg-[#303030] px-5 py-4 flex justify-around items-center">
      <div className="flex flex-col items-center text-white">
        <img src={g} className="w-6 h-6" />
        <span className="mt-1 text-[12px]">Home</span>
        <div className="w-8 h-0.5 bg-white mt-1" />
      </div>

      <div className="flex flex-col items-center text-white">
        <img src={analysis} className="w-6 h-6" />
        <span className="mt-1 text-[12px]">Skin Analysis</span>
      </div>

      <div className="flex flex-col items-center text-white">
        <img src={scanner} className="w-6 h-6" />
        <span className="mt-1 text-[12px]">Scanner</span>
      </div>

      <div className="flex flex-col items-center text-white">
        <img src={calendar} className="w-6 h-6" />
        <span className="mt-1 text-[12px]">Daily Tracker</span>
      </div>

      <div className="flex flex-col items-center text-white">
        <img src={skincare} className="w-6 h-6" />
        <span className="mt-1 text-[12px]">My Shelf</span>
      </div>
 </div>

    </div>
    </div>
  );
}