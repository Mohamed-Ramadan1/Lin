import * as yup from "yup";

export const paymentFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  cardNumber: yup.string().required("Card Number is required"),
  cardCvv: yup.string().required("Card Cvv is required"),
  cardExpiryDate: yup.string().required("Card Expiry Date is required"),
  amount: yup.number().required("Amount is required"),
});
// Compare this snippet from src/schema/paymentFormSchema.js:
