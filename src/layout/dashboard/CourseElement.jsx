import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";
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
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{title}</td>
        <td className="p-3 text-center">{formatDate}</td>
        <td className="p-3 text-center">{lastUPdated}</td>
        <td className="p-3 text-center">{totalReviews}</td>
        <td className="p-3 text-center">{averageRating}</td>
        <td className="p-3 text-center">{price} $</td>
        <td className="p-3 text-center">{category}</td>
        <td className="p-3 text-center">{duration} h</td>
        <td className="p-3 text-center">{paymentModel}</td>
        <td className="p-3 text-center"> {language}</td>

        <td className="p-3">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-900">
            Edit
          </button>
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded ml-3  hover:bg-red-900"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CourseElement;
