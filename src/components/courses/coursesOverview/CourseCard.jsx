import RatingStars from "./RatingStars";
import { IoMdHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const CourseCard = ({ course }) => {
  const { token } = useSelector((state) => state.userReducers);
  const [isWishlisted, setIsWishlisted] = useState(false);
  let {
    title,
    description,
    duration,
    price,
    totalReviews,
    averageRating,
    instructor,
    photo,
    language,
    paymentModel,
  } = course;

  averageRating = parseInt(averageRating);

  const handelAddToWishlist = async () => {
    try {
      const res = await customFetch.post(
        `wishlist`,
        { course: course._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 201) {
        setIsWishlisted(true);
        toast.success("Course added to wishlist successfully");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handelRemoveFromWishlist = async () => {
    try {
      const res = await customFetch.delete(
        `wishlist/remove/${course._id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 204) {
        setIsWishlisted(false);
        toast.success("Course deleted from wishlist successfully");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const checkIfWishlisted = async () => {
      try {
        const response = await customFetch.post(
          "wishlist/check",
          {
            courseId: course._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsWishlisted(response.data.data.data);
      } catch (error) {
        console.log(error);
        setIsWishlisted(false);
      }
    };
    checkIfWishlisted();
  }, [token, course._id]);
  // console.log(isWishlisted);
  return (
    <div className="cardCourse p-[10px] flex items-start justify-start gap-[10px] hover:bg-[#f5f5f5] max-md:p-[0px] max-md:justify-start max-md:items-start ">
      {/* Image Course  */}
      <div className="imgCourse border-[1px] border-[#e2e2e2] max-w-[250px] rounded-[10px] max-md:max-w-[100px] max-md:min-w-[50px] max-md:rounded-none ">
        <Link to={`/courses/${course._id}`}>
          <img
            src={photo}
            alt="course-cover image"
            className="w-full h-full object-cover rounded-[10px] max-md:w-full max-md:rounded-none"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Details Course */}
      <Link to={`/courses/${course._id}`}>
        <div className="content flex flex-col items-start gap-[5px]">
          <div className="info w-full flex flex-col items-start gap-[5px]">
            <h2 className="text-2xl font-bold text-[#333] max-md:text-base">
              {title} - {language}
            </h2>
            <p className="text-base font-medium text-[#6e6e6e] max-md:font-light max-md:truncate max-md:max-w-[200px]">
              {description}
            </p>
          </div>
          {instructor.map((inst) => (
            <span
              key={inst._id}
              className="py-[2px] px-[10px] text-[12px] font-medium text-[#9747FF] bg-[#efe2ff] rounded-[100px]"
            >
              By-{inst.name}
            </span>
          ))}
          <div className="rating flex gap-[15px] justify-center items-center max-md:gap-2 ">
            <h3 className="text-[#444444] text-[17px] font-bold max-md:text-[13px]">
              {averageRating}
            </h3>

            <div className="stars flex items-center gap-[4px]">
              <RatingStars rating={averageRating} />
            </div>

            <div>
              <span className="text-[#5e5e5e] max-md:text-[10px]">
                ( {totalReviews} ) reviews
              </span>
            </div>
          </div>
          <div className="price flex gap-[10px] items-end">
            <h1 className="text-[25px] font-bold text-[#222]  max-sm:text-[20px]">
              {paymentModel === "free" ? "Free Course" : price.toFixed(2)}
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-1">
        <div className="flex  w-full justify-end items-end">
          <div>
            {isWishlisted ? (
              <button onClick={handelRemoveFromWishlist}>
                <IoMdHeart className="font-bold text-3xl text-red-800" />
              </button>
            ) : (
              <button onClick={handelAddToWishlist}>
                <IoHeartOutline className="font-bold text-3xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
