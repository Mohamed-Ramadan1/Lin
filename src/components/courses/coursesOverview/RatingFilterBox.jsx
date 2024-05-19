const RatingFilterBox = ({ children, isChecked, onClick }) => {
  return (
    <div className="flex gap-3" onClick={onClick}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={isChecked}
        readOnly
      />
      <div className="flex justify-center items-center p-3 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default RatingFilterBox;
