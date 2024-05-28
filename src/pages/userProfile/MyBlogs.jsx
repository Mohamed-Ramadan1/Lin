import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchData from "../../hooks/useFetchData";

import {
  Pagination,
  BlogCart,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";

const MyBlogs = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [isChanged, setIsChanged] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "blogs/myBlogs",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "blogs",
    }
  );

  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, itemsPerPage, currentPage, isChanged]);

  return (
    <>
      <ProfilePageContainer>
        {data.length > 0 && !loading && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3 ">
            {data &&
              data.map((blog) => (
                <BlogCart
                  blog={blog}
                  key={blog._id}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
        )}
        {data.length === 0 && !loading && (
          <EmptyItems
            headerText={"No blogs created yet"}
            linkText={"Start blogging"}
            toUrl="/blog"
          />
        )}

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage errorMessage={error} />}
      </ProfilePageContainer>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-end w-[50%]">
          <Pagination
            currentPage={currentPage}
            isMorePages={isMorePages}
            onPrevPage={() => setCurrentPage((prev) => prev - 1)}
            onNextPage={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default MyBlogs;
