import * as yup from "yup";

export const coursesSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  duration: yup.number().required("Duration is required"),
  image: yup.mixed().required("Image is required"),
});
