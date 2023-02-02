import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./providers/Auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Auth>
    <App />
  </Auth>
);
