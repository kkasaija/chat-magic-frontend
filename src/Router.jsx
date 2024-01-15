/* eslint-disable no-unused-vars */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UsersList from "./pages/UsersList";
import PrivateRoutes from "./components/PrivateRoutes";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UsersList />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

export default router;
