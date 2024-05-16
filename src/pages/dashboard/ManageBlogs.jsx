import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  BlogsTableHeader,
  Pagination,
  BlogELement,
} from "../../components";

const ManageBlogs = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isMorePages, setIsMorePages] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await customFetch.get("blogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });

        const fetchedBlogs = res.data.data.blogs;

        if (fetchedBlogs.length === 0) {
          setBlogs([]);
        } else {
          setBlogs(fetchedBlogs);
          setIsMorePages(fetchedBlogs.length === itemsPerPage);
        }
      } catch (error) {
        setError(error.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
        setIsChanged(false);
      }
    };

    fetchData();
  }, [token, isChanged, currentPage, itemsPerPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (isMorePages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="p-5">
      <PageIntro pageName="Blogs" />
      <PageContainer tableHeader="Blogs">
        <BlogsTableHeader />

        {loading ? (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold text-red-500">{error}</p>
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogELement
              key={blog._id}
              blog={blog}
              index={index + 1 + (currentPage - 1) * itemsPerPage}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">No blogs found</p>
          </div>
        )}
      </PageContainer>
      <Pagination
        currentPage={currentPage}
        isMorePages={isMorePages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
      />
    </div>
  );
};

export default ManageBlogs;
