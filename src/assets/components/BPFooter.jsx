import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import facebookLogo from "./Project Glow - Design Assets/Icons/icons8-facebook-logo-64.png";
import instaLogo from "./Project Glow - Design Assets/Icons/icons8-instagram-logo-30.png";
import xLogo from "./Project Glow - Design Assets/Icons/icons8-x-logo-50.png";
import tiktokLogo from "./Project Glow - Design Assets/Icons/icons8-tiktok-50.png";

export default function BPFooter() {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img src={logo} alt="logo" className="w-40 md:w-52 mb-4 md:mb-0" />
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">
              Project Glow Skin for Business
            </li>
            <li className="hover:text-gray-800 cursor-pointer">Affiliates</li>
            <li className="hover:text-gray-800 cursor-pointer">
              Terms & Policies
            </li>
            <li className="hover:text-gray-800 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            ©2024 Project Glow Skin Co. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-3 mt-4 md:mt-0">
            <img
              src={facebookLogo}
              alt="Facebook"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={instaLogo}
              alt="Instagram"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={xLogo}
              alt="Twitter"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={tiktokLogo}
              alt="TikTok"
              className="w-8 h-8 hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
