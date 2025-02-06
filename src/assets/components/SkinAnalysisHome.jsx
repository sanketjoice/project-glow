import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import badge from "./Project Glow - Design Assets/SVG Selected/police-badge 1.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import backgroundFace from "./pgimg/face.png";
import faceIcon from "./Project Glow - Design Assets/SVG Selected/facial-cleansing.svg";
import g from "./Project Glow - Design Assets/Project Glow Logo/G.png";
import analysis from "./Project Glow - Design Assets/SVG Selected/menu-skin-analysis.svg";
import scanner from "./Project Glow - Design Assets/SVG Selected/menu-product scanner.svg";
import calendar from "./Project Glow - Design Assets/SVG Selected/planner 1.png";
import skincare from "./Project Glow - Design Assets/SVG Selected/skincare (1) 1.png";
import { useNavigate } from "react-router-dom";

export default function SkinAnalysisHome() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/project-glow/home");
  };
  const handleButtonClick = () => {
    navigate("/project-glow/skin-analysis");
  };
  const handleClick = () => {
    navigate("/project-glow/analysisresult");
  };
  const handleTrackerClick = () => {
    navigate("/project-glow/dailytracker");
  };
  const handleShelfClick = () => {
    navigate("/project-glow/myshelf");
  };
  const handleProfileClick = () => {
    navigate("/project-glow/userprofile");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-white overflow-y-auto">
      <div className="w-[390px]  rounded-xl shadow-lg flex flex-col bg-[#F4F7F2] ">
        {/* Header */}
        <div className="flex justify-between h-[54px] py-[8px] px-[20px] bg-[#F4F7F2] fixed w-full max-w-[390px] z-20 items-center mb-4">
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <div className="flex items-center space-x-2">
            <img src={badge} alt="Medal" className="h-[24px] w-[24px]" />
            <span className="text-[12px]">1</span>
            <img src={gem} alt="Gem" className="w-[24px]" />
            <span className="text-[12px]">10</span>
            <div
              className="bg-[#303030] hover:cursor-pointer rounded-full w-[38px] h-[38px] flex items-center justify-center text-white font-bold"
              onClick={handleProfileClick}
            >
              JC
            </div>
          </div>
        </div>
        {/* Comprehensive Level */}
        <div className="mb-4 mt-[65px]">
          <div className="flex justify-between px-4">
            <p className="text-[14px] text-[#303030] font-medium">
              Comprehensive level
            </p>
            <p className="underline text-[14px]">What is it about?</p>
          </div>
          <div className="flex mt-1  items-center ">
            <div className="w-[290px] bg-gray-200 rounded-full h-[12px] mx-4 mt-1">
              <div
                className="bg-purple-500 h-[12px] rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-[24px] mt-0 font-semibold">60%</p>
          </div>
        </div>
        <div className="w-[350px] ml-4 h-[266px] bg-[#F9FCF9] rounded-[10px] border border-gray-400 p-4 relative">
          <img
            src={backgroundFace}
            alt="Face"
            className="absolute top-[0px] left-[0px] w-[192px] h-[236px] object-cover opacity-100"
          />
          <div className="relative z-10">
            <div className="ml-[140px]">
              <h1 className="text-[20px] font-semibold text-gray-800 leading-tight">
                Unlock a deeper <br /> understanding of <br /> your skin health
              </h1>
              <p className="text-gray-700 text-[14px] h-[66px] w-[196px] mt-1">
                Our AI provide more accurate and personalized analysis with your
                health data.
              </p>
            </div>
            <button className="w-[310px] text-[16px] mt-2 py-2 border border-black bg-white rounded-xl  font-semibold">
              Increase Comprehensive Level
            </button>
            <p className="text-center text-gray-600 text-[12px] mt-2">
              Your data will be strictly used for your profile only.
            </p>
          </div>
        </div>
        <button
          className="bg-[#FBBF24] hover:bg-yellow-500 text-gray-800 px-[28px] py-[8px] mt-4 ml-4 w-[350px] h-[44px] 
          rounded-[6px] text-[16px] font-medium transition-colors duration-200"
          onClick={handleButtonClick}
        >
          Analyze My Skin Now
        </button>
        <p className="ml-4 mt-4 font-semibold text-[18px]">
          Your Skin Analysis History
        </p>
        <div className="flex ml-4 mr-6 mt-1 justify-between">
          <p className="text-[12px] text-[#303030]">Total Reports: 10</p>
          <p className="underline text-[12px] text-[#303030]">All Reports </p>
        </div>
        <div
          className="w-[350px] hover:cursor-pointer h-[132px] bg-[#F4F7F2] border border-[#9E9E9E] ml-4 rounded-2xl p-4 flex gap-4 mt-3"
          onClick={handleClick}
        >
          <img src={faceIcon} className="w-[52px] h-[52px]" />
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[12px]">Skin Score</span>
              <span className="text-[18px] font-semibold">
                78 <span className="text-lg font-medium">/100</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px]">Skin Age</span>
              <span className="text-[18px] font-semibold">
                12 <span className="text-lg font-medium">years younger</span>
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[12px]">Identified Issues</span>
              <span className="text-[18px] font-semibold">10</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[12px]">Checked on</span>
              <span className="text-[18px] font-semibold">02-Oct 2024</span>
            </div>
          </div>
        </div>
        <div className="w-[350px] mb-[130px] h-[132px] bg-[#F4F7F2] border  border-[#9E9E9E] ml-4 rounded-2xl p-4 flex gap-4 mt-3">
          <img src={faceIcon} className="w-[52px] h-[52px]" />
          <div className="flex flex-wrap justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[12px]">Skin Score</span>
              <span className="text-[18px] font-semibold">
                78 <span className="text-lg font-medium">/100</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px]">Skin Age</span>
              <span className="text-[18px] font-semibold">
                12 <span className="text-lg font-medium">years younger</span>
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[12px]">Identified Issues</span>
              <span className="text-[18px] font-semibold">10</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[12px]">Checked on</span>
              <span className="text-[18px] font-semibold">14-Sep 2024</span>
            </div>
          </div>
        </div>
        <div className=" bottom-0 w-[390px]  bg-[#303030] fixed  px-5 py-4 flex justify-around items-center">
          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleHomeClick}
          >
            <img src={g} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Home</span>
          </div>

          <div className="flex flex-col items-center text-white hover:cursor-pointer">
            <img src={analysis} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Skin Analysis</span>
            <div className="w-[70px] h-0.5 bg-white mt-1" />
          </div>

          <div className="flex flex-col items-center text-white hover:cursor-pointer">
            <img src={scanner} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Scanner</span>
          </div>

          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleTrackerClick}
          >
            <img src={calendar} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">Daily Tracker</span>
          </div>

          <div
            className="flex flex-col items-center text-white hover:cursor-pointer"
            onClick={handleShelfClick}
          >
            <img src={skincare} className="w-6 h-6" />
            <span className="mt-1 text-[12px]">My Shelf</span>
          </div>
        </div>
      </div>
    </div>
  );
}
