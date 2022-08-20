// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQOwfnIZKiQKAPhWAWNXhMVn98eKmH3a4",
  authDomain: "vendly-84755.firebaseapp.com",
  projectId: "vendly-84755",
  storageBucket: "vendly-84755.appspot.com",
  messagingSenderId: "533370382022",
  appId: "1:533370382022:web:dce423577d6deb239899c7",
  measurementId: "G-KSJJKQCQQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);