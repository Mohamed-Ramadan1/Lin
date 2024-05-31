const ActionButton = ({ action, onClick, text, disabled }) => {
  const colorClass =
    action === "danger"
      ? "bg-red-500 hover:bg-red-800"
      : action === "mainBlue"
      ? "bg-blue-500 hover:bg-blue-800"
      : action === "mainGreen"
      ? "bg-green-500 hover:bg-green-800"
      : "";

  return (
    <button
      type="button"
      onClick={onClick}
      className={` text-white p-1.5 rounded ${colorClass}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ActionButton;
