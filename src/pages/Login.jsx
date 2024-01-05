/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import UserAuth from "../context/UserAuth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {
  const { userInfo, logInUser, setUserInfo } = UserAuth();
  const navigate = useNavigate();
  const initialState = { email: "", password: "" };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      navigate("/");
    }
  }, [navigate, userInfo.isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo((prevState) => ({ ...prevState, logInInfo: formData }));
    logInUser();
    setFormData(initialState);
  };

  function handleInputChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <div className="login">
      <div>
        <p>Please enter your login credentials</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@email.com"
          autoComplete="on"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="your password"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="redirect">
        <p>Don&apos;t have an account yet?</p>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
