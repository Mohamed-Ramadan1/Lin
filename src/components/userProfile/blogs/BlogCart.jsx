import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const BlogCart = ({ blog, setIsChanged }) => {
  const { token } = useSelector((state) => state.userReducers);
  const { _id, title, content, category, createdAt, published, visibility } =
    blog;
  const formattedDate = new Date(createdAt).toDateString();
  const isPublished = published ? "published" : "Not published";

  const handelDeleteBlog = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!isConfirm) return;

    try {
      const response = await customFetch.delete(`blogs/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 204) {
        toast.success("Blog deleted successfully");
        setIsChanged(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handelMakeItPublic = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to make  this post private no one else you will be able to see the post?"
      );
      if (!isConfirmed) return;
      await customFetch.patch(
        `blogs/${_id}`,
        {
          visibility: "public",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsChanged(true);
      toast.success(" post visibility converted to private  successfully");
    } catch (error) {
      toast.error("Failed to delete blog post");
    }
  };

  const handelMakeItPrivate = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to make  this post private no one else you will be able to see the post?"
      );
      if (!isConfirmed) return;
      await customFetch.patch(
        `blogs/${_id}`,
        {
          visibility: "private",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsChanged(true);
      toast.success(" post visibility converted to private  successfully");
    } catch (error) {
      toast.error("Failed to delete blog post");
    }
  };

  return (
    <div className="card w-full  mb-5 bg-gray-100 text-black">
      <div className="card-body  ">
        <div className="flex justify-center mb-5">
          <h2 className="card-title break-words max-h-40 overflow-y-auto">
            {title}
          </h2>
        </div>
        <div className="w-full flex justify-between ">
          <div>
            <p className="card-category">
              <span className="font-bold ">Category : </span>
              {category}
            </p>
            <p className="card-category">
              <span className="font-bold ">Visibility : </span>
              {visibility}
            </p>
          </div>
          <div>
            <p className="card-category">
              <span className="font-bold ">Created-At : </span>
              {formattedDate}
            </p>
            <p className="card-category">
              <span className="font-bold ">Publish-Stats : </span>
              {isPublished}
            </p>
          </div>
        </div>
        <div className="h-[200px]">
          <div className="font-bold italic text-center mt-3 mb-3 text-xl">
            <p>Content</p>
          </div>
          <p className="break-words max-h-40 overflow-y-auto">{content}</p>
        </div>
        <div className="card-actions justify-end mt-5">
          <button
            className="btn bg-red-500 mt-2 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            onClick={handelDeleteBlog}
          >
            Delete Blog
          </button>
          {visibility === "private" && (
            <button
              onClick={handelMakeItPublic}
              className="btn bg-blue-500 mt-2 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            >
              Make It Public
            </button>
          )}
          {visibility === "public" && (
            <button
              onClick={handelMakeItPrivate}
              className="btn bg-blue-500 mt-2 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            >
              Make It Private
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
