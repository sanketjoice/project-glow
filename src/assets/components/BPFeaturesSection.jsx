import React from "react";
import rightImage from "./pgimg/Img-08.png";
import iconFour from "./Project Glow - Design Assets/SVG Selected/metrics.svg";
import iconThree from "./Project Glow - Design Assets/SVG Selected/Scientific.svg";
import iconOne from "./Project Glow - Design Assets/SVG Selected/Research driven.svg";
import iconTwo from "./Project Glow - Design Assets/SVG Selected/Inclusive care.svg";

function BPFeaturesSection() {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 max-w-[1440px] m-auto bg-gradient-to-r from-[#F4F7F2] to-[#FFFFFF]">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 lg:ml-[135px] gap-[42px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mb-6">
            Unmatched Precision with <br /> Our Science-Driven Solution
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-6 mb-8">
            Project Glow Skin rests on a solid scientific framework, ensuring
            every analysis adheres to rigorous accuracy standards:
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <img
                src={iconOne}
                alt="Research Driven"
                className="w-[52px] h-[52px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-[26px]">
                  Research Driven
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-6">
                  Grounded in the analysis of over 20,000 medical science
                  papers, our technology is built on a solid foundation of
                  cutting-edge medical knowledge.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <img
                src={iconTwo}
                alt="Inclusive Care"
                className="w-[52px] h-[52px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-[26px]">
                  Inclusive Care
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-6">
                  Our system is designed to be effective across all skin types,
                  tones, and genders, ensuring personalized and inclusive care
                  for every user.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <img
                src={iconThree}
                alt="Scientific Innovation"
                className="w-[52px] h-[52px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-[26px]">
                  Scientific Innovation
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-6">
                  Crafted by Scientists and Medical Experts.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <img
                src={iconFour}
                alt="Pioneering Algorithms"
                className="w-[52px] h-[52px]"
              />
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-[26px]">
                  Pioneering Algorithms
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-6">
                  Leading the Industry with Revolutionary Skin Analysis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 text-white bg-[#303030] rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto">
            See How it Works
          </button>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
          <img
            src={rightImage}
            alt="Science-Driven Solution"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default BPFeaturesSection;
