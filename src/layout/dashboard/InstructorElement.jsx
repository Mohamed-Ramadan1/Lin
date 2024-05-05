import axios from "axios";
import { toast } from "react-toastify";
const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin";

const InstructorElement = ({ index, instructor, token }) => {
  const {
    _id,
    specialization,
    name,
    email,
    rating,
    experience,
    createdAt,
    status,
  } = instructor;
  const formatData = new Date(createdAt).toLocaleDateString();

  const handelDeleteInstructor = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this instructor?"
    );
    if (isConfirm) {
      try {
        await axios.delete(`${baseUrl}/deleteInstructor/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Instructor deleted successfully");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handelUnActivateInstructor = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to unactivate this instructor?"
    );
    if (isConfirm) {
      try {
        await axios.patch(
          `${baseUrl}/deactivateInstructor/${_id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Instructor unactivated successfully");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handelActivateInstructor = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to activate this instructor?"
    );
    if (isConfirm) {
      try {
        await axios.patch(
          `${baseUrl}/activateInstructor/${_id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Instructor activated successfully");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{name}</td>
        <td className="p-3 text-center">{email}</td>
        <td className="p-3 text-center">{specialization}</td>
        <td className="p-3 text-center">{rating}</td>
        <td className="p-3 text-center">{formatData}</td>
        <td className="p-3 text-center">{experience || 0} </td>
        <td className="p-3 text-center">{status}</td>
        <td className="p-3 text-center ">
          <div className="flex gap-5">
            <button
              type="button"
              onClick={handelDeleteInstructor}
              className="bg-red-500 text-white p-1.5 rounded"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handelUnActivateInstructor}
              className="bg-blue-500 text-white p-1.5 rounded"
              //   disabled={!active}
            >
              UnActive
            </button>
            <button
              type="button"
              onClick={handelActivateInstructor}
              className="bg-green-500 text-white p-1.5 rounded"
              //   disabled={active}
            >
              Active
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default InstructorElement;
