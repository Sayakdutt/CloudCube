// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_apiKey,
  authDomain: process.env.NEXT_FIREBASE_authDomain,
  projectId: process.env.NEXT_FIREBASE_projectId,
  storageBucket: process.env.NEXT_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_FIREBASE_appId,
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}