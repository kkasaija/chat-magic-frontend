/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {
  // const initialState = {
  //   email: "",
  //   password: "",
  // };

  const navigate = useNavigate();
  const { user, logInUser } = useAuth();

  const loginForm = useRef();

  useEffect(() => {
    if (user) navigate("/");
  });

  // const [formData, setFormData] = useState(() => {
  //   return initialState;
  // });

  // function handleInputChange(e) {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;
    const userInfo = { email, password };
    logInUser(userInfo);
  };

  return (
    <div className="login">
      <div>
        <p>Please enter your login credentials</p>
      </div>
      <form ref={loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleInputChange}
          placeholder="example@email.com"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          // value={formData.password}
          // onChange={handleInputChange}
          placeholder="**************"
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
