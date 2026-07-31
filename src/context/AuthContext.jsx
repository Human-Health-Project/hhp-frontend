/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  microsoftProvider,
} from "../firebase/config";
import { api, authToken } from "../services/api";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const normalizeUser = (user) => user ? {
    ...user,
    displayName: [user.first_name, user.last_name].filter(Boolean).join(" "),
  } : null;

  async function signup(data) {
    const response = await api.register(data);
    authToken.set(response.data.token);
    setCurrentUser(normalizeUser(response.data.user));
    return response.data;
  }

  async function login(email, password) {
    const response = await api.login({ email, password });
    authToken.set(response.data.token);
    setCurrentUser(normalizeUser(response.data.user));
    return response.data;
  }

  // Google Sign In
  function signInWithGoogle() {
    return socialSignIn(googleProvider);
  }

  // Facebook Sign In
  function signInWithFacebook() {
    return socialSignIn(facebookProvider);
  }

  // Apple Sign In
  function signInWithApple() {
    return socialSignIn(appleProvider);
  }

  // Microsoft Sign In
  function signInWithMicrosoft() {
    return socialSignIn(microsoftProvider);
  }

  async function socialSignIn(provider) {
    const result = await signInWithPopup(auth, provider);
    setCurrentUser(result.user);
    return result;
  }

  async function logout() {
    try {
      if (authToken.get()) await api.logout();
    } finally {
      authToken.clear();
      setCurrentUser(null);
    }
  }

  // Password Reset
  function resetPassword(email) {
    return api.forgotPassword(email);
  }

  useEffect(() => {
    let active = true;
    async function restoreSession() {
      if (!authToken.get()) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.me();
        if (active) setCurrentUser(normalizeUser(response.data.user));
      } catch {
        authToken.clear();
      } finally {
        if (active) setLoading(false);
      }
    }
    restoreSession();
    return () => { active = false; };
  }, []);

  const value = {
    currentUser,
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
      {!loading && children}
    </AuthContext.Provider>
  );
}
