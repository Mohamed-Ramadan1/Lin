import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../forms/CustomInput";
import CustomFileInput from "../../forms/CustomFileInput";
import { updateUserInfo } from "../../../store/userSlice";

// on submit function to update the user data using the custom fetch

const UpdateProfileInfo = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ photo: "", email: "" }}
      onSubmit={(values, actions) => {
        dispatch(updateUserInfo(values));
        actions.resetForm();
        actions.setSubmitting(false);
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
