import UpdateNoteModal from "./UpdateNoteModal";
import { sendDeleteRequest } from "../../common/sendRequests";
const NoteCart = ({ note, setIsChanged }) => {
  const { _id, title, description, user, course, createdAt, updatedAt } = note;
  const formatCreatedDate = new Date(createdAt).toDateString();
  const formatUpdatedDate = new Date(updatedAt).toDateString();

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
            onClick={() => {
              sendDeleteRequest(
                "Are you sure you want to delete this note?",
                `userCoursesNotes/${_id}`,
                "note deleted successfully",
                "Failed to delete blog post",
                setIsChanged
              );
            }}
          >
            Delete Note
          </button>

          {/* <UpdateNoteModal
            noteTitle={title}
            noteDescription={description}
            noteId={_id}
            setIsChanged={setIsChanged}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default NoteCart;
