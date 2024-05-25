const Button = ({ textButton, isDisabled }) => {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="button w-full py-[15px] text-[#fff] font-bold rounded-[12px] bg-[#9747FF] text-center transition ease-out hover:bg-[#9747ffd8]"
    >
      {textButton}
    </button>
  );
};

export default Button;
