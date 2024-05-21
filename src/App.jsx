import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, DashboardLayout } from "./layout";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./store/userSlice";
import {
  SignUp,
  Login,
  ForgotPassword,
  ResetPassword,
  Home,
  About,
  Profile,
  Dashboard,
  FreeCourses,
  PaiedCourses,
  Users,
  Reservations,
  Settings,
  CreateCourses,
  Instructors,
  CreateInstructorAccount,
  CreateUserAccount,
  PaymentGatWay,
  MyPaiedCourse,
  Instructor,
  Blog,
  AccountInfo,
  MyTasks,
  MyEnrolledCourses,
  ChatWithMe,
  ManageBlogs,
  ManageInstructorsRequests,
  ManagePayments,
  Courses,
  CourseDetails,
  PublicProfile,
  MyBlogs,
  Error,
  CourseFinancialAid,
  MangeFinancialAidRequests,
} from "./pages";
import { action as updateProfileInfoAction } from "./components/userProfile/profileSettings/UpdateProfileInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "instructor",
        element: <Instructor />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "paymentGatWay/:courseId",
        element: <PaymentGatWay />,
      },
      {
        path: "payments/financial-aid/course/:courseId",
        element: <CourseFinancialAid />,
      },
      {
        path: "myPaiedCourse/:courseId",
        element: <MyPaiedCourse />,
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <PublicProfile />,
      },
      {
        path: "accountInfo",
        element: <AccountInfo />,
        action: updateProfileInfoAction,
      },
      {
        path: "myTasks",
        element: <MyTasks />,
      },
      {
        path: "myCourses",
        element: <MyEnrolledCourses />,
      },
      {
        path: "chatWithMe",
        element: <ChatWithMe />,
      },
      {
        path: "myBlogs",
        element: <MyBlogs />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <ResetPassword />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "freeCourses",
        element: <FreeCourses />,
      },
      {
        path: "paidCourses",
        element: <PaiedCourses />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "addcourse",
        element: <CreateCourses />,
      },
      {
        path: "adduser",
        element: <CreateUserAccount />,
      },
      {
        path: "addinstructor",
        element: <CreateInstructorAccount />,
      },
      {
        path: "blogs",
        element: <ManageBlogs />,
      },
      {
        path: "instructorsrequests",
        element: <ManageInstructorsRequests />,
      },
      {
        path: "paymentsrecords",
        element: <ManagePayments />,
      },
      {
        path: "financial-aid-requests",
        element: <MangeFinancialAidRequests />,
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.userReducers);

  useEffect(() => {
    if (user && token) {
      dispatch(getMe());
    }
  }, [dispatch, token]);

  return <RouterProvider router={router} />;
};

export default App;
