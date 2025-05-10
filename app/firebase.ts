// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this import for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgoQPjYz8oujM7mDEqx4jpWV5TZkasysc",
  authDomain: "wishcube-ba253.firebaseapp.com",
  projectId: "wishcube-ba253",
  storageBucket: "wishcube-ba253.firebasestorage.app",
  messagingSenderId: "358045958296",
  appId: "1:358045958296:web:7c4ab44c0e8e31055bd0ed",
  measurementId: "G-N4K684WK74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export what you need
export { app, analytics, auth };
