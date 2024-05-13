import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../store/userSlice";
import { toast } from "react-toastify";
// import CustomInput from "./../forms/CustomInput";
import CustomInput from "../../components/forms/CustomInput";
import { userActions } from "../../store/userSlice";
import { useEffect } from "react";
const PublicProfile = () => {
  const { isSuccess, error } = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      toast.success("User info updated successfully");
      dispatch(userActions.resetSuccessStates());
    }
    if (error) {
      toast.error(error);
      dispatch(userActions.resetSuccessStates());
    }
  }, [isSuccess, dispatch, error]);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values) => {
        dispatch(updateUserInfo(values));
      }}
    >
      <Form className="container w-full max-w-[1400px] min-h-[30vh] m-auto flex gap-10 flex-col justify-start items-start">
        <div className="flex w-full gap-[15px]">
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          />
        </div>

        <button
          type="submit"
          className="w-[182px] h-[48px] bg-[#9747FF] text-[#fff] rounded-[12px] transition ease-in-out hover:bg-[#6F3FF5]"
        >
          Update
        </button>
      </Form>
    </Formik>
  );
};

export default PublicProfile;
