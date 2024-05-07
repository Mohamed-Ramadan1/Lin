import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, AdminLayout } from "./layout";
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
} from "./pages";

import ViewCourses from "./pages/ViewCourses";
import DetailsCourse from "./pages/DetailsCourse";

//Profile Imports
import PublicProfile from "./components/profileConponents/PublicProfile";
import { useEffect } from "react";
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
        element: <ViewCourses />,
      },
      {
        path: "courses/:courseId",
        element: <DetailsCourse />,
      },
      {
        path: "paymentGatWay/:courseId",
        element: <PaymentGatWay />,
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
    children: [
      {
        index: true,
        element: <PublicProfile />,
      },
      {
        path: "accountInfo",
        element: <AccountInfo />,
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
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
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
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
