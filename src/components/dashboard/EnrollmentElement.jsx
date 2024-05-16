import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteEnrollment } from "../../store/courseEnrollmentsSlice";
import { customFetch } from "../../utils/customFetch";
import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
const EnrollmentElement = ({ enrollment, index, token, setIsChanged }) => {
  const dispatch = useDispatch();

  const { _id, price, createdAt, paid, updatedAt, enrollmentStatus } =
    enrollment;
  const { title, duration } = enrollment.course;
  const { name, email } = enrollment.user;

  const isPaid = paid ? "Paid" : "Not Paid";
  const createdAtDate = new Date(createdAt).toLocaleDateString();
  const updatedAtDate = new Date(updatedAt).toLocaleDateString();

  const handelDeleteEnrollment = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this enrollment?"
    );
    if (!isConfirmed) return;
    dispatch(deleteEnrollment(_id));
    setIsChanged(true);
    toast.success("Enrollment deleted successfully");
  };

  const handelApproveEnrollment = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to approve this enrollment?"
      );
      if (!isConfirmed) return;

      await customFetch.patch(
        `admin/approveEnrollment/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Enrollment approved successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error approving enrollment");
    }
  };
  const handelCancelledEnrollment = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to cancel this enrollment?"
      );
      if (!isConfirmed) return;

      await customFetch.patch(
        `admin/cancelEnrollment/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Enrollment cancelled successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error cancelling enrollment");
    }
  };

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{title}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{isPaid}</TableBodyCell>
      <TableBodyCell>{createdAtDate}</TableBodyCell>
      <TableBodyCell>{duration} h</TableBodyCell>
      <TableBodyCell>{price} $</TableBodyCell>
      <TableBodyCell>{updatedAtDate}</TableBodyCell>
      <TableBodyCell>{enrollmentStatus}</TableBodyCell>

      {/* pop up menue for delete update active buttons */}
      <TableBodyCell>
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
            disabled={enrollmentStatus === "cancelled"}
            className="bg-blue-500 text-white p-1.5 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handelApproveEnrollment}
            disabled={enrollmentStatus === "approved"}
            className="bg-green-500 text-white p-1.5 rounded"
          >
            approve
          </button>
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default EnrollmentElement;
