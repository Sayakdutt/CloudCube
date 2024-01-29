// Import the functions you need from the SDKs you need
import { getApp, getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq3WP0Qn0EAJLIaV5wrOuleTaSzkdvJi4",
  authDomain: "cloudcube-637d9.firebaseapp.com",
  projectId: "cloudcube-637d9",
  storageBucket: "cloudcube-637d9.appspot.com",
  messagingSenderId: "179693374688",
  appId: "1:179693374688:web:cf08969c699ea1e9e69485",
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}