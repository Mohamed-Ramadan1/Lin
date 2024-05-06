import { Formik, Form } from "formik";
import CustomInput from "../forms/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../store/taskSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { taskActions } from "../../store/taskSlice";
import { addTaskSchema } from "../../schema/userShardSchemas";
const AddTaskForm = () => {
  const dispatch = useDispatch();
  const { isSuccess, error } = useSelector((state) => state.taskReducers);

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Task created successfully");
  //     dispatch(taskActions.resetSuccessState());
  //   }
  //   if (error) {
  //     toast.error(error);
  //     dispatch(taskActions.resetSuccessState());
  //   }
  // }, [error, dispatch]);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={addTaskSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(createTask(values));
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
