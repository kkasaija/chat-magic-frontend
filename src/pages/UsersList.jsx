import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../features/user/userOps";
import User from "./User";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading)
    return (
      <div>
        <p>Fetching data.........</p>
      </div>
    );

  return (
    <>
      <div>
        <h3>List of registered users</h3>
      </div>
      <div>
        {users && users.map((user) => <User key={user._id} user={user} />)}
      </div>
    </>
  );
};

export default UsersList;
