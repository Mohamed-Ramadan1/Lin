const DropDown = ({ id, label, options, ...props }) => {
  return (
    <div className="inputField w-full flex flex-col gap-[8px] ">
      <label htmlFor={id} className="text-[16px] font-medium text-[#0C1421] ">
        {label}
      </label>
      <select
        {...props}
        id={id}
        className="w-full h-[55px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] "
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
