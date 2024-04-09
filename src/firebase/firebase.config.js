// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWafDI1pwjkjKWFHNNH8rjtAT2s6T3rww",
  authDomain: "react-dragon-news-74600.firebaseapp.com",
  projectId: "react-dragon-news-74600",
  storageBucket: "react-dragon-news-74600.appspot.com",
  messagingSenderId: "540210702694",
  appId: "1:540210702694:web:9870f882240f7eea1c40a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;