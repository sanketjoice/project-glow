import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import preferenceIcon from "./Project Glow - Design Assets/Icons/SVG/natural-ingredients.svg";
import { useNavigate } from "react-router-dom";

export default function IngredientPreferences() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [specificIngredients, setSpecificIngredients] = useState("");
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/project-glow/medqs");
  };

  const options = [
    "I prefer fragrance-free products",
    "I prefer alcohol-free products",
    "I prefer vegan and cruelty-free products",
    "I avoid specific active ingredients",
    "None of the above",
  ];

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isCTAEnabled =
    selectedOptions.length > 0 &&
    (!selectedOptions.includes("I avoid specific active ingredients") ||
      specificIngredients.trim().length > 0);

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
          <div className="flex items-center gap-4 ml-5 mb-12">
            <div className="bg-[#F0F7EF] rounded-full mt-8">
              <img
                src={preferenceIcon}
                alt="Skin Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]">
              Do you have any specific ingredient preferences or restrictions?
            </h1>
          </div>

          {/* Answer Options */}
          <div className="flex flex-col gap-[14px] mt-8 h-auto w-[330px]">
            {options.map((option, index) => (
              <div key={index}>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-[32px] h-[32px]"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionClick(option)}
                  />
                  <span className="text-[#303030] leading-[22px] text-[14px]">
                    {option}
                  </span>
                </label>
                {option === "I avoid specific active ingredients" &&
                  selectedOptions.includes(option) && (
                    <input
                      type="text"
                      className="w-[284px] h-[40px] mt-2 py-[4px] px-[16px] border border-[#DFE4EA] rounded-[6px] ml-10"
                      placeholder="Please specify"
                      value={specificIngredients}
                      onChange={(e) => setSpecificIngredients(e.target.value)}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-[200px] mb-6 flex justify-between px-6">
          <button
            className="text-[16px] text-gray-500 underline"
            onClick={handleNextClick}
          >
            Skip
          </button>
          <button
            className={`w-[188px] py-[12px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
              isCTAEnabled
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!isCTAEnabled}
          >
            Earn 1 x{" "}
            <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
