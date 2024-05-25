import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";

import { resetPasswordSchema } from "../../schema/authFormsSchema";
import CustomInput from "../../components/forms/CustomInput";

// Framer Motion
import { motion } from "framer-motion";

import ForgetImg from "../../assets/ForgetPassword.png";
import Button from "../../components/ui/Button";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  return (
    <div className="forgotPassword p-[20px] flex flex-col justify-center items-center gap-[50px] max-lg:p-[10px]">
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
          <h1 className="text-4xl font-bold text-[#2d2d2d] mb-[15px] max-lg:text-[30px]">
            New Password 😊
          </h1>
          <p className="text-base text-[20px] text-gray-800">
            Enter Your New Password
          </p>
        </div>

        <div className="w-full">
          <Formik
            initialValues={{
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={resetPasswordSchema}
            onSubmit={async (values, actions) => {
              try {
                const response = await customFetch.post(
                  `auth/resetPassword/${resetToken}`,
                  {
                    ...values,
                  }
                );

                if (response.status === 200) {
                  toast.success(
                    "Password reset successfully please login with your new password"
                  );
                }
                navigate("/login");
              } catch (error) {
                console.log(error);

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
                  type="password"
                  name="password"
                  label="password"
                  id="password"
                  placeholder="password"
                />
                <CustomInput
                  type="password"
                  name="passwordConfirm"
                  label="passwordConfirm"
                  id="passwordConfirm"
                  placeholder="passwordConfirm"
                />

                <Button
                  textButton="Reset your password"
                  isDisabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};
export default ResetPassword;
