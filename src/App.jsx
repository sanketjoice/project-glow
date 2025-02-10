import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GenderProvider } from "./assets/components/GenderContext";

// Lazy-loaded authentication components
const Login = lazy(() => import("./assets/components/Login"));
const Signup = lazy(() => import("./assets/components/Signup"));
const Signin = lazy(() => import("./assets/components/Signin"));
const Congratulations = lazy(() =>
  import("./assets/components/Congratulations")
);

// Lazy-loaded analysis components
const SkinAnalysisPage = lazy(() =>
  import("./assets/components/SkinAnalysisPage")
);
const AIAnalysis = lazy(() => import("./assets/components/AIAnalysis"));
const FirstBadge = lazy(() => import("./assets/components/FirstBadge"));
const OverallScore = lazy(() => import("./assets/components/OverallScore"));
const PerceivedSkinAge = lazy(() =>
  import("./assets/components/PercievedSkinAge")
);
const FacialSkinAnalysisResult = lazy(() =>
  import("./assets/components/FacialSkinAnalysisResult")
);
const AnalysisInfo = lazy(() => import("./assets/components/AnalysisInfo"));
const WrinklesSection = lazy(() =>
  import("./assets/components/WrinklesSection")
);

// Lazy-loaded user profile components
const UserProfileHome = lazy(() =>
  import("./assets/components/UserProfileHome")
);
const MyAccount = lazy(() => import("./assets/components/MyAccount"));
const ComprehensiveLevel = lazy(() =>
  import("./assets/components/ComprehensiveLevel")
);
const Subscription = lazy(() => import("./assets/components/Subscription"));
const MyShelf = lazy(() => import("./assets/components/Myshelf"));

// Lazy-loaded questionnaire components
const QuestionnaireComponent = lazy(() =>
  import("./assets/components/QuestionnaireComponent")
);
const SkinTypeComponent = lazy(() =>
  import("./assets/components/SkinTypeComponent")
);
const SkinGoalsComponent = lazy(() =>
  import("./assets/components/SkinGoalsComponent")
);
const AllergyQuestionComponent = lazy(() =>
  import("./assets/components/AllergyQuestionComponent")
);
const AllergiesComponent = lazy(() =>
  import("./assets/components/AllergiesComponent")
);
const SkinConditionsComponent = lazy(() =>
  import("./assets/components/SkinConditionsComponent")
);
const IngredientPreferences = lazy(() =>
  import("./assets/components/IngredientPreferences")
);
const MedQuestions = lazy(() => import("./assets/components/MedQuestions"));
const PregnancyQuestion = lazy(() =>
  import("./assets/components/PregnancyQuestion")
);
const HormonalChanges = lazy(() =>
  import("./assets/components/HormonalChanges")
);
const AllSet = lazy(() => import("./assets/components/AllSet"));
const DateEstimation = lazy(() => import("./assets/components/DateEstimation"));

// Lazy-loaded dashboard and tracking components
const Home = lazy(() => import("./assets/components/Home"));
const Checkin = lazy(() => import("./assets/components/Checkin"));
const SkinAnalysisHome = lazy(() =>
  import("./assets/components/SkinAnalysisHome")
);
const DailyTracker = lazy(() => import("./assets/components/DailyTracker"));
const BasicTracker = lazy(() => import("./assets/components/BasicTracker"));

// Other components
const LandingPage = lazy(() => import("./LandingPage"));
const BusinessPage = lazy(() => import("./BusinessPage"));
const Retinoids = lazy(() => import("./assets/components/Retinoids"));
const VitaminC = lazy(() => import("./assets/components/VitaminC"));
const SkinCareInsights = lazy(() =>
  import("./assets/components/SkinCareInsights")
);

function App() {
  return (
    <GenderProvider>
      <Router>
        <div className="bg-white">
          <Suspense
            fallback={<div className="text-center p-5">Loading...</div>}
          >
            <Routes>
              {/* Public routes */}
              <Route path="/project-glow" element={<LandingPage />} />
              <Route path="/project-glow/business" element={<BusinessPage />} />

              {/* Authentication routes */}
              <Route path="/project-glow/login" element={<Login />} />
              <Route path="/project-glow/signup" element={<Signup />} />
              <Route path="/project-glow/signin" element={<Signin />} />
              <Route path="/project-glow/congo" element={<Congratulations />} />

              {/* Analysis routes */}
              <Route
                path="/project-glow/skin-analysis"
                element={<SkinAnalysisPage />}
              />
              <Route path="/project-glow/aianalysis" element={<AIAnalysis />} />
              <Route path="/project-glow/badge" element={<FirstBadge />} />
              <Route path="/project-glow/overall" element={<OverallScore />} />
              <Route
                path="/project-glow/confetti"
                element={<PerceivedSkinAge />}
              />
              <Route
                path="/project-glow/analysisresult"
                element={<FacialSkinAnalysisResult />}
              />
              <Route path="/project-glow/info" element={<AnalysisInfo />} />
              <Route
                path="/project-glow/wrinkles"
                element={<WrinklesSection />}
              />

              {/* Questionnaire routes */}
              <Route
                path="/project-glow/QuestionnaireComponent"
                element={<QuestionnaireComponent />}
              />
              <Route
                path="/project-glow/skin-type"
                element={<SkinTypeComponent />}
              />
              <Route
                path="/project-glow/skin-goals"
                element={<SkinGoalsComponent />}
              />
              <Route
                path="/project-glow/allergyqs"
                element={<AllergyQuestionComponent />}
              />
              <Route
                path="/project-glow/allergies"
                element={<AllergiesComponent />}
              />
              <Route
                path="/project-glow/skinconditions"
                element={<SkinConditionsComponent />}
              />
              <Route
                path="/project-glow/ingredients"
                element={<IngredientPreferences />}
              />
              <Route path="/project-glow/medqs" element={<MedQuestions />} />
              <Route
                path="/project-glow/pregnancy-question"
                element={<PregnancyQuestion />}
              />
              <Route
                path="/project-glow/hormonal"
                element={<HormonalChanges />}
              />
              <Route path="/project-glow/allset" element={<AllSet />} />
              <Route
                path="/project-glow/estimation"
                element={<DateEstimation />}
              />

              {/* User profile routes */}
              <Route
                path="/project-glow/userprofile"
                element={<UserProfileHome />}
              />
              <Route path="/project-glow/myaccount" element={<MyAccount />} />
              <Route
                path="/project-glow/comprehensivelevel"
                element={<ComprehensiveLevel />}
              />
              <Route
                path="/project-glow/subscription"
                element={<Subscription />}
              />
              <Route path="/project-glow/myshelf" element={<MyShelf />} />

              {/* Dashboard and tracking routes */}
              <Route path="/project-glow/home" element={<Home />} />
              <Route path="/project-glow/checkin" element={<Checkin />} />
              <Route
                path="/project-glow/skinanlysishome"
                element={<SkinAnalysisHome />}
              />
              <Route
                path="/project-glow/dailytracker"
                element={<DailyTracker />}
              />
              <Route
                path="/project-glow/basictracker"
                element={<BasicTracker />}
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </GenderProvider>
  );
}

export default App;
