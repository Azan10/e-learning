
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCscE6mNP0iN5BRXq_lMo-bg33RtOXyuig",
  authDomain: "e-learning-a9a1b.firebaseapp.com",
  projectId: "e-learning-a9a1b",
  storageBucket: "e-learning-a9a1b.appspot.com",
  messagingSenderId: "493818853195",
  appId: "1:493818853195:web:a56f21914e835275e39ace",
  measurementId: "G-7KY1KJHBNC",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db = getDatabase();

export {db,app,auth}