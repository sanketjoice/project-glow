import React, { useState } from "react";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import { useNavigate } from "react-router-dom";
import lock from "./Project Glow - Design Assets/SVG Selected/lock-alt.png";
import lockRed from "./Project Glow - Design Assets/SVG Selected/lock-alt-3.png";
import tickLogo from "./Project Glow - Design Assets/SVG Selected/In-use.png";
import Exclaimation from "./Project Glow - Design Assets/SVG Selected/exclamation (1) 1.png";

export default function ComprehensiveLevel() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/project-glow/myaccount");
  };
  const handleNavigation = (path) => {
    navigate(path);
  };
  const hanldNextClick = () => {
    navigate("/project-glow/subscription");
  };

  const accountSections = [
    {
      icon: <img src={lockRed} alt="My Account" />,
      label: "Health Reports",
      path: "/project-glow/myaccount",
    },
    {
      icon: <img src={tickLogo} alt="Comprehensive Level" />,
      label: "Skin Type",
      extra: "Currently:",
      value: "60%",
      path: "/project-glow/comprehensivelevel",
    },
    {
      icon: <img src={tickLogo} alt="Subscription" />,
      label: "Skin Goals",
      path: "/project-glow/subscription",
    },
    {
      icon: <img src={tickLogo} alt="Rewards" />,
      label: "Allergic to skincare ingredients",
      path: "/project-glow/rewards",
    },
    {
      icon: <img src={tickLogo} alt="Invite a Friend" />,
      label: "Skin conditions or sensitivities",
      path: "/project-glow/invite",
    },
    {
      icon: <img src={tickLogo} alt="Support" />,
      label: "Specific ingredient preferences",
      path: "/project-glow/support",
    },
    {
      icon: <img src={Exclaimation} alt="Support" />,
      label: "Lifestyle",
      path: "/project-glow/support",
    },
  ];
  return (
    <div className="flex justify-center items-center h-auto bg-gray-100">
      <div className="w-[390px] h-[800px] overflow-auto rounded-xl  shadow-lg bg-[#F4F7F2] px-4 py-2">
        {/* Header */}
        <div className="flex items-center justify-between mt-1 py-[16px]">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
            onClick={handleBackClick}
          />
          <p className="text-black text-[16px] ml-[-20px]">
            Comprehensive level
          </p>
          <div></div>
        </div>
        <p className="text-[18px] font-semibold text-center mt-5">
          Current comprehensive level
        </p>
        <p className="text-[36px] font-bold mt-2 text-center">60%</p>
        <p className="text-[14px] text-center w-[328px] ml-2 h-[66px] mt-1">
          Upload health reports to get more personalized analysis for your skin
          health and product recommendation.
        </p>

        <button
          className="bg-[#6B7280] text-white rounded-md ml-3 mt-3 flex text-[16px] w-[330px] h-[56px] py-[16px] px-[29px] gap-[10px]"
          onClick={hanldNextClick}
        >
          <img src={lock} alt="lockIcon" className="w-[20px] mt-[2px]" />
          Unlock to upload health reports
        </button>
        {/* Account Section */}
        <div className="w-[330px] bg-[#F4F7F2] rounded-xl mt-[30px] pl-4">
          {accountSections.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-t border-gray-400 py-3 last:border-b-0 cursor-pointer hover:bg-gray-200 rounded-md"
              onClick={() => handleNavigation(item.path)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-[20px] h-[20px] flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-[14px] font-medium truncate">
                  {item.label}
                </span>
              </div>
              <img
                src={leftArrow}
                alt="Right Arrow"
                className="w-[18px] rotate-180 h-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
