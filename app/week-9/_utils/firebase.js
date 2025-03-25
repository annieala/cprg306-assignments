// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpy_HnnXgQRczXARZQRhbqIZEcs5p0LY",
  authDomain: "cprg-306-assignments-ef1be.firebaseapp.com",
  projectId: "cprg-306-assignments-ef1be",
  storageBucket: "cprg-306-assignments-ef1be.firebasestorage.app",
  messagingSenderId: "195816641164",
  appId: "1:195816641164:web:e7fef90054e042c57ee1a9"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log('FIREBASE CONFIG:', firebaseConfig);
