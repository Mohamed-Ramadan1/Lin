import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";
import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";
const InstructorElement = ({ index, instructor, token, setIsChanged }) => {
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
    if (!isConfirm) return;

    try {
      await customFetch.delete(`admin/deleteInstructor/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Instructor deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handelUnActivateInstructor = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to unactivate this instructor?"
    );
    if (!isConfirm) return;

    try {
      await customFetch.patch(
        `admin/deactivateInstructor/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Instructor unactivated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handelActivateInstructor = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to activate this instructor?"
    );
    if (!isConfirm) return;

    try {
      await customFetch.patch(
        `admin/activateInstructor/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Instructor activated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{specialization}</TableBodyCell>
      <TableBodyCell>{rating}</TableBodyCell>
      <TableBodyCell>{formatData}</TableBodyCell>
      <TableBodyCell>{experience || 0} </TableBodyCell>
      <TableBodyCell>{status}</TableBodyCell>
      <TableBodyCell>
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
            className="bg-green-500 text-white p-1.5 rounded "
          >
            Active
          </button>
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default InstructorElement;
