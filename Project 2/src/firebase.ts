// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1OdxsKQmcB8hKd0IMTB_sH4HndmNnb9E",
  authDomain: "project2-react-f64c5.firebaseapp.com",
  projectId: "project2-react-f64c5",
  storageBucket: "project2-react-f64c5.appspot.com",
  messagingSenderId: "228810526547",
  appId: "1:228810526547:web:3c276520b3b3678d8e9ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app); // autentykacja
export const firebaseDb = getFirestore(app); // autoryzacja? (database)