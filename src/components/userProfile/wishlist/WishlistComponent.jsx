import { IoMdHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { customFetch } from "../../../utils/customFetch";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const WishlistComponent = ({ courseId }) => {
  const { token } = useSelector((state) => state.userReducers);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const handelAddToWishlist = async () => {
    try {
      const res = await customFetch.post(
        `wishlist`,
        { course: courseId },
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
        `wishlist/remove/${courseId}`,

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
            courseId: courseId,
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
  }, [token, courseId]);
  return (
    <div className="flex flex-1 ">
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
  );
};

export default WishlistComponent;
