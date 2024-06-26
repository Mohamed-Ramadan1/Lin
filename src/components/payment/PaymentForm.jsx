import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/customFetch";
import CustomInput from "../../components/forms/CustomInput";

const PaymentForm = ({ coursePrice, courseDiscount, courseId }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userReducers);
  return (
    <div className="w-[100%] sm:w-[50%]">
      <div className="mb-6">
        <h3 className="text-center  font-bold text-xl italic">
          Payment method
        </h3>
      </div>
      <Formik
        initialValues={{
          cardName: "",
          cardNumber: "",
          cardCvv: "",
          cardExpiryDate: "",
          course: courseId,
        }}
        onSubmit={async (values, actions) => {
          try {
            await customFetch.post(
              "paymentRecords",
              {
                ...values,
                paymentAmount: (coursePrice - courseDiscount).toFixed(2),
                course: courseId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            toast.success("Payment and enrollment Successfull");
            navigate(`/courses/${courseId}`, { replace: true });
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
            <div className="mt-5">
              <CustomInput
                name="cardName"
                type="text"
                placeholder="Name on Card"
                label="Name on the card"
                required
              />

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
                type="month"
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

            <div class="mt-2 flex justify-end">
              <button
                disabled={isSubmitting}
                type="submit"
                class="mt-5 w-full font-bold bg-blue-500 text-white px-4 py-2  hover:bg-blue-800  dark:text-white text-center"
              >
                Complete payment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
