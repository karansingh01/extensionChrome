// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { addDoc, collection, Firestore } from "@firebase/firestore"
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ17Za5ah0sXy3ug0aC5IPq7q4VeyTuHA",
  authDomain: "xtension-5aefa.firebaseapp.com",
  projectId: "xtension-5aefa",
  storageBucket: "xtension-5aefa.appspot.com",
  messagingSenderId: "1012697927808",
  appId: "1:1012697927808:web:8abcbcd547fddf46689665",
  measurementId: "G-BVD6B6ZMTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
