import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authOps";
import "../styles/Register.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authData } = useSelector((state) => state.auth);
  
  useEffect(() => {
    //check if registration succeeded by looking into authData object
    //authData shld not be empty if registration succeeded
    if (JSON.stringify(authData) !== "{}") navigate("/login");
  }, [authData, navigate]);

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [formData, setFormData] = useState(() => {
    return initialState;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    setFormData(initialState);
  };

  function handleInputChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <div className="register">
      <div>
        <p>Please create your account</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="kasaija kenneth"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@email.com"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="your password"
        />

        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          value={formData.confirm_password}
          onChange={handleInputChange}
          placeholder="your password"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="redirect">
        <p>Already have an account?</p>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Register;
