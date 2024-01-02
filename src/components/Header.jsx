import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "../styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const logOut = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logOut}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
