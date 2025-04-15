import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported,  } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwlqYLp3ipOcjSHkRtiyK8-0vD5A6_5sc",
  authDomain: "prepsmart-13a27.firebaseapp.com",
  projectId: "prepsmart-13a27",
  storageBucket: "prepsmart-13a27.firebasestorage.app",
  messagingSenderId: "1080063184851",
  appId: "1:1080063184851:web:43510cd5b9341f522a6926",
  measurementId: "G-RK1GN9Q6WY"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Safe Analytics setup
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  // ✅ Only run analytics in the browser
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, db, analytics };