import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { store } from "../../../store/store";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "../../../components/forms/CustomInput";
import CustomTextArea from "../../../components/forms/CustomTextArea";

const VideoNoteForm = () => {
  const { courseId } = useParams();
  const { token } = store.getState().userReducers;
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await customFetch.post(
            `userCoursesNotes`,

            {
              course: courseId,
              title: values.title,
              description: values.description,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 201) {
            actions.resetForm();
            toast.success("Note added successfully");
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred");
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="text-center font-bold text-2xl italic">
            <h2>Take note </h2>
          </div>
          <div className="mb-4">
            <CustomInput
              label="Title"
              id="title"
              name="title"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <CustomTextArea
              label="Content"
              id="description"
              name="description"
              required
            />
          </div>
          <div class="mt-4 text-end">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VideoNoteForm;
