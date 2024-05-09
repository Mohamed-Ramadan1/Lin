import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import PageContainer from "../layout/dashboard/PageContainer";
import BlogsTableHeader from "../layout/dashboard/BlogsTableHeader";
import BlogELement from "../layout/dashboard/BlogELement";

const baseUrl = "http://localhost:3000/api/v1/admin/getAllBlogs";

const ManageBlogs = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBlogs(res.data.data.blogs);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
    setLoading(false);
  }, [token]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Blogs</span>{" "}
        </h1>
        {/* table manage table courses table  */}
        <PageContainer tableHeader={"Blogs"}>
          <BlogsTableHeader />
          {blogs &&
            blogs.map((blog, index) => (
              <BlogELement
                key={blog._id}
                blog={blog}
                index={index + 1}
                token={token}
              />
            ))}

          {!blogs && !loading && !loading && (
            <div className="flex justify-center items-center h-96">
              <p className="text-2xl font-semibold">No blogs found</p>
            </div>
          )}
        </PageContainer>
      </div>
    </>
  );
};

export default ManageBlogs;
