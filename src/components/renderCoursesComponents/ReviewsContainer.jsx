import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddRatingForm from "./AddRatingForm";
import ReviewElement from "./ReviewElement";

const ReviewsContainer = () => {
  const { token, user } = useSelector((state) => state.userReducers);
  const { courseId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://graduation-project-backend-5vtx.onrender.com/api/v1/reviews/courseReviews/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReviews(res.data.data.reviews);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchReviews();
  }, [courseId, token]);

  return (
    <div className="max-w-[100%] md:max-w-[72.5%] reviwe m-5 ">
      <div class="bg-gray-100 p-6">
        <h2 class="text-lg font-bold mb-4">Comments</h2>
        <div class="flex flex-col space-y-4">
          <AddRatingForm />
        </div>
        {reviews &&
          reviews.map((review) => (
            <ReviewElement
              fullReview={review}
              currentUser={user}
              token={token}
              key={review._id}
            />
          ))}
      </div>
    </div>
  );
};

export default ReviewsContainer;
