import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BusinessPage from "./BusinessPage";
import SkinAnalysisPage from "./assets/components/SkinAnalysisPage";
import QuestionnaireComponent from "./assets/components/QuestionnaireComponent";
import SkinTypeComponent from "./assets/components/SkinTypeComponent";
import SkinGoalsComponent from "./assets/components/SkinGoalsComponent";
import AllergyQuestionComponent from "./assets/components/AllergyQuestionComponent";
import AllergiesComponent from "./assets/components/AllergiesComponent";
import SkinConditionsComponent from "./assets/components/SkinConditionsComponent";
import IngredientPreferences from "./assets/components/IngredientPreferences";
import MedQuestions from "./assets/components/MedQuestions";
import { GenderProvider } from "./assets/components/GenderContext";
import PregnancyQuestion from "./assets/components/PregnancyQuestion";
import HormonalChanges from "./assets/components/HormonalChanges";
import AllSet from "./assets/components/AllSet";
import DateEstimation from "./assets/components/DateEstimation";
import Login from "./assets/components/Login";
import Signup from "./assets/components/signup";
import Signin from "./assets/components/Signin";
import Congratulations from "./assets/components/Congratulations";
import AIAnalysis from "./assets/components/AIAnalysis";
import FirstBadge from "./assets/components/FirstBadge";
import OverallScore from "./assets/components/OverallScore";
import PerceivedSkinAge from "./assets/components/PercievedSkinAge";
import FacialSkinAnalysisResult from "./assets/components/FacialSkinAnalysisResult";
import AnalysisInfo from "./assets/components/AnalysisInfo";
import WrinklesSection from "./assets/components/WrinklesSection";
import Retinoids from "./assets/components/Retinoids";
import VitaminC from "./assets/components/VitaminC";
import SkinCareInsights from "./assets/components/SkinCareInsights";


function App() {
  return (
      <GenderProvider>  
    <Router>
      <div className="bg-white">
        <Routes>
          <Route path="/project-glow" element={<LandingPage />} />
          <Route path="/project-glow/business" element={<BusinessPage />} />
          <Route path="/project-glow/skin-analysis" element={<SkinAnalysisPage />} />
          <Route path="/project-glow/QuestionnaireComponent" element={<QuestionnaireComponent />} />
          <Route path="/project-glow/skin-type" element={<SkinTypeComponent />} />
          <Route path="/project-glow/skin-goals" element={<SkinGoalsComponent />} />
          <Route path="/project-glow/allergyqs" element={<AllergyQuestionComponent />} />
          <Route path="/project-glow/allergies" element={<AllergiesComponent />} />
          <Route path="/project-glow/skinconditions" element={<SkinConditionsComponent />} />
          <Route path="/project-glow/ingredients" element={<IngredientPreferences />} />
          <Route path="/project-glow/medqs" element={<MedQuestions />} />
          <Route path="/project-glow/pregnancy-question" element={<PregnancyQuestion />} />
          <Route path="/project-glow/hormonal" element={<HormonalChanges />}/>
          <Route path="/project-glow/allset" element={<AllSet />}/>
          <Route path="/project-glow/estimation" element={<DateEstimation />}/>
          <Route path="/project-glow/login" element={<Login />}/>
          <Route path="/project-glow/signup" element={<Signup />}/>
          <Route path="/project-glow/signin" element={<Signin />}/>
          <Route path="/project-glow/congo" element={<Congratulations />}/>
          <Route path="/project-glow/aianalysis" element={<AIAnalysis />}/>
          <Route path="/project-glow/badge" element={<FirstBadge />}/>
          <Route path="/project-glow/overall" element ={<OverallScore />}/>
          <Route path="/project-glow/confetti" element={<PerceivedSkinAge />}/>
          <Route path="/project-glow/analysisresult" element={<FacialSkinAnalysisResult />}/>
          <Route path="/project-glow/info" element={<AnalysisInfo />}/>
          <Route path="/project-glow/wrinkles" element={<WrinklesSection />}/>
          <Route path="/project-glow/retinoids" element={<Retinoids />}/>
          <Route path="/project-glow/vitaminc" element={<VitaminC />}/>
          <Route path="/project-glow/text" element={<SkinCareInsights />}/>
        </Routes>
      </div>
    </Router>
        </GenderProvider>
  );
}

export default App;
