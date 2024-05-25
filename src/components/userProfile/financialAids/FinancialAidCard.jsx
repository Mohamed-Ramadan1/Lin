import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FinancialAidCard = ({ request, setIsChanged }) => {
  const { token } = useSelector((state) => state.userReducers);
  const { _id, user, course, createdAt, updatedAt } = request;
  const { photo, title, category, duration, price, description } = course;
  const formatCreatedDate = new Date(createdAt).toDateString();
  const formatUpdatedDate = new Date(updatedAt).toDateString();

  const handelCancelRequest = async () => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to cancel the request?"
      );
      if (!isConfirmed) return;
      await customFetch.delete(`financialAidRequests/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Course financial aid request canceled  successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to cancel  financial aid request ");
    }
  };
  return (
    <div className="w-full bg-gray-100 rounded-[15px] overflow-hidden mb-5 ">
      <Link to={`/courses/${course._id}`}>
        <img
          className="w-full h-48 object-cover"
          src={photo}
          alt="Course Image"
        />
        <div className="mx-2">
          <div className="flex mt-6 mb-4 justify-between items-center ">
            <h3 className="font-bold text-xl text-center italic">{title}</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full min-w-[90px]">
              {category}
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-between font-bold text-gray-800 mt-3 mb-3">
              <p className="text-sm ">Duration: {duration} hours</p>
              <p className="text-sm ">Price: {price} $</p>
            </div>
            <div>
              <spn className="text-sm text-gray-800 font-bo">
                Financial Aid Created At : {formatCreatedDate}
              </spn>
            </div>

            <div className=" h-[115px] overflow-auto font-bold mt-3 text-gray-800">
              <p className="text-sm  text-center mb-4 ">Description</p>
              <p className="text-sm ">{description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mx-3 my-4 flex justify-end">
        <button
          type="button"
          onClick={handelCancelRequest}
          className="bg-red-500 text-white  hover:bg-red-800 px-4 py-2 rounded-full min-w-[90px]"
        >
          Cancel Request
        </button>
      </div>
    </div>
  );
};

export default FinancialAidCard;
