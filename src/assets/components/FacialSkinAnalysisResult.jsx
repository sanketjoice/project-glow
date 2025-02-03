import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/SVG Selected/share.png";
import info from "./Project Glow - Design Assets/SVG Selected/Info circle.png";
import darkSpots from "./Project Glow - Design Assets/SVG Selected/Group 212.png";
import wrinkles from "./Project Glow - Design Assets/SVG Selected/skin-texture.svg";
import wrinkless from "./Project Glow - Design Assets/Icons/SVG/Group.png";
import firmness from "./Project Glow - Design Assets/SVG Selected/skin-firmness.svg";
import redness from "./Project Glow - Design Assets/SVG Selected/Group 204.png";
import hydration from "./Project Glow - Design Assets/SVG Selected/skin-hydration.svg";
import pore from "./Project Glow - Design Assets/SVG Selected/skin-pore.svg";
import uv from "./Project Glow - Design Assets/SVG Selected/skin-UV.png";
import darkcircles from "./Project Glow - Design Assets/SVG Selected/skin-dark circles.png";
import acne from "./Project Glow - Design Assets/SVG Selected/facial.svg";
import chevron from "./Project Glow - Design Assets/Icons/chevron-left.png";
import gem from "./Project Glow - Design Assets/Icons/jade.png";
import request from "./Project Glow - Design Assets/SVG Selected/request.svg";



export default function FacialSkinAnalysisResult() {
  const navigate = useNavigate("/project-glow/info");
  const handleInfoClick = () => {
    navigate("/project-glow/info");
  };
  const handleWrinkleIcon = () => {
    navigate("/project-glow/wrinkles");

  };
  const handleLeftClick = () => {
    navigate("/project-glow/home");
  };

  const formatDate = (date) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month} ${year}`;
  };

  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[800px] overflow-auto rounded-xl shadow-lg bg-[#F4F7F2] p-4">
        <div className="flex items-center justify-between mt-3 py-[16px]">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
            onClick={handleLeftClick}
          />
          <p className="text-black text-[16px]">{formattedDate}</p>
          <img
            src={closeIcon}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
          />
        </div>

        {/* Title */}
        <h1 className="text-[18px] font-semibold mb-4">Facial Skin Analysis Result</h1>

        <p className="text-[14px] font-semibold text-[#303030] mb-2">Overall Skin Score</p>
        <div className="flex gap-6">
          <div className="flex flex-col items-center w-1/2">
            <div className="relative">
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#E5E5E5"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#22AD5C"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="282"
                  strokeDashoffset="56"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-xl font-bold">
                <span>78%</span>
              </div>
            </div>
            <div className="flex justify-center self-center items-center ml-9">
              <p className="text-[14px] ml-[-60px] mt-5 text-[#303030]">How to calculate?</p>
              <img src={info} alt="infoLogo" className="w-[24px] h-[24px] ml-2 mt-5" />
            </div>
            {/* Additional Info */}
            <div className="mt-6 ml-[-70px]">
              <div className="mb-4">
                <p className="text-sm text-[#303030]">Skin Type</p>
                <p className="text-[16px] font-semibold text-[#303030]">Combination</p>
              </div>
              <div>
                <p className="text-sm text-[#303030]">Sensitivity</p>
                <p className="font-medium text-[16px] text-[#303030]">Sensitive</p>
              </div>
            </div>
          </div>

          <div className="border border-[#879596] w-0 h-[333px] mt-[-25px]"></div>
          {/* Skin Age */}
          <div className="w-1/2">
            <p className="text-[14px] text-[#303030] mt-[-30px] font-semibold">Skin Age</p>
            <div className="flex items-center mt-1">
              <span className="text-[30px] font-bold mr-2">25</span>
              <div className="flex flex-col gap-2">
                <div className="w-[63px] bg-gray-200 h-2 rounded-full overflow-hidden mr-2">
                  <div className="bg-[#22AD5C] h-2" style={{ width: "100%" }}></div>
                </div>
                <div className="w-[93px] bg-[#BDBDBD] h-2 rounded-full overflow-hidden mr-2">
                  <div className="h-2" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
            <span>years old</span>
            <div className="flex justify-center items-center bg-gray-100">
              <div
                className="relative"
                style={{
                  width: "130px",
                  height: "48px",
                  position: "relative",
                }}
              >
                <div className="flex justify-center mt-[40px] ml-[-23px] items-center bg-[#F4F7F2]">
                  <div
                    className="relative"
                    style={{
                      width: "130px",
                      height: "48px",
                    }}
                  >
                    {/* Bell Curve with Gradient */}
                    <svg
                      width="130"
                      height="48"
                      viewBox="0 0 130 48"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <defs>
                        <linearGradient id="bellCurveGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#FFEA81" />
                          <stop offset="100%" stopColor="#F4F7F2" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2 46 C30 -5, 100 -5, 128 46 Z"
                        fill="url(#bellCurveGradient)"
                        stroke="#879596"
                        strokeWidth="1"
                      />
                    </svg>

                    {/* Green Dot */}
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#22AD5C",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "05px", // Adjust for alignment
                        left: "73px", // Position on curve
                      }}
                    ></div>

                    {/* Speech Bubble */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-20px", // Adjust for alignment above the dot
                        left: "90px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #879596",
                        borderRadius: "8px",
                        padding: "4px 8px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      72%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#303030] h-[60px] w-[148px] mb-[40px] text-[14px] mt-12">You're doing better than 72% of users in your age group</p>
            <p className="text-[14px] text-[#303030] w-[140px] h-[22px]">Comprehensive level</p>
            <div className="flex items-center">
              <div className="w-[100px] bg-gray-200 h-2 rounded-full overflow-hidden mr-2">
                <div className="bg-[#8646F4] h-2" style={{ width: "60%" }}></div>
              </div>
              <span className="text-[16px] text-[#303030] font-semibold">60%</span>
            </div>
          </div>
        </div>

        <div className="mt-6" onClick={handleInfoClick}>
          <p className="text-[#303030] text-sm text-center hover:cursor-pointer underline">How do we analyze your skin?</p>
        </div>
        <div className="border border-[#9E9E9E] w-[350px] mt-8 h-0"></div>
        <div className="w-[350px] h-[156px] mt-4">
            <p className="text-black text-[18px] mb-3 leading-[26px] font-semibold">Summary</p>
            <p className="text-[14px] leading-[22px] w-[350px] h-[88px]">The skin exhibits a mix of issues, such as mild acne, hyperpigmentation, and fine lines. 
            It appears to be a combination skin type, with some areas showing oiliness while others seem normal to dry.</p>
        </div>
        {/* 10 Issues Identified Section */}
        <div>
          <h2 className="text-[18px] font-semibold mb-4">10 Issues Identified</h2>
          <div className="flex items-center align-middle gap-3">
            <div className="bg-[#22AD5C] h-[8px] w-[20px] rounded-[10px]"></div>
            <p className="text-[12px] text-[#303030]">Minimal issue</p>
          </div>
          <div className="flex items-center align-middle gap-3">
            <div className="bg-[#FBBF24] h-[8px] w-[20px] rounded-[10px]"></div>
            <p className="text-[12px] text-[#303030]">Mild issue, requires attention</p>
          </div>
          <div className="flex items-center align-middle gap-3 mb-7">
            <div className="bg-[#F56060] h-[8px] w-[20px] rounded-[10px]"></div>
            <p className="text-[12px] text-[#303030]">Severe issue, needs immediate care</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
  {[
    { name: "Wrinkles", color: "green", image: wrinkless },
    { name: "Dark spot", color: "green", image: darkSpots },
    { name: "Redness", color: "yellow", image: redness },
    { name: "Acne", color: "yellow", image: acne },
    { name: "Texture", color: "green", image: wrinkles },
    { name: "Hydration", color: "red", image: hydration },
    { name: "Pore Size", color: "green", image: pore },
    { name: "Dark Circles", color: "yellow", image: darkcircles },
    { name: "Sun Damage", color: "yellow", image: uv },
    { name: "Firmness", color: "red", image: firmness }
  ].map((issue, index) => (
    <div key={index} className="flex hover:cursor-pointer flex-col items-center" onClick={handleWrinkleIcon}>
      <div className="relative">
        <svg width="80" height="80">
          <circle cx="40" cy="40" r="35" stroke="#E5E5E5" strokeWidth="6" fill="none" />
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke={issue.color === "green" ? "#22AD5C" : issue.color === "yellow" ? "#FBC02D" : "#E53935"}
            strokeWidth="6"
            fill="none"
            strokeDasharray="220"
            strokeDashoffset="50"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={issue.image} alt={issue.name} className="w-10 h-7" />
        </div>
      </div>
      <p className=" flex items-center text-sm mt-1">{issue.name} <spann><img src={chevron} alt="rightArrow" className=" rotate-180 w-[16px] mt-[2px]" /></spann></p>
    </div>
  ))}

          </div>
            <div className="border border-[#9E9E9E] w-[350px] mt-8 h-0"></div>
            <p className="flex text-center justify-center text-[16px] leading-[24px] text-[#303030] font-semibold mt-5">Earn <img src={gem} alt="jade" className="w-[24px]" /> x10 by share result with friends</p>
            <div className="flex justify-center"> 
            <button className="text-[16px] leading-6 flex text-[#303030] w-[249px] h-[48px] border border-[#303030] py-[12px]
            px-[17px] gap-[8px] rounded-[50px] mt-3"><img src={closeIcon} alt="" />Share result with friends</button>
            </div>
            <div className="w-[350px] h-[162px] py-[24px] px-[33px] gap-[18px] bg-[#C2F3D6] rounded-[10px] my-9">
              <div className="w-[310px] h-[52px]">
                <div className="flex gap-3 items-center">
                <img src={request} alt="requestlogo" className="w-[40px] h-[40px]" />
                <p className="text-[18px] leading-[26px] w-[258px]  text-[#303030] font-semibold">Did you know your skincare products are good for you?</p>
                </div>
                <button className="text-[16px] rounded-md mt-5 leading-6 bg-[#303030] w-[274px] h-[44px] text-white">Check with Product Scanner</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}