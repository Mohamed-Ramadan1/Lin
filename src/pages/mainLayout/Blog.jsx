import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  BlogItem,
  BlogForm,
  Pagination,
  ErrorMessage,
  LoadingSpinner,
} from "../../components";
import useFetchData from "../../hooks/useFetchData";

function Blog() {
  const [isChanged, setIsChanged] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { user, token } = useSelector((state) => state.userReducers);

  const { data, loading, error, isMorePages, fetchData } = useFetchData(
    "blogs",
    {
      params: {
        page: currentPage,
        limit: itemsPerPage,
        sort: "-createdAt",
      },
      requestedData: "blogs",
    }
  );
  console.log(data);
  useEffect(() => {
    setIsChanged(false);
    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);
  console.log(data);
  return (
    <div className="mb-[55px]">
      {user && <BlogForm setIsChanged={setIsChanged} />}

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage errorMessage={error} />}

      {!data && !loading && !error && (
        <p className="text-3xl text-bold text-center">No Blogs Found</p>
      )}

      {data.length > 0 &&
        !loading &&
        data.map((blog) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            userId={user ? user._id : ""}
            setIsChanged={setIsChanged}
          />
        ))}
      <div class=" md:px-[19vh] my-5">
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={() => setCurrentPage((prev) => prev - 1)}
          onNextPage={() => setCurrentPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}

export default Blog;
