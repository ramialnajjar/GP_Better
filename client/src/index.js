import React from "react";
import { createRoot } from "react-dom/client";

// Third party
import { BrowserRouter } from "react-router-dom";

// Project imports
import App from "./App";

// Context
import { AppProvider } from "./Common/Context/AppContext";

// Style, Assets
import config from "./Common/Data/config";
import "./Assets/Styles/Style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
