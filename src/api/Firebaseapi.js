// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5mHypk7ulbl3xTQyVT9OXczg5pgSdjrg",
  authDomain: "quickshop-8aaad.firebaseapp.com",
  projectId: "quickshop-8aaad",
  storageBucket: "quickshop-8aaad.appspot.com",
  messagingSenderId: "1058504178497",
  appId: "1:1058504178497:web:95465c8760d0161d123fc0",
  measurementId: "G-HVLP8R8PHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const auth = getAuth(app);

export { auth };