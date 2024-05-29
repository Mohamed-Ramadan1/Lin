import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  BlogsTableHeader,
  Pagination,
  BlogELement,
  LoadingWhile,
  Error,
  NotFoundData,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

const ManageBlogs = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "/admin/getAllBlogs",
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
    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="p-5">
      <PageIntro pageName="Blogs" />
      <PageContainer tableHeader="Blogs">
        <BlogsTableHeader />
        {loading && <LoadingWhile />}
        {!loading &&
          data.length > 0 &&
          data.map((blog, index) => (
            <BlogELement
              key={blog._id}
              blog={blog}
              index={index + 1 + (currentPage - 1) * itemsPerPage}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {!loading && data.length === 0 && (
          <NotFoundData message={"No Blogs Found "} />
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

export default ManageBlogs;
