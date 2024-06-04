import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
import ActionButton from "./shard/ActionButton";
import {
  handelOperationRequest,
  deleteOperationRequests,
} from "./shard/dashboardOperations";
const BlogELement = ({ blog, setIsChanged }) => {
  const { _id, title, category, createdBy, published, visibility, createdAt } =
    blog;
  const isPublished = published ? "published" : "Not published";
  const formattedDate = new Date(createdAt).toDateString();

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
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `blogs/blogsPosts/${_id}`,
                "Blog deleted successfully",
                "Error deleting blog",
                setIsChanged
              );
            }}
            text="Delete"
            action={"danger"}
            disabled={false}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to publish?",
                `/blogs/${_id}/notPublished`,
                "Blog un-published successfully",
                "Error un-publishing blog",
                setIsChanged
              );
            }}
            text="Un-Publish"
            action={"mainBlue"}
            disabled={!published}
          />

          <ActionButton
            onClick={() => {
              handelOperationRequest(
                "Are you sure you want to un-publish?",
                `/blogs/${_id}/published`,
                "Blog published successfully",
                "Error publishing blog",
                setIsChanged
              );
            }}
            text="Publish"
            action={"mainGreen"}
            disabled={published}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default BlogELement;
