import React from "react";
import mainImage from "./Project Glow - Design Assets/Images/Img-02.png"; // Replace with your image path
import iconOne from "./Project Glow - Design Assets/SVG Selected/happy.svg"; // Replace with your first icon path
import iconTwo from "./Project Glow - Design Assets/SVG Selected/diagnostics.svg"; // Replace with your second icon path
import iconThree from "./Project Glow - Design Assets/SVG Selected/Personalise.svg"; // Replace with your third icon path

function FeaturesSection() {
  const features = [
    {
      title: "Upload Your Photos",
      description:
        "Use our advanced AI, trained on over 15,000 images, to analyze your skin with 100% accuracy for major concerns.",
      icon: iconOne,
    },
    {
      title: "Get Science-Backed Results",
      description:
        "Discover insights powered by a database of over 10,000 research studies on skincare and dermatology.",
      icon: iconTwo,
    },
    {
      title: "Personalized Solutions",
      description:
        "Receive customized skincare recommendations tailored to your unique skin type, sensitivity, and concerns.",
      icon: iconThree,
    },
  ];

  return (
    <section className="bg-white px-6 py-12 md:px-16  grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Section: Text and Features */}
      <div className="lg:ml-36">
        <h2 className="text-2xl md:text-4xl font-bold lg:w-[475px] mb-4">How It Works</h2>
        <p className="text-gray-600 mb-8 text-lg md:text-xl ">
          Dive into a tailored and holistic approach that decodes your skin’s
          unique needs, ensuring you provide it with exactly what it requires
          for optimal health and radiance.
        </p>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
              <div>
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-gray-600 lg:w-[400px] lg:h-[]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-[28px] py-3 bg-purple-600 text-white rounded-full text-md hover:bg-purple-700">
          Start My Skin Analysis
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="relative">
        <img
          src={mainImage} 
          alt="Face Analysis"
          className="rounded-lg w-[390px] lg:h-[729px] lg:w-[652px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>
    </section>
  );
}

export default FeaturesSection;
