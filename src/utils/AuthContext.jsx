/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from "react";
import BaseUrl from "./../api/baseUrl";
import PropTypes from "prop-types";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  async function logInUser(userInfo) {
    setLoading(true);
    const res = await BaseUrl.post("/api/auth/signin", userInfo, {
      withCredentials: true,
    }).catch((err) => {
      console.log(err);
    });
    console.log(res);
    setLoading(false);
  }
  function registerUser(userInfo) {}
  function logOutUser() {}
  function checkUserStatus() {}

  const contextData = {
    user,
    logInUser,
    registerUser,
    logOutUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading.......</p> : children}
    </AuthContext.Provider>
  );
}

//prop validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
