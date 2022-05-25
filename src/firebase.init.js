// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdF-f8LyzEL4i8gJYN5lyWyYHG7QjswEM",
    authDomain: "tradebd-manufacture.firebaseapp.com",
    projectId: "tradebd-manufacture",
    storageBucket: "tradebd-manufacture.appspot.com",
    messagingSenderId: "739046429268",
    appId: "1:739046429268:web:3bf36d78d39a0b60fa93c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
