import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import ProtectedRoute from "../components/common/ProtectedRoute.jsx";
import Skeleton from "../components/ui/Skeleton.jsx";

const LandingPage = lazy(() => import("../pages/LandingPage.jsx"));
const FieldsPage = lazy(() => import("../pages/FieldsPage.jsx"));
const RoadmapPage = lazy(() => import("../pages/RoadmapPage.jsx"));
const DashboardPage = lazy(() => import("../pages/DashboardPage.jsx"));
const InsightsPage = lazy(() => import("../pages/InsightsPage.jsx"));
const QuizPage = lazy(() => import("../pages/QuizPage.jsx"));
const ComparePage = lazy(() => import("../pages/ComparePage.jsx"));
const CompaniesPage = lazy(() => import("../pages/CompaniesPage.jsx"));
const ProfilePage = lazy(() => import("../pages/ProfilePage.jsx"));
const PremiumPage = lazy(() => import("../pages/PremiumPage.jsx"));
const AuthPages = lazy(() => import("../pages/AuthPage.jsx"));
const MentorshipPage = lazy(() => import("../pages/MentorshipPage.jsx"));
const MySessionsPage = lazy(() => import("../pages/MySessionsPage.jsx"));
const HiringEcosystemPage = lazy(() => import("../pages/HiringEcosystemPage.jsx"));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fields" element={<FieldsPage />} />
          <Route path="/roadmaps" element={<RoadmapPage />} />
          <Route path="/roadmaps/:fieldId" element={<RoadmapPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/login" element={<AuthPages mode="login" />} />
          <Route path="/signup" element={<AuthPages mode="signup" />} />
          <Route path="/forgot-password" element={<AuthPages mode="forgot" />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/premium" element={<ProtectedRoute><PremiumPage /></ProtectedRoute>} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/sessions" element={<MySessionsPage />} />
          <Route path="/hiring" element={<HiringEcosystemPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function RouteLoading() {
  return (
    <div className="container-page py-16">
      <Skeleton className="h-10 w-72" />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
    </div>
  );
}
