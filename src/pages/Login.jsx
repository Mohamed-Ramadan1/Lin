import CustomInput from "../components/forms/CustomInput";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./../store/userSlice";
import { toast } from "react-toastify";
import { loginSchema } from "./../schema/authFormsSchema";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "./../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User created successfully");
      dispatch(userActions.resetSuccessStates());
      return navigate("/");
    }
  }, [isSuccess, dispatch, navigate]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="">
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

export default Login;
