import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CareerProvider } from "./context/CareerContext.jsx";
import { ProgressProvider } from "./context/ProgressContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CareerProvider>
          <ProgressProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ProgressProvider>
        </CareerProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
