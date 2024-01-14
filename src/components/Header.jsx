import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authOps";
import "../styles/Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login" onClick={() => dispatch(logOutUser())}>
              Logout
            </Link>
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
