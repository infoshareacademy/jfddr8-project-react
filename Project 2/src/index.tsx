import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./providers/Auth";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Auth>
    <App />
  </Auth>
);
