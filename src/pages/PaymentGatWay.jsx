import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import CustomInput from "../components/forms/CustomInput";
import { enrollUserToCourse } from "../store/courseEnrollmentsSlice";
const PaymentGatWay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.userReducers);

  const basUrl =
    "https://graduation-project-backend-5vtx.onrender.com/api/v1/paymentRecords";

  return (
    <div className="viewCoursePage relative px-[80px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px] py-5">
      <div className="border p-5 ">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center ">
          Checkout
        </h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            cardNumber: "",
            cardCvv: "",
            cardExpiryDate: "",
            paymentAmount: "",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            try {
              const res = await axios.post(`${basUrl}`, values, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              const data = await res.data;
              dispatch(enrollUserToCourse({ course: courseId }));
              toast.success("Payment and enrollment Successfull");
              navigate(`/myPaiedCourse/${courseId}`);
            } catch (error) {
              toast.error("Payment and enrollment  Failed");
            }
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {/* firstName lastName  email cardNumber cardCvv cardExpiryDate payment amount */}
              <div className=" mb-5">
                <CustomInput
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  label={"First Name"}
                  required
                />
              </div>
              <div className="mb-5">
                <CustomInput
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  label={"Last Name"}
                  required
                />
              </div>
              <div className="mt-5">
                <CustomInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  label={"Email"}
                />
              </div>
              <div className="mt-5">
                <CustomInput
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  label={"Card Number"}
                />
              </div>

              <div className="mt-5">
                <CustomInput
                  name="cardExpiryDate"
                  type="text"
                  placeholder="Card Expiry Date"
                  label={"Card Expiry Date"}
                />
              </div>

              <div className="mt-5">
                <CustomInput
                  name="cardCvv"
                  type="text"
                  placeholder="Card Cvv"
                  label={"Card CVV Number"}
                />
              </div>

              <div className="mt-5">
                <CustomInput
                  name="paymentAmount"
                  type="number"
                  placeholder="Amount"
                  label={"Amount"}
                />
              </div>

              <div class="mt-2 flex justify-end">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  class="mt-5 w-full bg-blue-500 text-white px-4 py-2  hover:bg-blue-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 text-center"
                >
                  Buy Course Now
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PaymentGatWay;
