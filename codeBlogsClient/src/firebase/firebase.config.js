// require('dotenv').config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID

    apiKey: "AIzaSyALmhoS8QzDXE1DkHtxp06AlL4XpwvHrf4",
    authDomain: "code-blogs-8ff17.firebaseapp.com",
    projectId: "code-blogs-8ff17",
    storageBucket: "code-blogs-8ff17.firebasestorage.app",
    messagingSenderId: "587349843997",
    appId: "1:587349843997:web:2521dd70272504e04966f4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;