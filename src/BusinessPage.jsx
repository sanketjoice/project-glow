import React from "react";
import BPNavbar from "./assets/components/BPNavbar";
import BPHeroSection from "./assets/components/BPHeroSection";
import BPSkinAnalysis from "./assets/components/BPSkinAnalysis";
import BPFeaturesSection from "./assets/components/BPFeaturesSection";
import BPTransformativeResultsSection from "./assets/components/BPAccuracy";
import RecommendationSection from "./assets/components/RecommendationSection";
import BPPricingSection from "./assets/components/BPPricingSection";
import BPFooter from "./assets/components/BPFooter";

function BusinessPage() {
  return (
    <>
      <BPNavbar />
      <BPHeroSection />
      <BPSkinAnalysis />
      <BPFeaturesSection />
      <BPTransformativeResultsSection />
      <RecommendationSection />
      <BPPricingSection />
      <BPFooter />
    </>
  );
}

export default BusinessPage;
