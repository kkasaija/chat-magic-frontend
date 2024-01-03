import { Outlet, Navigate } from "react-router-dom";
import UserAuth from "../context/UserAuth";

const PrivateRoutes = () => {
  const { user } = UserAuth();
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
