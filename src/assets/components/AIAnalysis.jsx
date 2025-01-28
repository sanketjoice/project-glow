import React, { useState, useEffect } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import report from "./Project Glow - Design Assets/SVG Selected/report ready.svg";
import rightArrow from "./Project Glow - Design Assets/SVG Selected/up-arrow.svg";
import { useNavigate } from "react-router-dom";

const AIAnalysis = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/badge");
  };

  // Timer to show the button after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center self-center justify-between px-4 py-4">
          
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          
        </div>

        {/* AI Analysis Section */}
        <div className="flex flex-col items-center mt-12 px-6">
          
          <div className="h-[94px] w-[px] flex items-center justify-center">
            {showButton ? (
              <div className="flex flex-col self-center justify-center items-center gap-3 mt-2 mb-4"> 
                <img src={report} alt="report ready" className="w-[80px] h-[80px]" />
              <button
                className="bg-[#22AD5C] text-white px-[28px] py-[13px] hover:cursor-pointer rounded-[6px] text-[16px] w-[207px] h-[50px]"
                onClick={handleNextClick}
              >
                Your Report is Ready
              </button>
              </div>
            ) : (
              <div className="flex flex-col self-center justify-center items-center gap-1">
                <div className="flex gap-2">
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-[#6C6C6C]"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-black"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-[#6C6C6C]"></div>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-black"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-[#6C6C6C]"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-black"></div>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-[#6C6C6C]"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-black"></div>
                  <div className="w-[12px] h-[12px] rounded-full animate-pulse bg-[#6C6C6C]"></div>
                </div>
                <h1 className="text-[14px] mt-2 leading-[22px] w-[153px] h-[22px] font-semibold text-center mb-4">
                    AI Analysis in Progress</h1>
              </div>
            )}
          </div>
        </div>

            <div className="flex w-[940px] h-[455px] gap-5 ml-6 mb-10">
        <div className="w-[300px] h-[455px] bg-[#DDD6FE] rounded-[20px] mt-[100px] shadow-md p-6 flex flex-col justify-between">
      {/* Myth Title Section */}
      <div className="text-center">
        {/* Three Dots */}
        <div className="flex space-x-1 self-center items-center w-full justify-center my-4">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
          <span className="text-[16px] text-black mx-2">Myth</span>
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
        </div>
        <h2 className="text-[24px] leading-[30px] w-[242px] h-[60px] font-semibold text-gray-800">
        Oily Skin Doesn’t Need Moisturizer
        </h2>
      </div>

      {/* Did You Know Section */}
      <div>
        <h3 className="text-center font-bold text-[16px] leading-6 text-gray-800 mb-2 my-5">
          Did you know?
        </h3>
        <p className="text-[16px] leading-6 text-center w-[242px] h-[168px] text-gray-700">
        Skipping moisturizer can actually make oily skin worse! When your skin is dehydrated, 
        it produces even more oil to compensate. Choose a light, 
            oil-free moisturizer to maintain balance.
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-end items-center mt-4">
        {/* Right Arrow */}
        <img src={rightArrow} alt={rightArrow} className="w-6 h-6 rotate-90" />
      </div>
    </div>
    <div className="w-[300px] h-[455px] bg-[#DDD6FE] rounded-[20px] mt-[100px] shadow-md p-6 flex flex-col justify-between">
      {/* Myth Title Section */}
      <div className="text-center">
        {/* Three Dots */}
        <div className="flex space-x-1 self-center items-center w-full justify-center my-4">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
          <span className="text-[16px] text-black mx-2">Myth</span>
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
        </div>
        <h2 className="text-[24px] leading-[30px] w-[242px] h-[60px] font-semibold text-gray-800">
        Expensive Products Work Better
        </h2>
      </div>

      {/* Did You Know Section */}
      <div>
        <h3 className="text-center font-bold text-[16px] leading-6 text-gray-800 mb-2 my-5">
          Did you know?
        </h3>
        <p className="text-[16px] leading-6 text-center w-[242px] h-[168px] text-gray-700">
        Price doesn’t always reflect effectiveness. Many affordable products contain the same active ingredients 
        found in high-end skincare. It’s all about finding the right ingredients for your skin type and concerns.
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-end items-center mt-4">
        {/* Right Arrow */}
        <img src={rightArrow} alt={rightArrow} className="w-6 h-6 rotate-90" />
      </div>
    </div>
    <div className="w-[300px] h-[455px] bg-[#DDD6FE] rounded-[20px] mt-[100px] shadow-md p-6 flex flex-col justify-between">
      {/* Myth Title Section */}
      <div className="text-center">
        {/* Three Dots */}
        <div className="flex space-x-1 self-center items-center w-full justify-center my-4">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
          <span className="text-[16px] text-black mx-2">Myth</span>
          <div className="w-[25px] h-0.5 bg-gray-400"></div>
        </div>
        <h2 className="text-[24px] leading-[30px] w-[242px] h-[90px] font-semibold text-gray-800">
        You Don’t Need Sunscreen on Cloudy Days
        </h2>
      </div>

      {/* Did You Know Section */}
      <div>
        <h3 className="text-center font-bold text-[16px] leading-6 text-gray-800 mb-2 my-5">
          Did you know?
        </h3>
        <p className="text-[16px] leading-6 text-center w-[242px] h-[168px] text-gray-700">
        Even on cloudy days, 80% of UV rays penetrate the clouds and can damage your skin.
         Wearing sunscreen daily, rain or shine, 
         helps prevent premature aging and reduces the risk of skin cancer.
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-end items-center mt-4">
        {/* Right Arrow */}
        <img src={rightArrow} alt={rightArrow} className="w-6 h-6 rotate-90" />
      </div>
    </div>
    </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
