import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import calendar from "./Project Glow - Design Assets/Icons/SVG/Woman (1).svg"; 
import logoOne from "./Project Glow - Design Assets/Icons/SVG/love (1).svg";
import logoTwo from "./Project Glow - Design Assets/Icons/SVG/account.svg";
import { useNavigate } from "react-router-dom";

export default function DateEstimation() {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
          />
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <img
            src={closeIcon}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
          />
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className={`w-[24px] h-[24px] text-white rounded-full py-[2px] 
                px-[7px] text-[14px] leading-[22px] justify-center text-center border ${
                  step <= 3 ? "bg-black" : "bg-gray-300"
                }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Question Section */}
        <div className="flex flex-col items-center px-6 text-center ">
          <div className="flex items-center gap-2"> 
            <div className="bg-[#F0F7EF] rounded-full p-4">
              <img
                src={calendar}
                alt="Hormonal Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="mt-4 w-[240px] h-[120px] text-[24px] mb-1 leading-[30px] text-start font-semibold text-[#303030]">
            When is the estimated start date of your next period?
            </h1>
          </div>

          {/* Answer Options */}
          
        </div>
    
        {/* Why We Ask Section */}
        <div className="mt-12 p-[16px] mx-6 mb-20 h-[252px] w-[330px]">
        <div className="bg-[#F0F7EF] border border-[#9CA3AF] rounded-[10px] p-4">
            {/* Header */}
            <div className="flex items-center gap-2">
            
            
            <p className="text-[14px] leading-[22px] pb-2 font-semibold text-[#303030]">
                Why we ask
            </p>
            </div>

            {/* Main Text */}
            <div className="flex gap-[12px] mb-4 items-start">
            <img
                src={logoOne} 
                alt="Logo 2"
                className="w-[36px] h-[36px]"
            />
            <p className="mt-2 text-[14px] leading-[20px] text-[#111928]">
            Hormonal changes during your cycle can affect your skin’s oil
            production, sensitivity, and hydration levels. Sharing this helps us tailor insights to your skin’s unique needs.
            </p>
            </div>

            {/* Optional Note */}
            <div className="flex gap-[12px] items-start">
            <img
                src={logoTwo} 
                alt="Logo 1"
                className="w-[36px] h-[36px]"/>
            <p className="mt-2 text-[14px] leading-[20px] text-[#111928]">
            This information is optional, kept private, and used only to improve your skin analysis.
            </p>
            </div>
        </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-auto mb-6 flex justify-between px-6">
          <button className="text-[16px] text-gray-500 underline">
            Skip
          </button>
          <button
            className={`w-[188px] py-[12px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
              selectedOption
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!selectedOption}
          >
            Earn 1 x{" "}
            <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}