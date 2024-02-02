// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDKnNoWWXyyLz6neiYta56_5bfCv0_gdHM",
    authDomain: "web-kelas-e8215.firebaseapp.com",
    projectId: "web-kelas-e8215",
    storageBucket: "web-kelas-e8215.appspot.com",
    messagingSenderId: "1068744935047",
    appId: "1:1068744935047:web:52cfa6d81cd054224a9a22",
    measurementId: "G-1CT7LL2LTK"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();