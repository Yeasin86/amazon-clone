import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    setUser,
    register,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
