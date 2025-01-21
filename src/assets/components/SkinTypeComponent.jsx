import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import skinTypeImg from "./Project Glow - Design Assets/Icons/SVG/skin-type.svg";
import { useNavigate } from "react-router-dom";

export default function SkinTypeComponent() {
    
  const [skinType, setSkinType] = useState("");
  const [sensitive, setSensitive] = useState("");

  const handleSkinTypeChange = (type) => {
    setSkinType(type);
  };

  const handleSensitiveChange = (option) => {
    setSensitive(option);
  };

  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/project-glow/skin-goals");
  };

  const isButtonDisabled = !(skinType && sensitive);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
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

        <div className="flex justify-center items-center mt-4 space-x-2">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className={`w-[24px] h-[24px] text-white rounded-full py-[2px] 
                px-[7px] text-[14px] leading-[22px] justify-center text-center border ${
                  step === 1 ? "bg-black" : "bg-gray-300"
                }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-6 px-6 text-center">
          <div className="flex">
            <div className="bg-[#F0F7EF] rounded-full p-4">
              <img
                src={skinTypeImg}
                alt="Skin Type Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="mt-4 w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold">
              What’s your skin type?
            </h1>
          </div>
          <p className="text-[14px] leading-[22px] w-[96px] h-[22px] text-start items-start ml-[-225px] pt-3">
            Select one
          </p>
          <div className="grid grid-cols-3 gap-[12px] mt-5 w-[330px]">
            {["Normal", "Oily", "Dry"].map((type) => (
              <button
                key={type}
                onClick={() => handleSkinTypeChange(type)}
                className={`w-[102px] h-[42px] border px-[24px] py-[10px] border-[#303030] rounded-[30px] flex items-center justify-center
                  text-[14px] leading-[22px] ${
                    skinType === type
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[12px] mt-3 w-[330px]">
            {["Combination", "I don’t know"].map((type) => (
              <button
                key={type}
                onClick={() => handleSkinTypeChange(type)}
                className={`w-[159px] h-[42px] border px-[24px] py-[10px] border-[#303030] rounded-[30px] flex items-center justify-center
                  text-[14px] leading-[22px] ${
                    skinType === type
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Sensitive Analysis Section */}
        <div className="flex flex-col items-center mt-6 px-6 text-center">
          <h2 className="text-[14px] leading-[22px] w-[102px] h-[42px] text-start items-start ml-[-225px] pt-3">
            Sensitive
          </h2>
          <div className="grid grid-cols-3 gap-[12px] w-[330px]">
            {["Yes", "No", "I don’t know"].map((option) => (
              <button
                key={option}
                onClick={() => handleSensitiveChange(option)}
                className={`w-[102px] h-[42px] border px-[24px] py-[10px] border-[#303030] rounded-[30px] flex items-center justify-center
                  text-[14px] leading-[22px] ${
                    sensitive === option
                      ? "bg-black text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto mb-6 flex justify-center">
          <button
            className={`w-[188px] py-[12px] px-[50px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] mt-8 ${
              isButtonDisabled
                ? "bg-[#E5E7EB] text-[#6C6C6C]"
                : "bg-black text-white"
            }`}
            onClick={handleNextClick}
            disabled={isButtonDisabled}
          >
            Earn 1 x <img src={gem} alt="" className="w-[20px] h-[20px] ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

