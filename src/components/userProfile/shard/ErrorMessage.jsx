const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="w-full">
      <div className="w-full my-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">{errorMessage}</h1>
      </div>
    </div>
  );
};

export default ErrorMessage;
