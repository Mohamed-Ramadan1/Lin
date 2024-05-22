import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";

const BlogItem = ({ blog, userId, token, setIsChanged }) => {
  const { _id, category, content, createdAt, title, createdBy, visibility } =
    blog;
  const myBlog = userId === createdBy._id;
  const formattedDate = new Date(createdAt).toDateString();

  const handelDeleteBlogPost = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (!isConfirmed) return;
      await customFetch.delete(`blogs/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Blog post deleted successfully");
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
    <div class="px-[0vh] md:px-[19vh] my-5">
      <div class="border p-3 bg-gray-100 md:rounded-lg rounded-0">
        <h3 class="text-2xl font-bold mt-4 mb-4 text-center italic">{title}</h3>
        <div class="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex flex-col">
            <span className="mb-2">Category : {category}</span>
            <span>Visibility : {visibility}</span>
          </div>
          <span>Created at : {formattedDate}</span>
        </div>
        <p class="text-gray-700 mb-4 ">{content}</p>

        {myBlog && (
          <div class="flex justify-end">
            <button
              onClick={handelDeleteBlogPost}
              class="bg-red-500
          hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            {visibility === "public" && (
              <button
                onClick={handelMakeItPrivate}
                class="bg-blue-500 ml-2
          hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Make It Private
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
