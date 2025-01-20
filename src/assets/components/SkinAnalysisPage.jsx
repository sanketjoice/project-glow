import React, { useState } from "react";
import facialSkin from "./Project Glow - Design Assets/SVG Selected/facial-cleansing.svg";
import backSkin from "./Project Glow - Design Assets/Icons/SVG/back.svg";
import pullHairBack from "./Project Glow - Design Assets/SVG Selected/bun.svg";
import relaxFace from "./Project Glow - Design Assets/SVG Selected/facial.svg";
import goodLighting from "./Project Glow - Design Assets/SVG Selected/led-bulb.svg";
import removeMakeup from "./Project Glow - Design Assets/SVG Selected/no-cosmetics.svg";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import { useNavigate } from "react-router-dom";

function SkinAnalysisPage() {
  const navigate = useNavigate();

  const handleStartAnalysis = () => {
    navigate("/project-glow/QuestionnaireComponent");
  };
  const [currentStep, setCurrentStep] = useState(1); // Step tracker
  const [selectedArea, setSelectedArea] = useState(null); // "Facial Skin" or "Body Skin"
  const [uploadedImages, setUploadedImages] = useState({
    leftSide: null,
    forehead: null,
    rightSide: null,
    eyeArea: null,
    noseMouth: null,
    bodyMain: null,
    bodyOptional1: null,
    bodyOptional2: null,
  });

  // Handles skin area selection
  const handleSelect = (area) => {
    setSelectedArea(area);
  };

  // Progress to the next step
  const handleNext = () => {
    if (currentStep === 1 && selectedArea) {
      setCurrentStep(2); // Move to "Get Ready"
    } else if (currentStep === 2) {
      setCurrentStep(3); // Move to "Scanner"
    }
  };

  // Handle image upload for a specific area
  const handleImageUpload = (e, area) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImages((prev) => ({ ...prev, [area]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      {/* Phone Frame */}
      <div className="w-[390px] h-[680px] bg-[#F4F7F2] p-4 rounded-3xl shadow-2xl flex flex-col overflow-hidden relative">
        {/* Logo */}
        <div className="flex items-center justify-center border-b bg-gray-100">
          <img src={logo} alt="Business Logo" className="w-[110px] h-[28px]" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Step 1: Select Skin Area */}
          {currentStep === 1 && (
            <>
              <h1 className="text-[24px] font-semibold w-[320px] h-[30px] mb-4 text-center">
                Select skin area for analysis
              </h1>
              <p className="text-gray-600 text-center mb-8 w-[310px] h-[66px] text-[14px] leading-[22px]">
                We analyze your skin to recommend ingredients tailored to your unique needs, no more one-size-fits-all routines.
              </p>
              <div className="flex gap-6 justify-center">
                {/* Facial Skin */}
                <div
                  onClick={() => handleSelect("Facial Skin")}
                  className={`cursor-pointer border rounded-lg p-4 ${
                    selectedArea === "Facial Skin" ? "border-black" : "border-gray-400"
                  }`}>
                  <img
                    src={facialSkin}
                    alt="Facial Skin"
                    className="w-20 h-20 mx-auto" />
                  <p className="mt-2 text-center w-[83px] h-[24px] text-[16px] leading-[24px] font-semibold">
                    Facial Skin
                  </p>
                </div>

                {/* Body Skin */}
                <div
                  onClick={() => handleSelect("Body Skin")}
                  className={`cursor-pointer border rounded-lg p-4 ${
                    selectedArea === "Body Skin" ? "border-black" : "border-gray-400"
                  }`}>
                  <img
                    src={backSkin}
                    alt="Body Skin"
                    className="w-20 h-20 mx-auto" />
                  <p className="mt-2 text-center w-[83px] h-[24px] text-[16px] leading-[24px] font-semibold">
                    Body Skin
                  </p>
                </div>
              </div>

              {/* Conditionally show Get Started button */}
              {selectedArea && (
                <button
                  onClick={handleNext}
                  className="mt-56 h-[50px] w-[145px] px-6 py-2 rounded-[6px] text-white ml-[90px] bg-black hover:bg-gray-800">
                  Get Started
                </button>
              )}
            </>
          )}

          {/* Step 2: Get Ready */}
          {currentStep === 2 && (
            <>
              <h1 className="text-[24px] font-semibold w-[330px] h-[30px] mb-4 text-center">Get Ready</h1>
              <p className="text-gray-600 text-center mb-8 text-[14px] leading-[22px] w-[330px] h-[44px]">
                Take a selfie or upload a photo, and let our AI analyze your skin.
              </p>
              <ul className="text-left mb-6 text-gray-700 space-y-4 w-[299px] h-[316px]">
                {selectedArea === "Facial Skin" && (
                  <>
                    <li className="flex items-center gap-4">
                      <img
                        src={pullHairBack}
                        alt="Pull hair back"
                        className="w-[70px] h-[70px]" />
                      <span className="w-[209px] h-[44px] text-[14px] leading-[22px]">Pull your hair back to keep your face clear.</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <img src={relaxFace} alt="Relax face" className="w-[70px] h-[70px]" />
                      <span className="w-[209px] h-[44px] text-[14px] leading-[22px]">Relax your face – no need to smile!</span>
                    </li>
                  </>
                )}
                <li className="flex items-center gap-4">
                  <img
                    src={goodLighting}
                    alt="Good lighting"
                    className="w-[70px] h-[70px]" />
                  <span className="w-[209px] h-[44px] text-[14px] leading-[22px]">Find good lighting to brighten your photo.</span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src={removeMakeup}
                    alt="Remove makeup"
                    className="w-[70px] h-[70px]" />
                  <span className="w-[209px] h-[44px] text-[14px] leading-[22px]">Remove any makeup for an accurate scan.</span>
                </li>
              </ul>
              <p className="text-[10px] leading-5 w-[330px] h-[80px] text-center my-3">
                By clicking ‘I’m Ready’, you agree to let us use your photo to analyze your skin. Your data will
                be processed securely and deleted once results are delivered. See our Privacy Policy for details.
              </p>
              <button
                onClick={handleNext}
                className="w-[190] h-[50px] bg-black text-white px-[58px] py-[13px] rounded-[6px] hover:bg-gray-800 ml-[70px]">
                I'm Ready
              </button>
            <p className="w-[178px] h-[24px] text-[16px] text-center leading-6 hover:cursor-pointer  m-auto mt-7 underline" onClick={handleNext}>Analysis without image</p>
            </>
          )}

          {/* Step 3: Scanner */}
          {currentStep === 3 && selectedArea === "Facial Skin" && (
            <>
              <h1 className="text-[24px] w-[330px] h-[30px] leading-[30px] font-semibold  mb-4 text-center mt-4">
                Face Scanner
              </h1>
              <p className="text-gray-600 text-center mb-4 text-[14px] leading-[24px] w-[330px] h-[44px]">
                Upload multiple angles for better insights. Start with one, and add more for the best results.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["leftSide", "forehead", "rightSide", "eyeArea", "noseMouth"].map((areaKey) => (
                  <div key={areaKey} className="flex flex-col items-center">
                    <label
                      htmlFor={areaKey}
                      className="w-24 h-24 flex items-center justify-center border rounded-full cursor-pointer bg-gray-100 text-gray-600 border-[#BDBDBD]"
                      style={{
                        backgroundImage: uploadedImages[areaKey]
                          ? `url(${uploadedImages[areaKey]})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                      {!uploadedImages[areaKey] && "+"}
                    </label>
                    <input
                      type="file"
                      id={areaKey}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, areaKey)} />
                    <p className="text-center text-sm mt-2 capitalize">
                      {areaKey.replace(/([A-Z])/g, " $1")}
                    </p>
                  </div>
                ))}
              </div>
              <button
                className="w-[190px] h-[50px] bg-black text-white px-[77px] py-[13px]
                 rounded-[6px] hover:bg-gray-800 ml-[60px] mt-3"
                 onClick={handleStartAnalysis}>
                Next
              </button>
            </>
          )}

          {/* Step 3: Body Scanner */}
          {currentStep === 3 && selectedArea === "Body Skin" && (
            <>
              <h1 className="text-[24px] w-[330px] h-[30px] leading-[30px] font-semibold  mb-4 text-center mt-4">
                Body Scanner
              </h1>
              <p className="text-gray-600 text-center mb-4 text-[14px] leading-[24px] w-[330px] h-[44px]">
                Upload multiple angles for better insights. Start with one, and add more for the best results.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {["bodyMain", "bodyOptional1", "bodyOptional2"].map((areaKey) => (
                  <div key={areaKey} className="flex flex-col items-center">
                    <label
                      htmlFor={areaKey}
                      className="w-24 h-24 flex items-center justify-center border rounded-full cursor-pointer bg-gray-100 text-gray-600 border-[#BDBDBD]"
                      style={{
                        backgroundImage: uploadedImages[areaKey]
                          ? `url(${uploadedImages[areaKey]})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}>
                      {!uploadedImages[areaKey] && "+"}
                    </label>
                    <input
                      type="file"
                      id={areaKey}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, areaKey)} />
                    <p className="text-center text-sm mt-2 capitalize">
                      {areaKey === "bodyMain" ? "Required" : "Optional"}
                    </p>
                  </div>
                ))}
              </div>
              <button
                className="w-[190px] h-[50px] bg-black text-white px-[77px] 
                py-[13px] rounded-[6px] hover:bg-gray-800 ml-[60px] mt-3"
                onClick={handleStartAnalysis}>
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkinAnalysisPage;
