import React from "react";
import mainImg from "./pgimg/image55.png";

const ContactPage = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 pb-8">
        {/* Image Section */}
        <div className="relative">
          {/* For small screens, crop the image */}
          <img
            src={mainImg}
            alt="Contact Page"
            className="block lg:hidden w-[390px] h-[304px] object-cover object-left mx-auto"
          />
          {/* For large screens, show the full image */}
          <img
            src={mainImg}
            alt="Contact Page"
            className="hidden lg:block w-full h-auto"
          />

          {/* Card Section */}
          <div className="bg-[#86D6A633] max-w-[90%] sm:max-w-[531px] rounded-3xl p-6 sm:p-10 mx-auto mt-6 lg:mt-0 lg:absolute lg:top-1/4 lg:right-16 lg:transform lg:translate-y-[-20%]">
            {/* Header Section */}
            <div className="flex flex-col">
              <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] pb-4 sm:pb-7">
                Shape the Future of Skincare with Us
              </h2>
              <p className="text-[14px] sm:text-[16px] leading-5 sm:leading-6 pb-4 sm:pb-6">
                Be part of the community that values innovation, science, and
                sustainability. Together, we can create a healthier, more
                radiant future for our skin.
              </p>
            </div>

            {/* Follow Section */}
            <div className="pt-4 sm:pt-6">
              <h2 className="text-[16px] sm:text-[18px] font-semibold pb-2">
                Follow us for the Latest Updates
              </h2>
              <p className="text-[12px] sm:text-[14px] leading-5 sm:leading-6">
                Stay informed about new developments, tips, and more.
              </p>
            </div>

            {/* Email Input */}
            <div className="pt-4 sm:pt-6">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-[451px] h-[40px] sm:h-[48px] bg-white px-4 py-2 rounded-lg text-sm sm:text-base border border-gray-300"
              />
            </div>

            {/* Privacy Notice */}
            <div className="pt-4 sm:pt-6">
              <h2 className="text-[14px] sm:text-[16px] font-semibold pb-2">
                Privacy Notice
              </h2>
              <p className="text-[12px] sm:text-[14px] leading-5 sm:leading-6">
                Your privacy is crucial to us. We are committed to protecting
                your personal information with the highest standard of security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
