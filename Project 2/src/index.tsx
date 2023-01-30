import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./Providers/Auth";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  // <React.StrictMode>
    <Auth>
      <App />
    </Auth>
  // </React.StrictMode>
);
