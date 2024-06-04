import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { customFetch } from "../../../utils/customFetch";
import { Pagination } from "../../../components/";
import AddRatingForm from "./AddRatingForm";
import ReviewElement from "./ReviewElement";
import { LoadingSpinner } from "../../../components";
const ReviewsContainer = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const { token, user } = useSelector((state) => state.userReducers);
  const { courseId } = useParams();

  useEffect(() => {
    setIsChanged(false);
    const fetchReviews = async () => {
      try {
        const res = await customFetch.get(`reviews/courseReviews/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });

        if (res.data.data.reviews) {
          setReviews(res.data.data.reviews);
          setLoading(false);
          setIsMorePages(res.data.data.reviews.length === itemsPerPage);
        } else {
          setReviews([]);
          setLoading(false);
          setIsMorePages(false);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchReviews();
  }, [courseId, token, isChanged, currentPage, itemsPerPage]);

  return (
    <div className="max-w-[100%] md:max-w-[72.5%]  m-5  ">
      <div class="bg-gray-100 p-6">
        <h2 class="text-lg font-bold mb-4">Comments</h2>
        <div class="flex flex-col space-y-4">
          <AddRatingForm setIsChanged={setIsChanged} />
        </div>
        {reviews &&
          reviews.map((review) => (
            <ReviewElement
              fullReview={review}
              currentUser={user}
              token={token}
              key={review._id}
              setIsChanged={setIsChanged}
            />
          ))}
        {loading && <LoadingSpinner />}
        {reviews.length === 0 && !loading && (
          <p className="text-3xl text-bold text-center">No reviews found</p>
        )}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          isMorePages={isMorePages}
          onPrevPage={() => setCurrentPage((prev) => prev - 1)}
          onNextPage={() => setCurrentPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
};

export default ReviewsContainer;
