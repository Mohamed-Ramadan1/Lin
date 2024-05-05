import * as yup from "yup";

export const createUsersSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  role: yup.string().required("Role is required"),
});
