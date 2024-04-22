import React from "react";

import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/forms/CustomInput";
import { userActions } from "../store/userSlice";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { forgotPassword } from "./../store/userSlice";
import { forgotPasswordSchema } from "./../schema/authFormsSchema";
const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { isSuccess } = useSelector((state) => state.userReducers);
  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Virefication email send successfully please check your email."
      );
      dispatch(userActions.resetSuccessStates());
    }
  }, [isSuccess, dispatch]);

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={(values, actions) => {
        dispatch(forgotPassword(values));
        actions.resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            label="Email"
            id="email"
            placeholder="Enter your email"
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-gray-200 w-full p-2 rounded-sm mb-2"
          >
            Forgot Password
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
