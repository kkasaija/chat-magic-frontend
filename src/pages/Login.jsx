import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInUser } from "../features/auth/authOps";
import "../styles/Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const initialState = { email: "", password: "" };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(formData));
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
