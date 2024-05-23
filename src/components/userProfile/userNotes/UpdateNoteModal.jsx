import UpdateNoteForm from "./UpdateNoteForm";
const UpdateNoteModal = ({
  noteTitle,
  noteDescription,
  noteId,
  setIsChanged,
}) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-blue-500 mt-2 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Update Note
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <UpdateNoteForm
            noteTitle={noteTitle}
            noteDescription={noteDescription}
            noteId={noteId}
            setIsChanged={setIsChanged}
          />
        </div>
      </dialog>
    </div>
  );
};

export default UpdateNoteModal;
