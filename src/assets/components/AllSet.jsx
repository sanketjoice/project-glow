import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import rocketIcon from "./Project Glow - Design Assets/SVG Selected/rocket 1.png";
import { useNavigate } from "react-router-dom";

export default function AllSet() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/login");
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
        <div className="flex gap-3 flex-col justify-center items-center">
          <img
            src={rocketIcon}
            alt="rocketIcon"
            className="w-[100px] h-[100px] mt-16"
          />
          <h6 className="text-[24px] leading-[30px] w-[320px] h-[120px] text-center ">
            All set! Create an account to save your profile and access
            personalized skincare insights anytime.
          </h6>

          {/* Footer Buttons */}
          <div className="mt-auto mb-6 flex justify-between px-6">
            <button
              className="bg-black text-white w-[273px] h-[50px] py-[13px] px-[77px] mt-[275px] rounded-[6px]
            shadow-lg flex items-center justify-center gap-1 text-[16px]"
              onClick={handleNextClick}
            >
              Save My Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
