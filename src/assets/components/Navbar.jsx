import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-8 lg:px-16 bg-white shadow-md max-w-[1440px] m-auto">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 md:w-28 lg:w-40 h-auto" />
        </Link>
      </div>

      {/* Links Section */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/project-glow"
          className="text-gray-700 hover:text-gray-900 underline transition-colors duration-200"
        >
          For Skin Care Takers
        </Link>
        <Link
          to="/project-glow/business"
          className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
        >
          For Business
        </Link>
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
        >
          About Project Glow
        </a>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
        {/* "Sign up for free" button (hidden on mobile) */}
        <button className="hidden md:block px-4 py-2 font-semibold rounded-3xl bg-white border-black border-2 hover:bg-gray-100 transition-all">
          Sign up for free
        </button>

        {/* "For Business" link (only on mobile) */}
        <Link
          to="/business"
          className="block md:hidden text-gray-700 hover:text-gray-900 transition-colors duration-200"
        >
          For Business
        </Link>

        {/* "Sign in" button */}
        <button className="px-4 py-2 rounded-lg font-bold text-black hover:bg-gray-100 transition-all">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
