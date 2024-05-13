import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { customFetch } from "../../utils/customFetch";

import {
  PageIntro,
  PageContainer,
  BlogELement,
  BlogsTableHeader,
} from "../../components";

const ManageBlogs = () => {
  const { token } = useSelector((state) => state.userReducers);
  const [blogs, setBlogs] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch.get("admin/getAllBlogs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.data.blogs.length === 0) {
          setIsChanged(false);
          return setBlogs(null);
        }
        setBlogs(res.data.data.blogs);
        setIsChanged(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [token, isChanged]);

  console.log();
  return (
    <div className="p-5">
      <PageIntro pageName="Blogs" />
      <PageContainer tableHeader={"Blogs"}>
        <BlogsTableHeader />
        {blogs &&
          blogs.map((blog, index) => (
            <BlogELement
              key={blog._id}
              blog={blog}
              index={index + 1}
              token={token}
              setIsChanged={setIsChanged}
            />
          ))}

        {!blogs && (
          <div className="flex justify-center items-center h-10">
            <p className="text-2xl font-semibold">No blogs found</p>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default ManageBlogs;
