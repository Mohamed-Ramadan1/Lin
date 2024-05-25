import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { updateUserPassword } from "../../../store/userSlice";
import { updatePasswordSchema } from "../../../schema/authFormsSchema";
import Button from "../shard/Button";
import CustomInput from "../../forms/CustomInput";

const UpdateUserPassword = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        passwordCurrent: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={updatePasswordSchema}
      onSubmit={(values, actions) => {
        dispatch(updateUserPassword(values));
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form
          onSubmit={handleSubmit}
          className="container w-full max-w-[1400px] m-auto flex gap-10 flex-col justify-start items-start mt-5"
        >
          <div className="grid grid-cols-1 gap-3 w-full  ">
            <CustomInput
              label="Old Password"
              id="old_password"
              name="passwordCurrent"
              type="password"
              placeholder="Old Password"
            />
            <CustomInput
              label="New Password"
              id="new_password"
              name="password"
              type="password"
              placeholder="New Password"
            />
            <CustomInput
              label="Confirm Password"
              id="confirm_password"
              name="passwordConfirm"
              type="password"
              placeholder="Confirm Password"
            />

            <Button buttonText="Update Password" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUserPassword;
