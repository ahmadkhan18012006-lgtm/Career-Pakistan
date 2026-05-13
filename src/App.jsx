import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import FieldsPage from "./pages/FieldsPage.jsx";
import RoadmapPage from "./pages/RoadmapPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import InsightsPage from "./pages/InsightsPage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fields" element={<FieldsPage />} />
          <Route path="/roadmaps" element={<RoadmapPage />} />
          <Route path="/roadmaps/:fieldId" element={<RoadmapPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
