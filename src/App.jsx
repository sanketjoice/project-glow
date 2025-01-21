import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BusinessPage from "./BusinessPage";
import SkinAnalysisPage from "./assets/components/SkinAnalysisPage";
import QuestionnaireComponent from "./assets/components/QuestionnaireComponent";
import SkinTypeComponent from "./assets/components/SkinTypeComponent";
import SkinGoalsComponent from "./assets/components/SkinGoalsComponent";
import AllergyQuestionComponent from "./assets/components/AllergyQuestionComponent";

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
