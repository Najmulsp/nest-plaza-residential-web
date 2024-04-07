// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHBYsJj50PRfLro3BY2M-06GLbmXVWZW0",
  authDomain: "nest-plaza-residential-web.firebaseapp.com",
  projectId: "nest-plaza-residential-web",
  storageBucket: "nest-plaza-residential-web.appspot.com",
  messagingSenderId: "1020238202109",
  appId: "1:1020238202109:web:d4a638853d2eeb91136a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;