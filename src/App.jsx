import React from "react";
import Navbar from "../src/assets/components/Navbar";
import HeroSection from "../src/assets/components/HeroSection";
import FeaturesSection from "../src/assets/components/FeaturesSection";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default App;
