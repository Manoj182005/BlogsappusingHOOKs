// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8RBT0PVpZHmBRMaCVfF2WuhW97UIYek",
  authDomain: "blooging-app-b4ebf.firebaseapp.com",
  projectId: "blooging-app-b4ebf",
  storageBucket: "blooging-app-b4ebf.firebasestorage.app",
  messagingSenderId: "774617796513",
  appId: "1:774617796513:web:e0a815f79bcd334fcb85e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);