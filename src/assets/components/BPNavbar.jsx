import React from "react";
import logo from "./Project Glow - Design Assets/Project Glow Logo/PG-SKin log-white@3x.png";
import { Link } from "react-router-dom";

export default function BPNavbar() {
  return (
    <div className="bg-[#111928] py-5 px-6 lg:px-[135px] flex justify-between items-center max-h-[90px] lg:max-w-[1440px] lg:m-auto">
      {/* Logo Section */}
      <div className="flex items-center gap-8 lg:gap-[69px]">
        <img src={logo} alt="Project Glow Logo" className="w-[150px] h-[40px] lg:w-[200px] lg:h-[50px]" />

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-10">
          <Link to="/project-glow">
            <li className="text-white list-none">For Skin Care Taker</li>
          </Link>
          <li className="text-white underline">For Business</li>
          <li className="text-white">About Project Glow</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="flex items-center">
        {/* Show only "For Skin Care Taker" on small screens */}
        <div className="lg:hidden">
          <Link to="/project-glow">
            <li className="text-white">For Skin Care Taker</li>
          </Link>
        </div>
        
        {/* Button for larger screens */}
        <button className="hidden lg:block text-white text-[14px] leading-[22px] border-[1px] py-[6px] px-[16px] h-[34px] w-[190px] rounded-full bg-transparent border-white border-solid">
          Schedule a demo today
        </button>
      </div>
    </div>
  );
}
