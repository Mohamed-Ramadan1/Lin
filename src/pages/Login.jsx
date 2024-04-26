import CustomInput from "../components/forms/CustomInput";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./../store/userSlice";
import { toast } from "react-toastify";
import { loginSchema } from "./../schema/authFormsSchema";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "./../store/userSlice";

// Framer Motion
import { motion } from "framer-motion";

// Components
import Button from "../components/ui/Button";
import GoogleBtn from "../components/ui/GoogleBtn";

// Images
import LoginImg from "../assets/Login.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (isSuccess) {
      toast.success("User created successfully");
      dispatch(userActions.resetSuccessStates());
      return navigate("/");
    }
  }, [isSuccess, dispatch, navigate]);

  return (
    <div className="loginPage w-full h-[100vh] max-lg:h-full flex flex-row-reverse justify-between items-center">
      <div className="image w-[50%] max-lg:hidden h-full overflow-hidden">
        <img src={LoginImg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="contentInfo h-full w-[50%] max-lg:w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="container w-[60%] max-lg:w-full max-lg:p-[30px] flex flex-col gap-[20px] items-start justify-center"
        >
          <div className="title w-full flex gap-[15px] flex-col items-start ">
            <h1 className="text-3xl font-bold text-[#222]">Welcome Back 👋</h1>
            <p className="text-xl text-[#838383]">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
          </div>

          <Formik
            className="w-full"
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              dispatch(login(values));
              actions.resetForm();
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-[24px]"
              >
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

                <Button textButton="Login" />
              </Form>
            )}
          </Formik>

          <div className="w-full flex gap-[30px] flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center relative">
              <span className=" relative p-[10px] z-10 bg-[#fff]">or</span>
              <span className="w-full h-[1px] absolute top-[50%] left-[50%]  translate-x-[-50%] bg-[#CFDFE2]"></span>
            </div>

            <GoogleBtn />

            <div>
              <h3>
                Already have an account?{" "}
                <Link to="/SignUp" className="text-[#9747FF]">
                  Sign Up
                </Link>
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
