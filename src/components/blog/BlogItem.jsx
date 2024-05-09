import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "";
const BlogItem = ({ blog, userId, token }) => {
  const { _id, category, content, createdAt, title, createdBy } = blog;

  const myBlog = userId === createdBy._id;
  const formattedDate = new Date(createdAt).toDateString();

  const handelDeleteBlogPost = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/blog/${_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Blog post deleted successfully");
    } catch (error) {
      toast.error("Failed to delete blog post");
    }
  };
  console.log();

  return (
    // the next code shrink and be small based on the text i dont need this i want to be allways the same size with the full screen
    <div class="px-[0vh] md:px-[19vh] my-5">
      <div class="border p-3 bg-gray-100 md:rounded-lg rounded-0">
        <h3 class="text-2xl font-bold mt-4 mb-4 text-center italic">{title}</h3>
        {/* category and created at  */}
        <div class="flex justify-between text-sm text-gray-600 mb-4">
          <span>Category : {category}</span>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
