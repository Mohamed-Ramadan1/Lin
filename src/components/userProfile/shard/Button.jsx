const Button = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className=" font-bold text-xl w-full h-[48px] bg-blue-600 text-[#fff] rounded-[12px] transition ease-in-out hover:bg-blue-900"
    >
      {buttonText}
    </button>
  );
};

export default Button;
