import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lanaline-97cb3.firebaseapp.com",
  projectId: "lanaline-97cb3",
  storageBucket: "lanaline-97cb3.appspot.com",
  messagingSenderId: "281813711962",
  appId: "1:281813711962:web:4d91e2d38f55139491ac63",
  measurementId: "G-QR39SQ0CTN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
