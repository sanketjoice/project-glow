import React from "react";
import gem from "./Project Glow - Design Assets/Icons/jade.png";

const Congratulations = () => {
  return (
    <div className="flex flex-col items-center  justify-center  bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-[390px] h-[713px] text-center  self-center">
        <h1 className="text-[28px] leading-[40px] font-semibold text-black  text-center mt-[100px]">Congratulations!</h1>
        <p className="mt-3 text-[#000000] text-[18px] leading-7">You’ve just earned</p>
        <div className="flex items-center justify-center mt-4 ml-3">
          <img
            src={gem}
            alt="Diamond Icon"
            className="w-[96px] h-[96px]"
          />
          <span className="text-[28px] leading-[30px] mt-[50px] text-black ml-[-30px]">x 10</span>
        </div>
        <p className="mt-5 text-black text-[24px] leading-[30px] w-[329px] h-[60px]">
        Welcome to your Project Glow Skin journey.
        </p>
        <button
          className="mt-[170px] bg-black text-white text-sm w-[126px] h-[50px] py-[13px] px-[28px] font-medium rounded-[6px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
 