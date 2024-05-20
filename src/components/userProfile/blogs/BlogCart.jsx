import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const BlogCart = ({ blog, setIsChanged }) => {
  const { token } = useSelector((state) => state.userReducers);
  const { _id, title, content, category, createdAt, published } = blog;
  const formattedDate = new Date(createdAt).toDateString();
  const isPublished = published ? "published" : "unpublished";

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

  return (
    <div className="card w-full  mb-5 bg-gray-100 text-black">
      <div className="card-body">
        <h2 className="card-title break-words max-h-40 overflow-y-auto">
          {title}
        </h2>
        <div className="flex ">
          <p className="card-category">
            <span className="font-bold ">Category:</span>
            {category}
          </p>
          <p className="card-date">{formattedDate}</p>
        </div>
        <p className="break-words max-h-40 overflow-y-auto">{content}</p>
        <div className="card-actions justify-end">
          <button
            className="btn bg-red-500 mt-2 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            onClick={handelDeleteBlog}
          >
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
