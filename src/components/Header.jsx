import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={logOut}>Logout</button>
        </>
      </div>
    </div>
  );
};

export default Header;
