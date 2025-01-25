// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV3ycTNXHYMy3AeKvtSj3jZstUPTmPjHo",
  authDomain: "project-glow-2cc22.firebaseapp.com",
  projectId: "project-glow-2cc22",
  storageBucket: "project-glow-2cc22.firebasestorage.app",
  messagingSenderId: "866888335031", 
  appId: "1:866888335031:web:aacd53f78855360a3d5732"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);