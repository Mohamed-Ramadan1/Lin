const ActionButton = ({ btnType, onClick, btnText }) => {
  const colorClass =
    btnType === "danger"
      ? "bg-red-500 hover:bg-red-800"
      : btnType === "mainBlue"
      ? "bg-blue-500 hover:bg-blue-800"
      : "";
  return (
    <button
      className={`${colorClass} text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default ActionButton;
