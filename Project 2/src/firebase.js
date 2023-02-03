// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5NaX8nznbfJzAuZ2chlboocJ8SFZOTCc",
  authDomain: "project-addfirebase-exercise.firebaseapp.com",
  projectId: "project-addfirebase-exercise",
  storageBucket: "project-addfirebase-exercise.appspot.com",
  messagingSenderId: "278237067349",
  appId: "1:278237067349:web:8292adc3220393086a3cdc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
