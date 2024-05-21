import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { enrollUserToCourse } from "../../store/courseEnrollmentsSlice";
import { customFetch } from "../../utils/customFetch";
import CustomInput from "../../components/forms/CustomInput";

const PaymentGatWay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { token, user } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user, navigate, courseId, token]);

  return (
    <div class="border border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5">
      <h1 class="text-2xl font-bold xt-white mb-4 text-center">Checkout</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          cardNumber: "",
          cardCvv: "",
          cardExpiryDate: "",
          paymentAmount: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const res = await customFetch.post("paymentRecords", values, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            dispatch(enrollUserToCourse({ course: courseId }));
            toast.success("Payment and enrollment Successfull");
            navigate(`/myPaiedCourse/${courseId}`);
          } catch (error) {
            console.log(error);
            toast.error("Payment and enrollment  Failed");
          }
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className=" mb-5">
              <CustomInput
                name="name"
                type="text"
                placeholder="Name on payment visa card"
                label="Name on Card"
                required
              />
            </div>

            <div className="mt-5 ">
              <CustomInput
                name="email"
                type="email"
                label="Email"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="mt-5">
              <CustomInput
                name="cardNumber"
                type="text"
                placeholder="Visa Card Number"
                label="Card Number"
                required
              />
            </div>

            <div className="mt-5">
              <CustomInput
                name="cardExpiryDate"
                type="date"
                placeholder="Card Expiry Date"
                label="Card Expiry Date"
                required
              />
            </div>

            <div className="mt-5">
              <CustomInput
                name="cardCvv"
                type="text"
                placeholder="Card Cvv 123"
                label="Card CVV Number"
                required
                pattern="[0-9]{3}"
              />
            </div>

            <div className="mt-5">
              <CustomInput
                name="paymentAmount"
                type="number"
                placeholder="Amount"
                label="Amount"
                required
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
  );
};

export default PaymentGatWay;
