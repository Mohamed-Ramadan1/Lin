import { sendDeleteRequest } from "../../common/sendRequests";
const TaskItem = ({
  task: { _id, title, description, createdAt, status },
  setIsChanged,
}) => {
  return (
    <div className="bg-[#F6F6F6] rounded p-3">
      <div className="bg-white p-3 flex align-center justify-between mt-2">
        <div className="">
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() =>
              sendDeleteRequest(
                "Are you sure you want to delete this task?",
                `tasks/${_id}`,
                "Task deleted successfully",
                "Failed to delete task",
                setIsChanged
              )
            }
            className="bg-red-500 text-white p-2 rounded hover:bg-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
