import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use createRoot to render the application
const reactRoot = createRoot(root);
reactRoot.render(rootElement);
