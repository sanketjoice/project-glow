import React from "react";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import MyAccountIcon from "./Project Glow - Design Assets/Icons/SVG/user (3).svg";
import ComprehensiveLevelIcon from "./Project Glow - Design Assets/SVG Selected/cimprehensive-level.svg";
import SubscriptionIcon from "./Project Glow - Design Assets/SVG Selected/subscription.svg";
import RewardsIcon from "./Project Glow - Design Assets/SVG Selected/rewards.svg";
import InviteFriendIcon from "./Project Glow - Design Assets/SVG Selected/invite friends.svg";
import SupportIcon from "./Project Glow - Design Assets/SVG Selected/support.svg";
import { useNavigate } from "react-router-dom";

export default function UserProfileHome() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const accountSections = [
    {
      icon: <img src={MyAccountIcon} alt="My Account" />,
      label: "My Account",
      path: "/project-glow/myaccount",
    },
    {
      icon: <img src={ComprehensiveLevelIcon} alt="Comprehensive Level" />,
      label: "Comprehensive level",
      extra: "Currently:",
      value: "60%",
      path: "/project-glow/comprehensivelevel",
    },
    {
      icon: <img src={SubscriptionIcon} alt="Subscription" />,
      label: "Subscription",
      path: "/project-glow/subscription",
    },
    {
      icon: <img src={RewardsIcon} alt="Rewards" />,
      label: "Rewards",
    },
    {
      icon: <img src={InviteFriendIcon} alt="Invite a Friend" />,
      label: "Invite a Friend",
    },
    {
      icon: <img src={SupportIcon} alt="Support" />,
      label: "Support",
    },
  ];

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100">
      <div className="w-[390px] h-[800px] overflow-auto rounded-xl shadow-lg bg-[#F4F7F2] px-4 py-2">
        {/* Header */}
        <div className="flex items-center justify-between mt-1 py-[16px]">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
            onClick={() => handleNavigation("/project-glow/home")}
          />
          <p className="text-black text-[16px] ml-[-20px]">My Profile</p>
          <div></div>
        </div>

        {/* Profile Icon */}
        <div className="mt-7 justify-center m-auto flex flex-col text-center">
          <div className="bg-[#303030] h-[80px] w-[80px] rounded-[200px] text-white text-[32px] text-center justify-center items-center m-auto flex font-semibold">
            JC
          </div>
          <h6 className="text-[24px] mt-1">Jane Chan</h6>
        </div>

        {/* Account Section */}
        <div className="w-[330px] bg-[#F4F7F2] rounded-xl mt-[50px] pl-4">
          {accountSections.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-t border-gray-400 py-3 last:border-b-0 cursor-pointer hover:bg-gray-200 rounded-md px-2"
              onClick={() => handleNavigation(item.path)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-[30px] h-[30px] flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-medium truncate">
                  {item.label}
                  {item.extra && (
                    <span className="text-gray-500 ml-1 text-xs">
                      {item.extra} <strong>{item.value}</strong>
                    </span>
                  )}
                </span>
              </div>
              <img
                src={leftArrow}
                alt="Right Arrow"
                className="w-4 rotate-180 h-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
