import React from "react";
import bgImg from "./pgimg/Img-04.png";

const BenefitsPage = () => {
  return (
    <div
      className="relative lg:max-h-[640px] lg:max-w-[1440px]  bg-cover bg-center flex flex-col items-center justify-center text-center p-6 m-auto pb-20 lg:pb-44 pt-11 lg:pt-32"
      style={{
        backgroundImage: `url(${bgImg})`, // Replace with your actual background image URL
      }}
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        Benefits of Project Glow Skin
      </h1>

      {/* Benefits Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-white bg-opacity-80 shadow-md rounded-[20px] p-6 flex-1 to-transparent">
          <h2 className="text-[24px] font-semibold text-gray-800 mb-4">
            Truly Personalized
          </h2>
          <p className="text-gray-600 text-[18px]">
            We offer the most comprehensive skin health analysis on the market.
            Take a holistic approach to precision skincare.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white bg-opacity-80 shadow-md rounded-[20px] p-6 flex-1 to-transparent">
          <h2 className="text-[24px] font-semibold text-gray-800 mb-4">
            Science-Backed
          </h2>
          <p className="text-gray-600 text-[18px]">
            Every recommendation is supported by scientific research, ensuring
            effectiveness and safety.
          </p>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-[24px] font-semibold text-gray-800 mt-10">
        Precision Skincare, No Guesswork
      </p>

      {/* Call to Action */}
      <button className="mt-4 px-6 py-3 w-[221px] h-[50px] bg-black text-white text-sm md:text-base font-semibold rounded-[50px] hover:bg-gray-800 transition">
        Analyze My Skin Now
      </button>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mt-2">
        Instant skin analysis in just a few steps
      </p>
    </div>
  );
};

export default BenefitsPage;
