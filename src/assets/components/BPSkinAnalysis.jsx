import React from "react";
import FormulaLogo from "./pgimg/Img-07.png";
import logoOne from "./Project Glow - Design Assets/SVG Selected/trained model.svg";
import logoTwo from "./Project Glow - Design Assets/SVG Selected/diagnostics.svg";
import logoThree from "./Project Glow - Design Assets/SVG Selected/matching.svg";

export default function BPSkinAnalysis() {
  return (
    <div className="max-w-[1440px] m-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F4F7F2] to-[#FFFFFF] pb-12 md:pb-24">
      <div className="flex flex-wrap items-center justify-center lg:justify-between pt-5">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={FormulaLogo}
            alt="faceFront"
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] w-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 max-w-[516px] pt-10 lg:pt-20">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight mb-4">
            The Perfect Match for Every Customer
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[16px] leading-6 pb-6">
            Backed by science, our solution seamlessly integrates with your
            e-commerce or in-store channels, helping customers discover the
            perfect products to enhance their glow.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <img src={logoOne} alt="" className="w-[40px] sm:w-[50px] md:w-[60px]" />
              <div className="pl-4">
                <h3 className="text-[16px] sm:text-[18px] font-semibold mb-2">
                  Extensively Trained Models
                </h3>
                <p className="text-[14px] sm:text-[16px]">
                  Our technology has been trained on a diverse dataset of 100,000+ images to
                  ensure high accuracy and reliability.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <img src={logoTwo} alt="" className="w-[40px] sm:w-[50px] md:w-[60px]" />
              <div className="pl-4">
                <h3 className="text-[16px] sm:text-[18px] font-semibold mb-2">
                  Sophisticated Skin Diagnostics
                </h3>
                <p className="text-[14px] sm:text-[16px]">
                  Capable of identifying over 100 unique skin
                  conditions, our system sets a new standard in dermatological diagnostics.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <img src={logoThree} alt="" className="w-[40px] sm:w-[50px] md:w-[60px]" />
              <div className="pl-4">
                <h3 className="text-[16px] sm:text-[18px] font-semibold mb-2">
                  Ingredient-Focused Product Matching
                </h3>
                <p className="text-[14px] sm:text-[16px]">
                  Dynamically recommends products based on specific skin requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
