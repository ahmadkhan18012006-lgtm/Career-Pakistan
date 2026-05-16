import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CareerProvider } from "./context/CareerContext.jsx";
import { ConsultingProvider } from "./context/ConsultingContext.jsx";
import { ProgressProvider } from "./context/ProgressContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CareerProvider>
          <ConsultingProvider>
            <ProgressProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ProgressProvider>
          </ConsultingProvider>
        </CareerProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
