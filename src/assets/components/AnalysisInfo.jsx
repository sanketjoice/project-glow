import React from "react";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import { useNavigate } from "react-router-dom";

const AnalysisInfo = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/analysisresult");
  };
  return (
    <div className="w-[390px] mx-auto bg-[#F4F7F2] mt-3 pt-1">
      {/* Close button container */}
      <img
        src={closeIcon}
        className="text-gray-700 w-[24px] h-[24px] cursor-pointer flex place-self-end mr-7 mt-5"
        alt="Close Icon"
        onClick={handleNextClick}
      />

      {/* Content container with specific mobile padding */}
      <div className="px-6 py-2 mt-7">
        <h1 className="text-2xl w-[337px] font-semibold mb-6">
          How We Analyze Your Skin and Products
        </h1>

        <div className="space-y-6">
          <p className="text-base">
            Our technology uses advanced AI, trained on over{" "}
            <span className="font-bold">15,000 skin images</span> covering a
            wide range of concerns. It achieves{" "}
            <span className="font-bold">100% accuracy</span> for identifying
            major conditions like acne, redness, and eczema, and{" "}
            <span className="font-bold">over 90% accuracy</span> for subtle
            issues like acne scars.
          </p>

          <p className="text-base">
            Our ingredient recommendations are grounded in science, drawing from
            a database of more than{" "}
            <span className="font-bold">10,000 peer-reviewed studies</span>. To
            ensure we stay at the forefront of skincare innovation, our AI is
            continuously updated with new data and research, learning from every
            analysis to provide even more precise and personalized results over
            time.
          </p>

          <p className="text-base mb-6">
            Trust in a system that evolves with science, giving you the
            confidence to care for your skin with the most accurate insights
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisInfo;
