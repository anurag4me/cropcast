import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PredictionProvider from "./context/Prediction";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <PredictionProvider>
        <App />
      </PredictionProvider>
    </ThemeProvider>
  </React.StrictMode>
);
