// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAULRM6ab2zVCn_mCkuU-XzyEwunwa8rrE",
  authDomain: "thehungryrats-cc7cc.firebaseapp.com",
  projectId: "thehungryrats-cc7cc",
  storageBucket: "thehungryrats-cc7cc.appspot.com",
  messagingSenderId: "493572888315",
  appId: "1:493572888315:web:c5b17c8e6e2649a5b9025e",
  measurementId: "G-TQFRN8Y5GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);