import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteEnrollment } from "../../store/courseEnrollmentsSlice";

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin";

const EnrollmentElement = ({ enrollment, index, token }) => {
  const dispatch = useDispatch();

  const { _id, price, createdAt, paid, updatedAt, enrollmentStatus } =
    enrollment;
  const { title, duration } = enrollment.course;
  const { name, email } = enrollment.user;
  console.log(enrollment.course);
  const isPaid = paid ? "Paid" : "Not Paid";
  const createdAtDate = new Date(createdAt).toLocaleDateString();
  const updatedAtDate = new Date(updatedAt).toLocaleDateString();

  const handelDeleteEnrollment = async () => {
    dispatch(deleteEnrollment(_id));
    toast.success("Enrollment deleted successfully");
  };

  const handelApproveEnrollment = async () => {
    try {
      await axios.patch(
        `${baseUrl}/approveEnrollment/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Enrollment approved successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error approving enrollment");
    }
  };
  const handelCancelledEnrollment = async () => {
    try {
      await axios.patch(
        `${baseUrl}/cancelEnrollment/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Enrollment approved successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error approving enrollment");
    }
  };

  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{title}</td>
        <td className="p-3 text-center">{name}</td>
        <td className="p-3 text-center">{email}</td>
        <td className="p-3 text-center">{isPaid}</td>
        <td className="p-3 text-center">{createdAtDate}</td>
        <td className="p-3 text-center">{duration} h</td>
        <td className="p-3 text-center">{price} $</td>
        <td className="p-3 text-center">{updatedAtDate}</td>
        <td className="p-3 text-center">{enrollmentStatus}</td>

        {/* pop up menue for delete update active buttons */}
        <td className="p-3 text-center">
          <div className="flex gap-5 text-center">
            <button
              type="button"
              onClick={handelDeleteEnrollment}
              className="bg-red-500 text-white p-1.5 rounded"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handelCancelledEnrollment}
              className="bg-blue-500 text-white p-1.5 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handelApproveEnrollment}
              className="bg-green-500 text-white p-1.5 rounded"
            >
              approve
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default EnrollmentElement;
