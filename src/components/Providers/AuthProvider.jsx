import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/FirebaseConfig"
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    // console.log(typeof children)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user)

  // register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // log in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  log out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // google login
  const googleLogin = () =>{
    // setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // github login
  const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  }


  // passing value
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googleLogin,
    githubLogin,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
}
export default AuthProvider;
