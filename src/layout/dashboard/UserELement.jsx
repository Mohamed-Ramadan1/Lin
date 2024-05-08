import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/adminSlice";

import axios from "axios";
import { toast } from "react-toastify";
const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/admin";

const UserELement = ({ user, index, token }) => {
  const dispatch = useDispatch();
  const { name, email, role, createdAt, _id, isVerified, active } = user;
  const verified = isVerified ? "Verified" : "Not verified";

  const activation = active ? "Active" : "Not active";
  const formatData = new Date(createdAt).toLocaleDateString("en-GB");

  const handelDeleteAccount = async () => {
    dispatch(deleteUser(_id));
    toast.success("User deleted successfully");
  };

  const handelActivateAccount = async () => {
    try {
      await axios.patch(
        `${baseUrl}/activateUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User activated successfully");
    } catch (error) {
      toast.error("Error activating user");
    }
  };

  const handelUnActivateAccount = async () => {
    try {
      await axios.patch(
        `${baseUrl}/unActivateUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User unActivated successfully");
    } catch (error) {
      toast.error("Error unActivated user");
    }
  };

  const handelVerifiedEmails = async () => {
    try {
      await axios.patch(
        `${baseUrl}/verifyUser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
