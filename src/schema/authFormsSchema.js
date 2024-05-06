import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

// update password schema
export const updatePasswordSchema = yup.object().shape({
  passwordCurrent: yup.string().required("Old Password is required"),
  password: yup.string().required("New Password is required"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
