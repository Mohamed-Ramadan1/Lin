import TakeVideoNoteModal from "./TakeVideoNoteModal";

const CurrentVideoInformation = ({ selectVideoInformation }) => {
  // console.log(selectVideoInformation || "");
  return (
    <div className="flex justify-between items-center h-full mt-3">
      <div className="font-bold text-xl">
        {selectVideoInformation.title || ""}
      </div>
      <TakeVideoNoteModal videoInformation={selectVideoInformation} />
    </div>
  );
};

export default CurrentVideoInformation;
