import React, { createContext, useEffect, useState } from 'react';
import {  sendPasswordResetEmail, signOut } from 'firebase/auth';
import { onAuthStateChanged, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config.js';







 
 export const AuthContext = createContext(null);
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  console.log(auth)
      const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
       

   const createUser = async (email, password, name, photo) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result.user) {
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      setUser({
        ...result.user,
        displayName: name,
        photoURL: photo,
      });
    }
     setLoading(false);
  };

         // Google Login Function
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

        const loginUser = (email, password) => {
    
          setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    // .finally(() => setLoading(false));

  };

    const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
      
    });
    return () => unsubscribe();
  }, []);

  const authInfo ={
    user,
     createUser,
    logOut,
    loginUser,
    loading,
    googleLogin,
    resetPassword
  }

   
    return (
        <div>
              <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;


