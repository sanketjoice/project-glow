import React from 'react';
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import { useNavigate } from "react-router-dom";


const SkinCareInsights = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/project-glow/wrinkles"); 
  };
  return (
    <div className="w-[390px] mx-auto h-[844px] bg-[#EDD8BA] mt-3 pt-1">
      {/* Close button container */}
      <img
                  src={closeIcon}
                  className="text-gray-700 w-[24px] h-[24px] cursor-pointer flex place-self-end mr-7 mt-5"
                  alt="Close Icon"
                  onClick={handleNextClick}/>

      {/* Content container with specific mobile padding */}
      <div className="px-6 py-2 mt-7">
        <h1 className="text-[24px] w-[337px] font-semibold mb-2">
        Skincare Insights
        </h1>
        <div className="">
          <p className="text-[14px] mb-4">
          As skin ages, it loses its flexibility and can no longer spring back. 
          These grooves then become features of the face, which are known as fine lines. 
          They are closer to the surface of your skin compared to wrinkles.
          </p>
        <p className="text-[16px] font-bold">What to avoid</p>
        <p  className="text-[16px] mb-4">Minimize exposure to direct sunlight and consider quitting smoking. 
            Both habits can accelerate the skin aging process, diminishing its youthful appearance.</p>
        <p className="text-[16px] font-bold">Lifestyle advice</p>
        <p  className="text-[16px] mb-4">Prioritizing sufficient sleep and staying well-hydrated 
            from inside and outside are key to maintaining vibrant, youthful skin. 
            Sleeping on your back is also recommended.</p>
          </div>
      </div>
    </div>
  );
};

export default SkinCareInsights; 