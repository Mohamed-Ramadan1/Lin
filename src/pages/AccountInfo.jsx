import { Formik, Form } from "formik";
import CustomInput from "../components/forms/CustomInput";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUserInfo, updateUserPassword } from "../store/userSlice";
import { toast } from "react-toastify";

import UpdateProfileInfo from "./../components/profileConponents/UpdateProfileInfo";
import UpdateUserPassword from "./../components/profileConponents/UpdateUserPassword";

function AccountInfo() {
  return (
    <div className="p-3 ">
      <UpdateProfileInfo />
      <UpdateUserPassword />
    </div>
  );
}

export default AccountInfo;
