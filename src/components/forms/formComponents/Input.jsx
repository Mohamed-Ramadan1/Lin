const Input = ({ id, label, ...props }) => {
  return (
    <div className="inputField w-full flex flex-col gap-[8px] mt-2">
      <label htmlFor={id} className="text-[16px] font-medium text-[#0C1421] ">
        {label}
      </label>
      <input
        {...props}
        className="w-full h-[48px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] font-bold text-black"
      />
    </div>
  );
};

export default Input;
