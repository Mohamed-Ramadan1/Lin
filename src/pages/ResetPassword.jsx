
import React from 'react'

import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/forms/CustomInput";
import { userActions } from "../store/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "./../store/userSlice";
import { resetPasswordSchema } from "./../schema/authFormsSchema";
import { useParams } from "react-router-dom";
const ResetPassword = () => {
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.userReducers);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Password reset successfully");
      dispatch(userActions.resetSuccessStates());
      return navigate("/login");
    }
  }, [isSuccess, dispatch, navigate]);

  return (
    <Formik
      initialValues={{
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={resetPasswordSchema}
      onSubmit={(values, actions) => {
        dispatch(resetPassword({ ...values, resetToken }));
        actions.resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <CustomInput
            type="password"
            name="password"
            label="password"
            id="password"
            placeholder="password"
          />
          <CustomInput
            type="password"
            name="passwordConfirm"
            label="passwordConfirm"
            id="passwordConfirm"
            placeholder="passwordConfirm"
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-gray-200 w-full p-2 rounded-sm mb-2"
          >
            Reset Password
          </button>
        </Form>
      )}
    </Formik>
  );
};
