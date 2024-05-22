import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTaskSchema } from "../../../schema/userShardSchemas";
import CustomInput from "../../forms/CustomInput";
import { customFetch } from "../../../utils/customFetch";

const AddTaskForm = ({ setIsChanged }) => {
  const { token } = useSelector((state) => state.userReducers);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={addTaskSchema}
      onSubmit={async (values, actions) => {
        try {
          await customFetch.post("tasks", values, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setIsChanged(true);
          toast.success("Task created successfully");
          actions.resetForm();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }

        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="bg-[#F6F6F6] rounded p-3">
          <CustomInput
            name="title"
            type="text"
            placeholder="Add a task"
            label="Task"
          />
          <CustomInput
            name="description"
            type="text"
            placeholder="Add a description"
            label="Description"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-800 mt-4 "
          >
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTaskForm;
