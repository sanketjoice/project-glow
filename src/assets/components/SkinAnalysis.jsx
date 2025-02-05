import React from "react";
import faceFront from "./pgimg/Img-03.png";
import logoOne from "./Project Glow - Design Assets/SVG Selected/trained model.svg";
import logoTwo from "./Project Glow - Design Assets/SVG Selected/dna.svg";
import logoThree from "./Project Glow - Design Assets/Icons/research 2.svg";
import logoFour from "./Project Glow - Design Assets/SVG Selected/Skincare products.svg";

export default function SkinAnalysis() {
  return (
    <>
      <div className="max-w-[1440px] m-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F4F7F2] to-[#FFFFFF] pb-24">
        <div className="container flex flex-wrap items-center justify-center lg:justify-evenly pt-11">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={faceFront}
              alt="faceFront"
              className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 max-w-[516px] pt-10 lg:pt-20">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-10">
              Why Choose Our Skin Analysis?
            </h2>
            <p className="text-[14px] sm:text-[16px] leading-6 py-4">
              Our platform analyzes your unique skin and educates on the
              scientific effects of each ingredient, ensuring you achieve your
              skincare goals with precision and understanding.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start">
                <img src={logoOne} alt="" className="w-[50px] sm:w-[71px]" />
                <div className="pl-4">
                  <h3 className="text-[16px] sm:text-[18px] font-semibold">
                    Extensively Trained
                  </h3>
                  <p className="text-[14px] sm:text-[16px]">
                    Our technology has been trained on a dataset of 100,000+
                    images to ensure high accuracy and reliability.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img src={logoTwo} alt="" className="w-[50px] sm:w-[71px]" />
                <div className="pl-4">
                  <h3 className="text-[16px] sm:text-[18px] font-semibold">
                    Holistic Insights
                  </h3>
                  <p className="text-[14px] sm:text-[16px]">
                    Consider not just your photos but your DNA and health data
                    for a deeper understanding of your skin.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img src={logoThree} alt="" className="w-[50px] sm:w-[71px]" />
                <div className="pl-4 lg:ml-5">
                  <h3 className="text-[16px] sm:text-[18px] font-semibold">
                    Trusted by Science
                  </h3>
                  <p className="text-[14px] sm:text-[16px]">
                    Recommendations grounded in over 20,000 medical science
                    papers from dermatology experts and credible studies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <img src={logoFour} alt="" className="w-[50px] sm:w-[71px]" />
                <div className="pl-4">
                  <h3 className="text-[16px] sm:text-[18px] font-semibold">
                    Tailored Product Suggestions
                  </h3>
                  <p className="text-[14px] sm:text-[16px]">
                    Find products that contain essential ingredients needed to
                    achieve your skincare goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
