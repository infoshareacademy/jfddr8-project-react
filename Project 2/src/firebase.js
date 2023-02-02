// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjhUSWOoakkA7QHA9jacg6AXs9TJclbtQ",
  authDomain: "project2-react-d7910.firebaseapp.com",
  projectId: "project2-react-d7910",
  storageBucket: "project2-react-d7910.appspot.com",
  messagingSenderId: "734824875318",
  appId: "1:734824875318:web:91ed7cf8a8018dfb895f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app