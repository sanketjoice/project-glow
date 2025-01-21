import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import mirror from "./Project Glow - Design Assets/Icons/SVG/mirror.svg";
import clearSkin from "./Project Glow - Design Assets/Icons/SVG/Youth.png";
import water from "./Project Glow - Design Assets/Icons/SVG/water 1.png";
import pour from "./Project Glow - Design Assets/Icons/SVG/Pore 1.png";
import skinPro from "./Project Glow - Design Assets/Icons/SVG/uv-protection 1.png";
import envSkin from "./Project Glow - Design Assets/Icons/SVG/skin-protection 1.png";
import face from "./Project Glow - Design Assets/SVG Selected/Clear skin.png";
import { useNavigate } from "react-router-dom";

export default function SkinGoalsComponent() {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleGoalSelection = (goalTitle) => {
    if (selectedGoals.includes(goalTitle)) {
      setSelectedGoals(selectedGoals.filter((goal) => goal !== goalTitle));
    } else {
      setSelectedGoals([...selectedGoals, goalTitle]);
    }
  };
    
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/project-glow/allergyqs");
      };

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
                src={mirror}
                alt="Skin Type Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="mt-4 w-[240px] h-[60px] text-[24px] leading-[30px] text-start font-semibold">
              What’s your skin goals?
            </h1>
          </div>
          <p className="text-[14px] leading-[22px] w-[196px] h-[22px] mt-[-10px] ml-[70px] text-start items-start">
            You can select multiple goals.
          </p>
          <div className="border stroke-[#DFE4EA] w-[334px] align-middle mt-5"></div>
          <div className="flex flex-col gap-[12px] mt-6 w-[330px]">
            {[
              {
                logo: face,
                title: "Clear and Smooth Skin",
                description:
                  "Covers acne, breakouts, scars, pigmentation, and uneven texture.",
              },
              {
                logo: clearSkin,
                title: "Youthful Appearance",
                description:
                  "Focuses on fine lines, wrinkles, sagging, and firming.",
              },
              {
                logo: water,
                title: "Hydration and Radiance",
                description:
                  "Addresses dryness, dullness, and achieving glowing skin.",
              },
              {
                logo: envSkin,
                title: "Soothing and Protection",
                description:
                  "Includes redness, sensitivity, rosacea, and barrier repair.",
              },
              {
                logo: pour,
                title: "Pore and Oil Control",
                description:
                  "Targets excess oil, clogged pores, and enlarged pores.",
              },
              {
                logo: skinPro,
                title: "Environmental Defense",
                description:
                  "Protects against sun damage, pollution, and premature aging.",
              },
            ].map((goal, index) => (
              <div
                key={index}
                className={`flex items-start px-4 gap-2 py-3 border rounded-lg shadow-sm bg-transparent border-[#D1D5DB] text-start cursor-pointer ${
                  selectedGoals.includes(goal.title) ? "border-black" : ""
                }`}
                onClick={() => handleGoalSelection(goal.title)}
              >
                <img
                  src={goal.logo}
                  alt="logo"
                  className="w-[62px] h-[62px]"
                />
                <div className="flex flex-col gap-[4px]">
                  <h2 className="text-[14px] leading-[20px] w-[228px] h-[20px] text-[#303030] font-medium">
                    {goal.title}
                  </h2>
                  <p className="text-[14px] text-[#6C6C6C] leading-[22px] w-[228px] h-[44px]">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] mb-6 flex justify-between h-[98px] w-[390px] py-[20px] px-[30px]">
          <button className="text-[16px] text-gray-500 underline">Skip</button>
          <button
            className={`w-[188px] py-[12px] px-[50px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
              selectedGoals.length > 0
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={selectedGoals.length === 0}
          >
            Earn 1 x <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
