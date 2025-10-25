
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

  const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  


  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); 
      
    });
    return () => unsubscribe();
  }, []);

  // Email/Password login
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Email/Password register
  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

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
      .then(() => setUser({ ...auth.currentUser, displayName: name, photoURL })) 
      .catch(err => console.error(err));
  };

  // Google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      
  };

  return (
    <AuthContext.Provider value={{ user,  login, createUser, logout, resetPassword, updateUserProfile, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
