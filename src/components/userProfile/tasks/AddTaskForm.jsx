import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createTask } from "../../../store/taskSlice";
import { addTaskSchema } from "../../../schema/userShardSchemas";
import CustomInput from "../../forms/CustomInput";

const AddTaskForm = ({ setIsChanged }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={addTaskSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(createTask(values));
        setIsChanged(true);
        toast.success("Task created successfully");
        resetForm();
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
