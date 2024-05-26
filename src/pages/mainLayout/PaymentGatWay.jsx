import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { customFetch } from "../../utils/customFetch";
import { OrderDetails, PaymentForm } from "../../components";

const PaymentGatWay = () => {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { token, user } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    const fetchCourseData = async () => {
      try {
        const res = await customFetch.get(`courses/${courseId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourse(res.data.data.course);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchCourseData();
  }, [user, navigate, courseId, token]);

  return (
    <div class="border w-full border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5 ">
      <h2 class="text-2xl font-bold xt-white mb-4 text-center">Checkout</h2>
      <div className="flex w-[100%] gap-2 flex-col sm:flex-row ">
        <PaymentForm
          coursePrice={course?.price}
          courseDiscount={course?.discount}
          courseId={courseId}
        />
        {course && <OrderDetails course={course} />}
      </div>
    </div>
  );
};

export default PaymentGatWay;
