import { customFetch } from "../../../utils/customFetch";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../../store/userSlice";
import { cleareStatus } from "../../../store/authHandler";
import Button from "../shard/Button";

const UserProfileOperations = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userReducers);

  const unActivateAccount = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to deactivate your account?"
    );
    if (!isConfirmed) return;
    try {
      const response = await customFetch.patch(
        "users/unActivateMe",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(logout());
        toast.success("Account Deactivated Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //delete account
  const deleteAccount = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!isConfirmed) return;
    try {
      const response = await customFetch.delete("users/deleteMe", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        dispatch(cleareStatus());
        toast.success("Account Deleted Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  //activate account

  return (
    <div className="container w-full max-w-[1400px]  m-auto flex gap-10 flex-row justify-start items-start flex-wrap">
      <Button buttonText="Un Activate My Account" onClick={unActivateAccount} />

      <Button buttonText="Delete My Account" onClick={deleteAccount} />
    </div>
  );
};

export default UserProfileOperations;
