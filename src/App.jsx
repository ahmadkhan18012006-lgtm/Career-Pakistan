import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background transition-colors duration-300 dark:bg-slate-950">
      <ErrorBoundary>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ErrorBoundary>
    </div>
  );
}
