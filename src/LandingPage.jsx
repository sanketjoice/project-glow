import Navbar from "../src/assets/components/Navbar";
import HeroSection from "../src/assets/components/HeroSection";
import FeaturesSection from "../src/assets/components/FeaturesSection";
import SkinAnalysis from "./assets/components/skinAnalysis";
import ContactPage from "./assets/components/ContactPage";
import Footer from "./assets/components/Footer";
import BenefitsPage from "./assets/components/BenefitsPage";

export default function LandingPage(){
    console.log("LandingPage rendered");

    return(
        <>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <SkinAnalysis />
        <BenefitsPage />
        <ContactPage />
        <Footer />
        </>
    )
}

