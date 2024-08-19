// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2va6yW6qe8zMRn-KB_hbEeZ1kMcYmr8w",
  authDomain: "kelassahransma.firebaseapp.com",
  projectId: "kelassahransma",
  storageBucket: "kelassahransma.appspot.com",
  messagingSenderId: "254537512036",
  appId: "1:254537512036:web:41aced672f8f8be6f01b71",
  measurementId: "G-RDMYWXT03N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
