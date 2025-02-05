import React from "react";
import info from "./Project Glow - Design Assets/SVG Selected/Info circle.png";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import photo from "./Project Glow - Design Assets/SVG Selected/face.png";
import wrinkless from "./Project Glow - Design Assets/Icons/SVG/Group.png";
import triangle from "./Project Glow - Design Assets/SVG Selected/OIP.jpeg";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import productOne from "./Project Glow - Design Assets/SVG Selected/product img.png";
import productTwo from "./Project Glow - Design Assets/SVG Selected/product img (1).png";

export default function WrinklesSection() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/analysisresult");
  };
  const handleClick = () => {
    navigate("/project-glow/retinoids");
  };
  const handleClickVitamin = () => {
    navigate("/project-glow/vitaminc");
  };
  const handleTextClick = () => {
    navigate("/project-glow/text");
  };
  return (
    <div className="flex justify-center items-center h-auto bg-gray-100">
      <div className="w-[390px] h-[800px] overflow-auto rounded-xl shadow-lg bg-[#F4F7F2] p-4">
        <div className="flex items-center justify-between mt-3 py-[16px]">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
            onClick={handleNextClick}
          />
          <p className="text-black text-[16px] ml-[-10px]">
            All Analysis Reports
          </p>
          <div></div>
        </div>
        <div className="flex justify-between mt-5 px-2">
          <p className="text-[18px] font-semibold">Wrinkles</p>
          <img src={info} alt="infoIcon" className="w-[24px]" />
        </div>
        <div className="flex mt-8 justify-between pl-2">
          <div>
            <p className="text-[14px] text-[#303030] mb-1">Issue level</p>
            <p className="font-semibold text-[14px] text-[#303030]">
              Minimal issue
            </p>
            <div className="relative mt-4 ml-8">
              <svg width="100" height="100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#E5E5E5"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#22AD5C"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="282"
                  strokeDashoffset="56"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-xl font-bold">
                <span>
                  <img src={wrinkless} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="h-[330px] w-[350px] rounded-[10px] bg-[#D8ECE0] mt-10 pl-5 pr-1 pt-5">
          <h2 className="text-xl font-semibold mb-4">
            Top 3 Key ingredients For You
          </h2>
          <div className="border border-black mb-2 w-[314px]"></div>
          <div className="space-y-4">
            {/* Ingredient items */}
            <div
              className="border-b border-gray-300 hover:cursor-pointer"
              onClick={handleClick}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium">Retinoids</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-black ml-5 ">
                Boost collagen and cell turnover.
              </p>
            </div>
            <div className="border border-black w-[314px]"></div>

            <div
              className="border-b border-gray-300 hover:cursor-pointer"
              onClick={handleClickVitamin}
            >
              <div className="flex items-center justify-between mb-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium">Vitamin C</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-black ml-5 mb-0">
                Antioxidant protection and collagen stimulation.
              </p>
            </div>
            <div className="border border-black w-[314px]"></div>

            <div className="border-b border-gray-300">
              <div className="flex items-center justify-between mb-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="font-medium">Hyaluronic Acid</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-black ml-5 mb-2">
                Hydrates and plumps the skin.
              </p>
              <div className="border border-black  w-[314px]"></div>
            </div>
          </div>
          <div
            className="bg-[#EDD8BA] flex flex-col mt-8 ml-[-16px] w-[350px] h-[146px] pl-5 pr-1 pt-5 hover:cursor-pointer rounded-[10px]"
            onClick={handleTextClick}
          >
            <div className="w-[310px] h-[106px]">
              <p className="text-[16px] mb-2 font-bold">Skincare Insights</p>
              <p classname="text-[14px] leading-[22px] w-[280px] h-[70px]">
                As skin ages, it loses its flexibility and can no longer spring
                back. These grooves then become features of the face, which...
              </p>
            </div>
            <div className="bg-[#E6EEF0] pb-[100px] mb-[100px] pl-5 pr-1 pt-5 w-[350px] ml-[-20px] h-[490px] mt-[55px] rounded-[10px]">
              <p className="text-[16px] font-bold">Product For You</p>
              <p className="text-[14px] mt-2">
                We found 2 products suitable for you.
              </p>
              <div className="w-[310px] h-[180px] mt-3 border-b border-[#CED4DA] py-[20px] flex">
                <div>
                  <img
                    src={productOne}
                    alt="productLogo"
                    className="w-[100px] h-[100px] mb-2"
                  />
                  <div
                    className="w-[100px] h-[28px] bg-[#22AD5C] rounded-lg px-[30px] py-[4px] text-white
                      text-[14px] font-semibold"
                  >
                    9.5/10
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-[14px] mb-2">ALPYN</p>
                  <p className="text-[16px] font-semibold">
                    Super Peptide & Ghostberry Barrier Repair Cream
                  </p>
                  <p className="text-[14px] text-[#1A8245] mt-3 font-semibold">
                    Suitable for you!
                  </p>
                </div>
              </div>
              <div className="w-[310px] h-[180px] mt-3  border-b border-[#CED4DA] py-[20px] flex">
                <div>
                  <img
                    src={productTwo}
                    alt="productLogo"
                    className="w-[100px] h-[100px] mb-2"
                  />
                  <div
                    className="w-[100px] h-[28px] bg-[#22AD5C] rounded-lg px-[30px] py-[4px] text-white
                      text-[14px] font-semibold mt-[35px]"
                  >
                    9.5/10
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-[14px] mb-2">Dr. Dennis Gross Skincare</p>
                  <p className="text-[16px] font-semibold">
                    DermInfusions™ Blur + Repair Cream with Hyaluronic Acid and
                    Peptides
                  </p>
                  <p className="text-[14px] text-[#1A8245] mt-3 font-semibold">
                    Suitable for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
