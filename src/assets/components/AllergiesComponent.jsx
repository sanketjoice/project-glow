import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import forbidden from "./Project Glow - Design Assets/Icons/SVG/forbidden.svg";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import info from "./Project Glow - Design Assets/SVG Selected/Info circle.png";
import { useNavigate } from "react-router-dom";

export default function AllergiesComponent() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/skinconditions");
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherInput, setOtherInput] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const options = [
    "Alpha-Hydroxy Acids (AHAs)",
    "BHAs",
    "Essential Oils",
    "Fragrance or Perfumes",
    "Formaldehyde",
    "Hydroquinone",
    "Lanolin",
    "Nickel",
    "Preservatives",
    "Retinoids or Retinol",
    "Sunscreen Ingredients",
    "Sulfates",
    "Others (Please specify)",
    "I'm not sure about any of these",
  ];

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));

      // Reset state for "Others" and "I'm not sure" options
      if (option === "Others (Please specify)") setOtherInput("");
      if (option === "I'm not sure about any of these") setShowWarning(false);
    } else {
      setSelectedOptions([...selectedOptions, option]);

      // Show warning if "I'm not sure about any of these" is selected
      if (option === "I'm not sure about any of these") setShowWarning(true);
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInput(e.target.value);
  };

  const isCTAEnabled = () => {
    if (selectedOptions.includes("Others (Please specify)")) {
      return otherInput.trim().length > 0;
    }
    return selectedOptions.length > 0;
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

        {/* Question */}
        <div className="flex items-center gap-4 ml-8">
          <div className="bg-[#F0F7EF] rounded-full mt-8">
            <img
              src={forbidden}
              alt="Allergy Icon"
              className="w-[70px] h-[70px] "
            />
          </div>
          <h1 className="w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]">
            Are you allergic to any of these common skincare ingredients?
          </h1>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-4 mt-10 px-6">
          {options.map((option, index) => (
            <div key={index}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-[32px] h-[32px]"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                <span className="text-[#303030] text-[14px]">{option}</span>
                <img
                  src={info}
                  alt="infoLogo"
                  className="w-[24px] h-[24px] ml-auto"
                />
              </label>

              {/* Input for "Others (Please specify)" */}
              {option === "Others (Please specify)" &&
                selectedOptions.includes(option) && (
                  <input
                    type="text"
                    className="w-[284px] h-[40px] mt-2 p-2 border border-[#DFE4EA] rounded-[6px] ml-10"
                    placeholder="Please specify"
                    value={otherInput}
                    onChange={handleOtherInputChange}
                  />
                )}
            </div>
          ))}

          {/* Warning for "I'm not sure" */}
          {showWarning && (
            <div className="bg-red-100 text-red-600 p-4 rounded">
              Since you’re unsure about specific allergies, we’ll take a
              cautious approach by recommending mild, fragrance-free, and
              hypoallergenic products to minimize any potential reactions.
              <br />
              <br />
              If you’re not sure about any specific allergies, consider
              patch-testing new products. Here’s a guide to safe patch-testing.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-[60px] mb-6 flex justify-between px-6">
          <button className="text-gray-500 underline" onClick={handleNextClick}>
            Skip
          </button>
          <button
            className={`w-[188px] py-[12px] h-[48px] rounded-lg shadow-lg flex items-center justify-center text-[16px] ${
              isCTAEnabled()
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isCTAEnabled()}
            onClick={handleNextClick}
          >
            Earn 1 x{" "}
            <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
