import React from "react";
import backgroundImage from "./pgimg/Img-09.png";
import upArrow from "./Project Glow - Design Assets/SVG Selected/up-arrow.svg";
import accuracy from "./Project Glow - Design Assets/SVG Selected/accuracy.svg";

function BPTransformativeResultsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-auto lg:h-[600px] flex items-center justify-center max-w-[1440px] m-auto my-20 lg:my-52"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      <div className="relative text-center mx-auto p-6 sm:p-8 backdrop-blur-md h-auto lg:h-[400px] w-auto lg:w-[1034px]">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-gray-800 mb-6 w-auto lg:w-[784px] h-auto lg:h-[48px] m-auto">
          Transformative Results for Your Business
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-opacity-80 p-6 rounded-lg">
            <h3 className="text-[40px] sm:text-[48px] lg:text-[56px] text-gray-800 mb-5 flex items-center justify-center gap-1">
              62
              <span className="text-[20px] sm:text-[24px] lg:text-[30px] mt-2 lg:mt-4">%</span>
              <img src={upArrow} className="h-[30px] sm:h-[36px] lg:h-[41px]" alt="Up Arrow" />
            </h3>
            <p className="text-[16px] sm:text-[18px] font-semibold text-gray-700 mb-2">
              Enhanced Conversion Rates
            </p>
            <p className="text-gray-600 text-[14px] sm:text-[16px]">
              Clients see an average increase of 62% in conversion through
              tailored skin analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-opacity-80 p-6 rounded-lg">
            <h3 className="text-[40px] sm:text-[48px] lg:text-[56px] text-gray-800 mb-5 flex items-center justify-center gap-1">
              34
              <span className="text-[20px] sm:text-[24px] lg:text-[30px] mt-2 lg:mt-4">%</span>
              <img src={upArrow} className="h-[30px] sm:h-[36px] lg:h-[41px]" alt="Up Arrow" />
            </h3>
            <p className="text-[16px] sm:text-[18px] font-semibold text-gray-700 mb-2">
              Boost in Transaction Value
            </p>
            <p className="text-gray-600 text-[14px] sm:text-[16px]">
              Personalized shopping experiences contribute to a 34% rise in
              average order value.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-opacity-80 p-6 rounded-lg">
            <h3 className="text-[40px] sm:text-[48px] lg:text-[56px] text-gray-800 mb-5 flex items-center justify-center gap-1">
              98
              <span className="text-[20px] sm:text-[24px] lg:text-[30px] mt-2 lg:mt-3">%</span>
              <img
                src={accuracy}
                className="h-[30px] sm:h-[36px] lg:h-[41px] mt-2 lg:mt-3"
                alt="Accuracy"
              />
            </h3>
            <p className="text-[16px] sm:text-[18px] font-semibold text-gray-700 mb-2">
              Proven Accuracy
            </p>
            <p className="text-gray-600 text-[14px] sm:text-[16px]">
              Our methods rely on verified scientific data, achieving 98%
              accuracy in results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BPTransformativeResultsSection;
