import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../store/userSlice";
import CustomInput from "../../../components/forms/CustomInput";
import UserProfileOperations from "./UserProfileOperations";
const UpdateUserName = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(updateUserInfo(values));
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      <Form className="container w-full max-w-[1400px] min-h-[20vh] m-auto flex gap-10 flex-col justify-start items-start">
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

        <div className="flex gap-10 ">
          <button
            type="submit"
            className="w-[220px] h-[48px] bg-[#9747FF] text-[#fff] rounded-[12px] transition ease-in-out hover:bg-[#6F3FF5]"
          >
            Update UserName
          </button>
          <UserProfileOperations />
        </div>
      </Form>
    </Formik>
  );
};

export default UpdateUserName;
