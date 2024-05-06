import * as yup from "yup";

export const blogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  category: yup.string().required("Category is required"),
});
