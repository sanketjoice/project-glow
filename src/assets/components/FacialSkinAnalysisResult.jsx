import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/SVG Selected/share.png";
import info from "./Project Glow - Design Assets/SVG Selected/Info circle.png";
import darkSpots from "./Project Glow - Design Assets/SVG Selected/Group 212.png";
export default function FacialSkinAnalysisResult() {
  const navigate = useNavigate();

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

        <div className="mt-6">
          <p className="text-[#303030] text-sm text-center underline">How do we analyze your skin?</p>
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
          <div className="grid grid-cols-2 gap-4">
            {/* Issue 1 */}
            <div className="flex items-center">
              <div className="relative w-16 h-16">
                <svg width="64" height="64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#22AD5C"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="35"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm font-bold">
                  <span></span>
                </div>
              </div>
              <p className="ml-4 text-[#303030]">Wrinkles</p>
            </div>
            {/* Issue 2 */}
            <div className="flex items-center">
              <div className="relative w-[104px] h-[104px]">
                <svg width="64" height="64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#E5E5E5"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#22AD5C"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="176"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm font-bold">
                  <span><img src={darkSpots} alt="" className="w-[47px] h-[40px]" /></span>
                </div>
              </div>
              <p className="ml-4 text-[#303030]">Dark Spots</p>
            </div>
            {/* Add more issues as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}