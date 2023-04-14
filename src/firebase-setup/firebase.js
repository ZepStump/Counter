// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgfl2S-2H9y1LV23lH0b95pWr8ZHdW0p0",
  authDomain: "counter-72754.firebaseapp.com",
  projectId: "counter-72754",
  storageBucket: "counter-72754.appspot.com",
  messagingSenderId: "514865230527",
  appId: "1:514865230527:web:af961a51dc2c1b29548c0a",
  measurementId: "G-3X3R9CCJ2M"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = app.firestore();

export {db};