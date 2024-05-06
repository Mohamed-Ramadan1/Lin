import * as yup from "yup";

// create Add task schema
export const addTaskSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});
