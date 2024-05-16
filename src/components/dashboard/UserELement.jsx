import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/adminSlice";
import { customFetch } from "../../utils/customFetch";
import { toast } from "react-toastify";
import TableBody from "./shard/TableBody";
import TableBodyCell from "./shard/TableBodyCell";

const UserELement = ({ user, token, setIsChanged }) => {
  const dispatch = useDispatch();
  const { name, email, role, createdAt, updatedAt, _id, isVerified, active } =
    user;
  const verified = isVerified ? "Verified" : "Not verified";

  const activation = active ? "Active" : "Not active";
  const formatData = new Date(createdAt).toLocaleDateString("en-GB");
  const formatUpdateData = new Date(updatedAt).toLocaleDateString("en-GB");

  const handelDeleteAccount = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;
    dispatch(deleteUser(_id));
    setIsChanged(true);
    toast.success("User deleted successfully");
  };

  const handelActivateAccount = async () => {
    const isConfirmed = window.confirm("Are you sure you want to activate?");
    if (!isConfirmed) return;

    try {
      await customFetch.patch(
        `admin/activateUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsChanged(true);
      toast.success("User activated successfully");
    } catch (error) {
      toast.error("Error activating user");
    }
  };

  const handelUnActivateAccount = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to unActivate?"
      );
      if (!isConfirmed) return;
      await customFetch.patch(
        `admin/unActivateUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("User unActivated successfully");
    } catch (error) {
      toast.error("Error unActivated user");
    }
  };

  const handelVerifiedEmails = async () => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to verify?");
      if (!isConfirmed) return;
      await customFetch.patch(
        `admin/verifyUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsChanged(true);
      toast.success("User email verified successfully");
    } catch (error) {
      toast.error("Error verified email ");
    }
  };

  return (
    <TableBody>
      <TableBodyCell>{_id}</TableBodyCell>
      <TableBodyCell>{name}</TableBodyCell>
      <TableBodyCell>{email}</TableBodyCell>
      <TableBodyCell>{verified}</TableBodyCell>
      <TableBodyCell>{role}</TableBodyCell>
      <TableBodyCell>{formatData}</TableBodyCell>
      <TableBodyCell>{formatUpdateData}</TableBodyCell>
      <TableBodyCell>{activation}</TableBodyCell>
      <TableBodyCell>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={handelDeleteAccount}
            className="bg-red-500 text-white p-1.5 rounded hover:bg-red-800"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={handelUnActivateAccount}
            className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-800"
            disabled={!active}
          >
            UnActive
          </button>
          <button
            type="button"
            onClick={handelActivateAccount}
            className="bg-green-500 text-white p-1.5 rounded hover:bg-green-800 "
            disabled={active}
          >
            Active
          </button>
          <button
            type="button"
            onClick={handelVerifiedEmails}
            className="bg-green-500 text-white p-1.5 rounded hover:bg-green-800"
            disabled={isVerified}
          >
            Verify
          </button>
        </div>
      </TableBodyCell>
    </TableBody>
  );
};

export default UserELement;
