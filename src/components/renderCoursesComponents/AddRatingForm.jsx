import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { customFetch } from "../../utils/customFetch";

import CustomInput from "../forms/CustomInput";
import CustomTextArea from "../forms/CustomTextArea";

const AddRatingForm = ({ setIsChanged }) => {
  const { token } = useSelector((state) => state.userReducers);
  const { courseId } = useParams();
  return (
    <Formik
      initialValues={{
        rating: "",
        review: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const res = await customFetch.post(
            "reviews",
            {
              rating: values.rating,
              review: values.review,
              course: courseId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (res.status === 201) {
            setIsChanged(true);
            toast.success("Review added successfully");
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          {/* rating review  */}
          <div className="mb-4">
            <CustomInput
              label="Rating"
              type="number"
              name="rating"
              placeholder="Enter your rating between 0 and 5"
              min="0"
              max="5"
              step="any"
              required
            />
          </div>
          {/* review comment */}
          <div className="mb-4">
            <CustomTextArea
              label="Comment"
              name="review"
              placeholder="Enter your review about the course and share your experience with other learners"
            />
          </div>
          <button
            className="bg-cyan-500 mb-6 w-full  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-blue-700 rounded-0"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddRatingForm;
