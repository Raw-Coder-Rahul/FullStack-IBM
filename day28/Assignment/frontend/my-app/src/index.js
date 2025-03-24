import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css"; // Include your custom styles

const root = createRoot(document.getElementById("root"));
root.render(<App />);
