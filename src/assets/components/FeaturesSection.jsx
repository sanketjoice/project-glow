import React from "react";
import mainIMG from "./pgimg/Img-02.png";
import iconOne from "./Project Glow - Design Assets/Icons/analysing.png";
import iconTwo from "./Project Glow - Design Assets/SVG Selected/face-recognition.svg";
import iconThree from "./Project Glow - Design Assets/SVG Selected/personalise.svg";
import iconFour from "./Project Glow - Design Assets/SVG Selected/dna.svg";
import iconFive from "./Project Glow - Design Assets/SVG Selected/metrics.svg";
import iconSix from "./Project Glow - Design Assets/SVG Selected/insurance.svg";

function FeaturesSection() {
//  javascript object which helps component reusability
  const features = [
    {
      title: "Extensively Trained",
      description:
        "Our technology has been trained on a diverse dataset of 100,000+ images to ensure high accuracy and reliability.",
      icon: iconOne,
    },
    {
      title: "Image Recognition and Analysis",
      description:
        "Simply upload a selfie and our AI will instantly begin its detailed assessment, identifying and addressing key areas of concern with remarkable accuracy.",
      icon: iconTwo,
    },
    {
      title: "Personalised Recommendations",
      description:
        "Sophisticated algorithms deliver precise product suggestions tailored to your skin’s specific needs.",
      icon: iconThree,
    },
    {
      title: "Upload DNA Report",
      description:
        "Integrate genetic insights by uploading your DNA report, allowing us to refine your skincare recommendations based on your genetic predispositions.",
      icon: iconFour,
    },
    {
      title: "Medical Science Papers",
      description:
        "Grounded in the analysis of over 20,000 medical science papers, our technology is built on a solid foundation of cutting-edge medical knowledge.",
      icon: iconFive,
    },
    {
      title: "Upload Health Reports and Blood Work",
      description:
        "Further personalize your skincare by providing health reports and blood work, enabling our AI to consider your overall health in its analysis.",
      icon: iconSix,
    },
  ];

  return (
    <section className="bg-white p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Section: Text */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Do You Really Know What Your Skin Needs?
        </h2>
        <p className="text-gray-600 mb-8 text-xl">
          Dive into a tailored and holistic approach that decodes your skin’s
          unique needs, ensuring you provide it with exactly what it requires
          for optimal health and radiance.
        </p>
        <h3 className="text-xl font-bold mb-4">
          The Most Comprehensive Skin Health Analysis
        </h3>
        <div className="space-y-6">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex space-x-4">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Right Section: Image and Extra Features */}
      <div className="relative">
        <img
          src={mainIMG} // Replace with the image of the woman's face
          alt="Face Analysis"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        {/* Additional Features Below Image */}
        <div className=" grid gap-6">
          {features.slice(4).map((feature, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              <div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
