import { Outlet, Navigate } from "react-router-dom";
import UserAuth from "../context/UserAuth";

const PrivateRoutes = () => {
  const { userInfo } = UserAuth();
  console.log("userInfo: ",userInfo)
  return userInfo.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
