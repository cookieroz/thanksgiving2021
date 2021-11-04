import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { Loading } from "../components/loading";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password); // return a promise

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = (email) => auth.sendPasswordResetEmail(email);

  // const getAllData = async () => {
  //   try {
  //     const unsub = await auth.onAuthStateChanged((user) => {
  //       // added event listener
  //       setCurrentUser(user);
  //       // setLoading(false);
  //     });
  //     setUnsubscribe(unsub);
  //
  //   } catch (e) {
  //
  //   }
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // added event listener
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserUid: currentUser?.uid,
    signup,
    login,
    logout,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
