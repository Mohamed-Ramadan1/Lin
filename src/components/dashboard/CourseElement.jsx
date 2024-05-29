import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";
import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

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
  index,
  token,
}) => {
  const formatDate = new Date(createdAt).toLocaleDateString();
  const lastUPdated = new Date(updatedAt).toLocaleDateString();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;
    try {
      await customFetch.delete(`/courses/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsChanged(true);
      toast.success("Course Deleted Successfully");
    } catch (error) {
      toast.error("Error Deleting Course");
      console.log(error);
    }
  };

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
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded ml-3  hover:bg-red-900"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default CourseElement;
