import React from "react";
import backgroundImage from "./pgimg/Img-06.png";

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center flex items-center justify-start max-w-[1440px] m-auto h-screen md:h-[768px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="relative max-w-[90%] md:max-w-[470px] text-left px-6 md:px-12 md:h-[272px] md:ml-20 lg:ml-60">
        <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[40px] md:leading-[48px] font-semibold text-gray-800">
          Boost Sales with <br />
          Personalized Shopping
        </h1>
        <p className="mt-4 text-[#303030] text-base md:text-lg lg:text-[18px] leading-[22px] md:leading-[26px]">
          Designed to enhance the shopping experience, our technology boosts
          customer satisfaction and sales for beauty industry leaders.
        </p>
        <button className="mt-6 text-white bg-black rounded-full hover:bg-gray-800 transition-all w-[140px] md:w-[157px] h-[44px] md:h-[50px] py-2 md:py-[13px] px-6 md:px-[28px]">
          Book a Demo
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
