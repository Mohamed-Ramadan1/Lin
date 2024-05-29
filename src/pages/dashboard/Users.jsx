import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  UserElement,
  UserTableHeader,
  Pagination,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const Users = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/admin/getAllUsers",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "users",
    }
  );
  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Users" />
      <PageContainer tableHeader=" Users">
        <UserTableHeader />
        {loading && <LoadingWhile />}
        {!loading &&
          data &&
          data.map((user, index) => (
            <UserElement
              index={index + 1}
              key={user._id}
              user={user}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {/*  if no users */}
        {!loading && data.length === 0 && (
          <NotFoundData message={"No Users accounts Found "} />
        )}
        {error && !loading && <Error errorMessage={error} />}
      </PageContainer>
      <Pagination
        currentPage={currentPage}
        isMorePages={isMorePages}
        onPrevPage={() => setCurrentPage((prev) => prev - 1)}
        onNextPage={() => setCurrentPage((prev) => prev + 1)}
      />
    </div>
  );
};

export default Users;
