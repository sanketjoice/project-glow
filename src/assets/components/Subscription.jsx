import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import sparkle from "./Project Glow - Design Assets/SVG Selected/ai 1.png";
import scanner from "./Project Glow - Design Assets/SVG Selected/Group 262.png";
import files from "./Project Glow - Design Assets/SVG Selected/patient 1.png";
import unbiased from "./Project Glow - Design Assets/SVG Selected/unbiased 2.png";
import planner from "./Project Glow - Design Assets/SVG Selected/planner 2.png";
import toggle from "./Project Glow - Design Assets/SVG Selected/Toggle.png";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/project-glow/comprehensivelevel");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        <div className="flex items-center justify-between px-4 py-4">
          <img src="" />
          <img
            src={logo}
            alt="GlowSkin Logo"
            className="w-[193px] h-[50px] mt-4"
          />
          <img
            src={closeIcon}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
            onClick={handleNextClick}
          />
        </div>
        <p className="text-[16px] text-center w-[350px] h-[48px] flex justify-center self-center mt-3">
          Our AI-powered analysis reveals what your skin truly needs to look and
          feel its best with
        </p>
        <div className="w-[309px] h-[208px] gap-3 flex flex-col self-center mt-6 items-center">
          <div className="flex gap-2">
            <img src={sparkle} alt="" className="w-[32px]" />
            <p className="text-[14px]">AI-Powered Skin Analysis</p>
          </div>
          <div className="flex gap-2">
            <img src={scanner} alt="" className="w-[32px]" />
            <p className="text-[14px]">AI-Powered Skin Analysis</p>
          </div>
          <div className="flex gap-2">
            <img src={files} alt="" className="w-[32px]" />
            <p className="text-[14px]">AI-Powered Skin Analysis</p>
          </div>
          <div className="flex gap-2">
            <img src={unbiased} alt="" className="w-[32px]" />
            <p className="text-[14px]">AI-Powered Skin Analysis</p>
          </div>
          <div className="flex gap-2">
            <img src={planner} alt="" className="w-[32px]" />
            <p className="text-[14px]">AI-Powered Skin Analysis</p>
          </div>
        </div>
        <div className="flex justify-between w-[350px] h-[54px] px-3 py-2 items-center ml-4 mt-5  rounded-[10px] border border-[#BDBDBD]">
          <p>Enable Free Trail</p>
          <img src={toggle} alt="" className="w-[55px] h-[32px]" />
        </div>
        <button className="bg-[#303030] w-[350px] h-[50px] py-[13px] px-[28px] rounded-md text-white mt-28 ml-4">
          Continue
        </button>
        <p className="text-[14px] text-center mt-2">
          Secure checkout with Stripe
        </p>
        <div className="w-[271px] h-[22px] flex justify-between self-center mt-6 items-center">
          <p className="text-[#6C6C6C] text-[14px] underline">Terms of Use</p>
          <p className="text-[#6C6C6C] text-[14px] underline">Privacy Policy</p>
          <p className="text-[#6C6C6C] text-[14px] underline">Restore</p>
        </div>
      </div>
    </div>
  );
}
