// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmpwrqh81ofQZ2pX_H9eEukfuzmRgevQo",
  authDomain: "react-netflix-clone-ba0d4.firebaseapp.com",
  projectId: "react-netflix-clone-ba0d4",
  storageBucket: "react-netflix-clone-ba0d4.appspot.com",
  messagingSenderId: "872950594532",
  appId: "1:872950594532:web:c80305b74019420ef7a5f1",
  measurementId: "G-SK5L34M2L8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

