import React from "react";

import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/forms/CustomInput";
import { userActions } from "../store/userSlice";
import { useEffect } from "react";

import { toast } from "react-toastify";
import { forgotPassword } from "./../store/userSlice";
import { forgotPasswordSchema } from "./../schema/authFormsSchema";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Button from "../components/ui/Button";

// Images
import ForgetImg from '../assets/ForgetPassword.png'

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { isSuccess } = useSelector((state) => state.userReducers);
  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Virefication email send successfully please check your email."
      );
      dispatch(userActions.resetSuccessStates());
    }
  }, [isSuccess, dispatch]);

  return (
    <div className="p-[20px] flex flex-col justify-center items-center gap-[50px] max-lg:p-[10px]">

      <div className="img w-full h-[400px] rounded-[20px] max-lg:h-[200px]">
          <img src={ForgetImg} alt="" className='w-full h-full rounded-[20px] object-cover'/>
      </div>
      
      <motion.div initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0 }} className="contentInfo flex flex-col gap-[40px] max-w-[30%] w-full max-lg:max-w-[100%]">

        <div className="title text-center w-full">
                  <h1 className='text-4xl font-bold text-[#2d2d2d] mb-[15px] max-md:text-3xl'>Forgot Password ?</h1>
                  <p className='text-base text-[20px] text-gray-800'>Enter Your Email to Reset Password</p>
        </div>

        <div className="w-full">
          
        <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values, actions) => {
              dispatch(forgotPassword(values));
              actions.resetForm();
            }}>
            
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="flex w-full flex-col gap-[20px]">
              <CustomInput
                type="email"
                name="email"
                label="Email"
                id="email"
                placeholder="Enter your email"
              />
              <Button textButton="Forgot Password" />
              
            </Form>
          )}
      </Formik>
        </div>

      </motion.div>
    </div>

  );
};

export default ForgotPassword;
