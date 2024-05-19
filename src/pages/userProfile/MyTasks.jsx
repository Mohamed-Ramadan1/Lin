import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../store/taskSlice";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";

import {
  TaskItem,
  TasksInformation,
  DateSection,
  AddTaskForm,
  Pagination,
} from "../../components";

function MyTasks() {
  const [tasksStates, setTasksStates] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  // const { tasks } = useSelector((state) => state.taskReducers);
  const { token } = useSelector((state) => state.userReducers);
  const [tasks, setTasks] = useState(null);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

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
    const fetchTasks = async () => {
      try {
        const response = await customFetch.get("tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });
        if (response.data.data.tasks) {
          setTasks(response.data.data.tasks);
          setIsMorePages(response.data.data.tasks.length === itemsPerPage);
        } else {
          setTasks([]);
          setIsMorePages(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasksStates();
    fetchTasks();
  }, [token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="viewCoursePage relative flex flex-col justify-center items-start px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="flex items-start justify-center w-full">
        <div className="flex justify-start w-[90%] ml-10">
          {tasksStates && <TasksInformation tasksStats={tasksStates} />}
        </div>
      </div>
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
        <div className="flex items-center justify-center w-full">
          <div className="flex justify-end w-[50%]">
            <Pagination
              currentPage={currentPage}
              isMorePages={isMorePages}
              onPrevPage={() => setCurrentPage((prev) => prev - 1)}
              onNextPage={() => setCurrentPage((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
