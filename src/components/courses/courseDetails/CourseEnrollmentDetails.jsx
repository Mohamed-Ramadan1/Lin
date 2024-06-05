import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { customFetch } from "../../../utils/customFetch";
import IncludesContainer from "./IncludesContainer";
import useFetchData from "../../../hooks/useFetchData";
import NavigationEnrollmentButton from "./NavigationEnrollmentButton";
import PaymentDetailsInfo from "./PaymentDetailsInfo";

const CourseEnrollmentDetails = ({
  duration,
  price,
  paymentModel,
  courseId,
  videos,
  financialAid,
}) => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.userReducers);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const { data, loading, error, fetchData } = useFetchData(
    `enrolls/user/${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      requestedData: "enrollments",
    }
  );

  const redirectPath = user
    ? `/payments/financial-aid/course/${courseId}`
    : "/login";

  const handelEnrollFreeCourse = async () => {
    try {
      await customFetch.post(
        "enrolls",
        {
          course: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsEnrolled(true);
      setIsChanged(true);
      toast.success("Enrolled successfully");
      navigate(`/myPaiedCourse/${courseId}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    if (data && data.user) {
      setIsEnrolled(true);
    }
  }, [courseId, token, user, isChanged, data]);

  return (
    <div className="salary p-3 min-w-[290px] max-h-[425px] flex flex-col gap-4 items-start rounded-3xl  bg-[#D5FF40]">
      <PaymentDetailsInfo
        price={price}
        courseId={courseId}
        paymentModel={paymentModel}
        financialAid={financialAid}
        redirectPath={redirectPath}
      />

      <div className="info w-full p-5 flex flex-col gap-4 items-start rounded-2xl bg-[#1E1E1E]">
        <h3 className="font-bold text-base text-[#fff]">
          This course includes:
        </h3>
        <IncludesContainer duration={duration} videos={videos} />
        <div className="flex items-center gap-2 overflow-auto">
          {isEnrolled === true ? (
            <NavigationEnrollmentButton
              path={`/myPaiedCourse/${courseId}`}
              text="Start Now"
            />
          ) : paymentModel === "free" ? (
            user ? (
              <button
                type="button"
                onClick={handelEnrollFreeCourse}
                className=" text-center w-[200px] py-[15px] rounded-xl font-bold bg-[#D5FF40] hover:bg-[#d6ff40d7]"
              >
                Enroll Now
              </button>
            ) : (
              <Link
                to="/login"
                className=" text-center w-[200px] py-[15px] rounded-xl font-bold bg-[#D5FF40] hover:bg-[#d6ff40d7]"
              >
                Enroll Now
              </Link>
            )
          ) : (
            <NavigationEnrollmentButton
              path={`/paymentGatWay/${courseId}`}
              text="Buy Now"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollmentDetails;
