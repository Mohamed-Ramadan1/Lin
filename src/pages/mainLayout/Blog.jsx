import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";

import { BlogItem, BlogForm, Pagination } from "../../components";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const { user, token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    setIsChanged(false);
    const fetchBlogs = async () => {
      try {
        const response = await customFetch.get("blogs", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });

        if (response.data.data.blogs) {
          setBlogs(response.data.data.blogs);
          setIsMorePages(response.data.data.blogs.length === itemsPerPage);
        } else {
          setTasks([]);
          setIsMorePages(false);
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setBlogs([]);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="mb-[55px]">
      {user && <BlogForm setIsChanged={setIsChanged} />}

      {loading && <p className="text-3xl text-bold text-center">Loading...</p>}
      {error && !blogs && (
        <p className="text-3xl text-bold text-center">{error}</p>
      )}
      {!blogs && !loading && !error && (
        <p className="text-3xl text-bold text-center">No Blogs Found</p>
      )}

      {blogs.length > 0 &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            userId={user ? user._id : ""}
            token={token}
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
