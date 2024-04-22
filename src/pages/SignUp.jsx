

import { registerSchema } from "./../schema/authFormsSchema";
import { Form, Formik } from "formik";
import CustomInput from "../components/forms/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "./../store/userSlice";
import { userActions } from "./../store/userSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User created successfully");
      dispatch(userActions.resetSuccessStates());
      return navigate("/");
    }
  }, [isSuccess]);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        dispatch(signUp(values));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="">
          <CustomInput
            type="text"
            name="name"
            label="Name"
            id="name"
            placeholder="Name"
          />
          <CustomInput
            type="email"
            name="email"
            label="email"
            id="email"
            placeholder="email"
          />

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
            type="submit"
            className="bg-gray-200 w-full p-2 rounded-sm mb-2"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;

