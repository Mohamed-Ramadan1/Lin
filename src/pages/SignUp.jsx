/* eslint-disable */

import { registerSchema } from "./../schema/authFormsSchema";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "./../store/userSlice";

import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.userReducers);
  const { values, errors, handleBlur, handleSubmit, handleChange, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(signUp(values));
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
        onBlur={handleBlur}
      />
      {errors.name && touched.name && (
        <p className="text-red-500">{errors.name}</p>
      )}

      <label htmlFor="email">Email</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <p className="text-red-500">{errors.email}</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <label htmlFor="passwordConfirm">Confirm Password</label>
      <input
        className="bg-gray-200 w-full p-2 rounded-sm mb-2"
        type="password"
        name="passwordConfirm" // corrected name attribute
        onChange={handleChange}
        value={values.passwordConfirm}
        onBlur={handleBlur}
      />
      {errors.passwordConfirm && ( // corrected passwordConfirm
        <p className="text-red-500">{errors.passwordConfirm}</p>
      )}

      <button type="submit" className="bg-gray-200 w-full p-2 rounded-sm mb-2">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
