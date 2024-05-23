import { Link } from "react-router-dom";
const EnrolledCourseCard = ({ course }) => {
  const { title, photo, price, duration, category, description, _id } = course;

  return (
    <div className="w-full bg-gray-100 rounded-[15px] overflow-hidden mb-5 ">
      <Link to={`/myPaiedCourse/${_id}`}>
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt="Course Image"
        />
        <div className="mx-2">
          <div className="flex mt-6 mb-4 justify-between items-center ">
            <h3 className="font-bold text-xl text-center italic">{title}</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full  min-w-[90px]">
              {category}
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-between font-bold text-gray-800 mt-3 mb-3">
              <p className="text-sm ">Duration: {duration} hours</p>
              <p className="text-sm ">Price: {price} $</p>
            </div>

            <div className=" h-[115px] overflow-auto font-bold mt-3 text-gray-800">
              <p className="text-sm  text-center mb-4 ">Description</p>
              <p className="text-sm ">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EnrolledCourseCard;
