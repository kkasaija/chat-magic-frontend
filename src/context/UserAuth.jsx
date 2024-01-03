/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from "react";
import BaseUrl from "../api/baseUrl";
import PropTypes from "prop-types";

const AuthContext = createContext();
const UserAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);

  const getLoggedIn = async () => {
    const res = await BaseUrl.get("/api/auth/loggedin").catch((err) => {
      setLoggedIn(err.message);
    });
    setLoggedIn(res.data);
  };

  useEffect(() => {
    getLoggedIn;
  }, []);

  const contextData = {
    loggedIn,
    setLoggedIn,
    getLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

//prop validation
AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContextProvider };
export default UserAuth;
