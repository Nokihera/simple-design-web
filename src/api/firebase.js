// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBR3YBlPGpqt3GR07KXUZ5FelJ2aY-qK0",
  authDomain: "simple-design-web.firebaseapp.com",
  projectId: "simple-design-web",
  storageBucket: "simple-design-web.firebasestorage.app",
  messagingSenderId: "140265700960",
  appId: "1:140265700960:web:c13efab88b019cd37c0d05",
  measurementId: "G-5TKLW211N7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);