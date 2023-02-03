// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgWgNvTgX8g4T9My1dOS0EwIDOqdXwjg",
  authDomain: "project2-2e02c.firebaseapp.com",
  projectId: "project2-2e02c",
  storageBucket: "project2-2e02c.appspot.com",
  messagingSenderId: "813147697135",
  appId: "1:813147697135:web:1ea6610677b228ce0c501a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebaseDb = getFirestore(app);
export default app;
