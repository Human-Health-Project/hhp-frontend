"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  microsoftProvider,
} from "../firebase/config";
import { api } from "../services/api";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email/Password Sign Up
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Email/Password Login
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google Sign In
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // Facebook Sign In
  function signInWithFacebook() {
    return signInWithPopup(auth, facebookProvider);
  }

  // Apple Sign In
  function signInWithApple() {
    return signInWithPopup(auth, appleProvider);
  }

  // Microsoft Sign In
  function signInWithMicrosoft() {
    return signInWithPopup(auth, microsoftProvider);
  }

  // Logout
  async function logout() {
    const token = await auth.currentUser?.getIdToken();

    if (token) {
      await api.logout(token).catch(() => undefined);
    }

    return signOut(auth);
  }

  // Password Reset
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const token = await user.getIdToken();
        await api.establishSession(token).catch((error) => {
          console.error("Unable to establish backend session", error);
        });
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
    signInWithMicrosoft,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
