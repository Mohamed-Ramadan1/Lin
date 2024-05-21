import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";

import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

const FinancialAidRequestElement = ({ request, token, setIsChanged }) => {
  const {
    _id,
    age,
    education,
    employmentStatus,
    course,
    user,
    applicationStatus,
    createdAt,
    updatedAt,
  } = request;
  const formatCreatedAtDate = new Date(createdAt).toLocaleDateString();

  const handleApprove = async () => {
    const confirm = window.confirm(
      "Are you sure you want to approve this financial aid request?"
    );
    if (!confirm) return;
    try {
      await customFetch.patch(
        `admin/approveFinancialAidRequest/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Financial application approved successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleReject = async () => {
    const confirm = window.confirm(
      "Are you sure you want to reject this financial aid request?"
    );
    if (!confirm) return;
    try {
      await customFetch.patch(
        `admin/rejectFinancialAidRequest/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("Financial Aid application rejected successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this financial aid Request?"
    );
    if (!confirm) return;
    try {
      await customFetch.delete(`admin/deleteFinancialAidRequest/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Financial Aid application deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{user.name}</TableBodyCell>
      <TableBodyCell>{user.email}</TableBodyCell>
      <TableBodyCell>{age}</TableBodyCell>
      <TableBodyCell>{education}</TableBodyCell>
      <TableBodyCell>{employmentStatus}</TableBodyCell>
      <TableBodyCell>{course.title}</TableBodyCell>
      <TableBodyCell>{formatCreatedAtDate}</TableBodyCell>
      <TableBodyCell>{applicationStatus}</TableBodyCell>

      <TableBodyCell>
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
            disabled={applicationStatus === "approved"}
            className="bg-green-500 text-white p-1.5 rounded hover:bg-green-800"
          >
            Approve
          </button>
          <button
            type="button"
            onClick={handleReject}
            disabled={applicationStatus === "rejected"}
            className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-800"
          >
            Reject
          </button>
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default FinancialAidRequestElement;
