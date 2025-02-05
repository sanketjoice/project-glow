import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextClick = () => {
    navigate("/project-glow/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
          />
          <img
            src={logo}
            alt="GlowSkin Logo"
            className="w-[110px] h-[28px] mr-[20px]"
          />
          <img src="" alt="" />
        </div>
        <h6
          className="text-[24px] leading-[30px] text-center w-[320px] h-[30px] font-semibold justify-center 
        items-center mt-10 ml-[30px]"
        >
          Sign into your account
        </h6>
        <div className="w-[326px] h-[108px] gap-[12px] flex flex-col items-center self-center mt-14 ">
          <input
            type="text"
            placeholder="Email"
            className="h-[48px] w-[326px] gap-1 text-[#9CA3AF] px-4 py-1 
          border-gray-00 border"
          />
          <input
            type="text"
            placeholder="Password"
            className="h-[48px] gap-1 w-[326px] text-[#9CA3AF] px-4 py-1
           border-gray-00 border"
          />
        </div>
        {/* Footer Buttons */}
        <div className="mt-0 mb-6 flex justify-between self-center">
          <button
            className={`w-[327px] py-[13px] mt-2 px-[28px] h-[50px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
              selectedOption
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
          >
            Sign In
          </button>
        </div>
        <div className="flex self-center gap-0 mt-0">
          <p
            className="text-[14px] leading-[22px] h-[22px] hover:cursor-pointer w-[152px]"
            onClick={handleNextClick}
          >
            Don’t have an account,
          </p>
        </div>
      </div>
    </div>
  );
}
