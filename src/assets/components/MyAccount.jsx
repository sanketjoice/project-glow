import React, { useState } from "react";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "./Project Glow - Design Assets/SVG Selected/Group 324.png";

export default function MyAccount() {
  const [formData, setFormData] = useState({
    email: "janechan@gmail.com",
    firstName: "Jane",
    lastName: "Chan",
    monthOfBirth: "02",
    yearOfBirth: "2005",
    gender: "Female",
    location: "Hong Kong",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/project-glow/userprofile");
  };
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
          <p className="text-black text-[16px] ml-[-20px]">My Account</p>
          <div></div>
        </div>
        <div className="flex ml-4 mt-4 items-center">
          <img src={ProfileIcon} alt="Profile" className="w-20 h-20 " />
          <button className="mt-2 text-[12px] ml-3 text-[#303030] border border-[#303030] px-2 py-1 rounded-[8px]">
            Select photo
          </button>
        </div>

        <p className=" ml-2 text-sm mt-4">You're signed in with Google</p>

        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
          className="w-[330px] placeholder:text-[#9CA3AF] h-12 mt-2 p-3 rounded-md border border-[#DFE4EA] bg-white mb-2"
        />

        <label className="text-sm text-[#303030]">Display name</label>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-[159px] h-[48px] p-3 rounded-md border border-[#DFE4EA] bg-white mb-2"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-[159px] h-[48px] p-3 rounded-md border border-[#DFE4EA] bg-white"
          />
        </div>
        <label className="text-sm text-[#303030] mt-4">Month of birth</label>
        <label className="text-sm text-[#303030] ml-[90px] mt-4">
          Year of birth
        </label>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            name="monthOfBirth"
            value={formData.monthOfBirth}
            onChange={handleChange}
            placeholder="Month of Birth"
            className="w-[159px] h-[48px] p-3 rounded-md border border-[#DFE4EA] bg-white"
          />
          <input
            type="text"
            name="yearOfBirth"
            value={formData.yearOfBirth}
            onChange={handleChange}
            placeholder="Year of Birth"
            className="w-[159px] h-[48px] p-3 rounded-md border border-[#DFE4EA] bg-white"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-[330px] p-3 mt-1 rounded-md border border-[#DFE4EA] bg-white"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="text-sm">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-[330px] p-3 mt-1 rounded-md border border-[#DFE4EA] bg-white"
          >
            <option>Hong Kong</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
          </select>
        </div>

        <button className="w-[330px] ml-4 h-[50px] mt-6 p-3 text-[16px] border border-[#303030] rounded-md text-black">
          Sign out
        </button>

        <p className="text-center text-[14px] text-[#F23030] mt-4 cursor-pointer">
          Delete account
        </p>
      </div>
    </div>
  );
}
