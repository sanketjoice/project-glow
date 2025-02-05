import React from "react";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import { useNavigate } from "react-router-dom";

const Retinoids = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/wrinkles");
  };
  return (
    <div className="w-[390px] mx-auto h-[844px] bg-[#D8ECE0] mt-3 pt-1">
      {/* Close button container */}
      <img
        src={closeIcon}
        className="text-gray-700 w-[24px] h-[24px] cursor-pointer flex place-self-end mr-7 mt-5"
        alt="Close Icon"
        onClick={handleNextClick}
      />

      {/* Content container with specific mobile padding */}
      <div className="px-6 py-2 mt-7">
        <h1 className="text-[24px] w-[337px] font-semibold mb-2">Retinoids</h1>
        <div className="">
          <p className="text-[14px] mb-4">
            Vitamin C is a potent antioxidant that protects the skin and
            promotes collagen production.
          </p>
          <p className="text-[16px] font-bold">Function</p>
          <p className="text-[16px] mb-4">
            Accelerate skin renewal, boost collagen production, and reduce fine
            lines and wrinkles. Retinoids are derivatives of Vitamin A and are
            considered one of the most effective anti-aging ingredients.
          </p>
          <p className="text-[16px] font-bold">Usage</p>
          <p className="text-[16px] mb-4">
            Start with lower concentrations to assess skin tolerance and
            gradually increase. Use at night and apply sunscreen during the day
            as retinoids can increase sun sensitivity.
          </p>
          <p className="text-[16px] font-bold">Note</p>
          <p className="text-[16px] mb-4">
            Retinoids can be strong, so it’s best to start with a lower
            concentration to minimize irritation and gradually build tolerance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Retinoids;
