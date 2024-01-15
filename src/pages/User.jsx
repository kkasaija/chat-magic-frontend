import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  console.log(user)
  return (
    <>
      <Link>
        <div>{user.name}</div>
      </Link>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
