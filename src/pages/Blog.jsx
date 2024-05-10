import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../utils/customFetch";
import BlogForm from "../components/blog/BlogForm";
import BlogItem from "../components/blog/BlogItem";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const { user, token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    setIsChanged(false);
    const fetchBlogs = async () => {
      try {
        const response = await customFetch.get("blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.data.blogs.user === 0) return;
        setBlogs(response.data.data.blogs);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [token, isChanged]);

  return (
    <div className="mb-[55px]">
      <BlogForm setIsChanged={setIsChanged} />

      {loading && <p className="text-3xl text-bold text-center">Loading...</p>}
      {error && !blogs && (
        <p className="text-3xl text-bold text-center">{error}</p>
      )}
      {!blogs && !loading && !error && (
        <p className="text-3xl text-bold text-center">No Blogs Found</p>
      )}

      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            blog={blog}
            userId={user._id}
            token={token}
            setIsChanged={setIsChanged}
          />
        ))}
    </div>
  );
}

export default Blog;
