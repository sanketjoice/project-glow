import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import BusinessPage from "./BusinessPage";
import SkinAnalysisPage from "./assets/components/SkinAnalysisPage";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Routes>
          <Route path="/project-glow" element={<LandingPage />} />
          <Route path="/project-glow/business" element={<BusinessPage />} />
          <Route path="/project-glow/skin-analysis" element={<SkinAnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
