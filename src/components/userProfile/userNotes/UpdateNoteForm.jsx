import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { store } from "../../../store/store";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "../../forms/CustomInput";
import CustomTextArea from "../../forms/CustomTextArea";

const UpdateNoteForm = ({
  noteTitle,
  noteDescription,
  noteId,
  setIsChanged,
}) => {
  const { token } = store.getState().userReducers;
  return (
    <Formik
      initialValues={{
        title: noteTitle || "",
        description: noteDescription || "",
      }}
      onSubmit={async (values) => {
        try {
          const response = await customFetch.patch(
            `userCoursesNotes/${noteId}`,
            {
              title: values.title,
              description: values.description,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            setIsChanged(true);
            toast.success("Note Updated successfully");
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

export default UpdateNoteForm;
