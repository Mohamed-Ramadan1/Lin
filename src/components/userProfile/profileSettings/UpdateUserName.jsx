import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../store/userSlice";
import CustomInput from "../../../components/forms/CustomInput";
import UserProfileOperations from "./UserProfileOperations";
import Button from "../shard/Button";
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

        <Button buttonText="Update Name" />
        <UserProfileOperations />
      </Form>
    </Formik>
  );
};

export default UpdateUserName;
