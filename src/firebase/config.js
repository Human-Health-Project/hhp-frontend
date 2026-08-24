import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARmZDM5ML9ejpgEE2ITSszxEF2Qp5BCSQ",
  authDomain: "hhp-auth.firebaseapp.com",
  projectId: "hhp-auth",
  storageBucket: "hhp-auth.firebasestorage.app",
  messagingSenderId: "900856856690",
  appId: "1:900856856690:web:85fd4901fc6c79e8fa02eb",
  measurementId: "G-XPZW5CEVQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Auth Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
export const microsoftProvider = new OAuthProvider('microsoft.com');

export default app;
