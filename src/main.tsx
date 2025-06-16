import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router";

import "@fontsource/barlow/index.css";
import "./assets/fonts/stylesheet.css";

// Year's theme fonts
import "@fontsource/sancreek/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
