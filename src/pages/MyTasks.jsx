import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../store/taskSlice";
import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";

import TasksInformation from "../components/profileConponents/TasksInformation";
import AddTaskForm from "../components/profileConponents/AddTaskForm";
import TaskItem from "../components/profileConponents/TaskItem";
import DateSection from "../components/profileConponents/DateSection";

function MyTasks() {
  const [tasksStates, setTasksStates] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const { tasks } = useSelector((state) => state.taskReducers);
  const { token } = useSelector((state) => state.userReducers);

  const dispatch = useDispatch();

  const fetchTasksStates = async () => {
    try {
      const response = await customFetch.get("tasks/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasksStates(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsChanged(false);
    dispatch(getAllTasks());
    fetchTasksStates();
  }, [dispatch, token, isChanged]);
  return (
    <div className="viewCoursePage relative flex flex-col justify-center items-start px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      {tasksStates && <TasksInformation tasksStats={tasksStates} />}
      <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
        <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
          <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px] mb-3">
            {/* create task form*/}

            <AddTaskForm setIsChanged={setIsChanged} />
            {tasks &&
              tasks.map((task) => (
                <TaskItem
                  key={task._id}
                  task={task}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
          <DateSection />
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
