import React, { useState } from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import calendar from "./Project Glow - Design Assets/Icons/SVG/Woman (1).svg";
import logoOne from "./Project Glow - Design Assets/Icons/SVG/love (1).svg";
import logoTwo from "./Project Glow - Design Assets/Icons/SVG/account.svg";
import calendaricon from "./Project Glow - Design Assets/Icons/SVG/calender-alt-1.png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateEstimation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/allset");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <img
            src={leftArrow}
            className="w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
          />
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <img
            src={closeIcon}
            className="w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
          />
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className={`w-[24px] h-[24px] text-white rounded-full flex items-center justify-center border ${
                step <= 3 ? "bg-black" : "bg-gray-300"
              }`}>
              {step}
            </div>
          ))}
        </div>

        {/* Question Section */}
        <div className="flex flex-col items-center px-6 text-center mt-4">
          <div className="flex items-center gap-2">
                      <div className="bg-[#F0F7EF] mt-2 rounded-full p-4">
                        <img
                          src={calendar}
                          alt="calendar"
                          className="w-[70px] h-[70px]"
                        />
                      </div>
                      <h1 className="mt-4 w-[240px] text-[24px] leading-[30px] text-start font-semibold text-[#303030]">
                      When is the estimated start date of your next period?
                      </h1>
                    </div>
          {/* Date Picker */}
          <div className="relative w-[330px] h-[48px] mt-6 gap-[10px] border border-gray-300 bg-white">
          <div className="absolute inset-y-0  bg-white left-3 h-[48px] w-[100px] ml-3 flex items-center pointer-events-none">
            <img src={calendaricon} alt="Calendar Icon" className="w-[15px] h-[15px] bg-white" />
          </div>
          
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd MMM yyyy" // Format as "22 Dec 2024"
            placeholderText="Pick a date"
            className="w-full h-[48px]  rounded-[6px] 
                        pr-[16px] py-[12px] text-gray-700 focus:outline-none 
                        bg-white placeholder-gray-400"
            popperPlacement="bottom-start"
          />
        </div>

          {/* Why We Ask Section */}
          <div className="bg-[#F0F7EF] mt-[100px] p-4 border border-[#9CA3AF] rounded-[10px] w-[330px] text-left">
            <h2 className="text-[14px] font-semibold mb-2 text-[#303030]">
              Why we ask
            </h2>
            <div className="flex items-start gap-2 mb-4">
              <img src={logoOne} alt="Icon 1" className="w-[36px] h-[36px]" />
              <p className="text-[14px] text-[#111928]">
                Hormonal changes during your cycle can affect your skin’s oil
                production, sensitivity, and hydration levels. Sharing this
                helps us tailor insights to your skin’s unique needs.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={logoTwo} alt="Icon 2" className="w-[36px] h-[36px]" />
              <p className="text-[14px] text-[#111928]">
                This information is optional, kept private, and used only to
                improve your skin analysis.
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-10 flex justify-between w-full px-6">
            <button className="text-[16px] text-gray-500 underline" onClick={handleNextClick}
            >Skip</button>
            <button
              className={`w-[188px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] ${
                selectedDate
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleNextClick}
              disabled={!selectedDate}>
              Earn 1 x <img src={gem} alt="Gem Icon" className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
