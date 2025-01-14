import React from "react";
import heroIMG from "./pgimg/Img-01.png";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center p-8">
      <div className="md:md:w-1/4 text-center order-1 md:text-left space-y-4 md:items-center md:ml-32">
        <h1 className=" md:text-4xl font-bold md:text-center">
        <span className="text-sm md:text-xl">The World's Most</span> Comprehensive Skin Analysis
        </h1>
        <p className="text-gray-600 font-semibold text-center md:text-[20px]">
          Take Photos, Upload Your DNA and Health Reports for Unmatched
          Insights.
        </p>
        <button className=" bg-gray-900 text-white px-6 py-3 rounded-3xl md:ml-10">
          Get Your Free Skin Analysis Now
        </button>
        <p className="text-gray-500 md:text-[18px] w-[350px] text-center">
          Receive Personalized Recommendations, 100% Secure & Private. Data Annomynized
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src={heroIMG}
          alt="Hero"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
