import BeatLoader from "react-spinners/BeatLoader";

const LoadingSpinner = () => {
  return (
    <div className="w-full">
      <div className="w-full my-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">
          <BeatLoader color="#36d7b7" size={20} />
        </h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
