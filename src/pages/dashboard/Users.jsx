import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  UserElement,
  UserTableHeader,
  Pagination,
} from "../../components";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchUsers = async () => {
      try {
        const response = await customFetch.get("admin/getAllUsers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        if (response.data.data.users) {
          setUsers(response.data.data.users);
          setIsMorePages(true);
        }
        if (response.data.data.users.length === 0) setIsMorePages(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [token, isChanged, currentPage, itemsPerPage]);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setIsChanged(true);
    }
  };

  const nextPage = () => {
    if (currentPage) {
      setCurrentPage((prev) => prev + 1);
      setIsChanged(true);
    }
  };

  return (
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
            <td colSpan="8" className="p-3 text-center text-3xl">
              No users found
            </td>
          </tr>
        )}
      </PageContainer>
      {users && (
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
        />
      )}
    </div>
  );
};

export default Users;
