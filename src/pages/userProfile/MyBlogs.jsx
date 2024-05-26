import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { Link } from "react-router-dom";
import {
  Pagination,
  BlogCart,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchMyCourses = async () => {
      try {
        setLoading(true);
        const response = await customFetch.get("blogs/myBlogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        if (response.data.data.blogs) {
          setBlogs(response.data.data.blogs);
          setIsMorePages(response.data.data.blogs.length === itemsPerPage);
        } else {
          setBlogs([]);
          setIsMorePages(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMyCourses();
    setLoading(false);
  }, [token, itemsPerPage, currentPage, isChanged]);

  return (
    <>
      <ProfilePageContainer>
        {blogs.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3 ">
            {blogs &&
              blogs.map((blog) => (
                <BlogCart
                  blog={blog}
                  key={blog._id}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
        )}
        {blogs.length === 0 && !error && (
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
