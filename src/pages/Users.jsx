import UserContainer from "../layout/dashboard/UserContainer";
import UserTableHeader from "../layout/dashboard/UserTableHeader";
import UserELement from "../layout/dashboard/UserELement";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "./../store/adminSlice";

function Users() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userReducers);
  const { users, isLoading, error } = useSelector(
    (state) => state.adminReducers
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Users</span>
        </h1>

        <UserContainer>
          <UserTableHeader />
          {users &&
            users.map((user, index) => (
              <UserELement
                index={index + 1}
                key={user._id}
                user={user}
                token={token}
              />
            ))}

          {/*  if no users */}
          {users.length === 0 && (
            <tr>
              <td colSpan="8" className="p-3 text-center">
                No users found
              </td>
            </tr>
          )}

          {/*  if loading */}
          {isLoading && (
            <tr>
              <td colSpan="8" className="p-3 text-center">
                Loading...
              </td>
            </tr>
          )}

          {/*  if error */}
          {error && (
            <tr>
              <td colSpan="8" className="p-3 text-center">
                {error}
              </td>
            </tr>
          )}
        </UserContainer>
      </div>
    </>
  );
}

export default Users;
