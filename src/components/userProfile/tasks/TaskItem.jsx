import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { customFetch } from "../../../utils/customFetch";

const TaskItem = ({
  task: { _id, title, description, createdAt, status },
  setIsChanged,
}) => {
  const { token } = useSelector((state) => state.userReducers);

  const handelDelete = async () => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!isConfirm) return;
    try {
      const res = await customFetch.delete(`tasks/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data);
      setIsChanged(true);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    // dispatch(deleteTask(_id));
    // setIsChanged(true);
    // toast.success("Task deleted successfully");
  };

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
            onClick={handelDelete}
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
