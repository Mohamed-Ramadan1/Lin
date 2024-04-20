/* eslint-disable */

import { registerSchema } from "./../schema/authFormsSchema";
import { Formik, useFormik } from "formik";

import { useDispatch } from "react-redux";
import { signUp } from "./../store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const { values, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(signUp(values));
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="">
      <label htmlFor="name">Name</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
      />
      <label htmlFor="email">Email</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
      />
      <label htmlFor="passwordConfirm">Confirm Password</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="password"
        name="passwordConfirm" // corrected name attribute
        onChange={handleChange}
        value={values.passwordConfirm}
      />

      <button className="bg-gray-200 w-full p-2 rounded-sm mb-2" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
