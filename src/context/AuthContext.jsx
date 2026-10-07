"use client";

import { createContext, useCallback, useContext, useRef, useState, useEffect } from "react";
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
  const backendSessionRef = useRef(null);

  const establishBackendSession = useCallback(async (user, forceRefresh = false) => {
    if (backendSessionRef.current?.uid === user.uid) {
      return backendSessionRef.current.promise;
    }

    const promise = (async () => {
      try {
        const token = await user.getIdToken(forceRefresh);
        await api.establishSession(token);
        return user;
      } catch (error) {
        const sessionError = new Error("We could not complete sign-in with the HHP service. Please try again.");
        sessionError.code = "auth/backend-session-failed";
        sessionError.cause = error;
        throw sessionError;
      } finally {
        if (backendSessionRef.current?.promise === promise) {
          backendSessionRef.current = null;
        }
      }
    })();

    backendSessionRef.current = { uid: user.uid, promise };
    return promise;
  }, []);

  // Email/Password Sign Up
  async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Email/Password Login
  async function login(email, password) {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    await establishBackendSession(credential.user);
    return credential;
  }

  // Google Sign In
  async function signInWithGoogle() {
    const credential = await signInWithPopup(auth, googleProvider);
    await establishBackendSession(credential.user);
    return credential;
  }

  // Facebook Sign In
  async function signInWithFacebook() {
    const credential = await signInWithPopup(auth, facebookProvider);
    await establishBackendSession(credential.user);
    return credential;
  }

  // Apple Sign In
  async function signInWithApple() {
    const credential = await signInWithPopup(auth, appleProvider);
    await establishBackendSession(credential.user);
    return credential;
  }

  // Microsoft Sign In
  async function signInWithMicrosoft() {
    const credential = await signInWithPopup(auth, microsoftProvider);
    await establishBackendSession(credential.user);
    return credential;
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
      try {
        if (user) {
          await establishBackendSession(user);
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error("Unable to establish backend session", error);
        setCurrentUser(null);
        await signOut(auth).catch(() => undefined);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [establishBackendSession]);

  const value = {
    currentUser,
    loading,
    signup,
    establishBackendSession,
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
