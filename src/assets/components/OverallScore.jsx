import React from "react";
import FireworksLogo from "./Project Glow - Design Assets/SVG Selected/fireworks.svg";
import { useNavigate } from "react-router-dom";

export default function OverallScore() {
  const navigate = useNavigate();
  const progress = 78; // Score progress

  // Function to format date
  const formatDate = (date) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month} ${year}`;
  };

  const today = new Date(); // Current date
  const formattedDate = formatDate(today);

  const radius = 100; // Circle radius
  const strokeWidth = 20; // Thickness of circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Navigate to the next page
  const handleNextClick = () => {
    navigate("/project-glow/confetti");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center self-center justify-between px-4 py-4">
          <p>{formattedDate}</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center mt-6">
          <h6 className="text-[24px] leading-[30px] font-semibold">Overall Skin Score</h6>
          <div className="relative flex flex-col items-center justify-center mt-14">
            {/* SVG Circle */}
            <svg width="232" height="232">
              {/* Background Circle */}
              <circle
                cx="116"
                cy="116"
                r={radius}
                stroke="#E5E5E5"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="116"
                cy="116"
                r={radius}
                stroke="#22AD5C"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[72px] font-bold text-[#333]">{progress}</p>
              <p className="text-[14px] text-[#666]">Out of 100</p>
            </div>
          </div>

          {/* Fireworks Logo */}
          <img src={FireworksLogo} alt="Fireworks" className="mt-[-190px] absolute w-[132px] h-[132px]" />

          {/* Additional Text */}
          <p className="mt-[20px] text-[16px] leading-[24px] w-[232px] h-[48px] text-center text-[#555]">
            You’re doing better than 72% of users in your age group
          </p>
        </div>

        {/* Footer Button */}
        <div className="mt-auto mb-6 flex justify-center px-6">
          <button
            className="bg-black text-white w-[196px] h-[50px] py-[13px] px-[28px] rounded-[6px] shadow-lg flex items-center justify-center text-[16px]"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}