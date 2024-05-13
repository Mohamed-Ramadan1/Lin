import { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import adminSlice from "../../store/adminSlice.js";

import { createUser } from "../../store/adminSlice";
import { adminActions } from "../../store/adminSlice";
import { createUsersSchema } from "../../schema/createAccountsSchemas.js";
import CustomInput from "../../components/forms/CustomInput";
import CustomDropdownInput from "../../components/forms/CustomDropdownInput";
import { PageIntro } from "../../components";

const CreateUserAccount = () => {
  const dispatch = useDispatch();
  const { isSuccess, error } = useSelector((state) => state.adminReducers);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User Created Successfully");
      dispatch(adminActions.clearSuccessState());
    }

    if (error) {
      toast.error(error);
      dispatch(adminActions.clearSuccessState());
    }
  }, [isSuccess, dispatch, error]);

  return (
    <div className="min-h-[100vh]">
      <div className="p-5 ">
        <PageIntro pageName="Create User Account" />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "",
            passwordConfirm: "",
          }}
          validationSchema={createUsersSchema}
          onSubmit={(values, actions) => {
            dispatch(createUser(values));
            actions.resetForm();
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />

                <CustomInput
                  label="Confirm Password"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm Password"
                />
                <CustomDropdownInput
                  label="Role"
                  name="role"
                  options={["admin", "user", "instructor"]}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white rounded-md p-2 mt-5"
              >
                Create User
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateUserAccount;
