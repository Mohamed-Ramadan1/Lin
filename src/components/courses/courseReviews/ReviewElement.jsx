import { toast } from "react-toastify";

import { customFetch } from "../../../utils/customFetch";
const ReviewElement = ({ fullReview, currentUser, token, setIsChanged }) => {
  const { review, rating, createdAt, user } = fullReview;
  const formatDate = new Date(createdAt).toLocaleDateString();

  const handleDeleteReview = async () => {
    confirm("Are you sure you want to delete this review?");
    try {
      await customFetch.delete(`reviews/${fullReview._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsChanged(true);
      toast.success("Review deleted successfully");
    } catch (error) {
      toast.error("Error deleting review");
    }
  };
  return (
    <div class="bg-white p-4 rounded-lg shadow-md mt-5">
      <div>
        <div className="flex justify-between">
          <h3 class="text-lg font-bold">{user[0].name}</h3>
          <p class="text-gray-700 text-l mb-2">Posted on {formatDate}</p>
        </div>
        <p class="text-gray-700 text-l f">
          Rating:
          <span className="text-blue-800 font-bold text-xl">{rating}</span>
        </p>

        <p class="text-gray-700">{review}</p>
      </div>
      {currentUser._id === user[0]._id && (
        <div className="flex justify-end ">
          <button
            onClick={handleDeleteReview}
            type="button"
            className="bg-red-500 mt-5  text-white p-1.5 rounded hover:bg-red-800 w-20 text-center"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewElement;
