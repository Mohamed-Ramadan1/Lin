const TasksInformation = ({ tasksStats }) => {
  const { length } = tasksStats;

  return (
    <div className="mb-5 ">
      <div className="viewCoursePage relative px-[124px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
        <h2 className="font-bold">Today's Tasks</h2>
        <p className="text-gray-300">fep,air,13</p>
      </div>
      <div className="viewCoursePage relative px-[124px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px] my-3 flex gap-3">
        <div className="">
          Your Tasks
          <span className="bg-blue-600 text-white px-5 rounded mx-2">
            {length || 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TasksInformation;
