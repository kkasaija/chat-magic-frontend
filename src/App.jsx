import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { logInStatusCheck } from "./features/auth/authOps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logInStatusCheck());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
