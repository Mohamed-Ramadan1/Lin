import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";


const InstructorsApplicationElement = ({
  instructor,
  token,
  index,
  setIsChanged,
}) => {
  const {
    _id,
    name,
    email,
    phone,
    experience,
    specialization,
    status,
    createdAt,
  } = instructor;
  const createdAtDate = new Date(createdAt).toLocaleDateString();

  const handleApprove = async () => {
    const confirm = window.confirm(
      "Are you sure you want to approve this instructor application?"
    );
    if (!confirm) return;
    try {
      await customFetch.patch(
        `instructorApplications/${_id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Instructor application approved successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleReject = async () => {
    const confirm = window.confirm(
      "Are you sure you want to reject this instructor application?"
    );
    if (!confirm) return;
    try {
      await customFetch.patch(
        `instructorApplications/${_id}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Instructor application rejected successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this instructor application?"
    );
    if (!confirm) return;
    try {
      await customFetch.delete(`instructorApplications/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Instructor application deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{name}</td>
        <td className="p-3 text-center">{email}</td>
        <td className="p-3 text-center">{phone}</td>
        <td className="p-3 text-center">{experience}</td>
        <td className="p-3 text-center">{specialization}</td>
        <td className="p-3 text-center">{status}</td>
        <td className="p-3 text-center">{createdAtDate}</td>

        <td className="p-3 text-start">
          <div className="flex gap-5">
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-500 text-white p-1.5 rounded hover:bg-red-800"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handleApprove}
              disabled={status === "approved"}
              className="bg-green-500 text-white p-1.5 rounded hover:bg-green-800"
            >
              Approve
            </button>
            <button
              type="button"
              onClick={handleReject}
              disabled={status === "rejected"}
              className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-800"
            >
              Reject
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default InstructorsApplicationElement;
