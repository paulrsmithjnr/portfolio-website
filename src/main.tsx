import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RemoteConfigComponent from "./components/RemoteConfigComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RemoteConfigComponent>
      <App />
    </RemoteConfigComponent>
  </StrictMode>
);
