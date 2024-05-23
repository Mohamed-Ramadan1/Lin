import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import UpdateNoteModal from "./UpdateNoteModal";

const WishlistCard = () => {
  const { token } = useSelector((state) => state.userReducers);
  const { _id, title, description, user, course, createdAt, updatedAt } = note;
  const formatCreatedDate = new Date(createdAt).toDateString();
  const formatUpdatedDate = new Date(updatedAt).toDateString();

  const handelDeleteNote = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this note?"
      );
      if (!isConfirmed) return;
      await customFetch.delete(`userCoursesNotes/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success(" note deleted successfully");
    } catch (error) {
      toast.error("Failed to delete blog post");
    }
  };
  return (
    <div className="card w-full  mb-5 bg-gray-100 text-black ">
      <div className="card-body">
        <div className="flex justify-center mb-5">
          <h2 className="card-title break-words max-h-40 overflow-y-auto italic">
            {title}
          </h2>
        </div>
        <div className="w-full flex justify-between ">
          <div>
            <p className="card-category">
              <span className="font-bold ">Created-At : </span>
              {formatCreatedDate}
            </p>
            <p className="card-category">
              <span className="font-bold ">Updated-At : </span>
              {formatUpdatedDate}
            </p>

            <p className="card-category">
              <span className="font-bold ">Course Title : </span>
              {course.title}
            </p>
          </div>
        </div>
        <div className="mt-2 mb-5 font-bold ">
          <div className="text-center mb-5 text-xl">
            <span className="font-bold italic">Note Details </span>
          </div>

          <div className="h-[200px] overflow-auto">
            <p className="break-words max-h-40  ">{description}</p>
          </div>
        </div>
        <div className="card-actions flex justify-end mt-5">
          <button
            className="btn bg-red-500 mt-2 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
            onClick={handelDeleteNote}
          >
            Delete Note
          </button>

          <UpdateNoteModal
            noteTitle={title}
            noteDescription={description}
            noteId={_id}
            setIsChanged={setIsChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
