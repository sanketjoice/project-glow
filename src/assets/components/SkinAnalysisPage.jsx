import React, { useState } from "react";
import facialSkin from "./Project Glow - Design Assets/Icons/SVG/skin.svg";
import backSkin from "./Project Glow - Design Assets/Icons/SVG/back.svg";
import pullHairBack from "./Project Glow - Design Assets/SVG Selected/bun.svg";
import relaxFace from "./Project Glow - Design Assets/SVG Selected/facial.svg";
import goodLighting from "./Project Glow - Design Assets/SVG Selected/led-bulb.svg";
import removeMakeup from "./Project Glow - Design Assets/SVG Selected/no-cosmetics.svg";

function SkinAnalysisPage() {
  const [currentStep, setCurrentStep] = useState(1); // Step tracker
  const [selectedArea, setSelectedArea] = useState(null); // "Facial Skin" or "Body Skin"
  const [uploadedImages, setUploadedImages] = useState({
    leftSide: null,
    forehead: null,
    rightSide: null,
    eyeArea: null,
    noseMouth: null,
  });
  const [analysisAccuracy, setAnalysisAccuracy] = useState(50); // Example accuracy percentage

  // Handles skin area selection
  const handleSelect = (area) => {
    setSelectedArea(area);
  };

  // Progress to the next step
  const handleNext = () => {
    if (currentStep === 1 && selectedArea) {
      setCurrentStep(2); // Move to "Get Ready"
    } else if (currentStep === 2) {
      setCurrentStep(3); // Move to "Face Scanner"
    }
  };

  // Handle image upload for a specific area
  const handleImageUpload = (e, area) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImages((prev) => ({ ...prev, [area]: reader.result }));
        // Simulate accuracy improvement
        setAnalysisAccuracy((prev) => Math.min(prev + 10, 100));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-8">
      {/* Step 1: Select Skin Area */}
      {currentStep === 1 && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Select skin area for analysis
          </h1>
          <p className="text-gray-600 text-center mb-8">
            We analyze your skin to recommend ingredients tailored to your
            unique needs, no more one-size-fits-all routines.
          </p>
          <div className="flex gap-6">
            {/* Facial Skin */}
            <div
              onClick={() => handleSelect("Facial Skin")}
              className={`cursor-pointer border rounded-lg p-4 ${
                selectedArea === "Facial Skin"
                  ? "border-black"
                  : "border-gray-300"
              }`}
            >
              <img
                src={facialSkin}
                alt="Facial Skin"
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2 text-center">Facial Skin</p>
            </div>

            {/* Body Skin */}
            <div
              onClick={() => handleSelect("Body Skin")}
              className={`cursor-pointer border rounded-lg p-4 ${
                selectedArea === "Body Skin" ? "border-black" : "border-gray-300"
              }`}
            >
              <img
                src={backSkin}
                alt="Body Skin"
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2 text-center">Body Skin</p>
            </div>
          </div>
          <button
            onClick={handleNext}
            disabled={!selectedArea}
            className={`mt-6 px-6 py-2 rounded-full text-white ${
              selectedArea ? "bg-black" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Get Started
          </button>
        </>
      )}

      {/* Step 2: Get Ready */}
      {currentStep === 2 && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Get Ready</h1>
          <p className="text-gray-600 text-center mb-8">
            Follow these steps for the best results:
          </p>
          <ul className="text-left mb-6 text-gray-700 space-y-4">
            <li className="flex items-center gap-4">
              <img src={pullHairBack} alt="Pull hair back" className="w-8 h-8" />
              <span>Pull your hair back to keep your face clear.</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={relaxFace} alt="Relax face" className="w-8 h-8" />
              <span>Relax your face – no need to smile!</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={goodLighting} alt="Good lighting" className="w-8 h-8" />
              <span>Find good lighting to brighten your photo.</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={removeMakeup} alt="Remove makeup" className="w-8 h-8" />
              <span>Remove any makeup for an accurate scan.</span>
            </li>
          </ul>
          <button
            onClick={handleNext}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            I'm Ready
          </button>
        </>
      )}

      {/* Step 3: Face Scanner */}
      {currentStep === 3 && (
        <>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Face Scanner</h1>
          <p className="text-gray-600 text-center mb-4">
            Upload multiple angles for better insights. Start with one, and add
            more for the best results.
          </p>
          {/* Analysis accuracy */}
          <div className="relative w-32 h-32 mb-6">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e5e5e5"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#6c63ff"
                strokeWidth="10"
                fill="none"
                strokeDasharray="282.6"
                strokeDashoffset={282.6 - (282.6 * analysisAccuracy) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              {analysisAccuracy}%
            </div>
          </div>

          {/* Image upload areas */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "Left side", key: "leftSide" },
              { label: "Forehead", key: "forehead" },
              { label: "Right side", key: "rightSide" },
              { label: "Eye area", key: "eyeArea" },
              { label: "Nose & Mouth", key: "noseMouth" },
            ].map((area) => (
              <div key={area.key} className="flex flex-col items-center">
                <label
                  htmlFor={area.key}
                  className="w-24 h-24 flex items-center justify-center border rounded-full cursor-pointer bg-gray-100 text-gray-600"
                  style={{
                    backgroundImage: uploadedImages[area.key]
                      ? `url(${uploadedImages[area.key]})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!uploadedImages[area.key] && "+"}
                </label>
                <input
                  type="file"
                  id={area.key}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, area.key)}
                />
                <p className="text-center text-sm mt-2">{area.label}</p>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            className="bg-black text-white px-6 py-3 rounded-full"
            disabled={Object.values(uploadedImages).every((img) => !img)}
            onClick={() => console.log("Proceed with analysis")}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default SkinAnalysisPage;
