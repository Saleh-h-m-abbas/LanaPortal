import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lanaline-7e4d5.firebaseapp.com",
  projectId: "lanaline-7e4d5",
  storageBucket: "lanaline-7e4d5.appspot.com",
  messagingSenderId: "643879285827",
  appId: "1:643879285827:web:3c8c315de8ad92ec1a90f6",
  measurementId: "G-J32RR3E86F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
