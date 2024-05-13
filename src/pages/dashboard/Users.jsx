import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAllUsers } from "../../store/adminSlice";

import {
  PageIntro,
  PageContainer,
  UserElement,
  UserTableHeader,
} from "../../components";

const Users = () => {
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const { token } = useSelector((state) => state.userReducers);
  const { users, isLoading, error } = useSelector(
    (state) => state.adminReducers
  );

  useEffect(() => {
    setIsChanged(false);
    dispatch(getAllUsers());
  }, [dispatch, isChanged]);
  return (
    <>
      <div className="p-5">
        <PageIntro pageName="Users" />
        <PageContainer tableHeader=" Users">
          <UserTableHeader />
          {users &&
            users.map((user, index) => (
              <UserElement
                index={index + 1}
                key={user._id}
                user={user}
                token={token}
                setIsChanged={setIsChanged}
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
        </PageContainer>
      </div>
    </>
  );
};

export default Users;
