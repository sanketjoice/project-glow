import React from 'react';
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import { useNavigate } from "react-router-dom";


const VitaminC = () => {
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
                  onClick={handleNextClick}/>

      {/* Content container with specific mobile padding */}
      <div className="px-6 py-2 mt-7">
        <h1 className="text-[24px] w-[337px] font-semibold mb-2">
        Vitamin C
        </h1>
        <div className="">
          <p className="text-[14px] mb-4">
          Vitamin C is a potent antioxidant that protects the skin and promotes collagen production.
          </p>
        <p className="text-[16px] font-bold">Function</p>
        <p  className="text-[16px] mb-4">Ascorbic acid neutralizes free radicals and stimulates collagen synthesis, 
            leading to improved skin elasticity and a reduction in the appearance of fine lines and wrinkles.</p>
        <p className="text-[16px] font-bold">Usage</p>
        <p  className="text-[16px] mb-4">Apply in the morning after cleansing and before 
            sunscreen to maximize its protective effects.</p>
        <p className="text-[16px] font-bold">Note</p>
        <p  className="text-[16px] mb-4">Vitamin C can be unstable and may cause mild irritation for sensitive skin; 
            select stable formulations and start with lower concentrations if needed.</p>
          </div>
      </div>
    </div>
  );
};

export default VitaminC; 