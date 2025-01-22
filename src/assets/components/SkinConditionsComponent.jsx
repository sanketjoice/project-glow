import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import skinIcon from "./Project Glow - Design Assets/Icons/SVG/dermatology.svg";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import { useNavigate } from "react-router-dom";

export default function SkinConditionsComponent() {
  const navigate = useNavigate();
  
    const handleNextClick = () => {
        navigate("/project-glow/ingredients");
      };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Eczema",
    "Psoriasis",
    "Rosacea",
    "Frequent Allergic Reactions",
    "None of the above",
  ];

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Unselect all other options if "None of the above" is selected
      if (option === "None of the above") {
        setSelectedOptions([option]);
      } else {
        setSelectedOptions(
          selectedOptions.filter((item) => item !== "None of the above").concat(option)
        );
      }
    }
  };

  const isCTAEnabled = selectedOptions.length > 0;

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

        {/* Question */}
        <div className="flex items-center gap-4 ml-8">
          <div className="bg-[#F0F7EF] rounded-full mt-8">
            <img
              src={skinIcon}
              alt="Skin Icon"
              className="w-[70px] h-[70px]"
            />
          </div>
          <h1 className="w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]">
            Do you have any skin conditions or sensitivities we should be aware
            of?
          </h1>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4 mt-14 px-6">
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-[32px] h-[32px] cursor-pointer"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="text-[#303030] text-[14px]">{option}</span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-[300px] mb-6 flex justify-between px-6">
          <button className="text-gray-500 underline" onClick={handleNextClick}>Skip</button>
          <button
            className={`w-[188px] py-[12px] h-[48px] rounded-lg shadow-lg flex items-center justify-center text-[16px] ${
              isCTAEnabled
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isCTAEnabled}
            onClick={handleNextClick}
          >
            Earn 1 x <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px] ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
