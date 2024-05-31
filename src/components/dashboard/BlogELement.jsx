import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";
import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

const BlogELement = ({ blog, token, setIsChanged }) => {
  const { _id, title, category, createdBy, published, visibility, createdAt } =
    blog;
  const isPublished = published ? "published" : "unpublished";
  const formattedDate = new Date(createdAt).toDateString();

  const handelDeleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;
    try {
      await customFetch.delete(`admin/deleteBlog/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsChanged(true);
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
      await customFetch.patch(
        `admin/publishBlog/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
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
      await customFetch.patch(
        `admin/unPublishBlog/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Blog unpublished successfully");
      setIsChanged(true);
    } catch (error) {
      toast.error("Error unpublishing blog");
    }
  };

  return (
    <TableBody>
      <TableBodyCell>{title}</TableBodyCell>
      <TableBodyCell>{category}</TableBodyCell>
      <TableBodyCell>{createdBy.name}</TableBodyCell>
      <TableBodyCell>{createdBy.email}</TableBodyCell>
      <TableBodyCell>{isPublished}</TableBodyCell>
      <TableBodyCell>{visibility}</TableBodyCell>
      <TableBodyCell>{formattedDate}</TableBodyCell>

      <TableBodyCell>
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
      </TableBodyCell>
    </TableBody>
  );
};

export default BlogELement;
