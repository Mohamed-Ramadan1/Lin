const Input = ({ id, label, type, name }) => {
  return (
    <div className="inputField w-full flex flex-col gap-[8px] mt-2">
      <label htmlFor={id} className="text-[16px] font-medium text-[#0C1421] ">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        className="w-full h-[48px] p-[16px] outline-none transition ease-in-out focus:border-[#9747FF] focus:bg-[#f3eafd]  bg-[#f9f4ff] rounded-[12px]  border-[1px] border-[#D4D7E3] "
      />
    </div>
  );
};

export default Input;
