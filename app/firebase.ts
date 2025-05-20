import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgoQPjYz8oujM7mDEqx4jpWV5TZkasysc",
  authDomain: "wishcube-ba253.firebaseapp.com",
  projectId: "wishcube-ba253",
  storageBucket: "wishcube-ba253.appspot.com", // ✅ fixed bucket domain
  messagingSenderId: "358045958296",
  appId: "1:358045958296:web:7c4ab44c0e8e31055bd0ed",
  measurementId: "G-N4K684WK74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore Database
const db = getFirestore(app); // ✅ Setup Firestore

// Conditionally initialize Firebase Analytics
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export what you need
export { app, auth, db, analytics }; // ✅ Export db
