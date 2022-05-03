// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmNngPt3VB6Qmtv2ziBPnErNQqhH-AlWg",
  authDomain: "wheel-wave.firebaseapp.com",
  projectId: "wheel-wave",
  storageBucket: "wheel-wave.appspot.com",
  messagingSenderId: "481255529388",
  appId: "1:481255529388:web:adb813f058a5e3d6c0f809",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
