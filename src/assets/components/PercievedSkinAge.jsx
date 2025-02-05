import React from "react";
import ConfettiLogo from "./Project Glow - Design Assets/SVG Selected/confetti.svg";
import { useNavigate } from "react-router-dom";

export default function PerceivedSkinAge() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/analysisresult");
  };

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month} ${year}`;
  };

  const today = new Date(); // Current date
  const formattedDate = formatDate(today);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center justify-center px-4 py-4">
          <p className="text-[16px]  text-black">{formattedDate}</p>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center mt-6 gap-4">
          <h6 className="text-[20px] font-semibold text-gray-800">
            Perceived Skin Age
          </h6>
          <img
            src={ConfettiLogo}
            alt="Confetti Logo"
            className="w-[200px] mt-5 h-[200px]"
          />
          <div className="flex flex-col items-center">
            <p className="text-[72px] leading-[58px] font-semibold text-[#303030]">
              12
            </p>
            <p className="text-[28px] leading-[58px] font-medium text-[#303030]">
              years younger
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto mb-6 flex justify-center px-6">
          <button
            className="bg-black text-white w-[196px] h-[50px] py-[13px] px-[28px] rounded-[6px]
            shadow-lg flex items-center justify-center text-[16px]"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
