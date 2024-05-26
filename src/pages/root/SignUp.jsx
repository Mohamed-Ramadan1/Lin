// Framer Motion
import { motion } from "framer-motion";

import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../../store/userSlice";
import { userActions } from "../../store/userSlice";
import { registerSchema } from "../../schema/authFormsSchema";
import Button from "../../components/ui/Button";
import GoogleBtn from "../../components/ui/GoogleBtn";
import CustomInput from "../../components/forms/CustomInput";

import LoginImg from "../../assets/SignUp.png";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, error } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (isSuccess) {
      dispatch(userActions.resetSuccessStates());
      return navigate("/");
    }
    if (error) {
      dispatch(userActions.resetSuccessStates());
    }
  }, [isSuccess, dispatch, navigate, error]);

  return (
    <div className="w-full h-[100vh] max-lg:h-full max-2lg:h-full  flex flex-row-reverse justify-between items-center">
      <div className="image w-[50%] max-lg:hidden h-full overflow-hidden">
        <img src={LoginImg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="h-full w-[50%] max-lg:w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="container w-[60%] max-lg:w-full max-lg:p-[30px] flex flex-col gap-[20px] items-start justify-center"
        >
          <div className="title w-full flex gap-[10px] flex-col items-start ">
            <h1 className="text-3xl font-bold text-[#222]">
              Sign up and start learning
            </h1>
            <p className="text-xl text-[#838383]">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <Formik
            className="w-full"
            initialValues={{
              name: "",
              email: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              dispatch(signUp(values));
              actions.resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-[20px]"
              >
                <CustomInput
                  type="text"
                  name="name"
                  label="Name"
                  id="name"
                  placeholder="Name"
                />
                <CustomInput
                  type="email"
                  name="email"
                  label="email"
                  id="email"
                  placeholder="email"
                />

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

                <Button textButton="SignUp" />
              </Form>
            )}
          </Formik>

          <div className="w-full flex gap-[30px] flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center relative">
              <span className=" relative p-[10px] z-10 bg-[#fff]">or</span>
              <span className="w-full h-[1px] absolute top-[50%] left-[50%]  translate-x-[-50%] bg-[#CFDFE2]"></span>
            </div>

            {/* <GoogleBtn /> */}

            <div>
              <h3>
                Already have an account?
                <Link to="/login" className="text-[#9747FF] pl-2">
                  Log in
                </Link>
              </h3>
              <h3 className="pt-2">
                Take around on the website
                <Link to="/" className="text-[#9747FF] pl-2">
                  Home
                </Link>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
