import React from "react";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG logo-dark.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4  bg-white">
      {/* Left section on the Nav Bar */}
      <img src={logo} alt="Logo" className="w-24 md:w-35 lg:w-48"/>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900 underline">For Skin Care Takers</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">For Business</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About Project Glow</a>
      </div>
      {/* Right section on the Nav Bar */}
      <div className="flex items-center space-x-4">
        <button className="hidden md:block px-4 py-2 font-semibold rounded-3xl 
        bg-white border-black border-2">Sign up for free</button>
        <button className="text-black px-4 py-2 rounded-lg font-bold">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
