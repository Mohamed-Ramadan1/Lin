import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/adminSlice";
import { customFetch } from "../../utils/customFetch";
import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = "http://localhost:3000/api/v1/admin";

const UserELement = ({ user, index, token, setIsChanged }) => {
  const dispatch = useDispatch();
  const { name, email, role, createdAt, _id, isVerified, active } = user;
  const verified = isVerified ? "Verified" : "Not verified";

  const activation = active ? "Active" : "Not active";
  const formatData = new Date(createdAt).toLocaleDateString("en-GB");

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
    <tbody>
      <tr>
        <td className="p-3 text-center">{index}</td>
        <td className="p-3 text-center">{_id}</td>
        <td className="p-3 text-center">{name}</td>
        <td className="p-3 text-center">{email}</td>
        <td className="p-3 text-center">{verified}</td>
        <td className="p-3 text-center">{role}</td>
        <td className="p-3 text-center">{formatData}</td>
        <td className="p-3 text-center">{activation}</td>

        <td className="p-3 text-start">
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
        </td>
      </tr>
    </tbody>
  );
};

export default UserELement;
