import React from "react";
import leftImage from "./pgimg/Img-10.png";
import seamlessIcon from "./Project Glow - Design Assets/SVG Selected/dots.svg";
import interactiveIcon from "./Project Glow - Design Assets/SVG Selected/interactive.svg";
import analysisIcon from "./Project Glow - Design Assets/SVG Selected/analysing.svg";
import personalizedIcon from "./Project Glow - Design Assets/SVG Selected/personalise.svg";

function RecommendationSection() {
  return (
    <section className="container mx-auto px-4 lg:px-20 py-10 flex flex-col lg:flex-row items-center max-w-[1440px] m-auto gap-10">
      {/* Left Image */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={leftImage}
          alt="Customised Skincare"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-6 lg:mb-10 leading-[36px] lg:leading-[48px] w-full lg:w-[461px] mx-auto lg:mx-0">
          Customised Skincare Recommendations for Every Customer
        </h2>
        <ul className="space-y-6">
          {/* Feature 1 */}
          <li className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-6 mb-8">
            <img
              src={seamlessIcon}
              alt="Seamless Integration"
              className="w-[52px] h-[52px] flex-shrink-0"
            />
            <div>
              <h3 className="text-lg lg:text-[18px] font-semibold mb-1">
                Seamless Integration
              </h3>
              <p className="text-gray-600 text-base lg:text-[16px] leading-6 w-auto lg:w-[378px]">
                Our AI seamlessly fits into your e-commerce or brick-and-mortar
                setup.
              </p>
            </div>
          </li>

          {/* Feature 2 */}
          <li className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-6 mb-10">
            <img
              src={interactiveIcon}
              alt="Interactive Experience"
              className="w-[52px] h-[52px] flex-shrink-0"
            />
            <div>
              <h3 className="text-lg lg:text-[18px] font-semibold mb-1">
                Interactive Customer Experience
              </h3>
              <p className="text-gray-600 text-base lg:text-[16px] leading-6 w-auto lg:w-[378px]">
                Users engage with an intuitive interface to input their skin
                data.
              </p>
            </div>
          </li>

          {/* Feature 3 */}
          <li className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-6 mb-8">
            <img
              src={analysisIcon}
              alt="Instant Analysis"
              className="w-[52px] h-[52px] flex-shrink-0"
            />
            <div>
              <h3 className="text-lg lg:text-[18px] font-semibold mb-1">
                Instant Analysis
              </h3>
              <p className="text-gray-600 text-base lg:text-[16px] leading-6 w-auto lg:w-[378px]">
                Our system rapidly processes the data, pinpointing essential
                skin health metrics.
              </p>
            </div>
          </li>

          {/* Feature 4 */}
          <li className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-6">
            <img
              src={personalizedIcon}
              alt="Personalized Suggestions"
              className="w-[52px] h-[52px] flex-shrink-0"
            />
            <div>
              <h3 className="text-lg lg:text-[18px] font-semibold mb-1">
                Personalized Product Suggestions
              </h3>
              <p className="text-gray-600 text-base lg:text-[16px] leading-6 w-auto lg:w-[378px]">
                Offers customized product recommendations based on individual
                skin analysis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RecommendationSection;
