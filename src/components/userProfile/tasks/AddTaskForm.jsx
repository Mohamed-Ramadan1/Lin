import { Formik, Form } from "formik";

import { addTaskSchema } from "../../../schema/userShardSchemas";
import CustomInput from "../../forms/CustomInput";
import { sendPostRequest } from "../../common/sendRequests";

const AddTaskForm = ({ setIsChanged }) => {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={addTaskSchema}
      onSubmit={async (values, actions) => {
        sendPostRequest(
          "tasks",
          values,
          "Task created successfully",
          "Fail To Create Task",
          setIsChanged,
          actions
        );

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
