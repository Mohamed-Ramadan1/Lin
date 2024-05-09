import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:3000/api/v1/admin";

const BlogELement = ({ index, blog, token }) => {
  const { _id, title, category, createdBy, published } = blog;
  const isPublished = published ? "published" : "unpublished";

  const handelDeleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;
    try {
      await axios.delete(`${baseUrl}/deleteBlog/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Blog deleted successfully");
    } catch (error) {
      toast.error("Error deleting blog");
    }
  };
  const handelPublishBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to publish this blog?"
    );
    if (!confirm) return;
    try {
      await axios.patch(
        `${baseUrl}/publishBlog/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Blog published successfully");
    } catch (error) {
      toast.error("Error publishing blog");
    }
  };

  const handelUnPublishBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to unpublish this blog?"
    );
    if (!confirm) return;
    try {
      await axios.patch(
        `${baseUrl}/unPublishBlog/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Blog unpublished successfully");
    } catch (error) {
      toast.error("Error unpublishing blog");
    }
  };

  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{title}</td>
        <td className="p-3 text-center">{category}</td>
        <td className="p-3 text-center">{createdBy.name}</td>
        <td className="p-3 text-center">{createdBy.email}</td>
        <td className="p-3 text-center">{isPublished}</td>

        <td className="p-3 text-center">
          <div className="flex gap-5 justify-center">
            <button
              type="button"
              onClick={handelDeleteBlog}
              className="bg-red-500 text-white p-1.5 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handelUnPublishBlog}
              disabled={!published}
              className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600"
            >
              unPublish
            </button>
            <button
              type="button"
              onClick={handelPublishBlog}
              disabled={published}
              className="bg-green-500 text-white p-1.5 rounded hover:bg-green-600"
            >
              Publish
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default BlogELement;
