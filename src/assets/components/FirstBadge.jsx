import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import badge from "./Project Glow - Design Assets/SVG Selected/badge.jpg";
import { useNavigate } from "react-router-dom";


export default function FirstBadge() {
  const navigate = useNavigate();
  
  const handleNextClick = () => {
    navigate(""); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center self-center justify-between px-4 py-4">
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
        </div>
         <div className="flex gap-3 flex-col justify-center items-center mt-6">   
            <h6 className="text-[24px] leading-[30px] font-semibold">Congratulation!</h6>
        <img src={badge} alt="rocketIcon" className="w-[201px] rounded-full shadow-2xl h-[201px] mt-4" />
        <h6 className="text-[18px] mt-5 leading-[26px] w-[330px] h-[78px] text-center ">You’ve earned your ‘First Skin Analysis’ badge. 
            Welcome to the Project Glow skincare journey.</h6>

        {/* Footer Buttons */}
        <div className="mt-auto mb-6 flex justify-between px-6">
          <button
            className="bg-black text-white w-[258px] h-[50px] py-[13px] px-[28px] mt-[275px] rounded-[6px]
            shadow-lg flex items-center justify-center gap-1 text-[16px]"
            onClick={handleNextClick}>
            Continue to see the report
          </button>
          </div>
        </div>
      </div> 
    </div>
      );
    } 
     