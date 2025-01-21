import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import allergyIcon from "./Project Glow - Design Assets/Icons/SVG/skin-prick-test.svg";

export default function AllergyQuestionComponent() {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleNextClick = () => {
    console.log("Selected Answer:", selectedAnswer);

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
        step <= 2 ? "bg-black" : "bg-gray-300"
      }`}
  >
    {step}
  </div>
))}
          
        </div>

        {/* Question Section */}
        <div className="flex flex-col items-center px-6 text-center">
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F7EF] rounded-full p-4">
              <img
                src={allergyIcon}
                alt="Allergy Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="mt-4 w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]">
              Do you have any known allergies to skincare ingredients?
            </h1>
          </div>

          {/* Answer Options */}
          <div className="flex flex-col gap-[12px] mt-24 h-[150px] w-[330px]">
            {["Yes", "No", "I don't know"].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedAnswer(option)}
                className={`py-[10px] px-[24px] h-[42px] w-[330px] border rounded-full text-[16px] font-medium ${
                  selectedAnswer === option
                    ? "border-black bg-gray-200"
                    : "border-[#303030] bg-transparent"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-[200px] mb-6 flex justify-between h-[98px] w-[390px] py-[20px] px-[30px]">
          <button className="text-[16px] text-gray-500 underline">Skip</button>
          <button
            className={`w-[188px] py-[12px] px-[50px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
              selectedAnswer
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!selectedAnswer}
          >
            Earn 1 x <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
