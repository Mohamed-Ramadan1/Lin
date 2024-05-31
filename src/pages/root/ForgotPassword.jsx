import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { forgotPasswordSchema } from "../../schema/authFormsSchema";
import { customFetch } from "../../utils/customFetch";
import CustomInput from "../../components/forms/CustomInput";

import ForgetImg from "../../assets/ForgetPassword.png";
import Button from "../../components/ui/Button";

const ForgotPassword = () => {
  return (
    <div className="p-[20px] flex flex-col justify-center items-center gap-[50px] max-lg:p-[10px]">
      <div className="img w-full h-[400px] rounded-[20px] max-lg:h-[200px]">
        <img
          src={ForgetImg}
          alt=""
          className="w-full h-full rounded-[20px] object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="contentInfo flex flex-col gap-[40px] max-w-[30%] w-full max-lg:max-w-[100%]"
      >
        <div className="title text-center w-full">
          <h1 className="text-4xl font-bold text-[#2d2d2d] mb-[15px] max-md:text-3xl">
            Forgot Password ?
          </h1>
          <p className="text-base text-[20px] text-gray-800">
            Enter Your Email to Reset Password
          </p>
        </div>

        <div className="w-full">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotPasswordSchema}
            onSubmit={async (values, actions) => {
              try {
                const response = await customFetch.post("auth/forgotPassword", {
                  email: values.email,
                });

                if (response.status === 200) {
                  toast.success(
                    "Virefication email send successfully please check your email."
                  );
                } else {
                  toast.error(response.data.message);
                }
              } catch (error) {
                toast.error(error.response.data.message);
              }
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-[20px]"
              >
                <CustomInput
                  type="email"
                  name="email"
                  label="Email"
                  id="email"
                  placeholder="Enter your email"
                />
                <Button
                  textButton="Forgot Password"
                  isDisabled={isSubmitting}
                />
                <h3 className="text-center text-[#2d2d2d] text-base ">
                  Remember Password ?
                  <Link
                    to="/login"
                    className="text-[#9747FF] font-semibold ml-1"
                  >
                    Login
                  </Link>
                </h3>

                <h3 className="text-center text-[#2d2d2d] text-base">
                  Don't have an account ?
                  <Link
                    to="/signup"
                    className="text-[#9747FF] font-semibold ml-1"
                  >
                    Signup
                  </Link>
                </h3>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
