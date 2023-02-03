// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7xs7dldRMDqpjs9Yd3RKwKR-Qc_9z7EQ",
  authDomain: "project2-react-ce7f4.firebaseapp.com",
  projectId: "project2-react-ce7f4",
  storageBucket: "project2-react-ce7f4.appspot.com",
  messagingSenderId: "490230801325",
  appId: "1:490230801325:web:eb289b5786b593a1b7b724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
