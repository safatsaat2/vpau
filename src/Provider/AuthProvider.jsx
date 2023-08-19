import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logOut = () => {
      return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)
          console.log("current User", currentUser)
    
          return () => {
            
            return unsubscribe()
          }
        })
      },[])

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    

    const authInfo = {
        signIn,
        user,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;