import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { getAuth, signOut } from 'firebase/auth';
import { onAuthStateChanged, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';




 const auth =getAuth(app)
 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
       const googleProvider = new GoogleAuthProvider();

   const createUser = async (email, password, name, photo) => {
    // setLoading(true);
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
    // setLoading(false);
    return result.user;
  };

         // Google Login Function
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

        const loginUser = (email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password);

  };

    const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => unsubscribe();
  }, []);

  const authInfo ={
    user,
     createUser,
    logOut,
    loginUser,
    googleLogin
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

