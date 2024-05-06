import { Link } from "react-router-dom";
const EnrolledCourseCard = ({ course }) => {
  const { title, photo, price, duration, category, description, _id } = course;

  return (
    <div className="w-full md:w-1/3 bg-gray-100 rounded-lg overflow-hidden">
      <Link to={`/courses/${_id}`}>
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt="Course Image"
        />
        <div className="p-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full mb-2">
            {category}
          </button>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-500">Duration: {duration} hours</p>
          <p className="text-sm text-gray-500">Price: {price} $</p>
        </div>
      </Link>
    </div>
  );
};

export default EnrolledCourseCard;
{
  /* <div class="w-full md:w-1/3 bg-gray-100 rounded-lg overflow-hidden">
      <img
        class="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x250"
        alt="Course Image"
      />
      <div class="p-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-full mb-2">
          5 courses
        </button>
        <h3 class="font-bold text-lg">Code Course</h3>
      </div>
    </div> */
}
