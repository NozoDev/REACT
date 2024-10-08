import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HookApp } from "./HookApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookApp />
  </StrictMode>
);
