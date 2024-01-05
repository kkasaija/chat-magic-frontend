/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from "react";
import BaseUrl from "../api/baseUrl";
import PropTypes from "prop-types";

const AuthContext = createContext();
const UserAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const initialState = {
    user: null,
    isLoggedIn: false,
    error: {},
    logInInfo: {},
  };
  const [userInfo, setUserInfo] = useState(() => initialState);

  //check if user is loggedin When the app starts and when the user sends signin request
  const checkUserStatus = async () => {
    try {
      const res = await BaseUrl.get("/api/auth/loggedin");
      setUserInfo((prevState) => ({ ...prevState, isLoggedIn: res.data }));
    } catch (err) {
      setUserInfo((prevState) => ({ ...prevState, error: err.response }));
    }
  };

  //send log in request to server
  const logInUser = async () => {
    setLoading(true);
    try {
      const res = await BaseUrl.post("/api/auth/signin", userInfo.logInInfo);
      setUserInfo((prevState) => ({ ...prevState, user: res.data }));
    } catch (error) {
      setUserInfo((prevState) => ({ ...prevState, error }));
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
    checkUserStatus();
  }, [userInfo.logInInfo]);

  //logout user
  const logOutUser = async () => {
    try {
      await BaseUrl.get("/api/auth/signout");
      setUserInfo((prevState) => ({
        ...prevState,
        user: initialState.user,
        isLoggedIn: initialState.isLoggedIn,
      }));
    } catch (err) {
      setUserInfo((prevState) => ({ ...prevState, error: err.response }));
    }
  };

  const contextData = {
    loading,
    userInfo,
    logInUser,
    setUserInfo,
    logOutUser,
    checkUserStatus,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading.........</p> : children}
    </AuthContext.Provider>
  );
};

//prop validation
AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContextProvider };
export default UserAuth;
