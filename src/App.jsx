import React from "react";
import Navbar from "../src/assets/components/Navbar";
import HeroSection from "../src/assets/components/HeroSection";
import FeaturesSection from "../src/assets/components/FeaturesSection";
import SkinAnalysis from "./assets/components/skinAnalysis";
import ContactPage from "./assets/components/ContactPage";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SkinAnalysis />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
