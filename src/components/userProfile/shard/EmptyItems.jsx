import { Link } from "react-router-dom";

const EmptyItems = ({ headerText, linkText, toUrl }) => {
  return (
    <div className="w-full">
      <div className="w-full my-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">{headerText}</h1>

        <Link
          to={toUrl}
          className="text-blue-500 ml-2 mt-2 font-bold text-2xl underline"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default EmptyItems;
