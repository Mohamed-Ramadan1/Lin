import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

import ActionButton from "./shard/ActionButton";
import { deleteOperationRequests } from "./shard/dashboardOperations";
const CourseElement = ({
  course: {
    _id,
    title,
    createdAt,
    updatedAt,
    language,
    totalReviews,
    averageRating,
    paymentModel,
    category,
    duration,
    price,
  },
  setIsChanged,
}) => {
  const formatDate = new Date(createdAt).toLocaleDateString();
  const lastUPdated = new Date(updatedAt).toLocaleDateString();

  return (
    <TableBody>
      <TableBodyCell>{title}</TableBodyCell>
      <TableBodyCell>{formatDate}</TableBodyCell>
      <TableBodyCell>{lastUPdated}</TableBodyCell>
      <TableBodyCell>{totalReviews}</TableBodyCell>
      <TableBodyCell>{averageRating.toFixed(1)}</TableBodyCell>
      <TableBodyCell>{price} $</TableBodyCell>
      <TableBodyCell>{category}</TableBodyCell>
      <TableBodyCell>{duration} h</TableBodyCell>
      <TableBodyCell>{paymentModel}</TableBodyCell>
      <TableBodyCell> {language}</TableBodyCell>
      <TableBodyCell>
        <div className="flex">
          <ActionButton
            onClick={() => {
              deleteOperationRequests(
                "Are you sure you want to delete?",
                `courses/${_id}`,
                "Course deleted successfully",
                "Error deleting course",
                setIsChanged
              );
            }}
            text="Delete"
            action={"danger"}
            disabled={false}
          />
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default CourseElement;
