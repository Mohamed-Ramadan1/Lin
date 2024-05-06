import TasksInformation from "../components/profileConponents/TasksInformation";
import AddTaskForm from "../components/profileConponents/AddTaskForm";
import TaskItem from "../components/profileConponents/TaskItem";
import DateSection from "../components/profileConponents/DateSection";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../store/taskSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//get data and formate it each task render

const baseUrl =
  "https://graduation-project-backend-5vtx.onrender.com/api/v1/tasks/stats";

function MyTasks() {
  const [tasksStates, setTasksStates] = useState(null);

  const { tasks } = useSelector((state) => state.taskReducers);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.userReducers);

  const fetchTasksStates = async () => {
    try {
      const response = await axios.get(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log();
      setTasksStates(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(getAllTasks());
    fetchTasksStates();
  }, [dispatch, token]);
  return (
    <div className="viewCoursePage relative flex flex-col justify-center items-start px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      {tasksStates && <TasksInformation tasksStats={tasksStates} />}{" "}
      <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
        <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
          <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px] mb-3">
            {/* create task form*/}

            <AddTaskForm />
            {tasks &&
              tasks.map((task) => <TaskItem key={task._id} task={task} />)}
          </div>
          <DateSection />
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
