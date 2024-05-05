import axios from "axios";
import { toast } from "react-toastify";
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
  index,
  token,
}) => {
  const formatDate = new Date(createdAt).toLocaleDateString();
  const lastUPdated = new Date(updatedAt).toLocaleDateString();

  const deleteHandler = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmDelete) {
      try {
        const res = await axios.delete(
          `https://graduation-project-backend-5vtx.onrender.com/api/v1/courses/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Course Deleted Successfully");
      } catch (error) {
        toast.error("Error Deleting Course");
        console.log(error);
      }
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
          <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded ml-3"
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
