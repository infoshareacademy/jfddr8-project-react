import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: 'AIzaSyDxeJo_6Te8RPZSa_z54BLCConchTKQuvE',
	authDomain: 'project2-react-2d441.firebaseapp.com',
	projectId: 'project2-react-2d441',
	storageBucket: 'project2-react-2d441.appspot.com',
	messagingSenderId: '609606288420',
	appId: '1:609606288420:web:b85cb015e0cb467e6a84b1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);