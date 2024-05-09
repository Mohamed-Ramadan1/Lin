import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import BlogForm from "../components/blog/BlogForm";
import BlogItem from "../components/blog/BlogItem";

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/blog";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(baseUrl, {
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
  }, [token]);

  return (
    <div className="mb-[55px]">
      <BlogForm />

      {loading && <p className="text-3xl text-bold text-center">Loading...</p>}
      {error && !blogs && (
        <p className="text-3xl text-bold text-center">{error}</p>
      )}
      {!blogs && !loading && !error && (
        <p className="text-3xl text-bold text-center">No Blogs Found</p>
      )}

      {blogs &&
        blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} userId={user._id} token={token} />
        ))}
    </div>
  );
}

export default Blog;
