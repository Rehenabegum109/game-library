// src/Components/Provider/AuthProvider.jsx
import React, { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); // user info সব এখানে
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Email/Password login
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Email/Password register
  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Logout
  const logout = () => {
  return signOut(auth)
    
};

  // Reset Password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // Update Profile
  const updateUserProfile = (name, photoURL) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, { displayName: name, photoURL })
      .then(() => setUser({ ...auth.currentUser, displayName: name, photoURL })) // user info update
      .catch(err => console.error(err));
  };

  // Google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then(result => setUser(result.user))
      .catch(err => console.error(err));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, resetPassword, updateUserProfile, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
