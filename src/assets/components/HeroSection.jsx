import React from "react";
import heroIMG from "./pgimg/Img-01.png";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center p-8 md:p-16 bg-white max-w-[1440px] m-auto">

      {/* Right Section: Text */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          The World's Most Comprehensive AI Skin Analysis
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-6">
          Upload photos, share health data, and let our advanced AI decode your
          skin's needs. Get science-backed recommendations for healthier,
          radiant skin.
        </p>
        <button className="bg-[#303030] text-white px-8 py-3 rounded-full text-lg transition-all">
          Start My Skin Analysis
        </button>
        <p className="text-gray-600 text-sm md:text-base">
          Receive Personalized Recommendations. <br />
          100% Secure & Private. Data Anonymized.
        </p>
      </div>
      {/* Left Section: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroIMG}
          alt="Hero"
          className="w-[630px] max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
