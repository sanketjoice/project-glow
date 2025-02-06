import React, { useState } from "react";
import VerySadIcon from "./Project Glow - Design Assets/SVG Selected/rating-face 1.svg";
import SadIcon from "./Project Glow - Design Assets/SVG Selected/rating-face-2.svg";
import NeutralIcon from "./Project Glow - Design Assets/SVG Selected/rating-face-3.svg";
import GoodIcon from "./Project Glow - Design Assets/SVG Selected/rating-face-4.svg";
import GreatIcon from "./Project Glow - Design Assets/SVG Selected/rating-face-5.svg";
import ExhaustedIcon from "./Project Glow - Design Assets/SVG Selected/energy-level 1.svg";
import TiredIcon from "./Project Glow - Design Assets/SVG Selected/energy-level 2.svg";
import NeutralEnergyIcon from "./Project Glow - Design Assets/SVG Selected/energy-level 3.svg";
import GreatEnergyIcon from "./Project Glow - Design Assets/SVG Selected/energy-level 4.svg";
import EnergizedIcon from "./Project Glow - Design Assets/SVG Selected/energy-level 5.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";

export default function BasicTracker() {
  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month} ${year}`;
  };

  const today = new Date();
  const formattedDate = formatDate(today);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedEnergy, setSelectedEnergy] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  const [specificFactor, setSpecificFactor] = useState("");
  const [selectedSkinFeel, setSelectedSkinFeel] = useState(null);
  const [selectedConcerns, setSelectedConcerns] = useState([]);

  const moods = [
    { label: "Very sad", icon: VerySadIcon },
    { label: "Sad", icon: SadIcon },
    { label: "Neutral", icon: NeutralIcon },
    { label: "Good", icon: GoodIcon },
    { label: "Great", icon: GreatIcon },
  ];

  const energyLevels = [
    { label: "Exhausted", icon: ExhaustedIcon },
    { label: "Tired", icon: TiredIcon },
    { label: "Neutral", icon: NeutralEnergyIcon },
    { label: "Great", icon: GreatEnergyIcon },
    { label: "Energized", icon: EnergizedIcon },
  ];
  const sleepRatings = [
    { label: "Bad", icon: SadIcon },
    { label: "Normal", icon: NeutralIcon },
    { label: "Good", icon: GoodIcon },
    { label: "Very Good", icon: GreatIcon },
  ];
  const specificFactors = [
    "Stress",
    "Work",
    "Relationships",
    "Sleep",
    "Weather",
    "Nothing",
  ];
  const concerns = [
    "Acne",
    "Flakiness",
    "Fine lines",
    "Itching",
    "Redness",
    "No concerns",
  ];

  const skinFeelings = ["Dry", "Oily", "Balanced", "Sensitive", "Irritated"];
  const toggleConcern = (concern) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter((item) => item !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen  bg-white overflow-y-auto">
      <div className="w-[390px] rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        <div className="flex items-center justify-between mt-3 px-[20px] py-[16px]">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
            // onClick={handleLeftClick}
          />
          <p className="text-black text-[16px]">{formattedDate}</p>
          <img
            src={closeIcon}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
          />
        </div>
        <div className="w-[350px] flex flex-col mt-6 gap-4">
          {/* Mood Selection */}
          <div>
            <p className="text-[14px] ml-5 font-semibold">
              How do you feel today?
            </p>
            <div className="flex gap-[5px] mt-4 ml-4">
              {moods.map((mood, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    className={`py-[12px] px-[12px] rounded-[10px] border w-[66px] h-[64px] border-[#E0E0E0] ${
                      selectedMood === mood.label
                        ? "bg-gray-200"
                        : "bg-[#F4F7F2]"
                    }`}
                    onClick={() => setSelectedMood(mood.label)}
                  >
                    <img
                      src={mood.icon}
                      alt={mood.label}
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                  <p className="text-sm mt-1">{mood.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Energy Level Selection (Only Show if Mood Selected) */}
          {selectedMood && (
            <div>
              <p className="text-[14px] ml-5 font-semibold">
                How is your energy level today?
              </p>
              <div className="flex gap-[5px] mt-4 ml-5">
                {energyLevels.map((level, index) => (
                  <button
                    key={index}
                    className={`py-[12px] px-[10px] rounded-[10px] border w-[66px] h-[64px] border-[#E0E0E0] ${
                      selectedEnergy === level.label
                        ? "bg-gray-200"
                        : "bg-[#F4F7F2]"
                    }`}
                    onClick={() => setSelectedEnergy(level.label)}
                  >
                    <img
                      src={level.icon}
                      alt={level.label}
                      className="w-[40px] h-[40px]"
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-1 ml-6">
                {energyLevels.map((level, index) => (
                  <p key={index} className="text-[12px] w-[66px] text-center">
                    {level.label}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Sleep Quality Selection (Only Show if Energy Selected) */}
        {selectedEnergy && (
          <div className="mt-6">
            <p className="text-[14px] ml-5 font-semibold">
              How was your sleep last night?
            </p>
            <div className="flex gap-[5px] mt-4 ml-5">
              {sleepRatings.map((sleep, index) => (
                <button
                  key={index}
                  className={`py-[12px] px-[10px] rounded-[10px] border w-[66px] h-[64px] border-[#E0E0E0] ${
                    selectedSleep === sleep.label
                      ? "bg-gray-200"
                      : "bg-[#F4F7F2]"
                  }`}
                  onClick={() => setSelectedSleep(sleep.label)}
                >
                  <img
                    src={sleep.icon}
                    alt={sleep.label}
                    className="w-[40px] h-[40px]"
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-1 ml-2">
              {sleepRatings.map((sleep, index) => (
                <p key={index} className="text-[12px] w-[66px] text-center">
                  {sleep.label}
                </p>
              ))}
            </div>
          </div>
        )}
        {/* Specific Factors Section */}
        {selectedSleep && (
          <div className="mt-6 px-5">
            <p className="text-[14px] font-semibold">
              Did anything specific affect your mood or energy today?
            </p>
            <select
              className="w-[350px] h-[48px] mt-4 px-[20px] py-[12px]
            border border-[#DFE4EA] rounded-md text-[14px] text-[#9CA3AF] bg-white"
              value={specificFactor}
              onChange={(e) => setSpecificFactor(e.target.value)}
            >
              <option value="">Please select</option>
              {specificFactors.map((factor, index) => (
                <option key={index} value={factor}>
                  {factor}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Skin Feel Section */}
        {specificFactor && (
          <div className="mt-6 px-5">
            <p className="text-[14px] font-semibold">
              How does your skin feel this morning?
            </p>
            <div className="flex gap-2 max-w-[350px] flex-wrap mt-4 justify-center">
              {skinFeelings.map((feeling, index) => (
                <button
                  key={index}
                  className={`py-[10px] px-[14px] w-[109px] h-[42px] rounded-lg border border-[#9CA3AF] text-[14px] font-medium ${
                    selectedSkinFeel === feeling
                      ? "bg-gray-200"
                      : "bg-[#F4F7F2]"
                  }`}
                  onClick={() => setSelectedSkinFeel(feeling)}
                >
                  {feeling}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Concerns Section */}
        {selectedSkinFeel && (
          <div className="mt-6 px-5">
            <p className="text-[14px] font-semibold">
              Do you notice any specific concerns?
            </p>
            <p className="text-[14px] text-[#303030]">
              You can select more than 1 answer.
            </p>
            <div className="flex gap-2 max-w-[350px] flex-wrap mt-4 justify-center">
              {concerns.map((concern, index) => (
                <button
                  key={index}
                  className={`py-[10px] px-[14px] w-[109px] h-[42px] rounded-lg border border-[#9CA3AF] text-[#111928] text-[14px] font-medium ${
                    selectedConcerns.includes(concern)
                      ? "bg-gray-200"
                      : "bg-[#F4F7F2]"
                  }`}
                  onClick={() => toggleConcern(concern)}
                >
                  {concern}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            className={`py-[13px] px-[77px] w-[224px] h-[50px] rounded-[6px] text-[16px] opacity-${
              selectedConcerns.length > 0 ? "100" : "50"
            } text-white ${
              selectedConcerns.length > 0
                ? "bg-[#303030]"
                : "bg-[#E5E7EB] cursor-not-allowed"
            }`}
            disabled={selectedConcerns.length === 0}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
