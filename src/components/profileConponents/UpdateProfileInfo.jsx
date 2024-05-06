import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import CustomInput from "../forms/CustomInput";
import CustomFileInput from "../forms/CustomFileInput";
import { updateUserInfo, updateUserPassword } from "../../store/userSlice";
import { userActions } from "../../store/userSlice";
const UpdateProfileInfo = () => {
  const dispatch = useDispatch();
  //   const { token, isSuccess } = useSelector((state) => state.userReducers);
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values, actions) => {
        dispatch(updateUserInfo(values));
        actions.resetForm();
        console.log(values);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form
          onSubmit={handleSubmit}
          className="container w-full max-w-[1400px] m-auto flex gap-10 flex-col justify-start items-start"
        >
          <div className="grid grid-cols-1 gap-3 w-full  ">
            <CustomInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <CustomFileInput
              label="Profile Picture"
              id="profile_picture"
              name="photo"
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="p-5 mt-7 bg-blue-600 text-white w-full h-[55px] rounded-[12px]  outline-none"
            >
              Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateProfileInfo;
