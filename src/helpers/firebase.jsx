// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHv_jNb4rWd4Gsz5dc8XBVYmxrfY0qVw",
  authDomain: "wayfinder02.firebaseapp.com",
  projectId: "wayfinder02",
  storageBucket: "wayfinder02.appspot.com",
  messagingSenderId: "453606332944",
  appId: "1:453606332944:web:2a0fd1be1893f9f2564895",
  measurementId: "G-175TRZ86PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
