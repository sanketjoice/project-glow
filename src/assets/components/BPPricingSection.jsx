import React from "react";
import smeLogo from "./Project Glow - Design Assets/SVG Selected/sme.svg";
import enterpriseLogo from "./Project Glow - Design Assets/SVG Selected/office-building.svg";

function BPPricingSection() {
  return (
    <section className="bg-[#CED4DA] py-10 lg:py-[80px] max-w-[1440px] m-auto mb-14">
      <div className="container mx-auto text-center px-4 lg:px-20">
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 leading-[32px] sm:leading-[40px] lg:leading-[48px] max-w-[707px] mx-auto">
          Flexible Pricing for All Business Sizes
        </h2>
        <p className="text-gray-600 text-base lg:text-[16px] leading-6 max-w-[795px] mx-auto mb-8 lg:mb-12">
          Join us in transforming skincare as we know it. Be part of a community
          that values innovation, science, and sustainability. Our pricing
          model is designed to accommodate the needs of all businesses.
        </p>

        {/* Business Options Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-20">
          {/* SME Businesses */}
          <div className="flex items-start text-start">
            <img
              src={smeLogo}
              alt="SME Logo"
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mb-4"
            />
            <div className="flex flex-col ml-4 lg:ml-5">
              <h3 className="text-lg sm:text-[18px] font-semibold leading-[26px]">
                For SME Businesses
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-[14px] leading-6 max-w-[270px]">
                Tailor Project Glow Skin's algorithm to include your products,
                providing a personalized digital experience for your customers.
              </p>
            </div>
          </div>

          {/* Enterprises */}
          <div className="flex items-start text-start">
            <img
              src={enterpriseLogo}
              alt="Enterprise Logo"
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mb-4"
            />
            <div className="flex flex-col ml-4 lg:ml-5">
              <h3 className="text-lg sm:text-[18px] font-semibold leading-[26px]">
                For Enterprises
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-[14px] leading-6 max-w-[270px]">
                Transform your cosmetics brand with a fully customized Skin SaaS
                solution. Our dedicated account manager and support team will
                ensure your specific needs are met.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 lg:mt-10">
          <button className="px-6 sm:px-[28px] py-3 sm:py-[13px] text-white bg-[#303030] rounded-full text-sm sm:text-[16px] leading-6 w-auto sm:w-[142px] h-[50px]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default BPPricingSection;
