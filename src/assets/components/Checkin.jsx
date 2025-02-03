import React from 'react';
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import { useNavigate } from "react-router-dom";
import calendarIcon from "./Project Glow - Design Assets/SVG Selected/Daily tracker.svg";


const Checkin = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/home"); 
  };
  return (
    <div className="w-[390px] mx-auto h-[800px] bg-orange-50 mt-3 pt-1">

      {/* Close button container */}
            <img
                        src={closeIcon}
                        className="text-gray-700 w-[24px] h-[24px] cursor-pointer flex place-self-end mr-7 mt-5"
                        alt="Close Icon"
                        onClick={handleNextClick}/>

      {/* Calendar Icon */}
      <div className="flex justify-center mb-4">
        <img 
          src={calendarIcon} 
          alt="Calendar" 
          className="w-[100px] h-[100px]"
        />
      </div>

      {/* Title */}
      <h2 className="text-[28px] font-semibold leading-[40px]  text-center mb-2">
        Get to know how routine affects your skin health
      </h2>

      {/* Subtitle */}
      <p className=" text-gray-600 mb-6 text-[14px] m-auto w-[261px] h-[44px] text-center">
        Take less then 2 mins but the outcome is insightful in a long run
      </p>

      {/* Advance Tracker Card */}
      <div className="bg-white rounded-[10px] border border-[#BDBDBD] px-[20px] py-[16px] mb-4 shadow-sm w-[330px] h-[193px] m-auto">
        <h3 className="font-bold text-lg mb-1">Advance Daily Tracker</h3>
        <ul className="list-disc ml-5 mb-4 space-y-0">
          <li>Check-in twice a day</li>
          <li>Take photo for record</li>
          <li>In-depth understanding of skin health</li>
        </ul>
        <button className="bg-[#303030] text-white px-[16px] py-[10px] w-[137px] h-[44px] rounded-lg hover:bg-gray-800 transition-colors">
          Upgrade Now
        </button>
      </div>

      {/* Basic Tracker Card */}
      <div className="bg-white rounded-[10px] p-4 shadow-sm w-[330px] h-[193px] m-auto border border-[#BDBDBD]">
        <h3 className="font-bold text-lg mb-3">Basic Daily Tracker</h3>
        <ul className="list-disc ml-5 mb-4 space-y-1">
          <li>Check-in once a day</li>
          <li>General understanding of skin health</li>
        </ul>
        <button className="border border-[#303030] px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Continue
        </button>
      </div>
    </div>

  );
};

export default Checkin; 